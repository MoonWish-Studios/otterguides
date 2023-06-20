import Link from "next/link"
import { redirect } from "next/navigation"
import createClient from "../supabase-server"
import SignOut from "../components/SignOut"
import { useAuth } from "../components/AuthProvider"
import Auth from "../components/Auth"
import Onboard from "../components/Onboard"

export default async function Page() {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login")
  }

  return (
    <div className="">
      <Onboard user={user} />
    </div>
  )
}
