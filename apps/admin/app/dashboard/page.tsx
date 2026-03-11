'use client'

import { Card, CardHeader, CardTitle, CardContent } from '@sana-balance/ui'
import { Calendar, Users, Clock, CheckCircle } from 'lucide-react'
import { BackButton } from '@/components/back-button'

export default function DashboardPage() {
  // Mock data - replace with real Supabase queries
  const stats = {
    todayAppointments: 5,
    totalClients: 42,
    upcomingSlots: 18,
    completedToday: 3,
  }

  const recentAppointments = [
    { id: 1, client: 'Maria Schmidt', service: 'Klassische Massage', time: '10:00', status: 'completed' },
    { id: 2, client: 'Hans Müller', service: 'Wellnessmassage', time: '14:00', status: 'confirmed' },
    { id: 3, client: 'Anna Weber', service: 'Sportmassage', time: '16:30', status: 'pending' },
  ]

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <BackButton href="/" label="Zurück zur Startseite" />
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-amber-900 dark:text-amber-50 mb-2">
            Dashboard
          </h1>
          <p className="text-gray-700 dark:text-amber-100">Übersicht über Ihre Termine und Statistiken</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Heute</p>
                  <p className="text-3xl font-serif font-bold text-gray-800 dark:text-gray-100">
                    {stats.todayAppointments}
                  </p>
                </div>
                <Calendar className="h-10 w-10 text-amber-600 dark:text-amber-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Klienten</p>
                  <p className="text-3xl font-serif font-bold text-gray-800 dark:text-gray-100">
                    {stats.totalClients}
                  </p>
                </div>
                <Users className="h-10 w-10 text-amber-600 dark:text-amber-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Verfügbar</p>
                  <p className="text-3xl font-serif font-bold text-gray-800 dark:text-gray-100">
                    {stats.upcomingSlots}
                  </p>
                </div>
                <Clock className="h-10 w-10 text-amber-600 dark:text-amber-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Abgeschlossen</p>
                  <p className="text-3xl font-serif font-bold text-gray-800 dark:text-gray-100">
                    {stats.completedToday}
                  </p>
                </div>
                <CheckCircle className="h-10 w-10 text-amber-600 dark:text-amber-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Appointments */}
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-md">
          <CardHeader>
            <CardTitle className="text-gray-800 dark:text-gray-100">Heutige Termine</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAppointments.map((apt) => (
                <div
                  key={apt.id}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 dark:text-gray-100">{apt.client}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{apt.service}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-800 dark:text-gray-100">{apt.time}</p>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        apt.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : apt.status === 'confirmed'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {apt.status === 'completed'
                        ? 'Abgeschlossen'
                        : apt.status === 'confirmed'
                        ? 'Bestätigt'
                        : 'Ausstehend'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="/appointments"
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-lg font-serif font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Alle Termine
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Verwaltung aller Buchungen</p>
          </a>

          <a
            href="/services"
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-lg font-serif font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Services
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Angebote bearbeiten</p>
          </a>

          <a
            href="/availability"
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-lg font-serif font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Verfügbarkeit
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Zeitslots verwalten</p>
          </a>
        </div>
      </div>
    </div>
  )
}
