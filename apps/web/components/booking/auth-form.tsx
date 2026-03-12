'use client'

import { useState } from 'react'
import { Button, Input, Card, CardHeader, CardTitle, CardContent } from '@sana-balance/ui'
import { createClient } from '@/lib/supabase/client'

interface AuthFormProps {
  onSuccess: (userId: string) => void
  onBack: () => void
}

export function AuthForm({ onSuccess, onBack }: AuthFormProps) {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const supabase = createClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      if (isLogin) {
        // Login existing user
        const { data, error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (signInError) throw signInError
        if (data.user) {
          onSuccess(data.user.id)
        }
      } else {
        // Register new user
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              first_name: firstName,
              last_name: lastName,
              phone: phone,
            },
          },
        })

        if (signUpError) throw signUpError

        if (data.user) {
          // Check if profile already exists
          const { data: existingProfile } = await supabase
            .from('profiles')
            .select('id')
            .eq('id', data.user.id)
            .single()

          if (!existingProfile) {
            // Create profile only if it doesn't exist
            const { error: profileError } = await supabase
              .from('profiles')
              .insert({
                id: data.user.id,
                first_name: firstName,
                last_name: lastName,
                phone: phone,
                is_admin: false,
              })

            if (profileError) throw profileError
          }
          
          onSuccess(data.user.id)
        }
      }
    } catch (err: any) {
      setError(err.message || 'Ein Fehler ist aufgetreten')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-serif font-semibold text-[#6B5744] mb-2">
          {isLogin ? 'Anmelden' : 'Registrieren'}
        </h2>
        <p className="text-[#8B7355]">
          Bitte melden Sie sich an, um Ihren Termin zu bestätigen
        </p>
      </div>

      <Card className="max-w-md mx-auto bg-white border-2 border-[#E8DDD3] shadow-xl">
        <CardHeader>
          <CardTitle className="text-[#6B5744]">
            {isLogin ? 'Bei Ihrem Konto anmelden' : 'Neues Konto erstellen'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#6B5744] mb-2">
                      Vorname
                    </label>
                    <Input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#6B5744] mb-2">
                      Nachname
                    </label>
                    <Input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#6B5744] mb-2">
                    Telefon
                  </label>
                  <Input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+41 79 123 45 67"
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-[#6B5744] mb-2">
                E-Mail
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#6B5744] mb-2">
                Passwort
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Wird geladen...' : (isLogin ? 'Anmelden' : 'Registrieren')}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-[#8B7355] hover:text-[#6B5744] transition-colors"
            >
              {isLogin ? (
                <>
                  Noch kein Konto? <span className="font-bold text-[#6B5744]">Hier registrieren</span>
                </>
              ) : (
                <>
                  Bereits ein Konto? <span className="font-bold text-[#6B5744]">Hier anmelden</span>
                </>
              )}
            </button>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button variant="outline" onClick={onBack}>
          Zurück
        </Button>
      </div>
    </div>
  )
}
