"use client"
import Image from "next/image"
import { Button } from "./ui/button"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const HeroSection = ({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) => {
  const container = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      })

      tl.from(".hero-title", { y: 50, opacity: 0, delay: 0.2 })
        .from(".hero-sub", { y: 30, opacity: 0 }, "-=0.7")
        .from(".hero-image", { scale: 0.9, opacity: 0 }, "-=0.5")
    },
    { scope: container },
  )
  return (
    <section
      ref={container}
      className="container mx-auto bg-[#F9F9F9] min-h-[700px] md:min-h-[750px] py-10 md:py-20 overflow-hidden relative px-4"
    >
      <div className="hidden md:flex justify-around items-end mb-10">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.4),transparent_65%)] blur-[80px] pointer-events-none z-0" />
          <div className="relative z-10 w-60 lg:w-87.5 transition-transform hover:scale-105 duration-500">
            <Image
              src="/images/day-off.webp"
              alt="day-off"
              width={461}
              height={497}
              className="hero-image w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="relative z-10 shrink-0">
          <Image
            src="/images/iphone.webp"
            alt="iphone"
            width={512}
            height={577}
            className="hero-image w-[300px] lg:w-[512px] [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
          />
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.35),transparent_65%)] blur-[80px] pointer-events-none z-0" />
          <div className="relative z-10 w-60 lg:w-87.5 transition-transform hover:scale-105 duration-500">
            <Image
              src="/images/work-hour.webp"
              alt="work-hour"
              width={461}
              height={497}
              className="hero-image w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="relative z-20 flex flex-col items-center text-center">
        <div className="flex flex-row items-center justify-center gap-2 mb-4">
          <Image
            src="/images/customer-faces.webp"
            alt="customer-faces"
            width={124}
            height={48}
            className="w-[100px] md:w-[124px]"
          />
          <p className="font-bold text-[#23262F] text-xl md:text-2xl tracking-tighter">
            59182
          </p>
          <p className=" font-normal text-[#23262F] text-sm md:text-base">
            Happy Users
          </p>
        </div>

        <h2 className="hero-title max-w-4xl text-[#23262F] font-semibold text-[36px] sm:text-[48px] md:text-[64px] leading-[1.2] tracking-tight mb-4">
          {title}
        </h2>

        <p className="hero-sub max-w-2xl text-[#777E90] font-medium text-base md:text-lg leading-[1.6] tracking-tight px-2">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 mb-12 w-full sm:w-auto px-6">
          <Button className="w-full sm:w-auto rounded-full h-14 px-8 text-[18px] font-bold bg-white text-black border border-gray-100 shadow-sm hover:bg-gray-50 transition-all">
            <Image
              src="/images/apple.webp"
              alt="apple"
              width={20}
              height={20}
              className="mr-2"
            />
            Download
          </Button>
          <Button className="w-full sm:w-auto rounded-full h-14 px-8 text-[18px] font-bold bg-white text-black border border-gray-100 shadow-sm hover:bg-gray-50 transition-all">
            <Image
              src="/images/playstore.webp"
              alt="playstore"
              width={20}
              height={20}
              className="mr-2"
            />
            Download
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[300px] md:w-[900px] h-[150px] md:h-[250px] rounded-[100%] bg-[radial-gradient(circle,rgba(59,130,246,0.35),transparent_70%)] blur-[60px] md:blur-[110px] pointer-events-none z-0" />
    </section>
  )
}

export default HeroSection
