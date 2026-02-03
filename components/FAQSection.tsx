"use client"
import { useState } from "react"
import { FAQItem } from "@/types"
import { Minus, Plus } from "lucide-react"

const FAQSection = ({ faqItems }: { faqItems: FAQItem[] }) => {
  const [expanded, setExpanded] = useState<string | null>("3")

  const toggleExpand = (id: string) => {
    setExpanded(expanded === id ? null : id)
  }

  return (
    <section className="w-full bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-24">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[#23262F] font-semibold text-[32px] md:text-[48px] leading-[1.2] tracking-[-0.02em] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#777E90] font-medium text-[16px] md:text-[18px] leading-[1.6] tracking-[-0.012em] max-w-lg mx-auto">
            Get answers to common questions about our AI health assistant app
          </p>
        </div>

        <div className="border-t border-gray-100">
          {faqItems.map((item) => (
            <div key={item.id} className="border-b border-gray-100">
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full flex items-center justify-between py-6 md:py-8 text-left transition-all hover:opacity-70 group"
              >
                <span className="text-[#23262F] font-medium text-[20px] md:text-[32px] leading-[1.4] tracking-[-0.02em] pr-4">
                  {item.question}
                </span>
                <div className="flex-shrink-0 bg-gray-50 p-2 rounded-full group-hover:bg-blue-50 transition-colors">
                  {expanded === item.id ? (
                    <Minus className="w-5 h-5 text-blue-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expanded === item.id
                    ? "max-h-[500px] opacity-100 pb-8"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[#777E90] font-medium text-[16px] md:text-[24px] leading-[1.5] tracking-[-0.012em] max-w-3xl">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
