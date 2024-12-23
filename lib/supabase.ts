import { createClient } from '@supabase/supabase-js'

// Add console.log to debug environment variables
console.log('SUPABASE URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log('SUPABASE KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.slice(0, 10) + '...');

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL');
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY');
}

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);