import React from 'react';
import Link from 'next/link';
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const events = [
    {
        title: 'October Breast Cancer Awareness Month',
        date: 'October 1–31, 2025',
        description:
            'Raise awareness with us during International Breast Cancer Awareness Month through talks, screenings, and community events across Eswatini.',
        location: 'Nationwide',
        cta: 'Join the Campaign',
        link: '/events/october-breast-cancer-awareness',
    },
    {
        title: 'Brave the Breast Walk',
        date: 'November 01, 2025',
        description:
            'Walk with survivors, families, and supporters in Mbabane to promote early detection and honor those affected by breast cancer.',
        location: 'Coronation Park, Mbabane',
        cta: 'Register Now',
        link: '/events/brave-the-breast-walk',
    },
    
];

const UpcomingEventsSection = () => (
    <section className="py-16 bg-white" id="upcoming-events">
        <div className="max-w-[1400px] mx-auto px-4">
            <h1 style={{ fontFamily: 'var(--font-verveine)' }} className="font-verveine text-3xl lg:text-5xl  impact-reveal lg:mb-8 lg:mt-8 text-[#B33791] text-center">Upcoming Events</h1>

            <p className="text-lg text-[#FC55E5] text-secondary mb-16 text-center font-outfit">
                Join us in the fight against cancer through awareness, community action,
                and early detection. Your participation saves lives!
            </p>
            <div className="grid gap-8 md:grid-cols-2">
                {events.map((event, idx) => {
                    // Extract day and month for the date badge
                    let Day = '';
                    let Month = '';
                    // Try to parse the first date in the string
                    const dateMatch = event.date.match(/([A-Za-z]+)\s(\d{1,2})/);
                    if (dateMatch) {
                        Month = dateMatch[1].slice(0, 3).toUpperCase();
                        Day = dateMatch[2];
                    } else if (event.date === 'Ongoing' || event.date === 'January 2026') {
                        Month = event.date.split(' ')[0].slice(0, 3).toUpperCase();
                        Day = event.date.split(' ')[1] || '';
                    }
                    return (
                        <div
                            key={event.title}
                            className={`rounded-xl  p-6 flex flex-col justify-between h-full animate-fade-in-up 
                                ${idx % 2 === 1 ? 'bg-[#F9ECF7]' : 'bg-[#F9ECF7]'}
                                ${idx === 1 ? 'md:col-start-2' : ''}
                            `}
                        >
                            <div className="grid grid-cols-7 grid-flow-row">
                                <div className='col-span-2 flex flex-col items-center justify-center'>
                                    <div className="bg-primary text-[#FC55E5] rounded-lg px-2 py-1  text-center text-8xl font-bold  font-outfit">
                                        {Day || '—'}
                                    </div>
                                    <div className="text-secondary font-bold text-xs uppercase tracking-widest font-outfit">
                                        {Month || ''}
                                    </div>
                                </div>
                                <div className='col-span-5 flex flex-col justify-start items-start text-[#75245F]'>
                                    <h3 className="text-xl font-bold text-primary mb-2 font-outfit flex items-center">
                                        {event.title}
                                    </h3>

                                    <div className="flex items-center text-sm text-secondary mb-3 bg-white rounded-xl px-4 py-1 flex-wrap w-fit">
                                        <FaMapMarkerAlt className="mr-1" />
                                        <span className="whitespace-nowrap">{event.location}</span>
                                    </div>
                                    <p className="text-[#232357] mb-4 font-outfit">
                                        {event.description}
                                    </p>
                                    <Link
                                        href={event.link}
                                        className="inline-flex items-center text-[#FC55E5] bg-primary hover:bg-secondary transition-colors font-bold  py-2 rounded-lg font-outfit w-max mt-2"
                                    >
                                        {event.cta}{' '}
                                        <FaArrowRight className="ml-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center mt-10">
                <Link
                    href="/events-calendar"
                    className="inline-flex items-center text-primary hover:text-secondary font-bold font-outfit text-lg"
                >
                    View Full Events Calendar <FaArrowRight className="ml-2" />
                </Link>
            </div>
        </div>
    </section>
);

export default UpcomingEventsSection;
