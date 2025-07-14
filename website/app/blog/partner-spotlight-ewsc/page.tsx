import React from 'react';
import { FaRegNewspaper, FaCalendarAlt, FaUserCircle, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function PartnerSpotlightEWSCStory() {
  return (
    <main className="max-w-[900px] mx-auto px-4 py-12">
      <article className="bg-white rounded-xl p-8">
        <Link href="/blog" className="inline-flex items-center text-[#FC55E5] font-bold mb-6 hover:underline">
          <FaArrowLeft className="mr-2" /> Back to Blog
        </Link>
        <div className="mb-4 flex items-center gap-3">
          <FaRegNewspaper className="text-[#FC55E5] text-2xl" />
          <h1 className="font-verveine text-3xl lg:text-5xl text-[#B33791]">Partner Spotlight: How EWSC Helped Build Eswatini’s First Chemotherapy Unit</h1>
        </div>
        <div className="flex items-center text-[#75245F] text-sm mb-6 gap-4">
          <span className="flex items-center"><FaCalendarAlt className="mr-1 text-[#FC55E5]" />14 July 2025</span>
          <span className="flex items-center"><FaUserCircle className="mr-1 text-[#FC55E5]" />EBCCN Team</span>
        </div>
        <Image src="/ewsc-partner.jpg" alt="EWSC Partner Spotlight" width={900} height={256} className="w-full h-64 object-cover rounded-lg mb-6" />
        <section className="prose space-y-4 max-w-none text-[#75245F]">
          <p>
            Partnerships fuel progress. In this edition, we spotlight the Eswatini Water Services Company (EWSC), whose support made history by enabling the construction of the first chemotherapy treatment unit in the country. Discover how this contribution has saved lives and paved the way for expanded cancer services in Eswatini.
          </p>
          <h2>Making History</h2>
          <p>
            With EWSC’s help, EBCCN was able to build a state-of-the-art chemotherapy unit, providing hope and treatment to patients who previously had to travel abroad for care.
          </p>
          <h2>Impact</h2>
          <ul>
            <li>Hundreds of patients now receive treatment closer to home.</li>
            <li>Reduced financial and emotional burden for families.</li>
            <li>Strengthened local healthcare infrastructure.</li>
          </ul>
          <p>
            We are deeply grateful to EWSC and all our partners for their commitment to improving cancer care in Eswatini.
          </p>
        </section>
      </article>
    </main>
  );
}
