import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-sana-cream dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-amber-900 dark:text-amber-50 mb-4">
          Sana Balance Admin
        </h1>
        <p className="text-lg text-gray-700 dark:text-amber-100 mb-8">
          Willkommen im Verwaltungsbereich
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="/dashboard"
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-2xl font-serif font-semibold text-gray-800 dark:text-amber-50 mb-2">
              Dashboard
            </h2>
            <p className="text-gray-600 dark:text-amber-100">
              Übersicht über Termine und Statistiken
            </p>
          </a>

          <a
            href="/appointments"
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-2xl font-serif font-semibold text-gray-800 dark:text-amber-50 mb-2">
              Termine
            </h2>
            <p className="text-gray-600 dark:text-amber-100">
              Verwaltung aller Buchungen
            </p>
          </a>

          <a
            href="/services"
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-2xl font-serif font-semibold text-gray-800 dark:text-amber-50 mb-2">
              Services
            </h2>
            <p className="text-gray-600 dark:text-amber-100">
              Massage-Angebote verwalten
            </p>
          </a>

          <a
            href="/availability"
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-2xl font-serif font-semibold text-gray-800 dark:text-amber-50 mb-2">
              Verfügbarkeit
            </h2>
            <p className="text-gray-600 dark:text-amber-100">
              Zeitslots verwalten
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
