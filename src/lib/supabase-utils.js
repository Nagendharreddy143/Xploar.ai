import { supabase } from './supabase'

// Utility function to handle Supabase errors
export const handleSupabaseError = (error) => {
  console.error('Supabase error:', error)

  if (error.code === '23505') {
    return 'This email is already registered.'
  }

  if (error.code === '42P01') {
    return 'Database table not found. Please check your setup.'
  }

  if (error.code === '42501') {
    return 'Access denied. Please check your permissions.'
  }

  // RLS-specific error handling
  if (error.code === 'PGRST301') {
    return 'Access denied by Row Level Security policy.'
  }

  if (error.message && error.message.includes('RLS')) {
    return 'Access denied. Please check your authentication status.'
  }

  return 'Something went wrong. Please try again.'
}

// Utility function to validate email
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Utility function to validate required fields
export const validateRequiredFields = (fields) => {
  const errors = []

  Object.entries(fields).forEach(([field, value]) => {
    if (!value || !value.trim()) {
      errors.push(`${field.charAt(0).toUpperCase() + field.slice(1)} is required.`)
    }
  })

  return errors
}

// Utility function to sanitize input
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input
  return input.trim().replace(/[<>]/g, '')
}

// Test connection to Supabase (works with RLS)
export const testSupabaseConnection = async () => {
  try {
    // Try to insert a test record (this should work with RLS)
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        {
          name: 'TEST_CONNECTION',
          email: 'test@connection.com',
          created_at: new Date().toISOString()
        }
      ])
      .select()

    if (error) {
      // If it's a duplicate email error, that means connection works
      if (error.code === '23505') {
        console.log('Supabase connection successful (duplicate email expected)')
        return true
      }
      console.error('Supabase connection test failed:', error)
      return false
    }

    console.log('Supabase connection successful')
    return true
  } catch (error) {
    console.error('Supabase connection test failed:', error)
    return false
  }
}

// Function to check if user is authenticated (for admin features)
export const checkAuthStatus = async () => {
  try {
    const { data: { user }, error } = await supabase.auth.getUser()

    if (error) {
      console.error('Auth check failed:', error)
      return { isAuthenticated: false, user: null }
    }

    return { isAuthenticated: !!user, user }
  } catch (error) {
    console.error('Auth check failed:', error)
    return { isAuthenticated: false, user: null }
  }
}

// Function to get waitlist data (requires authentication due to RLS)
export const getWaitlistData = async () => {
  try {
    const { data, error } = await supabase
      .from('waitlist')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Failed to fetch waitlist data:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Error fetching waitlist data:', error)
    throw error
  }
}

// Function to get contact submissions (requires authentication due to RLS)
export const getContactSubmissions = async () => {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Failed to fetch contact submissions:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Error fetching contact submissions:', error)
    throw error
  }
}

// Function to get summary statistics (requires authentication due to RLS)
export const getSummaryStats = async () => {
  try {
    const [waitlistSummary, contactSummary] = await Promise.all([
      supabase.from('waitlist_summary').select('*'),
      supabase.from('contact_submissions_summary').select('*')
    ])

    if (waitlistSummary.error) {
      console.error('Failed to fetch waitlist summary:', waitlistSummary.error)
    }

    if (contactSummary.error) {
      console.error('Failed to fetch contact summary:', contactSummary.error)
    }

    return {
      waitlist: waitlistSummary.data?.[0] || null,
      contact: contactSummary.data?.[0] || null
    }
  } catch (error) {
    console.error('Error fetching summary stats:', error)
    return { waitlist: null, contact: null }
  }
}
