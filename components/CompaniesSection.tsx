import Image from "next/image"

const CompaniesSection = () => {
  const logos = [
    { src: "/images/logo1.png", alt: "Company 1" },
    { src: "/images/logo2.png", alt: "Company 2" },
    { src: "/images/logo3.png", alt: "Company 3" },
    { src: "/images/logo4.png", alt: "Company 4" },
    { src: "/images/logo5.png", alt: "Company 5" },
  ]

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="relative w-full max-w-[140px] md:max-w-[180px] lg:max-w-[220px]"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={220}
                height={40}
                className="object-contain w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompaniesSection
