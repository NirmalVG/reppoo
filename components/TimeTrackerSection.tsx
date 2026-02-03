import Image from "next/image"
import { Button } from "./ui/button"

const TimeTrackerSection = ({
  heading,
  description,
}: {
  heading: string
  description: string
}) => {
  return (
    <section className="container mx-auto px-6 md:px-16 lg:px-20 py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-20">
        <div className="order-2 md:order-1 text-center md:text-left">
          <h2 className="text-[32px] md:text-[48px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#23262F]">
            {heading}
          </h2>

          <div className="mt-6 space-y-4">
            <p className="text-[18px] leading-[1.6] font-bold tracking-[-0.012em] text-[#23262F]">
              Smart Nutrition Planning
            </p>
            <p className="text-[16px] md:text-[18px] leading-[1.6] font-medium tracking-[-0.012em] text-[#777E90]">
              {description}
            </p>
          </div>

          <Button className="mt-8 px-8 py-6 text-black bg-white  rounded-full hover:bg-gray-50 transition-colors">
            Read more
          </Button>
        </div>

        <div className="order-1 md:order-2 bg-[#F4F5F6] rounded-3xl p-4 md:p-8 flex justify-center items-center">
          <div className="relative w-full aspect-[460/325]">
            <Image
              src="/images/timer.webp"
              alt="Time Tracker"
              className="w-full h-full object-contain rounded-2xl drop-shadow-xl"
              width={460}
              height={325}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TimeTrackerSection
