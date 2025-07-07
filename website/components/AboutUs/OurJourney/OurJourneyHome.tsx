'use client'
import Button from '@/components/Re-usable UI/Button'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

function OurJourneyHome() {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-2 sm:px-4 py-8 ">
            <div>
                <div>
                    <h1 style={{ fontFamily: 'var(--font-verveine)' }} className="font-verveine text-3xl lg:text-5xl  impact-reveal lg:mb-2 lg:mt-8 text-[#B33791]">A Journey of Hope and Healing</h1>
                    <p className='text-5xl lg:text-7xl mb-8 text-left about-reveal'>
                        Transforming Cancer Care in Eswatini: <span style={{ color: '#FC55E5', fontWeight: '500' }}> Our Journey, Mission, and Impact</span>
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
            </div>
            <div>
                <div className='space-y-6 flex flex-col  w-full '>
                    <div className='flex flex-col  justify-start  space-y-2   w-full'>
                        <div className='flex w-full'>
                            <p className='text-[#FC55E5] font-bold text-left'>At Eswatini Cancer Network, we chart a course to a future where every person is aware, prepared, and uniting against cancer.</p>

                        </div>
                        <div className='flex w-full text-[#75245F] text-left'>
                            <p>
                                In the heart of the Kingdom of Eswatini, where rolling hills meet vibrant communities, a movement was born over two decades ago—a movement fueled by hope, resilience, and an unyielding commitment to transform lives. The Eswatini Cancer Network (ECAN), originally founded in 2001 as the Eswatini Breast Cancer Network, began with a simple yet powerful vision: to ensure no one faces cancer alone. What started as a small group of advocates raising awareness about breast cancer has grown into a beacon of hope, tackling the nation’s most pressing cancer challenges, from cervical and breast cancer to prostate, lung, and paediatric cancers.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col  justify-start  space-y-2   w-full'>

                        <div className='flex w-full text-[#75245F] text-left'>
                            <p>
                                Cancer is a growing shadow in Eswatini, with over 1,000 new cases diagnosed each year. Cervical cancer, in particular, casts a heavy burden, with an incidence rate of 84.5 per 100,000 women—the highest in the world. For too many, a diagnosis comes too late, compounded by stigma, limited access to screening, and stretched healthcare resources. But at eCAN, we see beyond the numbers. We see mothers, fathers, children, and neighbors—each deserving of care, dignity, and a fighting chance.
                            </p>
                        </div>

                    </div>
                    <div>
                        <h1 style={{ fontFamily: 'var(--font-verveine)' }} className="font-verveine text-3xl lg:text-5xl   lg:mb-6 lg:mt-2 text-[#B33791]">Mission & Values</h1>
                        <div className='flex flex-col  justify-start  space-y-2   w-full'>

                            <div className='flex  w-full text-left'>
                                <div>
                                    <p className="mb-4 text-[#FC55E5] font-semibold">At eCAN, we are driven by a relentless mission: to improve survival rates for those affected by cancer through awareness, education, stigma reduction, and advocacy.</p>
                                    <p className="mb-4 text-[#75245F] font-semibold"> We believe early detection, diagnosis, and treatment are the keys to a brighter future. Our core values guide every step we take:</p>
                                    <ul className="list-disc pl-6 space-y-2 text-[#75245F] font-outfit">
                                        <li><span className="font-bold text-primary">Awareness:</span> Educating communities about cancer prevention and the power of early action.</li>
                                        <li><span className="font-bold text-primary">Support:</span> Building a compassionate network for patients, survivors, and families.</li>
                                        <li><span className="font-bold text-primary">Counseling:</span> Offering emotional and practical support to navigate the cancer journey.</li>
                                        <li><span className="font-bold text-primary">Collaboration:</span> Partnering with healthcare providers to ensure seamless care and data-driven impact.</li>
                                        <li><span className="font-bold text-primary">Sustainability:</span> Raising funds to fuel our programs and expand our reach.</li>
                                        <li><span className="font-bold text-primary">Action:</span> Driving initiatives that empower communities and change lives.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 style={{ fontFamily: 'var(--font-verveine)' }} className="font-verveine text-3xl lg:text-5xl pb-4  lg:mb-6 lg:mt-2 text-[#B33791]">A Legacy of Impact</h1>
                        <div className='flex flex-col  justify-start  space-y-2   w-full'>

                            <div className='flex text-[#75245F] w-full text-left'>
                                <p>
                                    From our earliest days, we&#39;ve been relentless in our mission to transform the landscape of cancer care. In 2012, we expanded our focus to include cervical cancer, becoming the Eswatini Breast and Cervical Cancer Network, and today, as eCAN, we stand at the forefront of addressing Eswatini&#39;s top five cancers. Our journey is marked by milestones that echo across communities: mobile clinics reaching remote villages, awareness campaigns breaking the silence on cancer, and partnerships with the Ministry of Health that have brought life-saving screening and treatment closer to those who need it most.
                                </p>
                            </div>
                            <div className='flex text-[#75245F] w-full py-4'>
                                <p>
                                    Picture a dusty road in rural Eswatini, where our mobile clinic arrives to cheers from a waiting crowd. A mother, hesitant but hopeful, steps forward for her first breast screening. A survivor shares her story at our Survivor&#39;s Day, inspiring others to seek help early. These moments—of connection, courage, and care—define who we are. Over the past 25 years, we&#39;ve screened thousands, educated communities, and provided psychosocial support to countless families, proving that early detection is not just a slogan but a lifeline.
                                </p>
                            </div>
                            <h1 style={{ fontFamily: 'var(--font-verveine)' }} className="font-verveine text-3xl lg:text-5xl   lg:mb-6 lg:mt-2 text-[#B33791]">A Future Without Fear</h1>
                            <div className='flex text-[#75245F] w-full pb-4'>
                                <p>
                                    At eCAN, we dream of a day when cancer is no longer a death sentence but a challenge met with knowledge, care, and community. Every step we take—whether through a Brave the Breast Walk, a cervical cancer screening day, or a heartfelt counseling session—brings us closer to that vision. But we can’t do it alone. Whether you’re a patient seeking support, a family member looking for answers, a donor ready to make a difference, or an advocate eager to raise your voice, you are part of our story.
                                </p>
                            </div>
                            <div className='flex text-[#75245F] w-full pb-4'>
                                <p>
                                    Join us. Volunteer for an outreach, donate to support a mobile clinic, or share your story to inspire others. Together, we can build a future where every person in Eswatini has the tools and hope to fight cancer. Take Action today and become part of our relentless mission to transform lives.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default OurJourneyHome