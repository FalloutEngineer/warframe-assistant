import { User, UserValidationResult } from "@/lib/authTypes"
import clientPromise from "@/lib/mongodb"
import { NextResponse } from "next/server"

export const POST = async (request: any) => {
  const client = await clientPromise
  const users = client.db(process.env.DB_NAME).collection("users")

  const { email, password } = await request.json()

  const validationResult = await validateUser(users, {
    email: email,
    password: password,
  })

  try {
    return NextResponse.json({
      status: 200,
      validation: validationResult,
    })
  } catch (err: any) {
    return NextResponse.json({
      status: 500,
      validation: validationResult,
    })
  }
}

async function validateUser(users: any, user: User) {
  const found = await users.findOne({ email: user.email })

  const result: UserValidationResult = {
    success: false,
    emailOK: false,
    passwordOK: false,
    message: "credentials_error",
  }

  const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

  const passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g

  if (found) {
    result.message = "account_exists"
  } else {
    if (user.email.match(emailRegexp)) {
      result.emailOK = true
    }
    if (user.password.match(passwordRegexp)) {
      result.passwordOK = true
    }

    if (result.emailOK && result.passwordOK) {
      result.success = true
      result.message = "success"
    }
  }

  return result
}
