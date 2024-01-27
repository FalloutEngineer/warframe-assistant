import RightBody from "./RightBody"

import { nextauthOptions } from "@/lib/nextauthoptions"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"

export default async function Home() {
  const session = await getServerSession(nextauthOptions)

  if (!session?.user) {
    const url = new URL("/api/auth/signin", process.env.BASE_URL)
    url.searchParams.append("callbackUrl", "/")
    redirect(url.toString())
  }

  return <main className="bg-color-black">Main page</main>
}
