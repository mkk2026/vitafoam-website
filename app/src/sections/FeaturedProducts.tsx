import { ArrowRight, Star } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const products = [
  {
    name: 'Orthopaedic Mattress',
    image: '/images/sping.jpg',
    rating: 4,
    price: 'From Le 5,000',
  },
  {
    name: 'Salonetiti Raw Honey 250g',
    image: '/images/Honey.jpg',
    rating: 5,
    price: 'From Le 50',
  },
  {
    name: 'C Handle Umbrella',
    image: '/images/cushions.png',
    rating: 4,
    price: 'From Le 150',
  },
  {
    name: 'Bamboo Memory Pillow / Salonetiti',
    image: '/images/pillows-alt.jpg',
    rating: 5,
    price: 'Le 400',
  },
  {
    name: 'Bedsheet Set',
    image: '/images/bedding-alt.jpg',
    rating: 4,
    price: 'From Le 250',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={12}
          className={
            star <= rating
              ? 'fill-[#FFB800] text-[#FFB800]'
              : 'fill-gray-200 text-gray-200'
          }
        />
      ))}
    </div>
  )
}

export default function FeaturedProducts() {
  const headerRef = useScrollReveal<HTMLDivElement>({ y: 30, stagger: 0 })
  const gridRef = useScrollReveal<HTMLDivElement>({
    x: 40,
    y: 0,
    stagger: 0.1,
    duration: 0.7,
  })

  return (
    <section id="products" className="py-20 lg:py-24 bg-white">
      <div className="container-main">
        {/* Header */}
        <div ref={headerRef} className="flex items-center justify-between mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2D1B69]">
            Featured Products
          </h2>
          <a
            href="#"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#F26522] hover:underline"
          >
            View all products
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Product Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6"
        >
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-white rounded-2xl overflow-hidden card-shadow transition-all duration-300 hover:-translate-y-2 card-shadow-hover cursor-pointer"
            >
              {/* Image Area */}
              <div className="relative h-36 sm:h-44 bg-[#F5F5F5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content Area */}
              <div className="p-3 sm:p-4">
                <h3 className="text-xs sm:text-sm font-semibold text-[#2D1B69] mb-1.5 line-clamp-2 leading-tight">
                  {product.name}
                </h3>
                <div className="mb-1.5">
                  <StarRating rating={product.rating} />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-[#F26522]">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
