import { User, UserValidationResult } from "@/lib/authTypes"
import clientPromise from "@/lib/mongodb"
import bcrypt from "bcrypt"
import { Collection, MongoClient } from "mongodb"

import { NextResponse } from "next/server"

export default async function trySignUp(user: User) {
  const client = await clientPromise
  const users = client.db(process.env.DB_NAME).collection("users")

  const validationResult = await validateUser(users, user)

  console.log(validationResult)

  //   const password = bcrypt.hashSync(user.password, 10)
  //   await users.insertOne({
  //     email: user.email,
  //     password: password,
  //     role: "user",
  //   })

  return NextResponse.json({ success: validationResult.success })
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
