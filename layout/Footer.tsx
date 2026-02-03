import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700">
      <div className="max-w-10xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-10">
          <div className="sm:col-span-2 md:col-span-3">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.webp"
                alt="Logo"
                width={30}
                height={30}
              />
              <h2 className="text-xl font-semibold text-[#0C0C13]">Reppoo</h2>
            </div>

            <p className="text-sm text-gray-600 max-w-sm leading-relaxed">
              innovative health assistant app that leverages artificial
              intelligence to provide personalized wellness recommendations.
            </p>

            <p className="mt-4 text-sm font-medium">hello@reppoo.com</p>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-semibold text-[#0C0C13] mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-500 transition-colors"
                >
                  Early Access
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-500 transition-colors"
                >
                  404
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-semibold text-[#0C0C13] mb-4">App</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-500 transition-colors"
                >
                  Download For iOS
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-500 transition-colors"
                >
                  Download For Android
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-semibold text-[#0C0C13] mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-500 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500 order-2 md:order-1">
            © {new Date().getFullYear()} Reppoo. All rights reserved.
          </p>

          <div className="flex gap-4 order-1 md:order-2">
            <SocialIcon>
              <Facebook size={18} />
            </SocialIcon>
            <SocialIcon>
              <Twitter size={18} />
            </SocialIcon>
            <SocialIcon>
              <Instagram size={18} />
            </SocialIcon>
            <SocialIcon>
              <Linkedin size={18} />
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-500 transition-all cursor-pointer">
      {children}
    </div>
  )
}
