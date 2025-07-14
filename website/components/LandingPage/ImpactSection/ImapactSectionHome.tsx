"use client"
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { BiScan } from 'react-icons/bi'

function ImpactCardCarousel() {
    const cards = [
        {
            title: "+50K",
            subtitle: "Lives Reached Through Awareness",
            description: "Through nationwide campaigns, school visits, and community events, ECAN has educated over 50,000 people about cancer prevention, early signs, and the importance of screening.",
            icon: <BiScan className="text-[#B33791] text-5xl" />
        },
        {
            title: "+15K",
            subtitle: "Screenings & Early Detections",
            description: "Over 15,000 free or low-cost breast, cervical, and prostate cancer screenings provided since 2001. Hundreds of early-stage cancers detected, giving patients a better chance at survival.",
            icon: <BiScan className="text-[#B33791] text-5xl" />
        },
        {
            title: "+1,200",
            subtitle: "Patients Supported Annually",
            description: "Each year, ECAN offers psychosocial support, patient navigation, and financial assistance to more than 1,200 individuals and families affected by cancer across Eswatini.",
            icon: <BiScan className="text-[#B33791] text-5xl" />
        }
    ];

    const responsive = {
        largeDesktop: {
            breakpoint: { max: 4000, min: 1536 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 1536, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 640 },
            items: 2,
            partialVisibilityGutter: 40
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1,
            partialVisibilityGutter: 30
        }
    };

    return (
        <div className="w-full max-w-[1400px] mx-auto px-2 sm:px-4 py-8 lg:py-16">
            <h1 style={{ fontFamily: 'var(--font-verveine)' }} className="font-verveine text-3xl lg:text-5xl  impact-reveal lg:mb-2 lg:mt-8 text-[#B33791]">Our Impact</h1>
            <p className='text-5xl lg:text-7xl mb-8 text-left about-reveal'>
                    We launch a constellation of change<span style={{ color: '#FC55E5', fontWeight: '500' }}> to a cancer-free tomorrow</span> .
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
            <Carousel
                responsive={responsive}
                infinite
                arrows={false}
                showDots={false}
                itemClass="px-2"
                containerClass="py-8"
                partialVisible
                renderDotsOutside={false}
                renderButtonGroupOutside={false}
                draggable
                swipeable
                autoPlay
            >
                {cards.map((card, index) => (
                    <div key={index} className="relative bg-[#FFF7FE] border-b-8 border-[#CB76B3] flex flex-col pt-12 justify-center p-6 h-[450px] min-w-[250px] impact-reveal ">
                        <span className='absolute top-4 right-4'>
                            {card.icon}
                        </span>
                        <div className="text-5xl lg:text-6xl font-bold text-[#75245F]">{card.title}</div>
                        <div className="text-xl lg:text-2xl text-[#75245F] mt-2 font-bold">{card.subtitle}</div>
                        <div className="text-sm lg:text-base text-[#75245F] mt-4">{card.description}</div>
                    </div>
                ))}
            </Carousel>
            <style jsx>{`
        .impact-reveal {
          opacity: 0;
          transform: translateY(40px);
          animation: impactFadeInUp 1.2s cubic-bezier(0.4,0,0.2,1) 0.1s forwards;
        }
        @keyframes impactFadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    )
}

export default ImpactCardCarousel