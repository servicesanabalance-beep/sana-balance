'use client'

import { useState } from 'react'
import { Button, Input, Card, CardHeader, CardTitle, CardContent } from '@sana-balance/ui'

interface AuthFormProps {
  onSuccess: () => void
  onBack: () => void
}

export function AuthForm({ onSuccess, onBack }: AuthFormProps) {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement Supabase auth
    onSuccess()
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

            <Button type="submit" className="w-full">
              {isLogin ? 'Anmelden' : 'Registrieren'}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-[#8B7355] hover:text-[#6B5744] transition-colors"
            >
              {isLogin ? 'Noch kein Konto? Hier registrieren' : 'Bereits ein Konto? Hier anmelden'}
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
