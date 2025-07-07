"use client"
import Button from '@/components/Re-usable UI/Button'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Image from 'next/image'

interface DonateHomeProps {
    showImage?: boolean;
}

function DonateHome({ showImage = true }: DonateHomeProps) {
    return (
        <div className='max-w-[1400px] mx-auto flex flex-col items-center justify-center space-y-4 font-outfit'>
            <div className='text-[#fc55e6de] text-3xl lg:text-6xl font-bold text-center'>
                <p>Fuel Hope, Fund Healing <br />
                    Support ECAN’s Mission!</p>
            </div>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                <Button variant="primary" onClick={() => alert("Clicked!")}>
                    <p className="whitespace-nowrap flex w-full justify-center items-center gap-4 font-outfit font-bold">
                        DONATE
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none animate-arrow-bounce">
                            <BsArrowRight className="bg-white text-[#FC55E5] rounded-full h-5 w-5 p-1" />
                        </span>
                    </p>
                </Button>
                <p>CHANGE LIVES!</p>
            </div>
            {showImage && (
                <div>
                    <Image src="/donate-ribbon.png" alt="Donate Ribbon" width={1920} height={500} className='animate-fade-in' />   
                </div>
            )}
        </div>
    )
}

export default DonateHome