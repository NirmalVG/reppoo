"use client"
import { Menu, X, LayoutDashboard } from "lucide-react"
import { useState } from "react"

const sections = ["Hero", "About", "Testimonials", "FAQ"]

export const AdminSidebar = ({ active, setActive }: any) => {
  const [isOpen, setIsOpen] = useState(false)

  const NavContent = () => (
    <>
      <div className="flex items-center gap-2 mb-8 px-2">
        <div className="bg-blue-600 p-2 rounded-lg text-white">
          <LayoutDashboard size={20} />
        </div>
        <h2 className="text-xl font-bold text-[#23262F]">Admin</h2>
      </div>

      <nav className="flex flex-col gap-2">
        {sections.map((s) => (
          <button
            key={s}
            onClick={() => {
              setActive(s)
              setIsOpen(false)
            }}
            className={`text-left p-3 rounded-xl cursor-pointer transition-all ${
              active === s
                ? "bg-blue-50 text-blue-600 font-bold shadow-sm"
                : "text-gray-500 hover:bg-gray-50 hover:translate-x-1"
            }`}
          >
            {s} Section
          </button>
        ))}
      </nav>
    </>
  )

  return (
    <>
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-white border border-gray-100 rounded-2xl shadow-lg text-gray-600"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      <aside
        className={`
        fixed lg:static inset-y-0 left-0 z-40
        w-64 bg-white border-r border-gray-100 p-6 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <NavContent />
      </aside>
    </>
  )
}
