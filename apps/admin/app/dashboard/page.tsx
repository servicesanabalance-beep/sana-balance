'use client'

import { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@sana-balance/ui'
import { Calendar, Users, Clock, CheckCircle } from 'lucide-react'
import { BackButton } from '@/components/back-button'
import { LogoutButton } from '@/components/logout-button'
import { createClient } from '@/lib/supabase/client'
import { format, startOfDay, endOfDay } from 'date-fns'

interface Stats {
  todayAppointments: number
  totalClients: number
  upcomingSlots: number
  completedToday: number
}

interface TodayAppointment {
  id: string
  status: string
  profiles: {
    first_name: string
    last_name: string
  }
  services: {
    name_de: string
  }
  availability: {
    start_time: string
  }
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats>({
    todayAppointments: 0,
    totalClients: 0,
    upcomingSlots: 0,
    completedToday: 0,
  })
  const [todayAppointments, setTodayAppointments] = useState<TodayAppointment[]>([])
  const [loading, setLoading] = useState(true)

  const supabase = createClient()

  useEffect(() => {
    fetchDashboardData()
  }, [])

  async function fetchDashboardData() {
    try {
      const today = new Date()
      const todayStart = startOfDay(today).toISOString()
      const todayEnd = endOfDay(today).toISOString()

      // Fetch today's appointments with proper joins
      const { data: todayAptsRaw, error: aptsError } = await supabase
        .from('appointments')
        .select(`
          id,
          status,
          client_id,
          service_id,
          availability_id,
          profiles!appointments_client_id_fkey (
            first_name,
            last_name
          ),
          services!appointments_service_id_fkey (
            name_de
          ),
          availability!appointments_availability_id_fkey (
            start_time
          )
        `)

      if (aptsError) {
        console.error('Error fetching appointments:', aptsError)
        throw aptsError
      }

      // Filter for today's appointments and transform data
      const todayApts = (todayAptsRaw || [])
        .filter((apt: any) => {
          if (!apt.availability?.start_time) return false
          const startTime = new Date(apt.availability.start_time)
          return startTime >= new Date(todayStart) && startTime <= new Date(todayEnd)
        })
        .map((apt: any) => ({
          id: apt.id,
          status: apt.status,
          profiles: apt.profiles || { first_name: 'Unknown', last_name: 'User' },
          services: apt.services || { name_de: 'Unknown Service' },
          availability: apt.availability || { start_time: new Date().toISOString() },
        }))

      // Fetch unique clients who have appointments
      const { data: clientsData, error: clientsError } = await supabase
        .from('appointments')
        .select('client_id')

      if (clientsError) throw clientsError

      // Count unique clients
      const uniqueClients = new Set(clientsData?.map(apt => apt.client_id) || [])
      const clientsCount = uniqueClients.size

      // Fetch upcoming available slots
      const { count: slotsCount, error: slotsError } = await supabase
        .from('availability')
        .select('*', { count: 'exact', head: true })
        .eq('is_booked', false)
        .gte('start_time', new Date().toISOString())

      if (slotsError) throw slotsError

      // Calculate stats
      const completedCount = todayApts.filter(apt => apt.status === 'completed').length

      setStats({
        todayAppointments: todayApts.length,
        totalClients: clientsCount || 0,
        upcomingSlots: slotsCount || 0,
        completedToday: completedCount,
      })

      setTodayAppointments(todayApts)
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-serif font-bold text-amber-900 dark:text-amber-50 mb-2">
              Dashboard
            </h1>
            <p className="text-gray-700 dark:text-amber-100">Übersicht über Ihre Termine und Statistiken</p>
          </div>
          <LogoutButton />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-md">
            <CardContent className="pt-6 pb-6">
              <div className="flex flex-col items-center justify-center text-center gap-3">
                <Calendar className="h-12 w-12 text-amber-600 dark:text-amber-400" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Heute</p>
                  <p className="text-3xl font-serif font-bold text-gray-800 dark:text-gray-100">
                    {stats.todayAppointments}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-md">
            <CardContent className="pt-6 pb-6">
              <div className="flex flex-col items-center justify-center text-center gap-3">
                <Users className="h-12 w-12 text-amber-600 dark:text-amber-400" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Klienten</p>
                  <p className="text-3xl font-serif font-bold text-gray-800 dark:text-gray-100">
                    {stats.totalClients}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-md">
            <CardContent className="pt-6 pb-6">
              <div className="flex flex-col items-center justify-center text-center gap-3">
                <Clock className="h-12 w-12 text-amber-600 dark:text-amber-400" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Verfügbar</p>
                  <p className="text-3xl font-serif font-bold text-gray-800 dark:text-gray-100">
                    {stats.upcomingSlots}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-md">
            <CardContent className="pt-6 pb-6">
              <div className="flex flex-col items-center justify-center text-center gap-3">
                <CheckCircle className="h-12 w-12 text-amber-600 dark:text-amber-400" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Abgeschlossen</p>
                  <p className="text-3xl font-serif font-bold text-gray-800 dark:text-gray-100">
                    {stats.completedToday}
                  </p>
                </div>
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
              {loading ? (
                <p className="text-center text-gray-500 py-4">Laden...</p>
              ) : todayAppointments.length === 0 ? (
                <p className="text-center text-gray-500 py-4">Keine Termine für heute</p>
              ) : (
                todayAppointments.map((apt) => {
                  const startTime = apt.availability?.start_time 
                    ? new Date(apt.availability.start_time) 
                    : new Date()
                  return (
                    <div
                      key={apt.id}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow"
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800 dark:text-gray-100">
                          {apt.profiles.first_name} {apt.profiles.last_name}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{apt.services.name_de}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-800 dark:text-gray-100">
                          {format(startTime, 'HH:mm')} Uhr
                        </p>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            apt.status === 'completed'
                              ? 'bg-green-100 text-green-800'
                              : apt.status === 'confirmed'
                              ? 'bg-blue-100 text-blue-800'
                              : apt.status === 'cancelled'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {apt.status === 'completed'
                            ? 'Abgeschlossen'
                            : apt.status === 'confirmed'
                            ? 'Bestätigt'
                            : apt.status === 'cancelled'
                            ? 'Storniert'
                            : 'Ausstehend'}
                        </span>
                      </div>
                    </div>
                  )
                })
              )}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="/admin-panel326/appointments"
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-lg font-serif font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Alle Termine
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Verwaltung aller Buchungen</p>
          </a>

          <a
            href="/admin-panel326/services"
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-lg font-serif font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Services
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Angebote bearbeiten</p>
          </a>

          <a
            href="/admin-panel326/availability"
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
