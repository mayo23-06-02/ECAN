import React from 'react';
import { FaRegNewspaper, FaCalendarAlt, FaUserCircle, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function AwarenessMonthStory() {
  return (
    <main className="max-w-[900px] mx-auto px-4 py-12">
      <article className="bg-white rounded-xl  p-8">
        <Link href="/blog" className="inline-flex items-center text-[#FC55E5] font-bold mb-6 hover:underline">
          <FaArrowLeft className="mr-2" /> Back to Blog
        </Link>
        <div className="mb-4 flex items-center gap-3">
          <FaRegNewspaper className="text-[#FC55E5] text-2xl" />
          <h1 className="font-verveine text-3xl lg:text-5xl text-[#B33791]">Cancer Awareness Month: Key Takeaways</h1>
        </div>
        <div className="flex items-center text-[#75245F] text-sm mb-6 gap-4">
          <span className="flex items-center"><FaCalendarAlt className="mr-1 text-[#FC55E5]" />01 May 2025</span>
          <span className="flex items-center"><FaUserCircle className="mr-1 text-[#FC55E5]" />S. Mthethwa</span>
        </div>
        <img src="/truck.jpg" alt="Cancer Awareness Month" className="w-full h-64 object-cover rounded-lg mb-6" />
        <section className="prose space-y-4 max-w-none text-[#75245F]">
          <p>
            Cancer Awareness Month 2025 was a resounding success, uniting communities across Eswatini in the fight against cancer. Through a series of outreach events, survivor stories, and educational campaigns, ECAN helped shine a light on prevention, early detection, and hope.
          </p>
          <h2>Highlights from the Campaign</h2>
          <ul>
            <li>Mobile clinics provided free screenings in all four regions, reaching over 1,200 people.</li>
            <li>Survivors shared their journeys, inspiring others to seek help and support.</li>
            <li>Workshops and radio programs educated the public on cancer risk factors and healthy living.</li>
            <li>Community leaders and volunteers distributed information and encouraged open conversations about cancer.</li>
          </ul>
          <h2>Stories of Strength</h2>
          <p>
            One of the most moving moments was hearing from survivors who bravely shared their experiences. Their stories of resilience and recovery gave hope to many and reminded us all of the importance of early detection.
          </p>
          <blockquote>
            "I never thought I would be a survivor. Thanks to ECAN’s awareness campaign, I got screened early and received the care I needed." <br />
            <span className="font-bold">— Survivor, Manzini</span>
          </blockquote>
          <h2>Resources Shared</h2>
          <p>
            Throughout the month, ECAN distributed educational materials, hosted Q&A sessions, and provided links to helpful resources. You can find more information and download materials from our <Link href="/blog" className="text-[#FC55E5] underline font-bold">Blog & Reports</Link> page.
          </p>
          <p>
            Thank you to everyone who participated, volunteered, and supported Cancer Awareness Month. Together, we are making a difference!
          </p>
        </section>
      </article>
    </main>
  );
}
