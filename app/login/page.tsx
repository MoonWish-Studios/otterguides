"use client"
import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import Auth from "../components/Auth"
import { useAuth, VIEWS } from "../components/AuthProvider"

export default function Login2() {
  const { initial, user, view, signOut } = useAuth()
  const router = useRouter()

  if (initial) {
    return <div className="card h-72">Loading...</div>
  }

  if (view === VIEWS.UPDATE_PASSWORD) {
    return <Auth view={view} />
  }

  if (user) {
    router.push("/dashboard")
    // return (
    //   <div className="card">
    //     <h2>Welcome!</h2>
    //     <code className="highlight">{user.role}</code>
    //     <Link className="button" href="/profile">
    //       Go to Profile
    //     </Link>
    //     <button type="button" className="button-inverse" onClick={signOut}>
    //       Sign Out
    //     </button>
    //   </div>
    // )
  }

  return <Auth view={view} />
}
