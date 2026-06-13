import { ShieldCheck, MapPin, MessageCircle } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const features = [
  {
    icon: ShieldCheck,
    title: 'Trusted Since 2015',
    description:
      'Over 10 years of delivering quality sleep and comfort to homes, businesses and institutions across Sierra Leone.',
    color: '#F26522',
  },
  {
    icon: MapPin,
    title: 'Across Sierra Leone',
    description:
      'We support customers in Freetown and help coordinate orders beyond Freetown through trusted supply routes.',
    color: '#F26522',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Ordering',
    description:
      'Easy ordering, real-time support and after-sales service just a message away.',
    color: '#25D366',
  },
]

export default function TrustFeatures() {
  const ref = useScrollReveal<HTMLDivElement>({
    y: 40,
    scale: 0.95,
    stagger: 0.15,
    duration: 0.7,
  })

  return (
    <section id="trust" className="py-20 lg:py-24 bg-[#F3EEF9]">
      <div className="container-main">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-8 lg:p-10 card-shadow text-center transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <feature.icon size={32} style={{ color: feature.color }} />
              </div>
              <h3 className="text-xl font-bold text-[#2D1B69] mb-3">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#6B7280]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
