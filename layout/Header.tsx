import Link from "next/link"
import Image from "next/image"
import { cookies } from "next/headers"
import { Button } from "../components/ui/button"
import { logoutAction } from "@/app/actions"

export default async function Header() {
  let isLoggedIn = false
  try {
    const cookieStore = await cookies()
    isLoggedIn = cookieStore.get("isLoggedIn")?.value === "true"
  } catch (e) {
    isLoggedIn = false
  }

  return (
    <header className="sticky top-0 z-50 w-full py-4 px-6 md:px-20 flex justify-between items-center bg-[#F9F9F9]/80 backdrop-blur-md border-b border-gray-50  z-50">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/images/logo.webp" alt="Logo" width={32} height={32} />
        <span className="font-bold text-xl">Reppoo</span>
      </Link>

      <div className="flex items-center gap-6">
        {isLoggedIn ? (
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-100">
                <Image
                  src="/images/user.png"
                  alt="Admin"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-bold text-[#23262F] leading-tight">
                  Edgar Thompson
                </p>
                <p className="text-xs text-[#777E90]">edgarthomp@gmail.com</p>
              </div>
            </Link>

            <form action={logoutAction}>
              <Button
                variant="outline"
                className="rounded-full border-blue-500 cursor-pointer text-blue-500 hover:bg-blue-50 px-6 h-10 transition-all"
              >
                Logout
              </Button>
            </form>
          </div>
        ) : (
          <Link href="/login">
            <Button
              className="text-[#0C0C13] text-[14px] md:text-[18px] font-bold bg-white rounded-full 
                     hover:bg-gray-100 border-none cursor-pointer 
                     px-4 py-2 md:px-6 md:py-3 h-auto"
            >
              Admin login
            </Button>
          </Link>
        )}
      </div>
    </header>
  )
}
