# Sana Balance - Massage Therapy Platform

Eine moderne, skalierbare Web-Plattform für eine Massagepraxis mit Monorepo-Architektur (Turborepo).

## 🎯 Projektübersicht

Sana Balance ist eine vollständige Buchungsplattform für Massagetherapie mit:
- **Client Web App** - Öffentliche Website mit Buchungssystem (Next.js)
- **Admin Panel** - Verwaltungsbereich für Termine, Verfügbarkeit und Services
- **Shared Packages** - Wiederverwendbare UI-Komponenten und Business-Logik

## 📦 Monorepo-Struktur

Dieses Turborepo enthält folgende Packages/Apps:

### Apps

- **`apps/web`** - Client-facing Next.js App (App Router, SSR)
  - Homepage mit Services-Übersicht
  - Booking Flow (Service → Datum/Zeit → Auth → Bestätigung)
  - Responsive Design mit Sana Balance Theme
  - Primärsprache: Deutsch (DE)

- **`apps/admin`** - Admin Panel (Next.js)
  - Geschützt durch Supabase Auth (`is_admin` Flag)
  - Verwaltung von Terminen, Verfügbarkeit, Services
  - Dashboard mit Statistiken

### Packages

- **`packages/ui`** - Shared UI Component Library
  - Button, Input, Card, Calendar, ServiceCard
  - Tailwind CSS mit Sana Balance Design System
  - Radix UI für Accessibility

- **`packages/core`** - Shared Business Logic
  - TypeScript Types (Supabase-generiert)
  - Zod Validation Schemas
  - Utility Functions (Datum, Preis-Formatierung)
  - Supabase Client Configuration

- **`packages/eslint-config`** - ESLint Konfigurationen
- **`packages/typescript-config`** - Shared TypeScript Configs

Alle Packages/Apps sind 100% [TypeScript](https://www.typescriptlang.org/).

## 🛠️ Tech Stack

### Frontend
- **React 18+** - UI Library
- **Next.js 16** - App Router, SSR, Image Optimization
- **TypeScript** - Type Safety (Strict Mode)
- **Tailwind CSS** - Styling mit Custom Theme
- **TanStack Query** - Server State Management
- **date-fns** - Date Manipulation
- **Lucide React** - Icons

### Backend & Database
- **Supabase** - Authentication, PostgreSQL Database, Row Level Security
- **@supabase/ssr** - Server-Side Auth für Next.js

### UI Components
- **Radix UI** - Headless UI Primitives
- **react-day-picker** - Calendar Component
- **class-variance-authority** - Component Variants

### Development Tools
- **Turborepo** - Monorepo Build System
- **TypeScript** - Static Type Checking
- **ESLint** - Code Linting
- **Zod** - Runtime Validation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm
- Supabase Account (für Production)

### Installation

1. **Clone Repository**
```sh
git clone <repository-url>
cd sana-balance
```

2. **Install Dependencies**
```sh
npm install
```

3. **Setup Environment Variables**

Erstellen Sie `.env.local` in `apps/web/`:
```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

4. **Setup Supabase Database**

Führen Sie die SQL-Migrationen aus (siehe `packages/core/src/types/database.types.ts` für Schema):
- `profiles` - Benutzerprofile
- `services` - Massage-Services
- `availability_slots` - Verfügbare Zeitslots
- `appointments` - Gebuchte Termine

### Development

Starten Sie alle Apps im Development Mode:
```sh
npm run dev
```

Oder starten Sie spezifische Apps:
```sh
# Nur Web App
npm run dev --filter=web

# Nur Admin Panel
npm run dev --filter=admin
```

Die Apps laufen auf:
- **Web App**: http://localhost:3000
- **Admin Panel**: http://localhost:3001

### Build

Build aller Apps und Packages:
```sh
npm run build
```

Build spezifischer Apps:
```sh
npm run build --filter=web
```

## 🎨 Design System

### Sana Balance Theme

**Farben:**
- Cream: `#F5F1ED` - Haupthintergrund
- Beige: `#E8DDD3` - Sekundärer Hintergrund
- Brown: `#8B7355` - Text & Akzente
- Brown Dark: `#6B5744` - Überschriften
- Gold: `#C9A87C` - Call-to-Actions
- White: `#FFFFFF`
- Black: `#1A1A1A`

**Typografie:**
- Headings: Georgia (Serif)
- Body: Inter (Sans-serif)

**Border Radius:** 2rem (abgerundete Ecken)

**Shadows:** Weiche Schatten mit Brown-Tönen

## 📱 Features

### Client Web App (`apps/web`)

✅ **Homepage**
- Hero Section mit Massage-Hintergrundbild
- Features-Übersicht (3 Icons)
- Services-Karten mit Bildern
- Responsive Design

✅ **Booking Flow** (4 Schritte)
1. **Service auswählen** - ServiceCard mit Preis & Dauer
2. **Datum & Uhrzeit** - Calendar + Zeitslot-Auswahl
3. **Authentifizierung** - Login/Register (nur beim finalen Schritt)
4. **Bestätigung** - Zusammenfassung & Buchung

✅ **Internationalisierung**
- Primärsprache: Deutsch (DE)
- Bereit für: EN, IT, FR (einfach erweiterbar)

### Admin Panel (`apps/admin`)

🔒 **Auth-Protected** (Supabase `is_admin` Flag)

📊 **Features** (Grundstruktur vorhanden):
- Dashboard mit Termin-Übersicht
- Appointments Management (CRUD)
- Availability Slots Management
- Services Management (CRUD)
- User Profile Management

## 🗄️ Database Schema

### Tables

**profiles**
- `id` (uuid, FK zu auth.users)
- `first_name`, `last_name`
- `is_admin` (boolean)
- `created_at`, `updated_at`

**services**
- `id` (uuid)
- `name`, `description`
- `duration_minutes` (integer)
- `price` (decimal)
- `is_active` (boolean)
- `created_at`, `updated_at`

**availability_slots**
- `id` (uuid)
- `service_id` (uuid, FK)
- `date` (date)
- `start_time`, `end_time` (time)
- `is_booked` (boolean)
- `created_at`, `updated_at`

**appointments**
- `id` (uuid)
- `user_id` (uuid, FK)
- `service_id` (uuid, FK)
- `slot_id` (uuid, FK)
- `status` (enum: pending, confirmed, cancelled)
- `notes` (text)
- `created_at`, `updated_at`

### Row Level Security (RLS)

Alle Tabellen haben RLS aktiviert:
- Users können nur ihre eigenen Appointments sehen
- Admins haben vollen Zugriff
- Public kann Services und verfügbare Slots sehen

## 📂 Projekt-Struktur

```
sana-balance/
├── apps/
│   ├── web/              # Client Next.js App
│   │   ├── app/          # App Router Pages
│   │   ├── components/   # React Components
│   │   ├── hooks/        # Custom Hooks (TanStack Query)
│   │   ├── lib/          # Utilities, Supabase Clients
│   │   └── i18n/         # Übersetzungen (DE)
│   └── admin/            # Admin Panel
│       └── app/          # Admin Pages
├── packages/
│   ├── ui/               # Shared UI Components
│   │   └── src/
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       ├── card.tsx
│   │       ├── calendar.tsx
│   │       └── service-card.tsx
│   ├── core/             # Shared Logic
│   │   └── src/
│   │       ├── types/    # TypeScript Types
│   │       ├── schemas/  # Zod Schemas
│   │       ├── lib/      # Supabase Config
│   │       └── utils/    # Helper Functions
│   ├── eslint-config/    # ESLint Configs
│   └── typescript-config/# TS Configs
└── turbo.json            # Turborepo Config
```

## 🔐 Security

- **Supabase Auth** - Email/Password Authentication
- **Row Level Security** - Database-Level Access Control
- **Admin Protection** - `is_admin` Flag in User Profile
- **Environment Variables** - Sensitive Data in `.env.local`

## 🚀 Deployment

### Vercel (Empfohlen)

1. Verbinden Sie Ihr Git Repository mit Vercel
2. Konfigurieren Sie Build Settings:
   - **Root Directory**: `apps/web` (für Web App)
   - **Build Command**: `cd ../.. && npm run build --filter=web`
   - **Output Directory**: `.next`
3. Fügen Sie Environment Variables hinzu
4. Deploy!

### Supabase Setup

1. Erstellen Sie ein Supabase Projekt
2. Führen Sie SQL Migrationen aus
3. Aktivieren Sie Row Level Security
4. Kopieren Sie URL und Anon Key zu `.env.local`

## 📝 Next Steps

- [ ] Supabase Database Setup & Migrationen
- [ ] Admin Panel UI implementieren
- [ ] Email-Benachrichtigungen (Termin-Bestätigungen)
- [ ] Kalender-Integration (Google Calendar, iCal)
- [ ] Payment Integration (Stripe)
- [ ] Mehrsprachigkeit (EN, IT, FR)
- [ ] SEO Optimierung
- [ ] Analytics Integration

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.dev/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.dev/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.dev/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.dev/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.dev/docs/reference/configuration)
- [CLI Usage](https://turborepo.dev/docs/reference/command-line-reference)
