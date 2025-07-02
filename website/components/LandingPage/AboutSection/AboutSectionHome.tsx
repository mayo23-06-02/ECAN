"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Ribbon from '../../../assets/ribbonSVG.svg'
import RibbonSM from '../../../assets/ribbonSM.svg'
import Button from '@/components/Re-usable UI/Button'
import { BsArrowRight } from 'react-icons/bs'


function AboutSectionHome() {
    return (
        <div className='lg:py-18 py-8 max-w-[1600px] lg:px-36 mx-auto w-full flex flex-col items-center px-4  lg:space-y-10  text-center relative'>
            <div>
                <p className='text-4xl lg:text-5xl text-left about-reveal'>
                    At, <span style={{ color: '#B33791', fontWeight: 'bold' }}>ECAN</span>. we chart a course to a <span style={{ color: '#B33791', fontWeight: '900' }}>future where EVERY PERSON</span> is <span style={{ color: '#FC55E5', fontWeight: '500' }}>aware, prepared, and uniting against cancer</span> .
                </p>
                <style jsx>{`
                  .about-reveal {
                    opacity: 0;
                    transform: translateY(40px);
                    animation: aboutFadeInUp 1.2s cubic-bezier(0.4,0,0.2,1) 0.2s forwards;
                  }
                  @keyframes aboutFadeInUp {
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                `}</style>
            </div>
            <div>
                <Image src={RibbonSM} alt="Ribbon" width={500} height={500} className='lg:hidden animate-fade-in' />
                <span className='absolute top-[15%] right-0  animate-fade-in'>
                    <Image src={Ribbon} alt="Ribbon" width={600} height={700} className='hidden lg:inline top-0 right-0 lg:top-[-50px] lg:right-[-50px]  animate-fade-in' />
                </span>
            </div>
            <div className='space-y-6 flex flex-col  w-full '>
                <div className='flex flex-col  justify-start  space-y-2  lg:max-w-8/12 w-full'>
                    <div className='flex w-full'>
                        <p className='text-[#FC55E5] font-bold text-left'>At Eswatini Cancer Network, we chart a course to a future where every person is aware, prepared, and uniting against cancer.</p>

                    </div>
                    <div className='flex w-full text-left'>
                        <p>
                            Our mission is rooted in the belief that knowledge is the first line of defense, sparking proactive action and empowering individuals to identify early warning signs. We are dedicated to breaking down barriers to understanding, encouraging open conversations, and providing critical resources that help everyone navigate the challenges posed by cancer. Through education and community outreach, we ensure that every person is equipped with the tools needed to take control of their health.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col  justify-start  space-y-2 lg:max-w-8/12  w-full'>
                    <div className='flex w-full'>
                        <p className='text-[#FC55E5] font-bold text-left'>At Eswatini Cancer Network, we chart a course to a future where every person is aware, prepared, and uniting against cancer.</p>

                    </div>
                    <div className='flex w-full text-left'>
                        <p>
                            Our mission is rooted in the belief that knowledge is the first line of defense, sparking proactive action and empowering individuals to identify early warning signs. We are dedicated to breaking down barriers to understanding, encouraging open conversations, and providing critical resources that help everyone navigate the challenges posed by cancer. Through education and community outreach, we ensure that every person is equipped with the tools needed to take control of their health.
                        </p>
                    </div>
                    <div className='flex w-full py-12'>
                        <Button variant="primary" className="flex items-center" >
                            <Link href="/about">
                                
                                <span className=" transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none  space-x-2 flex">
                                  <p>Learn More</p>  <BsArrowRight className="bg-white text-[#FC55E5] rounded-full h-5 w-5 p-1" />
                                </span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutSectionHome