import { create } from "zustand"
import { persist } from "zustand/middleware"

interface PageState {
  hero: { title: string; subtitle: string; image: string }
  faqItems: any[]
  about: { heading: string; description: string }
  testimonials: any[]
  setHero: (newHero: any) => void
  setFaqItems: (items: any) => void
  setAbout: (newAbout: any) => void
  setTestimonials: (items: any[]) => void
}

export const usePageStore = create<PageState>()(
  persist(
    (set) => ({
      hero: {
        title: "Your AI Health Coach",
        subtitle: "...",
        image: "/images/iphone.webp",
      },
      faqItems: [],
      about: { heading: "...", description: "..." },
      testimonials: [],

      setAbout: (newAbout) => set({ about: newAbout }),
      setFaqItems: (items) => set({ faqItems: items }),
      setHero: (newHero) => set({ hero: newHero }),
      setTestimonials: (items) => set({ testimonials: items }),
    }),
    { name: "reppoo-storage" },
  ),
)
