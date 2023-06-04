import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
// NOTE: `createServerComponentSupabaseClient` has been renamed to `createServerComponentClient` in version `0.7.0`
import { cookies, headers } from "next/headers"

export default () =>
  createServerComponentClient({
    headers,
    cookies,
  })
