"use client"
import { usePageStore } from "@/store/usePageStore"
import { Button } from "@/components/ui/button"
import { Trash2, Plus, Save, Loader2 } from "lucide-react"
import { updateTestimonials } from "@/app/actions"
import { useState } from "react"

export const TestimonialEditor = () => {
  const { testimonials, setTestimonials } = usePageStore() as any
  const [isSaving, setIsSaving] = useState(false)

  const safeTestimonials = testimonials || []

  const updateTestimonial = (index: number, field: string, value: string) => {
    const updated = [...safeTestimonials]
    updated[index] = { ...updated[index], [field]: value }
    setTestimonials(updated)
  }

  const addTestimonial = () => {
    setTestimonials([
      ...safeTestimonials,
      {
        id: Date.now().toString(),
        author: "",
        subtitle: "",
        quote: "",
        avatarColor: "#3B82F6",
      },
    ])
  }

  const removeTestimonial = (index: number) => {
    const updated = safeTestimonials.filter((_: any, i: number) => i !== index)
    setTestimonials(updated)
  }

  const handleSave = async () => {
    setIsSaving(true)
    const result = await updateTestimonials(safeTestimonials)
    setIsSaving(false)
    if (result.success) alert("Testimonials synced to MongoDB!")
    else alert("Failed to save testimonials.")
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-xl font-bold text-[#23262F]">
            Manage Testimonials
          </h3>
          <p className="text-sm text-gray-500">
            Add or edit user reviews for the landing page.
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            onClick={addTestimonial}
            variant="outline"
            className="rounded-xl gap-2 cursor-pointer border-gray-200"
          >
            <Plus size={18} /> Add New
          </Button>
          <Button
            onClick={handleSave}
            disabled={isSaving}
            className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white rounded-xl gap-2 min-w-[120px]"
          >
            {isSaving ? (
              <Loader2 className="animate-spin" size={18} />
            ) : (
              <Save size={18} />
            )}
            Save All
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        {safeTestimonials.length > 0 ? (
          safeTestimonials.map((item: any, index: number) => (
            <div
              key={item.id || index}
              className="p-6 border border-gray-100 rounded-3xl bg-[#FBFBFB] relative group transition-all hover:border-blue-100 shadow-sm"
            >
              <button
                onClick={() => removeTestimonial(index)}
                className="absolute -top-2 -right-2 p-2 cursor-pointer bg-white text-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity border border-red-100 shadow-sm hover:bg-red-50"
              >
                <Trash2 size={16} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    Author Name
                  </label>
                  <input
                    value={item.author}
                    onChange={(e) =>
                      updateTestimonial(index, "author", e.target.value)
                    }
                    className="w-full p-3 rounded-xl border border-gray-100 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                    placeholder="e.g. Edgar Thompson"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    Role / Company
                  </label>
                  <input
                    value={item.subtitle}
                    onChange={(e) =>
                      updateTestimonial(index, "subtitle", e.target.value)
                    }
                    className="w-full p-3 rounded-xl border border-gray-100 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                    placeholder="e.g. Health Enthusiast"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Testimonial Quote
                </label>
                <textarea
                  value={item.quote}
                  onChange={(e) =>
                    updateTestimonial(index, "quote", e.target.value)
                  }
                  className="w-full p-3 rounded-xl border border-gray-100 h-24 focus:ring-2 focus:ring-blue-500 outline-none resize-none text-sm leading-relaxed"
                  placeholder="What did the user say?"
                />
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-16 border-2 border-dashed border-gray-100 rounded-3xl text-gray-400">
            No testimonials added yet. Click "Add New" to get started.
          </div>
        )}
      </div>
    </div>
  )
}
