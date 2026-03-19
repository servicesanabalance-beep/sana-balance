export default function Impressum() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-serif font-bold text-sana-brown-dark mb-8">
          Impressum
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-sana-brown">
          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              Angaben gemäss § 5 TMG
            </h2>
            <p className="font-semibold text-lg">
              SanaBalance Massagen<br />
              Rossweidstrasse 4<br />
              9472 Grabs<br />
              Schweiz
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              Kontakt
            </h2>
            <p>
              <strong>Telefon:</strong> 079 489 50 18<br />
              <strong>E-Mail:</strong> kontakt@sanabalance.ch
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              Über SanaBalance
            </h2>
            <p>
              SanaBalance ist Ihre Praxis für ganzheitliches Wohlbefinden in Grabs. 
              Wir bieten professionelle Massagen und ganzheitliche Behandlungen in 
              entspannter, harmonischer Atmosphäre.
            </p>
            <p>
              Unser Ziel ist es, Ihnen eine Auszeit vom Alltag zu ermöglichen und 
              Ihr körperliches sowie seelisches Wohlbefinden zu fördern. Mit langjähriger 
              Erfahrung und fundiertem Fachwissen begleiten wir Sie auf Ihrem Weg zu 
              mehr Balance und Harmonie.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              Inhaber
            </h2>
            <p>
              <strong>Thomas Mich</strong>
            </p>
            <p>
              Als erfahrener Massage-Therapeut liegt mir Ihr Wohlbefinden am Herzen. 
              Mit Leidenschaft und Engagement widme ich mich der ganzheitlichen Behandlung 
              meiner Klienten. Jede Massage wird individuell auf Ihre Bedürfnisse abgestimmt, 
              um optimale Entspannung und Regeneration zu ermöglichen.
            </p>
            <p>
              Meine Ausbildungen und kontinuierliche Weiterbildungen garantieren Ihnen 
              höchste Qualität und professionelle Betreuung. Ich freue mich darauf, 
              Sie in meiner Praxis begrüßen zu dürfen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              Öffnungszeiten
            </h2>
            <p>
              Termine nach Vereinbarung
            </p>
            <p className="text-sm text-sana-brown/80">
              Bitte vereinbaren Sie Ihren Wunschtermin telefonisch oder über unser 
              Online-Buchungssystem.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              Haftungsausschluss
            </h2>
            
            <h3 className="text-xl font-serif font-semibold text-sana-brown-dark mt-6 mb-3">
              Haftung für Inhalte
            </h3>
            <p>
              Die Inhalte unserer Seiten wurden mit grösster Sorgfalt erstellt. Für die 
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch 
              keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäss schweizerischem 
              Recht für eigene Inhalte auf diesen Seiten verantwortlich. Wir sind jedoch 
              nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu 
              überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
              Tätigkeit hinweisen.
            </p>

            <h3 className="text-xl font-serif font-semibold text-sana-brown-dark mt-6 mb-3">
              Haftung für Links
            </h3>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte 
              wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch 
              keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der 
              jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h3 className="text-xl font-serif font-semibold text-sana-brown-dark mt-6 mb-3">
              Urheberrecht
            </h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
              unterliegen dem schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, 
              Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes 
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              Bildnachweise
            </h2>
            <p>
              Die auf dieser Website verwendeten Bilder stammen von:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Unsplash (https://unsplash.com) - Lizenzfreie Bilder</li>
              <li>Eigene Aufnahmen</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              Technische Umsetzung
            </h2>
            <p>
              <strong>Webdesign & Entwicklung:</strong> Andrzej Mich
            </p>
            <p>
              <strong>Hosting:</strong> Vercel Inc., USA
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mt-8 mb-4">
              Rechtliche Hinweise
            </h2>
            <p>
              Weitere rechtliche Informationen finden Sie in unseren:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <a href="/datenschutz" className="text-sana-brown hover:text-sana-brown-dark underline">
                  Datenschutzerklärung
                </a>
              </li>
              <li>
                <a href="/agb" className="text-sana-brown hover:text-sana-brown-dark underline">
                  Allgemeinen Geschäftsbedingungen (AGB)
                </a>
              </li>
            </ul>
          </section>

          <p className="text-sm text-sana-brown mt-12 pt-8 border-t border-sana-beige">
            Stand: März 2026
          </p>
        </div>
      </div>
    </div>
  )
}
