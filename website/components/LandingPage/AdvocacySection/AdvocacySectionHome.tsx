'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Re-usable UI/Button'
import { BsArrowRight } from 'react-icons/bs'

function AdvocacySectionHome() {
    return (
        <div className='bg-[#F9ECF7] flex flex-col lg:flex-row lg:space-x-8 lg:max-h-[600px]'>
            <div className='min-w-[300px]'>
                <Image src="/support.jpg" alt="Support" width={1000} height={400} className='hidden lg:inline h-[600px] object-cover' />
                <Image src="/support.jpg" alt="Support" width={800} height={100} className='lg:hidden' />
            </div>
            <div className='lg:pr-32 px-6 lg:py-16 py-8'>
                <div>
                    <p className='text-5xl lg:text-7xl text-left advocacy-reveal font-verveine'>
                        <span style={{ color: '#B33791', }}>Transforming Lives<br /> Through Cancer <br /> </span> <span style={{ color: '#FC55E5', fontWeight: '500' }}>Awareness and Support</span>
                    </p>
                    <style jsx>{`
                  .advocacy-reveal {
                    opacity: 0;
                    transform: translateY(40px);
                    animation: advocacyFadeInUp 1.2s cubic-bezier(0.4,0,0.2,1) 0.2s forwards;
                    font-family: var(--font-verveine), serif;
                  }
                  @keyframes advocacyFadeInUp {
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                `}</style>
                </div>
                <div className='space-y-6 flex flex-col lg:max-w-10/12  w-full mt-8'>
                    <p>
                        At Eswatini Cancer Network (ECAN), we are dedicated to improving cancer survival rates in the Kingdom of Eswatini by raising awareness, providing screening services, reducing stigma, and advocating for better care.
                    </p>
                    <p>
                        Over the past 24 years, our efforts have made a tangible difference in the lives of thousands of individuals and communities across Hhohho, Lubombo, Manzini, and Shiselweni. Below, we share the impact of our work and the stories of those we’ve touched.
                    </p>
                </div>
                <div className='pt-8'> 
                    <Link href="/about" className="group">
                        <Button variant="primary" className="flex items-center">
                            <span className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none space-x-2 flex">
                                <span>Learn More</span>
                                <BsArrowRight className="bg-white text-[#FC55E5] rounded-full h-5 w-5 p-1" />
                            </span>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AdvocacySectionHome