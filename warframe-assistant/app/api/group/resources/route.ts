import connectMongoDB from "@/lib/connectMongodb"
import clientPromise from "@/lib/mongodb"
import ResourceGroup from "@/models/resource-group"
import { NextRequest, NextResponse } from "next/server"

import { decode } from "next-auth/jwt"

//TODO: Protect POST and GET by user session

export const POST = async (request: any) => {
  const { owner, order, title, items } = await request.json()

  await connectMongoDB()

  await ResourceGroup.create({ owner, order, title, items })

  return NextResponse.json(
    { message: "Resource Group created" },
    { status: 201 }
  )
}

export async function GET(request: any) {
  // const { owner } = await request.json()
  // console.log(owner)

  const link = new URL(request.url)

  let token = request.headers.get("cookie").split("=")[1]

  if (process.env.NEXTAUTH_SECRET) {
    const decoded = await decode({
      token: token,
      secret: process.env.NEXTAUTH_SECRET,
    })

    console.log(decoded)
  } else {
    return NextResponse.json({ code: 500 })
  }

  const owner = "vladvoychenko@gmail.com"

  await connectMongoDB()
  const groups = await ResourceGroup.find({ owner: owner }).exec()

  return NextResponse.json({ groups })
}
