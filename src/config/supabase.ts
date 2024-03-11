
import { createClient } from '@supabase/supabase-js'
import { Environment } from './environment'

const supabaseUrl = Environment.SUPABASE_URL
const supabaseServiceKey = Environment.SUPABASE_SERVICE_KEY
export const supabase = createClient(supabaseUrl, supabaseServiceKey)