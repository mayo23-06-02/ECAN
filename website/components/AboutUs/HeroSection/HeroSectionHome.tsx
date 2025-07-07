import Image from 'next/image'
import React from 'react'

function HeroSectionHome() {
  return (
    <div className="w-full h-[40vw] min-h-[300px] max-h-[600px] relative">
      <Image 
        src="/about-cover.png" 
        alt="About Cover" 
        fill 
        style={{ objectFit: 'cover' }} 
        priority
        sizes="100vw"
      />
    </div>
  )
}

export default HeroSectionHome