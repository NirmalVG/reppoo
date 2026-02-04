"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function AdminLogin() {
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    if (password === "admin123") {
      document.cookie = "isLoggedIn=true; path=/"
      router.push("/dashboard")
    } else {
      alert("Invalid Credentials. Please use 'admin123'")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4F5F6] px-4">
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 w-full max-w-md">
        <h1 className="text-2xl font-bold text-[#23262F] mb-6 text-center">
          Admin Access
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="w-full cursor-pointer h-14 bg-blue-500 hover:bg-blue-600 rounded-xl font-bold">
            Login
          </Button>
        </form>
      </div>
    </div>
  )
}
