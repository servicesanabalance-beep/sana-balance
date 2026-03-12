'use client'

import { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardContent, Button, Input } from '@sana-balance/ui'
import { Plus, Edit, Trash2 } from 'lucide-react'
import { BackButton } from '@/components/back-button'
import { createClient } from '@/lib/supabase/client'

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingService, setEditingService] = useState<any>(null)
  const [services, setServices] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    duration: 60,
    price: 120,
    is_active: true,
  })

  const supabase = createClient()

  useEffect(() => {
    fetchServices()
  }, [])

  async function fetchServices() {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setServices(data || [])
    } catch (error) {
      console.error('Error fetching services:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    try {
      if (editingService) {
        // Update existing service
        const { error } = await supabase
          .from('services')
          .update({
            name_de: formData.name,
            description_de: formData.description,
            duration_minutes: formData.duration,
            price_chf: formData.price,
            is_active: formData.is_active,
          })
          .eq('id', editingService.id)

        if (error) throw error
      } else {
        // Create new service
        const { error } = await supabase
          .from('services')
          .insert({
            name_de: formData.name,
            description_de: formData.description,
            duration_minutes: formData.duration,
            price_chf: formData.price,
            is_active: formData.is_active,
          })

        if (error) throw error
      }

      // Refresh services list
      await fetchServices()
      
      // Close modal and reset form
      setIsModalOpen(false)
      setEditingService(null)
      setFormData({
        name: '',
        description: '',
        duration: 60,
        price: 120,
        is_active: true,
      })
    } catch (error) {
      console.error('Error saving service:', error)
      alert('Fehler beim Speichern des Services')
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Möchten Sie diesen Service wirklich löschen?')) return

    try {
      const { error } = await supabase
        .from('services')
        .delete()
        .eq('id', id)

      if (error) throw error

      // Refresh services list
      await fetchServices()
    } catch (error) {
      console.error('Error deleting service:', error)
      alert('Fehler beim Löschen des Services')
    }
  }

  function openEditModal(service: any) {
    setEditingService(service)
    setFormData({
      name: service.name_de,
      description: service.description_de,
      duration: service.duration_minutes,
      price: service.price_chf,
      is_active: service.is_active,
    })
    setIsModalOpen(true)
  }

  function openNewModal() {
    setEditingService(null)
    setFormData({
      name: '',
      description: '',
      duration: 60,
      price: 120,
      is_active: true,
    })
    setIsModalOpen(true)
  }

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
          <Button onClick={openNewModal}>
            <Plus className="h-4 w-4 mr-2" />
            Neuer Service
          </Button>
        </div>

        {/* Services Grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">Laden...</p>
          </div>
        ) : services.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">Keine Services vorhanden. Erstellen Sie einen neuen Service.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="bg-gradient-to-br from-[#6B5744] to-[#8B7355] border-none">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-white">{service.name_de}</CardTitle>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-sm text-white/80">
                          {service.duration_minutes} Minuten
                        </span>
                        <span className="text-lg font-serif font-semibold text-white">
                          {service.price_chf} CHF
                        </span>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        service.is_active
                          ? 'bg-green-500/20 text-green-200 border border-green-400/30'
                          : 'bg-gray-500/20 text-gray-200 border border-gray-400/30'
                      }`}
                    >
                      {service.is_active ? 'Aktiv' : 'Inaktiv'}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 mb-4">{service.description_de}</p>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openEditModal(service)}
                      className="flex-1 min-w-[120px] bg-[#C9A87C] hover:bg-[#B8976B] text-white border-none px-4 py-2 flex items-center justify-center gap-2"
                    >
                      <Edit className="h-4 w-4" />
                      <span>Bearbeiten</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleDelete(service.id)}
                      className="flex-1 min-w-[120px] bg-red-600/80 hover:bg-red-700 text-white border-none px-4 py-2 flex items-center justify-center gap-2"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span>Löschen</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Add/Edit Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-[#6B5744] to-[#8B7355] text-white">
                <CardTitle className="text-white">
                  {editingService ? 'Service bearbeiten' : 'Neuer Service'}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                      Name
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="z.B. Klassische Massage"
                      className="bg-white dark:bg-gray-700"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                      Beschreibung
                    </label>
                    <textarea
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Beschreiben Sie den Service..."
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                        Dauer (Minuten)
                      </label>
                      <Input
                        type="number"
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
                        placeholder="60"
                        className="bg-white dark:bg-gray-700"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                        Preis (CHF)
                      </label>
                      <Input
                        type="number"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                        placeholder="120"
                        className="bg-white dark:bg-gray-700"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="isActive"
                      checked={formData.is_active}
                      onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                      className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500"
                    />
                    <label htmlFor="isActive" className="text-sm text-gray-800 dark:text-gray-100">
                      Service ist aktiv
                    </label>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button 
                      type="submit" 
                      className="px-6 py-2 bg-[#C9A87C] hover:bg-[#B8976B] text-white flex items-center justify-center gap-2"
                    >
                      Speichern
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="px-6 py-2 flex items-center justify-center gap-2"
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
