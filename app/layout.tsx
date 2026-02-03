import type { Metadata } from "next"
import { Manrope } from "next/font/google"
//@ts-ignore
import "./globals.css"
import CommonLayout from "@/layout/CommonLayout"
import SmoothScroll from "@/components/SmoothScroll"

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Reppoo",
  description:
    "Maximize your health potential with Reppoo. Personalized wellness insights and AI-driven coaching for a better you.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable}  antialiased`}
        data-new-gr-c-s-check-loaded="14.1271.0"
        data-gr-ext-installed=""
        cz-shortcut-listen="true"
      >
        <SmoothScroll>
          <CommonLayout>{children}</CommonLayout>
        </SmoothScroll>
      </body>
    </html>
  )
}
