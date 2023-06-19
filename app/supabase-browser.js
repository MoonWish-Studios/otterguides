import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs"
// NOTE: `createBrowserSupabaseClient` has been renamed to `createPagesBrowserClient` in version `0.7.0`

const supabase = createPagesBrowserClient()

export default supabase
