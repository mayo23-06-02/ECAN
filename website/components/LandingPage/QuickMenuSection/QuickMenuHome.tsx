'use client'
import React from 'react'
import Image from 'next/image'
import Button from '@/components/Re-usable UI/Button'

function QuickMenuHome() {
    const cards = [
        {
            title: 'Donate to Save Lives!',
            description: 'Your donation helps us provide screenings, support, and hope to those affected by cancer.',
            image: '/donate.png',
        },
        {
            title: 'Join Brave the Breast Walk!',
            description: 'Walk with us to raise awareness and funds for breast cancer prevention and support.',
            image: '/breast-walk.png',
        },
        {
            title: 'Learn About Cancer Prevention',
            description: 'Discover tips and resources to reduce your cancer risk and stay healthy.',
            image: '/learn.png',
        },
        {
            title: 'Support Our Survivors',
            description: 'Stand with survivors and help us build a community of strength and resilience.',
            image: '/support.png',
        },
        {
            title: 'Volunteer With ECAN!',
            description: 'Join our team and make a difference in the fight against cancer.',
            image: '/volunteer.png',
        },
        {
            title: 'Get Screened Today',
            description: 'Early detection is key to improving cancer survival rates. Regular screenings can help identify precancerous conditions and cancers at an early stage.',
            image: '/screening.png',
        },
    ];
    return (
        <div className="w-full max-w-[1400px] mx-auto px-2 sm:px-4 py-8 lg:py-16">
            <div>
                <h1 style={{ fontFamily: 'var(--font-verveine)' }} className="font-verveine text-3xl lg:text-5xl  impact-reveal lg:mb-2 lg:mt-8 text-[#B33791]">Take action</h1>
                <p className='text-5xl lg:text-7xl mb-8 text-left about-reveal'>
                    Unleash a symphony of action — <span style={{ color: '#FC55E5', fontWeight: '500' }}><br /> donate, engage, and test.</span>
                </p>
                <style jsx>{`
                  .about-reveal {
                    opacity: 0;
                    transform: translateY(40px);
                    animation: aboutFadeInUp 1.2s cubic-bezier(0.4,0,0.2,1) 0.2s forwards;
                  }
                  .impact-reveal {
                    opacity: 0;
                    transform: translateY(40px);
                    animation: impactFadeInUp 1.2s cubic-bezier(0.4,0,0.2,1) 0.1s forwards;
                  }
                  @keyframes aboutFadeInUp {
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                  @keyframes impactFadeInUp {
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                `}</style>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {cards.map((card, idx) => (
                    <div key={idx} className="flex flex-col bg-[#FFF7FE] p-4 rounded-2xl max-w-full h-full">
                        <Image src={card.image} alt={card.title} width={450} height={200} className='object-cover rounded-xl' />
                        <div>
                            <p className='text-xl lg:text-2xl text-left mt-4 font-bold text-[#B33791]'>{card.title}</p>
                            <p className='text-lg lg:text-xl text-left line-clamp-2 text-[#75245F]'>{card.description}</p>
                        </div>
                        <Button variant="secondary" className="mt-4">
                            Read More
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuickMenuHome