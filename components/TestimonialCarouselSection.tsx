"use client"
import { useState } from "react"
import { TestimonialsCarouselProps } from "@/types"
import { Button } from "./ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const TestimonialCarouselSection = ({
  testimonials,
}: TestimonialsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    )
  }

  const current = testimonials[currentIndex]

  return (
    <section className="w-full bg-[#F4F5F6] py-12 md:py-24">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-[32px] md:text-[48px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#23262F] mb-4">
            Our Users Feel the Transformation
          </h2>
          <p className="text-[16px] md:text-[18px] font-medium leading-[1.6] tracking-[-0.012em] text-[#777E90] max-w-2xl mx-auto">
            Real Stories from People Empowered by Personalized Wellness
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex md:hidden gap-4 mb-4">
            <NavButton
              onClick={goToPrevious}
              icon={<ChevronLeft />}
              aria="Previous"
            />
            <NavButton onClick={goToNext} icon={<ChevronRight />} aria="Next" />
          </div>

          <div className="hidden md:block">
            <NavButton
              onClick={goToPrevious}
              icon={<ChevronLeft />}
              aria="Previous"
            />
          </div>

          <div className="w-full md:flex-1 rounded-3xl bg-white p-6 md:p-12 shadow-sm border border-gray-100 min-h-[320px] md:min-h-[400px] flex flex-col justify-center transition-all duration-500">
            <div className="mb-8">
              <p className="text-center text-[18px] md:text-[24px] leading-[1.6] font-medium tracking-[-0.012em] text-[#23262F]">
                "{current?.quote}"
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div
                className="h-14 w-14 rounded-full shadow-inner"
                style={{ backgroundColor: "#FFBC99" }}
              />
              <div className="text-center">
                <p className="text-[18px] md:text-[20px] font-bold tracking-[-0.02em] text-[#23262F]">
                  {current?.author}
                </p>
                <p className="text-[14px] md:text-[16px] font-medium tracking-[-0.02em] text-[#777E90]">
                  {current?.subtitle}
                </p>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <NavButton onClick={goToNext} icon={<ChevronRight />} aria="Next" />
          </div>
        </div>

        <div className="mt-12 hidden md:flex justify-center gap-6">
          {testimonials.map((item, index) => {
            let isVisible = false
            if (currentIndex === 0) isVisible = index < 3
            else if (currentIndex === testimonials.length - 1)
              isVisible = index >= testimonials.length - 3
            else
              isVisible = index >= currentIndex - 1 && index <= currentIndex + 1

            if (!isVisible) return null
            const isCurrent = index === currentIndex

            return (
              <div
                key={item.id || index}
                className={`flex flex-row items-center gap-3 rounded-2xl w-[260px] h-[80px] bg-white shadow-sm border transition-all duration-500 px-4
                  ${isCurrent ? "opacity-100 border-blue-100 scale-105" : "opacity-40 border-transparent"}`}
              >
                <div
                  className="h-10 w-10 rounded-full"
                  style={{ backgroundColor: "#FFBC99" }}
                />
                <div className="flex flex-col items-start overflow-hidden">
                  <p className="text-sm font-bold text-[#23262F] truncate w-full">
                    {item.author}
                  </p>
                  <p className="text-xs font-medium text-[#777E90] truncate w-full">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const NavButton = ({
  onClick,
  icon,
  aria,
}: {
  onClick: () => void
  icon: React.ReactNode
  aria: string
}) => (
  <Button
    onClick={onClick}
    variant="outline"
    size="icon"
    className="h-12 w-12 cursor-pointer rounded-full bg-blue-500 hover:bg-blue-600 border-0 text-white shadow-lg transition-transform active:scale-95"
    aria-label={aria}
  >
    {icon}
  </Button>
)

export default TestimonialCarouselSection
