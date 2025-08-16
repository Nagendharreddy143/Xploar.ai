# Supabase Integration Setup Guide

This guide will help you set up Supabase for the Xploar.ai project to handle waitlist signups and contact form submissions.

## Prerequisites

1. A Supabase account (sign up at [supabase.com](https://supabase.com))
2. Node.js and npm installed on your machine

## Step 1: Install Supabase Client

```bash
npm install @supabase/supabase-js
```

## Step 2: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - **Name**: `xploar-ai` (or your preferred name)
   - **Database Password**: Choose a strong password
   - **Region**: Select the region closest to your users
5. Click "Create new project"
6. Wait for the project to be set up (this may take a few minutes)

## Step 3: Get Your Project Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (looks like: `https://your-project-id.supabase.co`)
   - **anon public** key (starts with `eyJ...`)

## Step 4: Set Up Environment Variables

1. Create a `.env` file in your project root (if it doesn't exist)
2. Add the following variables:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

**Important**: Replace the placeholder values with your actual Supabase project URL and anon key.

## Step 5: Set Up Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New query"
3. Copy and paste the contents of `supabase-schema.sql` from this project
4. Click "Run" to execute the SQL

This will create:
- `waitlist` table for storing waitlist signups
- `contact_submissions` table for storing contact form submissions
- Proper indexes for performance
- Row Level Security (RLS) policies
- Summary views for analytics

## Step 6: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Test the waitlist modal:
   - Open your website
   - Click on any "Join Waitlist" button
   - Fill in the name and email
   - Submit the form
   - Check your Supabase dashboard → **Table Editor** → **waitlist** to see the entry

3. Test the contact form:
   - Go to the contact page
   - Fill in the contact form
   - Submit the form
   - Check your Supabase dashboard → **Table Editor** → **contact_submissions** to see the entry

## Step 7: Verify RLS Policies

The schema includes Row Level Security policies that:
- Allow anyone to insert data (for public forms)
- Only allow authenticated users to view data (for admin access)

### RLS Policy Details

**Waitlist Table:**
- ✅ Public INSERT (anyone can sign up)
- 🔒 Authenticated SELECT only (only logged-in users can view data)

**Contact Submissions Table:**
- ✅ Public INSERT (anyone can submit contact form)
- 🔒 Authenticated SELECT only (only logged-in users can view data)

### Accessing Data

**Option 1: Supabase Dashboard (Recommended)**
1. Go to **Authentication** → **Users**
2. Create a user account or enable email signup
3. Sign in to access the data in **Table Editor**


## Database Schema Details

### Waitlist Table
```sql
CREATE TABLE waitlist (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Contact Submissions Table
```sql
CREATE TABLE contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Features Implemented

### Waitlist Modal
- ✅ Name and email input fields
- ✅ Form validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Duplicate email prevention
- ✅ Supabase integration
- ✅ RLS-compliant data storage

### Contact Form
- ✅ Name, email, and message fields
- ✅ Form validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Supabase integration
- ✅ RLS-compliant data storage

### Admin Dashboard
- ✅ Google OAuth authentication
- ✅ Secure data viewing (RLS-protected)
- ✅ Real-time statistics
- ✅ Waitlist and contact submissions tables
- ✅ Summary analytics
- ✅ Responsive design

## Troubleshooting

### Common Issues

1. **"Invalid API key" error**
   - Double-check your environment variables
   - Ensure the anon key is correct
   - Make sure the `.env` file is in the project root

2. **"Table doesn't exist" error**
   - Run the SQL schema in Supabase SQL Editor
   - Check that the table names match exactly

3. **"RLS policy violation" error**
   - The RLS policies are set up correctly in the schema
   - Public inserts should work without authentication

4. **Environment variables not loading**
   - Restart your development server after adding `.env` file
   - Ensure variable names start with `VITE_`

### Getting Help

- Check the [Supabase documentation](https://supabase.com/docs)
- Review the browser console for detailed error messages
- Verify your Supabase project settings

## Next Steps

1. **Email Notifications**: Set up email notifications for new submissions
2. **Google OAuth Setup**: Configure Google OAuth in Supabase for admin access
3. **Analytics**: Use the summary views for analytics
4. **Backup**: Set up regular database backups in Supabase
5. **Export Features**: Add CSV export functionality to admin dashboard

## Security Notes

- The anon key is safe to use in client-side code
- RLS policies ensure data security
- Email addresses are stored with unique constraints
- All user inputs are properly validated
