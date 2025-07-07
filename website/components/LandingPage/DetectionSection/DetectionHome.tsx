'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Re-usable UI/Button'
import { BsArrowRight } from 'react-icons/bs'

function DetectionSectionHome() {
    return (
        <div className='bg-[#F9ECF7] mt-8 flex flex-col lg:flex-row lg:space-x-8 lg:max-h-[700px]'>
            <div className='min-w-[400px] flex items-end'>
                <Image src="/detection.png" alt="Support" width={500} height={200} className='hidden lg:inline h-[600px] object-cover' />
            </div>
            <div className='lg:pr-32 px-6 lg:py-16 py-8'>
                <div>
                    <p className='text-5xl lg:text-7xl text-left advocacy-reveal font-verveine'>
                        <span style={{ color: '#B33791', }}>Why Early<br />  </span> <span style={{ color: '#FC55E5', fontWeight: '500' }}>Detection Matters?</span>
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
                        Early detection of esophageal cancer (ECAN) can be a game-changer. Catching it early means better treatment options, higher survival rates—up to 47% for early stages—and less invasive procedures. It helps prevent complications, preserves quality of life, and reduces treatment costs. If you’re at risk (e.g., chronic heartburn, Barrett’s esophagus, or smoking history), regular screenings like endoscopy can spot issues before they worsen. Act early, know the signs, and talk to your doctor—it could save your life.


                    </p>
                    <p>
                        Raising awareness about early detection empowers communities to take proactive steps. By recognizing symptoms like persistent heartburn or difficulty swallowing and seeking timely medical advice, individuals can catch precancerous conditions like Barrett’s esophagus before they progress. Spread the word, encourage screenings, and help save lives through early action.
                    </p>
                </div>
                <div className='pt-8'>
                    <Link href="/about" passHref legacyBehavior>
                        <Button variant="primary" className="flex items-center group">
                            <span className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none space-x-2 flex">
                                <span>Learn More</span>
                                <BsArrowRight className="bg-white text-[#FC55E5] rounded-full h-5 w-5 p-1" />
                            </span>
                        </Button>
                    </Link>
                </div>

            </div>
                <Image src="/detection.png" alt="Support" width={800} height={100} className='lg:hidden' />

        </div>
    )
}

export default DetectionSectionHome