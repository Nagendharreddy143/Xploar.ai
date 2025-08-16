-- Supabase Database Schema for Xploar.ai
-- Run this in your Supabase SQL editor

-- Enable Row Level Security (RLS)
ALTER TABLE IF EXISTS waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_waitlist_updated_at 
    BEFORE UPDATE ON waitlist 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_contact_submissions_updated_at 
    BEFORE UPDATE ON contact_submissions 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- RLS Policies for waitlist table
-- Allow anyone to insert (for signups)
CREATE POLICY "Allow public insert on waitlist" ON waitlist
    FOR INSERT WITH CHECK (true);

-- Only allow authenticated users to view waitlist data
CREATE POLICY "Allow authenticated users to view waitlist" ON waitlist
    FOR SELECT USING (auth.role() = 'authenticated');

-- RLS Policies for contact_submissions table
-- Allow anyone to insert (for contact form submissions)
CREATE POLICY "Allow public insert on contact_submissions" ON contact_submissions
    FOR INSERT WITH CHECK (true);

-- Only allow authenticated users to view contact submissions
CREATE POLICY "Allow authenticated users to view contact_submissions" ON contact_submissions
    FOR SELECT USING (auth.role() = 'authenticated');

-- Optional: Create a view for admin dashboard
CREATE OR REPLACE VIEW waitlist_summary AS
SELECT 
    COUNT(*) as total_signups,
    COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days') as signups_last_7_days,
    COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '30 days') as signups_last_30_days,
    MIN(created_at) as first_signup,
    MAX(created_at) as latest_signup
FROM waitlist;

CREATE OR REPLACE VIEW contact_submissions_summary AS
SELECT 
    COUNT(*) as total_submissions,
    COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days') as submissions_last_7_days,
    COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '30 days') as submissions_last_30_days,
    MIN(created_at) as first_submission,
    MAX(created_at) as latest_submission
FROM contact_submissions;
