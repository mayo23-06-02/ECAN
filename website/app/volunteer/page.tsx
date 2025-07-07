import React from 'react';
import { FaHandsHelping, FaUserPlus, FaEnvelopeOpenText, FaCheckCircle, FaStar, FaHeart, FaUsers } from 'react-icons/fa';

const benefits = [
  'Make a real impact in the fight against cancer in Eswatini.',
  'Gain valuable experience and skills in health, advocacy, and community work.',
  'Connect with passionate people and inspiring survivors.',
  'Flexible opportunities for students, professionals, and retirees.',
];

const roles = [
  {
    icon: <FaUserPlus className="text-[#FC55E5] text-2xl" />, 
    title: 'Community Outreach',
    description: 'Help organize and run awareness campaigns, events, and mobile clinics.'
  },
  {
    icon: <FaHandsHelping className="text-[#FC55E5] text-2xl" />, 
    title: 'Support Services',
    description: 'Provide psychosocial support, translation, or patient navigation.'
  },
  {
    icon: <FaEnvelopeOpenText className="text-[#FC55E5] text-2xl" />, 
    title: 'Communications',
    description: 'Assist with social media, content creation, and public relations.'
  },
];

export default function VolunteerPage() {
  return (
    <main className="max-w-[900px] mx-auto px-4 py-12">
      <section className="mb-12">
        <h1 className="font-verveine text-4xl lg:text-6xl text-[#B33791] mb-4 flex items-center gap-3 animate-pulse">
          <FaHandsHelping className="text-[#FC55E5] text-4xl animate-bounce" /> Volunteer with ECAN!
        </h1>
        <p className="text-lg text-[#75245F] mb-8 max-w-2xl">
          <span className="inline-flex items-center font-bold text-[#FC55E5] mr-2"><FaStar className="mr-1 animate-spin" />Be a hero!</span>
          Join our vibrant team of changemakers and help us bring hope, support, and smiles to families across Eswatini. Whether you have a few hours a week or can help at special events, your time and skills are <span className="text-[#B33791] font-bold">priceless</span>! <span className="inline-flex items-center text-[#FC55E5] font-bold ml-2"><FaHeart className="mr-1 animate-bounce" />Every act of kindness counts.</span>
        </p>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2"><FaUsers className="text-[#FC55E5]" /> Why Volunteer?</h2>
          <ul className="list-disc pl-6 text-[#75245F] space-y-2">
            {benefits.map((b, i) => (
              <li key={i}><FaCheckCircle className="inline mr-2 text-[#FC55E5] animate-pulse" />{b}</li>
            ))}
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2"><FaStar className="text-[#FC55E5]" /> Ways to Get Involved</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {roles.map((role) => (
              <div key={role.title} className="bg-[#F9ECF7] rounded-xl p-6 flex flex-col items-start shadow hover:scale-105 transition-transform duration-300">
                {role.icon}
                <div className="font-bold text-lg text-[#B33791] mt-2 mb-1">{role.title}</div>
                <div className="text-[#75245F]">{role.description}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow flex flex-col md:flex-row items-center gap-6 border-2 border-[#FC55E5]">
          <div className="flex-1">
            <div className="font-bold text-lg text-[#B33791] mb-1 flex items-center gap-2"><FaHeart className="text-[#FC55E5] animate-bounce" /> Ready to join or want to learn more?</div>
            <div className="text-[#75245F] mb-2">Fill out our volunteer interest form or <a href="/contact" className="text-[#FC55E5] underline font-bold">contact us</a> for more information. <span className="font-bold text-[#FC55E5]">Let’s make a difference together!</span></div>
            <a href="mailto:info@ecan.org.sz?subject=Volunteer%20Interest" className="inline-block px-4 py-2 rounded bg-[#FC55E5] text-white font-bold font-outfit shadow hover:bg-[#B33791] transition-colors animate-pulse">Email Us to Volunteer</a>
          </div>
        </div>
      </section>
    </main>
  );
}
