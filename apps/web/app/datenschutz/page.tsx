import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Header } from '@/components/header'

export default function Datenschutz() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-28 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sana-brown hover:text-sana-brown-dark transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Zurück zur Startseite</span>
        </Link>
        <h1 className="text-4xl font-serif font-bold text-sana-brown-dark mb-8">
          Datenschutzerklärung
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-sana-brown">
          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              1. Allgemeines
            </h2>
            <p>
              Gestützt auf Artikel 13 der Schweizerischen Bundesverfassung und die datenschutzrechtlichen 
              Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer 
              Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Wir halten diese 
              Bestimmungen ein. Persönliche Daten werden streng vertraulich behandelt und weder an Dritte 
              verkauft noch weitergegeben.
            </p>
            <p>
              In enger Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so 
              gut wie möglich vor unberechtigtem Zugriff, Verlust, Missbrauch oder Verfälschung zu schützen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              2. Verantwortliche Stelle
            </h2>
            <p>
              Verantwortlich für die Datenbearbeitung auf dieser Website ist:
            </p>
            <p className="font-semibold">
              SanaBalance<br />
              Thomas Grobler<br />
              Rossweidstrasse 4<br />
              9472 Grabs<br />
              Schweiz<br />
              E-Mail: <a href="mailto:service.sanabalance@gmail.com" className="text-[#8B7355] hover:text-[#6B5744] underline">service.sanabalance@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              3. Zugriff auf unsere Website
            </h2>
            <p>
              Beim Zugriff auf unsere Website werden folgende Daten in Logfiles gespeichert:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Aufgerufene Seite</li>
              <li>Browsertyp und -version</li>
              <li>Betriebssystem</li>
              <li>Referrer URL (zuvor besuchte Seite)</li>
            </ul>
            <p>
              Diese Daten werden ausschließlich zu statistischen Zwecken und zur Verbesserung unseres 
              Angebots verwendet. Eine Weitergabe an Dritte erfolgt nicht.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              4. Kontaktformular und E-Mail-Kontakt
            </h2>
            <p>
              Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, werden Ihre Angaben zur 
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. 
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt zur Bearbeitung Ihrer Anfrage und für den Fall 
              von Anschlussfragen. Die Rechtsgrundlage bildet unser berechtigtes Interesse an der 
              effektiven Bearbeitung der an uns gerichteten Anfragen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              5. Online-Terminbuchung
            </h2>
            <p>
              Bei der Nutzung unseres Online-Buchungssystems erheben wir folgende Daten:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name und Vorname</li>
              <li>E-Mail-Adresse</li>
              <li>Telefonnummer (optional)</li>
              <li>Gewünschter Termin und Behandlung</li>
            </ul>
            <p>
              Diese Daten werden ausschließlich zur Terminvereinbarung und -verwaltung verwendet. 
              Die Daten werden nach Ablauf der gesetzlichen Aufbewahrungsfristen gelöscht.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              6. Cookies
            </h2>
            <p>
              Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Computer 
              gespeichert werden und die Ihr Browser speichert. Cookies richten auf Ihrem Computer 
              keinen Schaden an und enthalten keine Viren.
            </p>
            <p>
              Wir verwenden folgende Arten von Cookies:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Technisch notwendige Cookies:</strong> Diese Cookies sind für die Grundfunktionen 
                der Website erforderlich.
              </li>
              <li>
                <strong>Funktionale Cookies:</strong> Diese Cookies ermöglichen es der Website, 
                erweiterte Funktionalität und Personalisierung bereitzustellen.
              </li>
            </ul>
            <p>
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert 
              werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte 
              Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim 
              Schließen des Browsers aktivieren.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              7. Google Fonts
            </h2>
            <p>
              Diese Website verwendet Google Fonts der Google LLC (1600 Amphitheatre Parkway, 
              Mountain View, CA 94043, USA) zur einheitlichen Darstellung von Schriftarten.
            </p>
            <p>
              Beim Aufruf einer Seite lädt Ihr Browser die benötigten Schriftarten in den 
              Browsercache, um Texte und Schriftarten korrekt anzuzeigen. Zu diesem Zweck muss 
              der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. 
              Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse unsere Website 
              aufgerufen wurde.
            </p>
            <p>
              Die Nutzung von Google Fonts erfolgt im Interesse einer einheitlichen und ansprechenden 
              Darstellung unserer Online-Angebote. Die Übermittlung von Daten in die USA erfolgt auf 
              Grundlage von Standardvertragsklauseln.
            </p>
            <p>
              Weitere Informationen zu Google Fonts finden Sie unter:{' '}
              <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer" className="text-[#8B7355] hover:text-[#6B5744] underline">developers.google.com/fonts/faq</a>{' '}
              und in der Datenschutzerklärung von Google:{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#8B7355] hover:text-[#6B5744] underline">policies.google.com/privacy</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              8. Hosting und Content Delivery
            </h2>
            <p>
              Unsere Website wird bei Vercel Inc. gehostet. Der Anbieter ist Vercel Inc., 
              340 S Lemon Ave #4133, Walnut, CA 91789, USA.
            </p>
            <p>
              Vercel erfasst in sogenannten Logfiles folgende Daten, die Ihr Browser übermittelt:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>Inhalt der Anforderung</li>
              <li>HTTP-Statuscode</li>
              <li>Übertragene Datenmenge</li>
              <li>Referrer</li>
              <li>User-Agent</li>
            </ul>
            <p>
              Die Speicherung erfolgt zur Gewährleistung der Sicherheit und Stabilität des Angebots. 
              Die Daten werden nach 7 Tagen gelöscht.
            </p>
            <p>
              <strong>Datenübermittlung in Drittländer:</strong> Die Übermittlung von Daten in die USA 
              erfolgt auf Grundlage von Standardvertragsklauseln (Standard Contractual Clauses, SCC), 
              die ein angemessenes Datenschutzniveau gewährleisten.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              9. Externe Dienste
            </h2>
            <h3 className="text-xl font-serif font-semibold text-sana-brown-dark mt-6 mb-3">
              9.1 Unsplash (Bilder)
            </h3>
            <p>
              Wir verwenden Bilder von Unsplash (Unsplash Inc., 1000 King Street West, Suite 200, 
              Toronto, ON M6K 3H1, Kanada). Beim Laden dieser Bilder wird Ihre IP-Adresse an 
              Unsplash übermittelt.
            </p>
            <p>
              Kanada verfügt über ein von der Schweiz anerkanntes angemessenes Datenschutzniveau, 
              sodass die Datenübermittlung ohne zusätzliche Garantien erfolgen kann.
            </p>
            <p>
              Weitere Informationen:{' '}
              <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer" className="text-[#8B7355] hover:text-[#6B5744] underline">unsplash.com</a>
            </p>

            <h3 className="text-xl font-serif font-semibold text-sana-brown-dark mt-6 mb-3">
              9.2 Supabase (Datenbank)
            </h3>
            <p>
              Für die Speicherung von Termindaten nutzen wir Supabase (Supabase Inc., 970 Toa Payoh 
              North, #07-04, Singapore 318992). Die Daten werden verschlüsselt übertragen und 
              gespeichert.
            </p>
            <p>
              <strong>Datenübermittlung in Drittländer:</strong> Die Übermittlung von Daten nach 
              Singapur erfolgt auf Grundlage von Standardvertragsklauseln (Standard Contractual 
              Clauses, SCC), die ein angemessenes Datenschutzniveau gewährleisten.
            </p>
            <p>
              Weitere Informationen:{' '}
              <a href="https://supabase.com/" target="_blank" rel="noopener noreferrer" className="text-[#8B7355] hover:text-[#6B5744] underline">supabase.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              10. Ihre Rechte
            </h2>
            <p>
              Sie haben jederzeit das Recht auf:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Auskunft über Ihre bei uns gespeicherten Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>Löschung Ihrer Daten</li>
              <li>Einschränkung der Datenverarbeitung</li>
              <li>Datenübertragbarkeit</li>
              <li>Widerspruch gegen die Verarbeitung</li>
            </ul>
            <p>
              Zur Ausübung dieser Rechte wenden Sie sich bitte an: <a href="mailto:service.sanabalance@gmail.com" className="text-[#8B7355] hover:text-[#6B5744] underline">service.sanabalance@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              11. Datensicherheit
            </h2>
            <p>
              Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) 
              in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser 
              unterstützt wird. In der Regel handelt es sich dabei um eine 256-Bit-Verschlüsselung.
            </p>
            <p>
              Wir bedienen uns geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um 
              Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen 
              Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              12. Änderungen dieser Datenschutzerklärung
            </h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie 
              stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer 
              Leistungen in der Datenschutzerklärung umzusetzen.
            </p>
            <p>
              Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              13. Fragen zum Datenschutz
            </h2>
            <p>
              Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail an: <a href="mailto:service.sanabalance@gmail.com" className="text-[#8B7355] hover:text-[#6B5744] underline">service.sanabalance@gmail.com</a>
            </p>
          </section>

          <p className="text-sm text-sana-brown mt-12 pt-8 border-t border-sana-beige">
            Stand: März 2026
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
