import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("reppoo")
    const data = await db.collection("content").findOne({ id: "landing-page" })
    return NextResponse.json(data || {})
  } catch (e) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const client = await clientPromise
    const db = client.db("reppoo")

    await db
      .collection("content")
      .updateOne({ id: "landing-page" }, { $set: body }, { upsert: true })

    return NextResponse.json({ success: true })
  } catch (e) {
    return NextResponse.json({ error: "Failed to save" }, { status: 500 })
  }
}
