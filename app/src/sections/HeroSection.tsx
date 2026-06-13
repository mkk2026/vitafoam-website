import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone, ArrowRight, CheckCircle, MapPin, MessageCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const heading1Ref = useRef<HTMLHeadingElement>(null)
  const heading2Ref = useRef<HTMLSpanElement>(null)
  const bodyRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Label badge
      tl.fromTo(
        labelRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 }
      )

      // Heading line 1
      tl.fromTo(
        heading1Ref.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.8 },
        '-=0.45'
      )

      // Heading line 2
      tl.fromTo(
        heading2Ref.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.8 },
        '-=0.5'
      )

      // Body text
      tl.fromTo(
        bodyRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.35'
      )

      // CTA buttons
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' },
        '-=0.3'
      )

      // Trust items
      tl.fromTo(
        trustRef.current?.children || [],
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1 },
        '-=0.2'
      )

      // Hero image
      tl.fromTo(
        imageRef.current,
        { opacity: 0, x: 60, scale: 1.02 },
        { opacity: 1, x: 0, scale: 1, duration: 1.0 },
        '-=1.2'
      )

      // Parallax on scroll
      gsap.to(imageRef.current, {
        y: -80,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.3,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen pt-[72px] overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 80% 20%, rgba(242, 101, 34, 0.06) 0%, transparent 60%), #FFF8F0',
      }}
    >
      <div className="container-main h-full">
        <div className="flex flex-col lg:flex-row items-center min-h-[calc(100vh-72px)] py-12 lg:py-0 gap-10 lg:gap-0">
          {/* Left Column - Text */}
          <div className="w-full lg:w-[45%] lg:pr-8 flex flex-col justify-center">
            {/* Label Badge */}
            <div
              ref={labelRef}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F3EEF9] w-fit mb-6 opacity-0"
            >
              <span className="text-sm font-medium text-[#F26522]">
                Trusted Since 2015 &middot; Freetown, Sierra Leone
              </span>
            </div>

            {/* Heading */}
            <h1
              ref={heading1Ref}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#2D1B69] leading-tight mb-2 opacity-0"
            >
              Sweet Dreams
            </h1>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6">
              <span ref={heading2Ref} className="text-[#F26522] opacity-0 inline-block">
                Start Here.
              </span>
            </h1>

            {/* Body */}
            <p
              ref={bodyRef}
              className="text-base lg:text-lg text-[#6B7280] leading-relaxed mb-8 max-w-md opacity-0"
            >
              Premium mattresses, bedding & home essentials for Sierra Leonean homes. Quality sleep for the whole family.
            </p>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-wrap gap-4 mb-10 opacity-0">
              <a href="#category" className="btn-primary">
                SHOP MATTRESSES
                <ArrowRight size={18} />
              </a>
              <a
                href="https://wa.me/23276271771"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <Phone size={18} />
                WHATSAPP US
              </a>
            </div>

            {/* Trust Row */}
            <div ref={trustRef} className="flex flex-wrap gap-x-8 gap-y-4">
              <div className="flex items-start gap-2">
                <CheckCircle size={18} className="text-[#F26522] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[#2D1B69]">Trusted Quality</p>
                  <p className="text-xs text-[#6B7280]">Built to last</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-[#F26522] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[#2D1B69]">Across Sierra Leone</p>
                  <p className="text-xs text-[#6B7280]">Orders coordinated beyond Freetown</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MessageCircle size={18} className="text-[#25D366] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[#2D1B69]">WhatsApp Support</p>
                  <p className="text-xs text-[#6B7280]">Fast & friendly</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full lg:w-[55%] relative">
            <div
              ref={imageRef}
              className="relative lg:ml-auto lg:-mr-8 xl:-mr-16 opacity-0"
            >
              <img
                src="/images/familypic.png"
                alt="Happy family enjoying quality sleep on Vitafoam mattress"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] object-cover lg:rounded-l-3xl rounded-2xl shadow-2xl"
              />
              {/* Floating badge */}
              <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-12 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                <span className="text-lg">🇸🇱</span>
                <span className="text-sm font-semibold text-[#2D1B69]">
                  Proudly Sierra Leonean
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
