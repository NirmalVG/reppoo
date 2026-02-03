import Image from "next/image"
import { Button } from "./ui/button"

const OfferSection = () => {
  return (
    <section className="flex items-center flex-col justify-center my-16 md:my-28 px-6 text-center">
      <p className="text-[14px] md:text-[16px]/[1.7] font-medium tracking-wider uppercase text-[#23262F] mb-2">
        Special Launch offer
      </p>

      <h2 className="max-w-4xl text-[36px] sm:text-[48px] md:text-[64px] text-[#23262F] font-medium leading-[1.1] tracking-[-0.03em] mb-6">
        Your journey to better
        <br className="hidden md:block" /> health starts now
      </h2>

      <p className="max-w-xl text-[16px] md:text-[18px]/[1.6] font-medium tracking-[-0.012em] text-[#777E90]">
        Get 50% off your first 3 months when you start your trial today!
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 mb-8 w-full sm:w-auto">
        <Button className="w-full sm:w-auto rounded-full cursor-pointer h-14 px-8 text-[18px] font-bold bg-[#FFFFFF] text-black border border-gray-100 hover:bg-gray-50 shadow-sm transition-all">
          <Image
            src="/images/apple.webp"
            alt="apple"
            width={21}
            height={25}
            className="mr-2"
          />
          Download
        </Button>
        <Button className="w-full sm:w-auto rounded-full cursor-pointer h-14 px-8 text-[18px] font-bold bg-[#FFFFFF] text-black border border-gray-100 hover:bg-gray-50 shadow-sm transition-all">
          <Image
            src="/images/playstore.webp"
            alt="playstore"
            width={21}
            height={25}
            className="mr-2"
          />
          Download
        </Button>
      </div>
    </section>
  )
}

export default OfferSection
