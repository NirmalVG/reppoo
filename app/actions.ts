"use server"
import clientPromise from "@/lib/mongodb"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function updateAboutContent(aboutData: {
  heading: string
  description: string
}) {
  try {
    const client = await clientPromise
    const db = client.db("reppoo")

    await db.collection("content").updateOne(
      { id: "landing-page" },
      {
        $set: {
          about: aboutData,
        },
      },
      { upsert: true },
    )

    revalidatePath("/")
    return { success: true }
  } catch (error) {
    console.error("Database Error:", error)
    return { success: false }
  }
}

export async function updateTestimonials(data: any[]) {
  try {
    const client = await clientPromise
    const db = client.db("reppoo")
    await db
      .collection("content")
      .updateOne(
        { id: "landing-page" },
        { $set: { testimonials: data } },
        { upsert: true },
      )
    revalidatePath("/")
    return { success: true }
  } catch (error) {
    return { success: false }
  }
}

export async function logoutAction() {
  const cookieStore = await cookies()
  cookieStore.delete("isLoggedIn")
  redirect("/")
}
