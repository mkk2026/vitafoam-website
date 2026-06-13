import { Phone } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function WhatsAppBanner() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 30, duration: 0.6 })

  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[#2D1B69]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="container-main relative z-10 py-12 lg:py-14">
        <div
          ref={ref}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
              Need Help Choosing the Right Product?
            </h3>
            <p className="text-sm lg:text-base text-white/70">
              Chat with us on WhatsApp. We&apos;re here to help!
            </p>
          </div>
          <a
            href="https://wa.me/23276271771"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 h-14 rounded-2xl text-base font-semibold text-white bg-[#25D366] hover:bg-[#1DA851] transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
            style={{
              boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)',
            }}
          >
            <Phone size={20} />
            WHATSAPP US
          </a>
        </div>
      </div>
    </section>
  )
}
