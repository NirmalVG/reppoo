"use client"
import { useState } from "react"
import { AdminSidebar } from "@/components/AdminSidebar"
import { HeroEditor } from "@/components/admin/HeroEditor"
import { AboutEditor } from "@/components/admin/AboutEditor"
import { TestimonialEditor } from "@/components/admin/TestimonialEditor"
import { FAQEditor } from "@/components/admin/FAQEditor"

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("Hero")

  const renderEditor = () => {
    switch (activeSection) {
      case "Hero":
        return <HeroEditor />
      case "About":
        return <AboutEditor />
      case "Testimonials":
        return <TestimonialEditor />
      case "FAQ":
        return <FAQEditor />
      default:
        return <HeroEditor />
    }
  }

  return (
    <div className="flex min-h-screen bg-[#F9F9F9]">
      <AdminSidebar active={activeSection} setActive={setActiveSection} />

      <main className="flex-1 p-8 md:p-12">
        <div className="max-w-4xl mx-auto">
          <header className="mb-10">
            <h1 className="text-3xl font-bold text-[#0C0C13]">
              Edit {activeSection} Section
            </h1>
            <p className="text-gray-500">
              Update your landing page content in real-time.
            </p>
          </header>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            {renderEditor()}
          </div>
        </div>
      </main>
    </div>
  )
}
