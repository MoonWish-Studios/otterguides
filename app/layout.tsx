import "./styles/globals.css"
import { Readex_Pro, Pacifico } from "next/font/google"
import { AuthProvider } from "./components/AuthProvider"
import createClient from "./supabase-server"
import Navbar from "./components/Navbar"
const readex_pro = Readex_Pro({ subsets: ["latin"] })

export const revalidate = 0

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  const accessToken = session?.access_token || null

  return (
    <html lang="en">
      <title>Otter Guides</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Travel with Otter Guides" />
      <meta property="og:image" content="/otterlanding.png" />
      <link rel="icon" href="/otterguideslogo.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${readex_pro.className}`}>
        {/* <Navbar /> */}
        <AuthProvider accessToken={accessToken}>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
