import clientPromise from "@/lib/mongodb"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"

export default async function GET() {
  const client = await clientPromise
  const users = client.db(process.env.DB_NAME).collection("users")

  const password = bcrypt.hashSync("password", 10)
  await users.insertOne({
    email: "admin@example.com",
    password: password,
    role: "admin",
  })

  return JSON.stringify(NextResponse.json({ success: true }))
}
