
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gqahpymiieykjavqtekr.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const supabaseConfig = { supabase, supabaseUrl, supabaseKey }

export default supabaseConfig
