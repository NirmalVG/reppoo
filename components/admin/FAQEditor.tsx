"use client"
import { usePageStore } from "@/store/usePageStore"
import { Button } from "@/components/ui/button"
import { Trash2, Plus, Save, HelpCircle } from "lucide-react"

export const FAQEditor = () => {
  const { faqItems, setFaqItems } = usePageStore() as any

  const safeFaqItems = faqItems || []

  const updateFAQ = (
    index: number,
    field: "question" | "answer",
    value: string,
  ) => {
    const updated = [...safeFaqItems]
    updated[index] = { ...updated[index], [field]: value }
    setFaqItems(updated)
  }

  const addFAQ = () => {
    setFaqItems([
      ...safeFaqItems,
      { id: Date.now().toString(), question: "", answer: "" },
    ])
  }

  const removeFAQ = (index: number) => {
    const updated = safeFaqItems.filter((_: any, i: number) => i !== index)
    setFaqItems(updated)
  }

  const handleSync = async () => {
    try {
      await fetch("/api/page-data", {
        method: "POST",
        body: JSON.stringify({ faqItems: safeFaqItems }),
      })
      alert("FAQs updated in MongoDB!")
    } catch (error) {
      console.error("Sync failed", error)
    }
  }

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-xl font-bold text-[#23262F]">FAQ Management</h3>
          <p className="text-sm text-gray-500">
            Manage questions for the landing page.
          </p>
        </div>
        <Button
          onClick={addFAQ}
          className="bg-blue-500 hover:bg-blue-600 rounded-xl gap-2"
        >
          <Plus size={18} /> Add FAQ
        </Button>
      </div>

      <div className="space-y-4">
        {safeFaqItems.length > 0 ? (
          safeFaqItems.map(
            (
              item: {
                id: any
                question: string | number | readonly string[] | undefined
                answer: string | number | readonly string[] | undefined
              },
              index: number,
            ) => (
              <div
                key={item.id || index}
                className="p-5 border border-gray-100 rounded-2xl bg-[#FBFBFB] group relative"
              >
                <button
                  onClick={() => removeFAQ(index)}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 transition-all"
                >
                  <Trash2 size={16} />
                </button>

                <div className="flex gap-4">
                  <div className="hidden md:block p-2 bg-blue-50 text-blue-500 rounded-lg h-fit">
                    <HelpCircle size={20} />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                        Question
                      </label>
                      <input
                        value={item.question}
                        onChange={(e) =>
                          updateFAQ(index, "question", e.target.value)
                        }
                        className="w-full p-3 rounded-xl border border-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                        Answer
                      </label>
                      <textarea
                        value={item.answer}
                        onChange={(e) =>
                          updateFAQ(index, "answer", e.target.value)
                        }
                        className="w-full p-3 rounded-xl border border-gray-100 h-24 outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ),
          )
        ) : (
          <div className="text-center py-10 border-2 border-dashed border-gray-100 rounded-3xl text-gray-400">
            No FAQ items found.
          </div>
        )}
      </div>

      <Button
        onClick={handleSync}
        className="w-full mt-6 h-14 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 font-bold gap-2"
      >
        <Save size={18} /> Sync with Database
      </Button>
    </div>
  )
}
