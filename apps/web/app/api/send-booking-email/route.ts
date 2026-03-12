import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { clientEmail, clientName, serviceName, date, time, adminEmail } = await request.json()

    console.log('📧 Sending booking emails:', {
      clientEmail,
      clientName,
      serviceName,
      date,
      time,
      adminEmail,
      apiKey: process.env.RESEND_API_KEY ? 'Present' : 'Missing'
    })

    // Create calendar event (.ics format)
    const startDate = new Date(`${date}T${time}`)
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000) // 1 hour duration

    const calendarEvent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//SanaBalance//Booking//EN
BEGIN:VEVENT
UID:${Date.now()}@sanabalance.com
DTSTAMP:${formatICSDate(new Date())}
DTSTART:${formatICSDate(startDate)}
DTEND:${formatICSDate(endDate)}
SUMMARY:${serviceName} - ${clientName}
DESCRIPTION:Termin für ${serviceName}
LOCATION:SanaBalance Praxis
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`

    // Send email to admin
    console.log('📨 Sending admin email to:', adminEmail)
    const adminResult = await resend.emails.send({
      from: 'SanaBalance <onboarding@resend.dev>',
      to: adminEmail || 'andrzejmich2@gmail.com',
      subject: `Neue Buchung: ${serviceName}`,
      html: `
        <h2>Neue Terminbuchung</h2>
        <p><strong>Kunde:</strong> ${clientName}</p>
        <p><strong>Email:</strong> ${clientEmail}</p>
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
    console.log('📨 Sending client email to:', clientEmail)
    const clientResult = await resend.emails.send({
      from: 'SanaBalance <onboarding@resend.dev>',
      to: clientEmail,
      subject: 'Terminbestätigung - SanaBalance',
      html: `
        <h2>Vielen Dank für Ihre Buchung!</h2>
        <p>Hallo ${clientName},</p>
        <p>Ihr Termin wurde erfolgreich gebucht:</p>
        <ul>
          <li><strong>Service:</strong> ${serviceName}</li>
          <li><strong>Datum:</strong> ${date}</li>
          <li><strong>Uhrzeit:</strong> ${time}</li>
        </ul>
        <p>Wir freuen uns auf Ihren Besuch!</p>
        <p>Die Kalender-Datei finden Sie im Anhang.</p>
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

    return NextResponse.json({ 
      success: true,
      adminEmailId: adminResult.data?.id,
      clientEmailId: clientResult.data?.id
    })
  } catch (error: any) {
    console.error('❌ Error sending email:', error)
    console.error('Error details:', {
      message: error.message,
      name: error.name,
      stack: error.stack
    })
    return NextResponse.json({ 
      error: 'Failed to send email',
      details: error.message 
    }, { status: 500 })
  }
}

function formatICSDate(date: Date): string {
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
}
