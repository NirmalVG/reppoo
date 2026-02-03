export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  subtitle: string
  avatarColor: string
}

export interface RelatedUser {
  id: string
  name: string
  role: string
  avatarColor: string
}

export interface TestimonialsCarouselProps {
  title: string
  subtitle: string
  testimonials: Testimonial[]
  relatedUsers: RelatedUser[]
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}
