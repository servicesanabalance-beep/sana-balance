import { NextResponse } from 'next/server'

// Pinged by the Vercel cron in vercel.json so the free Supabase project never
// gets paused for inactivity. Does a tiny read on the public `services` table.
export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  // If CRON_SECRET is set in Vercel, Vercel sends it as a Bearer token.
  const secret = process.env.CRON_SECRET
  if (secret && request.headers.get('authorization') !== `Bearer ${secret}`) {
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 })
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) {
    return NextResponse.json({ ok: false, error: 'missing supabase env' }, { status: 500 })
  }

  const res = await fetch(`${url}/rest/v1/services?select=id&limit=1`, {
    headers: { apikey: key, Authorization: `Bearer ${key}` },
    cache: 'no-store',
  })

  return NextResponse.json(
    { ok: res.ok, status: res.status, at: new Date().toISOString() },
    { status: res.ok ? 200 : 502 },
  )
}
