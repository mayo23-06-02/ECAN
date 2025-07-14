'use client'
import React from 'react'
import Image from 'next/image'

function OurTeamHome() {
    return (
        <div className='bg-[#F9ECF7] flex flex-col lg:flex-row lg:space-x-8 lg:max-h-[600px]'>
            <div className='min-w-[300px]'>
                <Image src="/support2.jpg" alt="Support" width={1000} height={400} className='hidden lg:inline h-[600px] object-cover' />
                <Image src="/support2.jpg" alt="Support" width={800} height={100} className='lg:hidden' />
            </div>
            <div className='lg:pr-32 px-6 lg:py-16 py-8'>
                <div>
                    <p className='text-5xl lg:text-7xl text-left advocacy-reveal font-verveine'>
                        <span style={{ color: '#B33791', }}>Our Team:  </span> <span style={{ color: '#FC55E5', fontWeight: '500' }}>United by Purpose, Driven by Passion</span>
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
              
             
                <div className='pt-8'>
                    <p>
                        At the heart of ECAN is a dedicated team of professionals, volunteers, and advocates who are deeply passionate about making a difference.
                    </p>
                    <ul className="list-disc pl-6 text-[#75245F] space-y-2 mb-4">
                        <li><span className="font-bold text-[#B33791]">Medical Experts:</span> Oncologists, nurses, and healthcare workers who provide critical screening and support services.</li>
                        <li><span className="font-bold text-[#B33791]">Counsellors and Educators:</span> Compassionate individuals who guide patients and families through their cancer journey with empathy and expertise.</li>
                        <li><span className="font-bold text-[#B33791]">Community Outreach Specialists:</span> Tireless advocates who bring cancer awareness and services directly to communities across Hhohho, Lubombo, Manzini, and Shiselweni.</li>
                    </ul>
                    <p>
                        Together, we are united by a common goal: to eradicate the burden of cancer in Eswatini and ensure that every individual has the support they need.
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default OurTeamHome