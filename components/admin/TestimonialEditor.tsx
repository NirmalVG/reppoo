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
    <div className="space-y-6 animate-in fade-in duration-500 pb-20 lg:pb-0">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h3 className="text-xl font-bold text-[#23262F]">
            Manage Testimonials
          </h3>
          <p className="text-sm text-gray-500">
            Add or edit user reviews for the landing page.
          </p>
        </div>

        <div className="flex w-full sm:w-auto gap-3">
          <Button
            onClick={addTestimonial}
            variant="outline"
            className="flex-1 sm:flex-none rounded-xl gap-2 cursor-pointer border-gray-200 h-11"
          >
            <Plus size={18} /> <span className="hidden xs:inline">Add New</span>
            <span className="xs:hidden">Add</span>
          </Button>
          <Button
            onClick={handleSave}
            disabled={isSaving}
            className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-700 cursor-pointer text-white rounded-xl gap-2 min-w-[120px] h-11"
          >
            {isSaving ? (
              <Loader2 className="animate-spin" size={18} />
            ) : (
              <Save size={18} />
            )}
            {isSaving ? "Saving..." : "Save All"}
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        {safeTestimonials.length > 0 ? (
          safeTestimonials.map((item: any, index: number) => (
            <div
              key={item.id || index}
              className="p-4 sm:p-6 border border-gray-100 rounded-2xl sm:rounded-3xl bg-[#FBFBFB] relative group transition-all hover:border-blue-100 shadow-sm"
            >
              <button
                onClick={() => removeTestimonial(index)}
                className="absolute -top-2 -right-2 p-2.5 cursor-pointer bg-white text-red-500 rounded-full sm:opacity-0 group-hover:opacity-100 transition-opacity border border-red-100 shadow-md hover:bg-red-50 z-10"
              >
                <Trash2 size={16} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                    Author Name
                  </label>
                  <input
                    value={item.author}
                    onChange={(e) =>
                      updateTestimonial(index, "author", e.target.value)
                    }
                    className="w-full p-3 rounded-xl border border-gray-100 bg-white focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-all"
                    placeholder="e.g. Edgar Thompson"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                    Role / Company
                  </label>
                  <input
                    value={item.subtitle}
                    onChange={(e) =>
                      updateTestimonial(index, "subtitle", e.target.value)
                    }
                    className="w-full p-3 rounded-xl border border-gray-100 bg-white focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-all"
                    placeholder="e.g. Health Enthusiast"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                  Testimonial Quote
                </label>
                <textarea
                  value={item.quote}
                  onChange={(e) =>
                    updateTestimonial(index, "quote", e.target.value)
                  }
                  className="w-full p-3 rounded-xl border border-gray-100 bg-white h-24 focus:ring-2 focus:ring-blue-500 outline-none resize-none text-sm leading-relaxed transition-all"
                  placeholder="What did the user say?"
                />
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 sm:py-16 border-2 border-dashed border-gray-100 rounded-3xl text-gray-400 bg-gray-50/50">
            <p className="text-sm">No testimonials added yet.</p>
            <p className="text-xs mt-1">Click "Add New" to get started.</p>
          </div>
        )}
      </div>
    </div>
  )
}
