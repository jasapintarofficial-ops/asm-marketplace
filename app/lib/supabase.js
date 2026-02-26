import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qxvawdvddqogwntfpmtq.supabase.co'
const supabaseKey = 'sb_publishable_vpKZ-o_POYCsPxk398F6jg_AJaOgsFU'

export const supabase = createClient(supabaseUrl, supabaseKey)
