-- Waitlist signups
CREATE TABLE waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  newsletter_name text NOT NULL,
  subscriber_range text NOT NULL,
  newsletter_link text,
  created_at timestamptz DEFAULT now()
);

-- Contact form submissions
CREATE TABLE contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  topic text NOT NULL,
  link text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Newsletter subscribers (blog)
CREATE TABLE newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  blog_link text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (the anon key can insert but not read)
CREATE POLICY "Allow anonymous insert" ON waitlist
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow anonymous insert" ON contacts
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow anonymous insert" ON newsletter_subscribers
  FOR INSERT TO anon WITH CHECK (true);
