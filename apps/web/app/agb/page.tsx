import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Header } from '@/components/header'

export default function AGB() {
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
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-sana-brown">
          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              1. Geltungsbereich
            </h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Dienstleistungen, die 
              SanaBalance, Thomas Mich (nachfolgend "Anbieter" genannt) im Bereich Massage und 
              ganzheitliche Behandlungen erbringt.
            </p>
            <p>
              Mit der Buchung einer Behandlung oder Dienstleistung akzeptiert der Kunde diese AGB 
              in ihrer jeweils gültigen Fassung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              2. Vertragspartner
            </h2>
            <p>
              Der Vertrag kommt zustande zwischen dem Kunden und:
            </p>
            <p className="font-semibold">
              SanaBalance<br />
              Thomas Grobler<br />
              Rossweidstrasse 4<br />
              9472 Grabs<br />
              Schweiz<br />
              E-Mail: kontakt@sanabalance.ch
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              3. Leistungsumfang
            </h2>
            <p>
              Der Anbieter erbringt folgende Dienstleistungen:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Klassische Massage</li>
              <li>Wellnessmassage</li>
              <li>Dorn & Breuss Massage</li>
              <li>Sportmassage</li>
              <li>Weitere ganzheitliche Behandlungen nach Vereinbarung</li>
            </ul>
            <p>
              Die genaue Leistungsbeschreibung und Preise sind auf der Website www.sanabalance.ch 
              ersichtlich und können jederzeit angepasst werden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              4. Terminvereinbarung und Buchung
            </h2>
            <p>
              Termine können online über die Website, per E-Mail oder telefonisch vereinbart werden.
            </p>
            <p>
              Der Vertrag kommt mit der Bestätigung des Termins durch den Anbieter zustande. 
              Die Bestätigung erfolgt per E-Mail oder telefonisch.
            </p>
            <p>
              Der Kunde verpflichtet sich, pünktlich zum vereinbarten Termin zu erscheinen. 
              Bei Verspätung kann die Behandlungszeit entsprechend verkürzt werden, ohne dass 
              sich der Preis reduziert.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              5. Preise und Zahlungsbedingungen
            </h2>
            <p>
              Es gelten die zum Zeitpunkt der Buchung auf der Website angegebenen Preise. 
              Alle Preise verstehen sich in Schweizer Franken (CHF).
            </p>
            <p>
              Die Zahlung erfolgt in bar oder nach Vereinbarung direkt nach der Behandlung.
            </p>
            <p>
              Gutscheine können nach vorheriger Absprache erworben werden und sind ab Ausstellungsdatum 
              12 Monate gültig.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              6. Stornierung und Absage
            </h2>
            <p>
              <strong>Stornierung durch den Kunden:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Kostenlose Stornierung bis 24 Stunden vor dem vereinbarten Termin
              </li>
              <li>
                Bei Absage weniger als 24 Stunden vor dem Termin oder bei Nichterscheinen 
                wird der volle Behandlungspreis in Rechnung gestellt
              </li>
              <li>
                Stornierungen müssen per E-Mail oder telefonisch erfolgen
              </li>
            </ul>
            <p>
              <strong>Absage durch den Anbieter:</strong>
            </p>
            <p>
              Der Anbieter behält sich vor, Termine aus wichtigen Gründen (z.B. Krankheit) 
              abzusagen. In diesem Fall wird ein Ersatztermin angeboten oder die bereits 
              geleistete Zahlung vollständig zurückerstattet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              7. Gesundheitliche Voraussetzungen
            </h2>
            <p>
              Der Kunde ist verpflichtet, den Anbieter vor der Behandlung über alle relevanten 
              gesundheitlichen Beschwerden, Allergien, Medikamenteneinnahmen und Schwangerschaften 
              zu informieren.
            </p>
            <p>
              Die angebotenen Behandlungen ersetzen keine ärztliche Diagnose oder Therapie. 
              Bei akuten oder chronischen Erkrankungen wird empfohlen, vor der Behandlung einen 
              Arzt zu konsultieren.
            </p>
            <p>
              Der Anbieter behält sich vor, eine Behandlung abzulehnen, wenn gesundheitliche 
              Bedenken bestehen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              8. Haftung
            </h2>
            <p>
              Der Anbieter haftet nur für Schäden, die vorsätzlich oder grobfahrlässig verursacht 
              wurden. Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit gesetzlich 
              zulässig.
            </p>
            <p>
              Der Kunde haftet für Schäden, die er an den Räumlichkeiten oder Einrichtungen des 
              Anbieters verursacht.
            </p>
            <p>
              Die Haftung richtet sich nach schweizerischem Recht, insbesondere nach den 
              Bestimmungen des Obligationenrechts (OR).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              9. Schweigepflicht und Datenschutz
            </h2>
            <p>
              Der Anbieter verpflichtet sich zur Verschwiegenheit über alle persönlichen und 
              gesundheitlichen Informationen des Kunden.
            </p>
            <p>
              Die Erhebung, Verarbeitung und Nutzung personenbezogener Daten erfolgt gemäß 
              dem Schweizerischen Datenschutzgesetz (DSG). Weitere Informationen finden Sie 
              in unserer Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              10. Krankenkassenabrechnung
            </h2>
            <p>
              Eine Abrechnung über die Krankenkasse ist nur möglich, wenn der Anbieter über 
              eine entsprechende Anerkennung verfügt und der Kunde über eine Zusatzversicherung 
              für Komplementärmedizin verfügt.
            </p>
            <p>
              Der Kunde ist selbst dafür verantwortlich, die Kostenübernahme mit seiner 
              Krankenkasse zu klären. Der Anbieter stellt eine entsprechende Rechnung aus, 
              übernimmt jedoch keine Garantie für die Rückerstattung durch die Krankenkasse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              11. Verhaltensregeln
            </h2>
            <p>
              Der Kunde verpflichtet sich zu einem respektvollen Umgang. Der Anbieter behält 
              sich vor, Kunden bei unangemessenem Verhalten von der Behandlung auszuschließen.
            </p>
            <p>
              In den Behandlungsräumen ist das Rauchen nicht gestattet. Mobiltelefone sind 
              während der Behandlung auszuschalten oder auf lautlos zu stellen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              12. Urheberrecht
            </h2>
            <p>
              Alle Inhalte dieser Website (Texte, Bilder, Grafiken, Design) sind urheberrechtlich 
              geschützt. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung 
              außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des 
              Anbieters.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              13. Salvatorische Klausel
            </h2>
            <p>
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die 
              Wirksamkeit der übrigen Bestimmungen davon unberührt. Die unwirksame Bestimmung 
              wird durch eine wirksame ersetzt, die dem wirtschaftlichen Zweck der unwirksamen 
              Bestimmung am nächsten kommt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              14. Änderungen der AGB
            </h2>
            <p>
              Der Anbieter behält sich vor, diese AGB jederzeit zu ändern. Die jeweils aktuelle 
              Version ist auf der Website einsehbar. Für bereits gebuchte Termine gelten die 
              zum Zeitpunkt der Buchung gültigen AGB.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              15. Anwendbares Recht und Gerichtsstand
            </h2>
            <p>
              Für alle Rechtsbeziehungen zwischen dem Anbieter und dem Kunden gilt ausschließlich 
              schweizerisches Recht unter Ausschluss des UN-Kaufrechts (CISG).
            </p>
            <p>
              Gerichtsstand für alle Streitigkeiten ist der Sitz des Anbieters in der Schweiz, 
              soweit nicht zwingende gesetzliche Bestimmungen entgegenstehen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              16. Kontakt
            </h2>
            <p>
              Bei Fragen zu diesen AGB wenden Sie sich bitte an:
            </p>
            <p className="font-semibold">
              SanaBalance<br />
              Thomas Grobler<br />
              Rossweidstrasse 4<br />
              9472 Grabs<br />
              Schweiz<br />
              E-Mail: kontakt@sanabalance.ch
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
