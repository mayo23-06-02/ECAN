'use client'
import Image from 'next/image'
import React from 'react'

function SponsorsHome() {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-2 sm:px-4 flex flex-col items-center justify-center py-8 lg:py-16 text-center">
            <h1 style={{ fontFamily: 'var(--font-verveine)' }} className="font-verveine text-5xl py-8 lg:text-7xl impact-reveal text-[#B33791]">Our Sponsors</h1>
            <Image src="/sponsors.png" alt="Sponsors" width={1440} height={800} className='animate-fade-in mx-auto' />
        </div>
    )
}

export default SponsorsHome
