import { MapPin, Phone, Mail, Globe, Facebook, Instagram } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'Mattresses', href: '#category' },
  { label: 'Bedding', href: '#products' },
  { label: 'Salonetiti Products', href: '#category' },
  { label: 'About Us', href: '#trust' },
  { label: 'Contact Us', href: '#footer' },
]

const customerService = [
  'FAQs',
  'Order Information',
  'Returns & Exchanges',
  'Warranty',
  'Track Your Order',
]

export default function Footer() {
  const ref = useScrollReveal<HTMLElement>({ y: 30, stagger: 0.1, duration: 0.6 })

  return (
    <footer
      id="footer"
      ref={ref}
      className="bg-[#2D1B69] text-white"
    >
      <div className="container-main py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div>
            <img
              src="/images/branding.png"
              alt="Vitafoam Brookfields"
              className="h-14 w-auto object-contain mb-4"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="text-sm leading-relaxed text-white/70 mb-6">
              Your trusted partner for quality mattresses, bedding & home comfort solutions.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me/23276271771"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider mb-5 text-white">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider mb-5 text-white">
              CUSTOMER SERVICE
            </h4>
            <ul className="space-y-3">
              {customerService.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider mb-5 text-white">
              CONTACT US
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[#F26522]" />
                <span>29B King Harman Road, Brookfields, Freetown, Sierra Leone</span>
              </li>
              <li>
                <a
                  href="tel:+23276271771"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  <Phone size={16} className="flex-shrink-0 text-[#F26522]" />
                  <span>076 271 771</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:vbrookfields@gmail.com"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  <Mail size={16} className="flex-shrink-0 text-[#F26522]" />
                  <span>vbrookfields@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.vitafoambrookfields.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  <Globe size={16} className="flex-shrink-0 text-[#F26522]" />
                  <span>www.vitafoambrookfields.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-main py-5">
          <p className="text-center text-xs text-white/50">
            &copy; 2026 Vitafoam Brookfields. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
