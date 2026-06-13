import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Mattresses', href: '#category' },
  { label: 'Bedding', href: '#products' },
  { label: 'Salonetiti Products', href: '#category' },
  { label: 'Why Vitafoam', href: '#trust' },
  { label: 'Contact Us', href: '#footer' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/92 backdrop-blur-xl shadow-[0_2px_20px_rgba(45,27,105,0.06)]'
            : 'bg-white/80 backdrop-blur-md'
        }`}
        style={{ height: 72 }}
      >
        <div className="container-main flex items-center justify-between h-full">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img
              src="/images/branding.png"
              alt="Vitafoam Brookfields"
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-[15px] font-medium text-[#2D1B69] hover:text-[#F26522] transition-colors duration-300 group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F26522] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
          </div>

          {/* Desktop WhatsApp CTA */}
          <a
            href="https://wa.me/23276271771"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#25D366] hover:bg-[#1DA851] transition-all duration-300 hover:-translate-y-0.5"
          >
            <Phone size={16} />
            <span>Chat on WhatsApp</span>
            <span className="opacity-80">076 271 771</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 text-[#2D1B69]"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-[#FFF8F0] transition-all duration-500 lg:hidden ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container-main pt-6">
          <div className="flex items-center justify-between mb-12">
            <img
              src="/images/branding.png"
              alt="Vitafoam Brookfields"
              className="h-10 w-auto object-contain"
            />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-[#2D1B69]"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-semibold text-[#2D1B69] hover:text-[#F26522] transition-colors duration-300"
                style={{
                  animationDelay: `${i * 0.05}s`,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="https://wa.me/23276271771"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-base font-semibold text-white bg-[#25D366]"
            >
              <Phone size={18} />
              <span>Chat on WhatsApp</span>
              <span className="opacity-80">076 271 771</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
