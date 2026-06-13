import { useScrollReveal } from '@/hooks/useScrollReveal'

const largeCategories = [
  {
    title: 'Mattresses',
    image: '/images/sping.jpg',
    href: '#products',
  },
  {
    title: 'Pillows',
    image: '/images/pillows.jpg',
    href: '#products',
  },
]

const smallCategories = [
  {
    title: 'Kids Beds',
    image: '/images/kids-bed.jpg',
    href: '#products',
  },
  {
    title: 'Bedding Sets',
    image: '/images/bedding-sets.jpg',
    href: '#products',
  },
  {
    title: 'Salonetiti Products',
    image: '/images/Honey.jpg',
    href: '#products',
  },
  {
    title: 'Home Essentials',
    image: '/images/Tissue.jpg',
    href: '#products',
  },
]

export default function ShopByCategory() {
  const titleRef = useScrollReveal<HTMLDivElement>({ y: 40, stagger: 0 })
  const largeRef = useScrollReveal<HTMLDivElement>({ y: 50, stagger: 0.12, duration: 0.7 })
  const smallRef = useScrollReveal<HTMLDivElement>({ y: 50, stagger: 0.08, duration: 0.7, delay: 0.2 })

  return (
    <section id="category" className="py-20 lg:py-24 bg-white">
      <div className="container-main">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2D1B69] mb-3">
            Shop by Category
          </h2>
          <div className="w-10 h-[3px] bg-[#F26522] mx-auto rounded-full" />
        </div>

        {/* Large Cards - Top Row */}
        <div ref={largeRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {largeCategories.map((cat) => (
            <a
              key={cat.title}
              href={cat.href}
              className="group relative h-[280px] sm:h-[320px] rounded-2xl overflow-hidden card-shadow transition-all duration-500 hover:-translate-y-1.5 card-shadow-hover"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B69]/80 via-[#2D1B69]/20 to-transparent" />
              <h3 className="absolute bottom-6 left-6 text-xl lg:text-2xl font-bold text-white">
                {cat.title}
              </h3>
            </a>
          ))}
        </div>

        {/* Small Cards - Bottom Row */}
        <div ref={smallRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {smallCategories.map((cat) => (
            <a
              key={cat.title}
              href={cat.href}
              className="group relative h-[160px] sm:h-[200px] rounded-2xl overflow-hidden card-shadow transition-all duration-500 hover:-translate-y-1.5 card-shadow-hover"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B69]/80 via-[#2D1B69]/20 to-transparent" />
              <h3 className="absolute bottom-4 left-4 text-sm sm:text-base font-bold text-white">
                {cat.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
