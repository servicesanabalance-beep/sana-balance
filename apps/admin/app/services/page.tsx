'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, Button, Input } from '@sana-balance/ui'
import { Plus, Edit, Trash2 } from 'lucide-react'
import { BackButton } from '@/components/back-button'

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingService, setEditingService] = useState<any>(null)

  // Mock data - replace with Supabase queries
  const services = [
    {
      id: 1,
      name: 'Klassische Massage',
      description: 'Die klassische Massage ist eine bewährte Technik zur Linderung von Muskelverspannungen.',
      duration: 60,
      price: 120,
      isActive: true,
    },
    {
      id: 2,
      name: 'Wellnessmassage',
      description: 'Die Wellnessmassage schenkt tiefe Entspannung für Körper und Geist.',
      duration: 90,
      price: 150,
      isActive: true,
    },
    {
      id: 3,
      name: 'Dorn & Breuss Methode',
      description: 'Die Dorn & Breuss Massage lindert Rückenschmerzen und Nackenverspannungen.',
      duration: 75,
      price: 140,
      isActive: true,
    },
    {
      id: 4,
      name: 'Sportmassage',
      description: 'Wenn Sie sportlich aktiv sind, ist eine Sportmassage ideal für Sie.',
      duration: 60,
      price: 130,
      isActive: true,
    },
  ]

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <BackButton href="/dashboard" />
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-serif font-bold text-amber-900 dark:text-amber-50 mb-2">
              Services
            </h1>
            <p className="text-gray-700 dark:text-amber-100">Verwaltung Ihrer Massage-Angebote</p>
          </div>
          <Button onClick={() => setIsModalOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Neuer Service
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="bg-gradient-to-br from-[#6B5744] to-[#8B7355] border-none">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-white">{service.name}</CardTitle>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-sm text-white/80">
                        {service.duration} Minuten
                      </span>
                      <span className="text-lg font-serif font-semibold text-white">
                        {service.price} CHF
                      </span>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      service.isActive
                        ? 'bg-green-500/20 text-green-200 border border-green-400/30'
                        : 'bg-gray-500/20 text-gray-200 border border-gray-400/30'
                    }`}
                  >
                    {service.isActive ? 'Aktiv' : 'Inaktiv'}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setEditingService(service)
                      setIsModalOpen(true)
                    }}
                    className="flex-1 min-w-[120px] bg-[#C9A87C] hover:bg-[#B8976B] text-white border-none"
                  >
                    <Edit className="h-4 w-4 flex-shrink-0" />
                    Bearbeiten
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 min-w-[120px] bg-red-600/80 hover:bg-red-700 text-white border-none"
                  >
                    <Trash2 className="h-4 w-4 flex-shrink-0" />
                    Löschen
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add/Edit Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-2xl">
              <CardHeader>
                <CardTitle>
                  {editingService ? 'Service bearbeiten' : 'Neuer Service'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                      Name
                    </label>
                    <Input
                      type="text"
                      defaultValue={editingService?.name}
                      placeholder="z.B. Klassische Massage"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                      Beschreibung
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      rows={4}
                      defaultValue={editingService?.description}
                      placeholder="Beschreiben Sie den Service..."
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                        Dauer (Minuten)
                      </label>
                      <Input
                        type="number"
                        defaultValue={editingService?.duration || 60}
                        placeholder="60"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                        Preis (CHF)
                      </label>
                      <Input
                        type="number"
                        defaultValue={editingService?.price || 120}
                        placeholder="120"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="isActive"
                      defaultChecked={editingService?.isActive ?? true}
                      className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500"
                    />
                    <label htmlFor="isActive" className="text-sm text-gray-800 dark:text-gray-100">
                      Service ist aktiv
                    </label>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button type="submit" className="flex-1">
                      Speichern
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1"
                      onClick={() => {
                        setIsModalOpen(false)
                        setEditingService(null)
                      }}
                    >
                      Abbrechen
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
