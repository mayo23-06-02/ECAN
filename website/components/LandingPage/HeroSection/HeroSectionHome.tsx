'use client'
import React from 'react'
import Image from 'next/image'
import Button from '@/components/Re-usable UI/Button'
import Carousel, { DotProps } from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

// Define types for slide data
import type { StaticImageData } from 'next/image'
import MotionTextStrip from './MotionTextStrip'

interface Slide {
  image: string | StaticImageData
  title: string
  highlight: string
  description: string
  button: string
}

const slides: Slide[] = [
  {
    image: '/truck.jpg',
    title: 'Early Detection is Key—Because Every ',
    highlight: 'Moment Matters',
    description:
      'When you prioritize early detection, you take control of your future. Your vigilance empowers you with the knowledge to confront potential challenges head-on. By turning early signals into actionable insights, we can transform subtle warnings into powerful recoveries. Every proactive step you take is a promise for a healthier, brighter tomorrow.',
    button: 'Get Started',
  },
  {
    image: '/truck.jpg',
    title: 'Early Detection is Key—Because Every ',
    highlight: 'Moment Matters',
    description:
      'When you prioritize early detection, you take control of your future. Your vigilance empowers you with the knowledge to confront potential challenges head-on. By turning early signals into actionable insights, we can transform subtle warnings into powerful recoveries. Every proactive step you take is a promise for a healthier, brighter tomorrow.',
    button: 'Get Started',
  },
]

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

// Custom Dot component for react-multi-carousel
const CustomDot = ({ onClick, active }: DotProps) => (
  <button
    className={`mx-1 w-8 h-2  lg:-translate-y-4 -translate-y-1  transition-colors duration-200 border-none focus:outline-none ${
      active ? 'bg-white' : 'bg-white/40'
    }`}
    onClick={onClick}
    aria-label="Go to slide"
    type="button"
  />
)

// Use 'any' for customButtonGroup props to match react-multi-carousel's dynamic injection
const CustomButtonGroup = ({ next, previous }: any) => {
  return (
    <div className="hidden lg:flex absolute top-1/2 left-0 right-0 justify-between px-8 z-30 pointer-events-none">
      <button
        className="pointer-events-auto bg-white/80 hover:bg-white text-primary rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
        onClick={previous}
        aria-label="Previous slide"
        type="button"
      >
        <span className="sr-only">Previous</span>
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#FC55E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <button
        className="pointer-events-auto bg-white/80 hover:bg-white text-primary rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
        onClick={next}
        aria-label="Next slide"
        type="button"
      >
        <span className="sr-only">Next</span>
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="#FC55E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </div>
  )
}

const HeroSectionHome: React.FC = () => {
  return (
    <div className="w-screen flex flex-col max-w-none h-auto lg:h-[700px] relative overflow-hidden">
      <Carousel
        responsive={responsive}
        infinite
        arrows={false} // Hide default arrows
        showDots
        autoPlay
        autoPlaySpeed={7000}
        containerClass="w-full h-full"
        itemClass="h-full"
        dotListClass="bottom-4 left-4 lg:left-32 z-20 flex justify-start" // Force left alignment, match mobile (px-4) and desktop (pl-32) padding
        renderDotsOutside={false}
        customButtonGroup={<CustomButtonGroup />}
        renderButtonGroupOutside
        customDot={<CustomDot />}
        aria-label="Hero section carousel"
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="relative w-full h-[600px] md:h-[600px] lg:h-[700px] flex flex-col lg:block"
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${idx + 1} of ${slides.length}`}
          >
            {/* Image container - always on top for sm/md devices due to flex-col order */}
            <div className="relative w-full h-[600px] md:h-[600px] lg:h-[700px]">
              <Image
                src={slide.image}
                alt={`${slide.title}${slide.highlight}`}
                fill
                className="object-cover object-right md:object-center"
                sizes="100vw"
                priority={idx === 0} // Only prioritize first slide
                quality={100} // Optimize image quality
              />
              {/* Desktop/Large overlay - shown only on lg+ screens, overlays image */}
              <span className="hidden lg:inline absolute top-0 pl-32 pr-16 left-0 w-5/12 h-full bg-[#fc55e6de] bg-opacity-90">
                <div className="space-y-6 flex flex-col justify-center h-full text-white font-outfit">
                  <h1 className="text-5xl font-black">
                    {slide.title}
                    <span style={{ color: '#75245F' }}>{slide.highlight}</span>.
                  </h1>
                  <div className="h-1 bg-white w-full" />
                  <p className="text-sm pb-6 font-normal max-w-[500px]">{slide.description}</p>
                  <Button variant="secondary" aria-label={slide.button}>
                    {slide.button}
                  </Button>
                </div>
              </span>
            </div>
            {/* Mobile/Tablet - below image on sm/md devices, hidden on lg+ */}
            <div className="lg:hidden w-full bg-[#FC55E5] bg-opacity-90 px-4 py-6">
              <div className="space-y-4 flex flex-col justify-center text-white font-outfit">
                <h1 className="text-4xl xs:text-3xl sm:text-4xl font-black">
                  {slide.title}
                  <span style={{ color: '#75245F' }}>{slide.highlight}</span>.
                </h1>
                <div className="h-0.5 bg-white w-full" />
                <p className="text-xs sm:text-sm font-normal">{slide.description}</p>
                <Button variant="secondary" aria-label={slide.button}>
                  {slide.button}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <MotionTextStrip />
    </div>
  )
}

export default HeroSectionHome