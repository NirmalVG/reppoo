import clientPromise from "@/lib/mongodb"
import HeroSection from "@/components/HeroSection"
import TimeTrackerSection from "@/components/TimeTrackerSection"
import TestimonialCarouselSection from "@/components/TestimonialCarouselSection"
import FAQSection from "@/components/FAQSection"
import OfferSection from "@/components/OfferSection"

async function getPageData() {
  const client = await clientPromise
  const db = client.db("reppoo")
  const data = await db.collection("content").findOne({ id: "landing-page" })
  return data
}
export const dynamic = "force-dynamic"
export const revalidate = 0

export default async function LandingPage() {
  const data = await getPageData()

  const hero = data?.hero || { title: "Default Title", subtitle: "Default Sub" }
  const about = data?.about || {
    heading: "Default Heading",
    description: "...",
  }
  const testimonials = data?.testimonials || []
  const faqItems = data?.faqItems || []

  return (
    <main>
      <HeroSection title={hero.title} subtitle={hero.subtitle} />
      <TimeTrackerSection
        heading={about.heading}
        description={about.description}
      />
      <TestimonialCarouselSection
        title={data?.testimonialsTitle || "Testimonials"}
        subtitle={data?.testimonialsSubtitle || ""}
        testimonials={testimonials}
        relatedUsers={data?.relatedUsers || []}
      />
      <FAQSection faqItems={faqItems} />
      <OfferSection />
    </main>
  )
}
