import Link from "next/link"
import { redirect } from "next/navigation"
import createClient from "../supabase-server"
import SignOut from "../components/SignOut"
import { useAuth } from "../components/AuthProvider"
import Auth from "../components/Auth"
import { Dashboard2 } from "../components/Dashboard2"

import { useEffect } from "react"

export default async function Page() {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login2")
  }
  const { data: userInfo } = await supabase
    .from("users")
    .select("*")
    .eq("user_id", user.id)

  return (
    <div className="">
      <Dashboard2 user={user} />
    </div>
  )
}
