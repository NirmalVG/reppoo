"use client"
import { usePageStore } from "@/store/usePageStore"
import { Button } from "@/components/ui/button"
import { Loader2, Save } from "lucide-react"
import { updateAboutContent } from "@/app/actions"
import { useState } from "react"

export const AboutEditor = () => {
  const { about, setAbout } = usePageStore() as any
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)

    const result = await updateAboutContent(about)

    setIsSaving(false)

    if (result.success) {
      alert("Changes synced to MongoDB!")
    } else {
      alert("Error saving to database.")
    }
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold text-[#23262F]">About Content</h3>
          <p className="text-sm text-gray-500">
            Manage the messaging for your health potential section.
          </p>
        </div>
        <Button
          onClick={handleSave}
          disabled={isSaving}
          className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white rounded-xl gap-2 min-w-[140px]"
        >
          {isSaving ? (
            <Loader2 className="animate-spin" size={18} />
          ) : (
            <Save size={18} />
          )}
          {isSaving ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      <div className="grid gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold uppercase tracking-wider text-gray-400">
            Section Heading
          </label>
          <input
            type="text"
            value={about.heading}
            onChange={(e) => setAbout({ ...about, heading: e.target.value })}
            className="w-full p-4 rounded-2xl border border-gray-100 bg-[#FBFBFB] focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all text-[#23262F] font-semibold"
            placeholder="e.g., Maximizing Your Health Potential Together"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold uppercase tracking-wider text-gray-400">
            Description Paragraph
          </label>
          <textarea
            value={about.description}
            onChange={(e) =>
              setAbout({ ...about, description: e.target.value })
            }
            className="w-full p-4 rounded-2xl border border-gray-100 bg-[#FBFBFB] focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all text-[#777E90] h-40 resize-none leading-relaxed"
            placeholder="Describe your AI health companion features..."
          />
        </div>
      </div>

      <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 flex items-start gap-3">
        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">ℹ️</div>
        <p className="text-sm text-blue-800 leading-relaxed">
          <strong>Tip:</strong> Keep the heading under 60 characters to ensure
          it maintains the <b>48px</b> font size beautifully on desktop screens
          without overlapping the image.
        </p>
      </div>
    </div>
  )
}
