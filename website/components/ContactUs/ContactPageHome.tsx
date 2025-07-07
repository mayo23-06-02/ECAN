'use client'
import React, { useState } from 'react';
import { FaChevronDown, FaFacebookF, FaInstagram } from 'react-icons/fa';

const faqs = [
    {
        q: 'How can I get screened for breast or cervical cancer?',
        a: 'ECAN provides free or low-cost screening services through our mobile clinic outreach programs and in partnership with government health facilities. You can find upcoming screening dates and locations on our website’s Events Calendar or contact us directly for assistance.',
    },
    {
        q: 'How much do screening services cost?',
        a: 'Our screening services are free of charge. Screenings provided at clinics – fees are minimal.',
    },
    {
        q: 'What types of cancer does ECAN focus on?',
        a: 'ECAN focuses primarily on breast and cervical cancer, the leading cancers among women in Eswatini. We also provide information and referrals for other cancer types in collaboration with the Ministry of Health and partner facilities.',
    },
    {
        q: 'What should I expect during a screening?',
        a: 'During screening, a trained nurse or health worker will conduct a visual inspection (for cervical cancer) or clinical breast exam (for breast cancer). It is quick, confidential, and takes about 10–25 minutes. Follow-up care is provided when needed.',
    },
    {
        q: 'What happens if my screening results are abnormal?',
        a: 'If any abnormalities are found, you will be referred for further testing or treatment at a government health facility or one of our partner hospitals. ECAN offers psychosocial support and follow-up services to ensure you are not alone on your health journey.',
    },
    {
        q: 'Where is ECAN located?',
        a: 'ECAN’s main office is based in Mbabane, Eswatini, with outreach conducted nationwide, especially in rural and underserved communities. Visit our Contact Us page for directions or to get in touch.',
    },
    {
        q: 'How can I volunteer or work with ECAN?',
        a: 'We welcome both volunteers and professionals! Please visit our Get Involved page or email us at info@ebccn.org.sz to learn about current opportunities.',
    },
    {
        q: 'How can I support ECAN’s work?',
        a: 'You can support us by making a donation, volunteering, or partnering with us on outreach and advocacy. Visit our Support Us page to find ways to contribute to the fight against cancer in Eswatini.',
    },
];

const contactInfo = {
    phone: ['+268 79021077', '+268 79021071', '+268 79021072'],
    email: 'admin@ebccn.org.sz',
    address: [
        'P.O. Box A712, Swazi Plaza Mbabane, Swaziland',
        'Portion 589 of Farm no. 2, Checkers, Mbabane',
        'Next to Mbabane Clinic',
    ],
    facebook: 'https://facebook.com/SwazilandBreastandCervicalCancerNetwork',
    instagram: 'https://instagram.com/EswatiniBreastAndCervicalCancerNetwork',
};

function ContactPageHome() {
    const [openIdx, setOpenIdx] = useState<number | null>(null);
    return (
        <div className="max-w-[1400px] mx-auto py-12 px-4">
          
            <div className="mb-12">
               
                <h1 style={{ fontFamily: 'var(--font-verveine)' }} className="font-verveine text-3xl lg:text-5xl pb-4  lg:mb-6 lg:mt-2 text-[#B33791]">Frequently Asked Questions</h1>
                <ul className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <li key={faq.q} className="border-b border-gray-200 pb-2">
                            <button
                                className="flex items-center w-full text-left font-bold text-[#FC55E5] text-lg focus:outline-none"
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                aria-expanded={openIdx === idx}
                                aria-controls={`faq-${idx}`}
                            >
                                <span className="flex-1">{faq.q}</span>
                                <FaChevronDown
                                    className={`ml-2 opacity-40 transition-transform ${openIdx === idx ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            {openIdx === idx && (
                                <div
                                    id={`faq-${idx}`}
                                    className="mt-2 text-[#75245F] bg-gray-50 p-2 rounded-lg text-base font-normal animate-fade-in"
                                >
                                    {faq.a}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mb-12">
                <h1 style={{ fontFamily: 'var(--font-verveine)' }} className="font-verveine text-3xl lg:text-5xl pb-4  lg:mb-6 lg:mt-2 text-[#B33791]">Contact Us</h1>
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="space-y-2 text-[#75245F] flex-1 min-w-0">
                        <div>
                            <span className="font-bold">Phone:</span>{' '}
                            {contactInfo.phone.join(', ')}
                        </div>
                        <div>
                            <span className="font-bold">Email:</span>{' '}
                            <a
                                href={`mailto:${contactInfo.email}`}
                                className="text-[#FC55E5] underline"
                            >
                                {contactInfo.email}
                            </a>
                        </div>
                        <div>
                            <span className="font-bold">Address:</span>
                            <ul className="list-disc pl-6">
                                {contactInfo.address.map((line, i) => (
                                    <li key={i}>{line}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-6 lg:mt-0 flex-1 max-w-4xl w-full">
                        <iframe
                            title="ECAN Location"
                            src="https://www.google.com/maps?q=Portion+589+of+Farm+no.+2,+Checkers,+Mbabane,+Eswatini&output=embed"
                            width="100%"
                            height="300"
                            style={{ border: 0, borderRadius: '0.75rem' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full rounded-xl "
                        ></iframe>
                    </div>
                </div>
            </div>
         
        </div>
    );
}

export default ContactPageHome;