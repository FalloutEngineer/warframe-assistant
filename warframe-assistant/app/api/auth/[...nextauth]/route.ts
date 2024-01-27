import { nextauthOptions } from "@/lib/nextauthoptions"
import NextAuth from "next-auth"

export const handler = NextAuth(nextauthOptions)

export { handler as GET, handler as POST }
