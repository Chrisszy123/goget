-- GoGet Waitlist Table
-- Run this in your Supabase SQL editor

CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  referral_source TEXT
);

-- Index for faster email lookups
CREATE INDEX IF NOT EXISTS waitlist_email_idx ON waitlist (email);

-- Index for counting / ordering
CREATE INDEX IF NOT EXISTS waitlist_created_at_idx ON waitlist (created_at DESC);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow service role full access (used by API routes via SUPABASE_SERVICE_ROLE_KEY)
-- The anon role has no access — all writes go through authenticated API routes only
CREATE POLICY "Service role full access" ON waitlist
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
