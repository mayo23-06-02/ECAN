import React from 'react';
import { FaHandHoldingHeart, FaMobileAlt, FaUniversity, FaInfoCircle, FaRegEnvelope } from 'react-icons/fa';

const bankDetails = [
  { label: 'Account Name', value: 'Eswatini Cancer Network' },
  { label: 'Bank', value: 'First National Bank (FNB)' },
  { label: 'Account Number', value: '62012345678' },
  { label: 'Branch Code', value: '280164' },
  { label: 'SWIFT Code', value: 'FIRNSZMX' },
  { label: 'Reference', value: 'Donation - [Your Name]' },
];

const momoDetails = [
  { label: 'MoMo Number', value: '+268 7600 1234' },
  { label: 'Account Name', value: 'Eswatini Cancer Network' },
  { label: 'Reference', value: 'Donation - [Your Name]' },
];

export default function DonatePage() {
  return (
    <main className="max-w-[1400px] mx-auto px-4 py-12">
      <section className="mb-12">
        <h1 className="font-verveine text-4xl lg:text-6xl text-[#B33791] mb-4 flex items-center gap-3">
          <FaHandHoldingHeart className="text-[#FC55E5] text-4xl" /> Donate
        </h1>
        <p className="text-lg text-[#75245F] mb-8 max-w-2xl">
          Your support helps ECAN provide life-saving cancer screening, advocacy, and support services across Eswatini. Every contribution makes a difference. <span className="inline-flex items-center text-[#FC55E5] font-bold"><FaInfoCircle className="mr-1" /> All donations are secure and confidential.</span>
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* EFT Section */}
          <div className="bg-[#F9ECF7] rounded-xl p-6  flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <FaUniversity className="text-[#FC55E5] text-2xl" />
              <h2 className="text-xl font-bold text-[#B33791]">Banking Details (EFT)</h2>
            </div>
            <ul className="text-[#75245F] space-y-1 mb-4">
              {bankDetails.map((item) => (
                <li key={item.label}><span className="font-bold">{item.label}:</span> {item.value}</li>
              ))}
            </ul>
            <div className="mt-auto">
              <a href="mailto:info@ecan.org.sz?subject=Donation%20Proof" className="inline-flex items-center px-4 py-2 rounded bg-[#FC55E5] text-white font-bold font-outfit shadow hover:bg-[#B33791] transition-colors"><FaRegEnvelope className="mr-2" />Send Proof of Payment</a>
            </div>
          </div>
          {/* MoMo Section */}
          <div className="bg-[#F9ECF7] rounded-xl p-6  flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <FaMobileAlt className="text-[#FC55E5] text-2xl" />
              <h2 className="text-xl font-bold text-[#B33791]">MTN MoMo (Mobile Money)</h2>
            </div>
            <ul className="text-[#75245F] space-y-1 mb-4">
              {momoDetails.map((item) => (
                <li key={item.label}><span className="font-bold">{item.label}:</span> {item.value}</li>
              ))}
            </ul>
            <div className="mt-auto">
              <a href="mailto:info@ecan.org.sz?subject=MoMo%20Donation%20Proof" className="inline-flex items-center px-4 py-2 rounded bg-[#FC55E5] text-white font-bold font-outfit shadow hover:bg-[#B33791] transition-colors"><FaRegEnvelope className="mr-2" />Send MoMo Proof</a>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6  flex items-center gap-4">
          <FaHandHoldingHeart className="text-[#FC55E5] text-3xl" />
          <div>
            <div className="font-bold text-lg text-[#B33791] mb-1">Thank you for your generosity!</div>
            <div className="text-[#75245F] mb-1">For other ways to give or to request a receipt, please <a href="/contact" className="text-[#FC55E5] underline font-bold">contact us</a>.</div>
            <div className="text-[#75245F]">If you wish to donate tangible assets (equipment, supplies, etc.), these can be delivered to or collected from our office by arrangement. Please <a href="/contact" className="text-[#FC55E5] underline font-bold">get in touch</a> to coordinate.</div>
          </div>
        </div>
      </section>
    </main>
  );
}
