# GoGet — Landing Page

Pre-launch waitlist landing page for GoGet, a crypto-to-naira conversion app built for Nigerians. Built with Next.js 14, Tailwind CSS, Supabase, and Resend.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS v3 + Framer Motion |
| Database | Supabase (PostgreSQL) |
| Email | Resend |
| Deployment | Vercel |

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── waitlist/          # POST — add email to waitlist
│   │   └── waitlist-count/    # GET — fetch current signup count
│   ├── privacy/               # Privacy policy page
│   ├── terms/                 # Terms of service page
│   ├── layout.tsx
│   ├── page.tsx               # Home page
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx           # Headline + email form + phone mockup
│   │   ├── TrustStrip.tsx     # Social proof bar
│   │   ├── HowItWorks.tsx     # 3-step explainer
│   │   ├── Features.tsx       # Feature grid
│   │   └── WaitlistCTA.tsx    # Bottom CTA with waitlist count
│   └── ui/
│       ├── EmailForm.tsx      # Waitlist signup form
│       ├── PhoneMockup.tsx    # Animated phone illustration
│       ├── CounterAnimation.tsx
│       └── Toast.tsx
└── lib/
    ├── supabase.ts            # Supabase client (browser + server)
    └── resend.ts              # Confirmation email helper
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the root of this directory:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Resend (for confirmation emails)
RESEND_API_KEY=re_your_api_key

# Site URL (used for internal API calls during SSR)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> **Never commit `.env.local`** — it is already in `.gitignore`.

### 3. Set up the database

Run the SQL in `supabase-setup.sql` in your Supabase project's SQL editor. This creates the `waitlist` table, indexes, and Row Level Security policies.

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes | Supabase anon key (public, read-only) |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes | Supabase service role key — **server-side only**, never expose to the client |
| `RESEND_API_KEY` | Yes | Resend API key for sending confirmation emails |
| `NEXT_PUBLIC_SITE_URL` | Yes | Full URL of the site (e.g. `https://goget.app`) |

## Waitlist API

### `POST /api/waitlist`

Adds an email to the waitlist and sends a confirmation email via Resend.

**Request body:**
```json
{
  "email": "user@example.com",
  "referral_source": "twitter"
}
```

**Responses:**
- `201` — Added successfully
- `200` — Already on the waitlist
- `400` — Invalid or missing email
- `503` — Supabase not configured

### `GET /api/waitlist-count`

Returns the current number of waitlist signups. Cached with a 60-second revalidation window.

**Response:**
```json
{ "count": 1234 }
```

## Deployment

The project is configured for Vercel via `vercel.json`. Push to your connected GitHub repo and Vercel will build and deploy automatically.

Set all environment variables in the Vercel project dashboard under **Settings → Environment Variables**. Make sure `SUPABASE_SERVICE_ROLE_KEY` is set to **Server** scope only.

## Database Schema

```sql
CREATE TABLE waitlist (
  id           UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  email        TEXT        NOT NULL UNIQUE,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  referral_source TEXT
);
```

Row Level Security is enabled. Only the service role key (used in API routes) has write access — the anon key has no direct table access.
