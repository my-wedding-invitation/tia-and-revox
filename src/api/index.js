import { createClient } from '@supabase/supabase-js'
import initGuestApi from '@/api/guest'
import initCommentApi from '@/api/comment'
import initReservationApi from '@/api/reservation'

const supabaseUrl = 'https://icdvfhfmatsfosqmbtyd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljZHZmaGZtYXRzZm9zcW1idHlkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NjE5MDcyNiwiZXhwIjoyMDAxNzY2NzI2fQ.m5n26mnfYgGIw7r5xyt_g7o-2-3b9wXDfhlqbnPgLFw'
const supabaseApi = createClient(supabaseUrl, supabaseKey)

export const guest = initGuestApi(supabaseApi)
export const comment = initCommentApi(supabaseApi)
export const reservation = initReservationApi(supabaseApi)
