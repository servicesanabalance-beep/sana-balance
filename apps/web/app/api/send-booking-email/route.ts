import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const FROM_ADDRESS = process.env.RESEND_FROM || 'SanaBalance <kontakt@sanabalance.ch>'
const REPLY_TO = 'kontakt@sanabalance.ch'

export async function POST(request: Request) {
  try {
    const { clientEmail, clientName, clientPhone, serviceName, date, time, adminEmail } = await request.json()

    console.log('📧 Sending booking emails for:', serviceName, date, time)

    // Create calendar event (.ics format) in Europe/Zurich tz
    const [day, month, year] = date.split('.')
    const [hours, minutes] = time.split(':')
    const startLocal = formatICSLocal(year, month, day, hours, minutes)
    const endLocal = formatICSLocal(
      year,
      month,
      day,
      String(parseInt(hours) + 1).padStart(2, '0'),
      minutes,
    )

    const calendarEvent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//SanaBalance//Booking//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VTIMEZONE
TZID:Europe/Zurich
BEGIN:STANDARD
DTSTART:19701025T030000
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU
TZOFFSETFROM:+0200
TZOFFSETTO:+0100
TZNAME:CET
END:STANDARD
BEGIN:DAYLIGHT
DTSTART:19700329T020000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU
TZOFFSETFROM:+0100
TZOFFSETTO:+0200
TZNAME:CEST
END:DAYLIGHT
END:VTIMEZONE
BEGIN:VEVENT
UID:${Date.now()}@sanabalance.ch
DTSTAMP:${formatICSDate(new Date())}
DTSTART;TZID=Europe/Zurich:${startLocal}
DTEND;TZID=Europe/Zurich:${endLocal}
SUMMARY:${serviceName} - ${clientName}
DESCRIPTION:Termin für ${serviceName}
LOCATION:SanaBalance Praxis
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`

    // Send email to admin
    console.log('📨 Sending admin email to:', adminEmail)
    const adminResult = await resend.emails.send({
      from: FROM_ADDRESS,
      replyTo: clientEmail || REPLY_TO,
      to: adminEmail || 'kontakt@sanabalance.ch',
      subject: `Neue Buchung: ${serviceName}`,
      html: `
        <h2>Neue Terminbuchung</h2>
        <p><strong>Kunde:</strong> ${clientName}</p>
        <p><strong>Email:</strong> <a href="mailto:${clientEmail}">${clientEmail}</a></p>
        ${clientPhone ? `<p><strong>Telefon:</strong> <a href="tel:${clientPhone}">${clientPhone}</a></p>` : ''}
        <p><strong>Service:</strong> ${serviceName}</p>
        <p><strong>Datum:</strong> ${date}</p>
        <p><strong>Uhrzeit:</strong> ${time}</p>
        <br>
        <p>Kalender-Datei ist im Anhang.</p>
      `,
      attachments: [
        {
          filename: 'termin.ics',
          content: Buffer.from(calendarEvent).toString('base64'),
        },
      ],
    })
    console.log('✅ Admin email result:', adminResult)

    // Send confirmation email to client
    console.log('📨 Sending client confirmation email to:', clientEmail)
    const clientResult = await resend.emails.send({
      from: FROM_ADDRESS,
      replyTo: REPLY_TO,
      to: clientEmail,
      subject: `Terminbestätigung: ${serviceName}`,
      html: `
        <h2>Vielen Dank für Ihre Buchung!</h2>
        <p>Liebe/r ${clientName},</p>
        <p>Ihre Buchung wurde erfolgreich bestätigt.</p>
        <br>
        <p><strong>Service:</strong> ${serviceName}</p>
        <p><strong>Datum:</strong> ${date}</p>
        <p><strong>Uhrzeit:</strong> ${time}</p>
        <br>
        <p>Wir freuen uns auf Ihren Besuch!</p>
        <p>Bei Fragen erreichen Sie uns unter: <a href="mailto:kontakt@sanabalance.ch">kontakt@sanabalance.ch</a></p>
        <br>
        <p>Mit freundlichen Grüßen,<br>Ihr SanaBalance Team</p>
      `,
      attachments: [
        {
          filename: 'termin.ics',
          content: Buffer.from(calendarEvent).toString('base64'),
        },
      ],
    })
    console.log('✅ Client email result:', clientResult)

    if (adminResult.error || clientResult.error) {
      console.error('❌ Resend reported errors:', { admin: adminResult.error, client: clientResult.error })
      return NextResponse.json({
        success: false,
        adminError: adminResult.error,
        clientError: clientResult.error,
      }, { status: 502 })
    }

    return NextResponse.json({ 
      success: true,
      adminEmailId: adminResult.data?.id,
      clientEmailId: clientResult.data?.id,
    })
  } catch (error: any) {
    console.error('❌ Error sending email:', error?.message, error)
    return NextResponse.json({ 
      error: error?.message || 'Failed to send email'
    }, { status: 500 })
  }
}

function formatICSDate(date: Date): string {
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
}

function formatICSLocal(year: string, month: string, day: string, hours: string, minutes: string): string {
  return `${year}${month.padStart(2, '0')}${day.padStart(2, '0')}T${hours.padStart(2, '0')}${minutes.padStart(2, '0')}00`
}
