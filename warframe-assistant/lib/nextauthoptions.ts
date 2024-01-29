import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import clientPromise from "./mongodb"
import { AuthOptions } from "next-auth"

export const nextauthOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      credentials: {
        email: {
          label: "E-mail",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        const client = await clientPromise
        const usersCollection = client
          .db(process.env.DB_NAME)
          .collection("users")
        const email = credentials?.email.toLowerCase()
        const user = await usersCollection.findOne({ email })
        if (!user) {
          throw new Error("Invalid credentials")
        }

        const isPasswordValid = await bcrypt.compare(
          credentials?.password!,
          user.password
        )

        if (!isPasswordValid) {
          throw new Error("Invalid credentials")
        }

        return {
          id: user._id.toString(),
          ...user,
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/signin",
    signOut: "/auth/signin",
    // error: "/auth/error", // Error code passed in query string as ?error=
    // verifyRequest: "/auth/verify-request", // (used for check email message)
  },
  session: {
    strategy: "jwt",
  },
}
