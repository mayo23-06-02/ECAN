import React from 'react';
import { FaStethoscope, FaMapMarkerAlt, FaCalendarAlt, FaFileDownload, FaCheckCircle } from 'react-icons/fa';

const screeningBenefits = [
  'Early detection saves lives and improves treatment outcomes.',
  'Screenings are quick, confidential, and often free or low-cost.',
  'Mobile clinics bring services to rural and underserved communities.',
  'Follow-up care and support are provided for all patients.',
];

const screeningTypes = [
  {
    icon: <FaStethoscope className="text-[#FC55E5] text-3xl" />, 
    title: 'Breast Cancer Screening',
    description: 'Clinical breast exams and education on self-examination for early detection.'
  },
  {
    icon: <FaStethoscope className="text-[#FC55E5] text-3xl" />, 
    title: 'Cervical Cancer Screening',
    description: 'Visual inspection with acetic acid (VIA) and Pap smears for women at risk.'
  },
];

const resources = [
  {
    label: 'Screening Guide',
    href: '/resources/screening-guide.pdf',
  },
  {
    label: 'Screening Schedule',
    href: '/resources/screening-schedule.pdf',
  },
];

export default function ScreeningPage() {
  return (
    <main className="max-w-[1400px] mx-auto px-4 py-12">
      <section className="mb-12">
        <h1 className="font-verveine text-4xl lg:text-6xl text-[#B33791] mb-4">Cancer Screening</h1>
        <p className="text-lg text-[#75245F] mb-6 max-w-2xl">ECAN offers free and low-cost cancer screening services to help detect breast and cervical cancer early. Our mobile clinics and partner health facilities make screening accessible to all communities in Eswatini.</p>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {screeningTypes.map((type) => (
            <div key={type.title} className="bg-[#F9ECF7] rounded-xl p-6 flex items-start gap-4 shadow">
              {type.icon}
              <div>
                <div className="font-bold text-lg text-[#B33791] mb-1">{type.title}</div>
                <div className="text-[#75245F]">{type.description}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Why Get Screened?</h2>
          <ul className="list-disc pl-6 text-[#75245F] space-y-2">
            {screeningBenefits.map((b, i) => (
              <li key={i}><FaCheckCircle className="inline mr-2 text-[#FC55E5]" />{b}</li>
            ))}
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Upcoming Screening Events</h2>
          <div className="bg-white rounded-xl p-6 shadow flex flex-col md:flex-row items-center gap-6">
            <FaCalendarAlt className="text-[#FC55E5] text-3xl" />
            <div>
              <div className="font-bold text-lg text-[#B33791] mb-1">Check our Events Calendar</div>
              <div className="text-[#75245F] mb-2">Find upcoming mobile clinic dates and locations for free screenings across Eswatini.</div>
              <a href="/events-calendar" className="inline-block px-4 py-2 rounded bg-[#FC55E5] text-white font-bold font-outfit shadow hover:bg-[#B33791] transition-colors">View Events Calendar</a>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Resources</h2>
          <div className="flex flex-wrap gap-4">
            {resources.map((r) => (
              <a key={r.label} href={r.href} className="inline-flex items-center px-4 py-2 rounded bg-white border border-[#FC55E5] text-[#FC55E5] font-bold font-outfit shadow hover:bg-[#FC55E5] hover:text-white transition-colors" download>
                <FaFileDownload className="mr-2" /> {r.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Find a Screening Location</h2>
          <div className="bg-[#F9ECF7] rounded-xl p-6 shadow flex items-center gap-4">
            <FaMapMarkerAlt className="text-[#FC55E5] text-3xl" />
            <div>
              <div className="font-bold text-lg text-[#B33791] mb-1">Nationwide Access</div>
              <div className="text-[#75245F]">Screenings are available at mobile clinics and partner health centers throughout Eswatini. <a href="/contact" className="text-[#FC55E5] underline font-bold">Contact us</a> for help finding a location near you.</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
