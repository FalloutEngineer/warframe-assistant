import connectMongoDB from "@/lib/connectMongodb"
import clientPromise from "@/lib/mongodb"
import ResourceGroup from "@/models/resource-group"
import { NextRequest, NextResponse } from "next/server"

import { decode } from "next-auth/jwt"

const cookie = require("cookie-parse")

//TODO: Protect POST and GET by user session

export const POST = async (request: any) => {
  const { order, title, items } = await request.json()

  const token = request.cookies.get("next-auth.session-token").value

  if (process.env.NEXTAUTH_SECRET && token && token !== "") {
    const decoded = await decode({
      token: token,
      secret: process.env.NEXTAUTH_SECRET,
    })

    const owner = decoded?.email

    await connectMongoDB()

    await ResourceGroup.create({ owner, order, title, items })

    return NextResponse.json(
      { message: "Resource Group created" },
      { status: 201 }
    )
  } else {
    return NextResponse.json({ code: 500 })
  }
}

export async function GET(request: any) {
  const cookies = request.headers.get("cookie")

  const token = cookie.parse(cookies)["next-auth.session-token"]

  if (process.env.NEXTAUTH_SECRET && token && token !== "") {
    const decoded = await decode({
      token: token,
      secret: process.env.NEXTAUTH_SECRET,
    })

    const owner = decoded?.email

    await connectMongoDB()
    const groups = await ResourceGroup.find({ owner: owner }).exec()

    return NextResponse.json({ groups })
  } else {
    return NextResponse.json({ code: 500 })
  }
}
