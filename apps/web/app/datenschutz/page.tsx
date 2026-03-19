export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
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
              Thomas Mich<br />
              E-Mail: kontakt@sanabalance.ch
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
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSG, 
              sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung 
              vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die 
              Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an 
              uns gerichteten Anfragen.
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
              7. Hosting und Content Delivery
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
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              8. Externe Dienste
            </h2>
            <h3 className="text-xl font-serif font-semibold text-sana-brown-dark mt-6 mb-3">
              8.1 Unsplash (Bilder)
            </h3>
            <p>
              Wir verwenden Bilder von Unsplash (Unsplash Inc., 1000 King Street West, Suite 200, 
              Toronto, ON M6K 3H1, Kanada). Beim Laden dieser Bilder wird Ihre IP-Adresse an 
              Unsplash übermittelt. Weitere Informationen finden Sie in der Datenschutzerklärung 
              von Unsplash: https://unsplash.com/privacy
            </p>

            <h3 className="text-xl font-serif font-semibold text-sana-brown-dark mt-6 mb-3">
              8.2 Supabase (Datenbank)
            </h3>
            <p>
              Für die Speicherung von Termindaten nutzen wir Supabase (Supabase Inc., 970 Toa Payoh 
              North, #07-04, Singapore 318992). Die Daten werden verschlüsselt übertragen und 
              gespeichert. Weitere Informationen: https://supabase.com/privacy
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              9. Ihre Rechte
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
              Zur Ausübung dieser Rechte wenden Sie sich bitte an: kontakt@sanabalance.ch
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              10. Datensicherheit
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
              11. Änderungen dieser Datenschutzerklärung
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
              12. Fragen zum Datenschutz
            </h2>
            <p>
              Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail an: 
              kontakt@sanabalance.ch
            </p>
          </section>

          <p className="text-sm text-sana-brown mt-12 pt-8 border-t border-sana-beige">
            Stand: März 2026
          </p>
        </div>
      </div>
    </div>
  )
}
