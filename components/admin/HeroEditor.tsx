"use client"
import { usePageStore } from "@/store/usePageStore"
import { Button } from "@/components/ui/button"
import { Save, Image as ImageIcon } from "lucide-react"

export const HeroEditor = () => {
  const { hero, setHero } = usePageStore() as any

  const heroData = hero || { title: "", subtitle: "", image: "" }

  const handleSave = async () => {
    await fetch("/api/page-data", {
      method: "POST",
      body: JSON.stringify({ hero: heroData }),
    })
    alert("Hero updated instantly!")
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-[#23262F]">Edit Hero Section</h3>
        <Button onClick={handleSave} className="bg-blue-600 rounded-xl gap-2">
          <Save size={18} /> Save Changes
        </Button>
      </div>

      <div className="grid gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase text-gray-400">
            Main Heading
          </label>
          <input
            value={heroData.title}
            onChange={(e) => setHero({ ...heroData, title: e.target.value })}
            className="w-full p-4 rounded-2xl border border-gray-100 bg-[#FBFBFB] focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase text-gray-400">
            Subtext
          </label>
          <textarea
            value={heroData.subtitle}
            onChange={(e) => setHero({ ...heroData, subtitle: e.target.value })}
            className="w-full p-4 rounded-2xl border border-gray-100 bg-[#FBFBFB] h-32 outline-none"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase text-gray-400">
            Hero Image Path
          </label>
          <div className="relative">
            <input
              value={heroData.image}
              onChange={(e) => setHero({ ...heroData, image: e.target.value })}
              className="w-full p-4 pl-12 rounded-2xl border border-gray-100 bg-[#FBFBFB]"
              placeholder="/images/iphone.webp"
            />
            <ImageIcon
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
