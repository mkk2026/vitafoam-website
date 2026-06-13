import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/sections/HeroSection'
import ShopByCategory from '@/sections/ShopByCategory'
import TrustFeatures from '@/sections/TrustFeatures'
import FeaturedProducts from '@/sections/FeaturedProducts'
import WhatsAppBanner from '@/sections/WhatsAppBanner'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    })

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Navbar />
      <main>
        <HeroSection />
        <ShopByCategory />
        <TrustFeatures />
        <FeaturedProducts />
        <WhatsAppBanner />
      </main>
      <Footer />
    </div>
  )
}
