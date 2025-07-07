import React from 'react';
import { FaHandsHelping, FaUserFriends, FaHeartbeat, FaComments, FaSmile, FaFileDownload } from 'react-icons/fa';

const psychosocialServices = [
  {
    icon: <FaHandsHelping className="text-[#FC55E5] text-3xl" />, 
    title: 'Support Groups',
    description: 'Peer-led and professionally facilitated groups for patients, survivors, and families to share experiences, encouragement, and hope.'
  },
  {
    icon: <FaUserFriends className="text-[#FC55E5] text-3xl" />,
    title: 'Counseling & Emotional Support',
    description: 'Confidential counseling and guidance to help individuals and families cope with diagnosis, treatment, and survivorship.'
  },
  {
    icon: <FaHeartbeat className="text-[#FC55E5] text-3xl" />,
    title: 'Patient Navigation',
    description: 'Assistance with referrals, appointments, and navigating the healthcare system for timely, coordinated care.'
  },
  {
    icon: <FaComments className="text-[#FC55E5] text-3xl" />,
    title: 'Community Education',
    description: 'Workshops and outreach to reduce stigma, promote early help-seeking, and empower communities.'
  },
  {
    icon: <FaSmile className="text-[#FC55E5] text-3xl" />,
    title: 'Survivorship & Wellbeing',
    description: 'Programs to support quality of life, resilience, and long-term wellbeing for survivors and caregivers.'
  },
];

export default function PsychosocialPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-4 py-12">
      <section className="mb-12">
        <h1 className="font-verveine text-4xl lg:text-6xl text-[#B33791] mb-4">Psychosocial Support</h1>
        <p className="text-lg text-[#75245F] mb-6 max-w-2xl">At ECAN, we believe that cancer care goes beyond medical treatment. Our psychosocial programs provide emotional, social, and practical support to help patients, survivors, and families navigate every step of the cancer journey with dignity and hope.</p>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {psychosocialServices.map((service) => (
            <div key={service.title} className="bg-[#F9ECF7] rounded-xl p-6 flex items-start gap-4 shadow">
              {service.icon}
              <div>
                <div className="font-bold text-lg text-[#B33791] mb-1">{service.title}</div>
                <div className="text-[#75245F]">{service.description}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Why Psychosocial Support Matters</h2>
          <ul className="list-disc pl-6 text-[#75245F] space-y-2">
            <li>Reduces anxiety, depression, and distress for patients and families.</li>
            <li>Improves treatment adherence and health outcomes.</li>
            <li>Builds resilience and a sense of community.</li>
            <li>Empowers individuals to make informed decisions about their care.</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Downloadable Resources</h2>
          <div className="flex flex-wrap gap-4">
            <a href="/resources/psychosocial-guide.pdf" className="inline-flex items-center px-4 py-2 rounded bg-white border border-[#FC55E5] text-[#FC55E5] font-bold font-outfit shadow hover:bg-[#FC55E5] hover:text-white transition-colors" download>
              <FaFileDownload className="mr-2" /> Psychosocial Support Guide
            </a>
            <a href="/resources/coping-tips.pdf" className="inline-flex items-center px-4 py-2 rounded bg-white border border-[#FC55E5] text-[#FC55E5] font-bold font-outfit shadow hover:bg-[#FC55E5] hover:text-white transition-colors" download>
              <FaFileDownload className="mr-2" /> Coping Tips for Patients & Families
            </a>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Need Support?</h2>
          <p className="text-[#75245F] mb-4">Contact our psychosocial team for confidential support, referrals, or to join a support group. <a href="/contact" className="text-[#FC55E5] underline font-bold">Contact Us</a></p>
        </div>
      </section>
    </main>
  );
}
