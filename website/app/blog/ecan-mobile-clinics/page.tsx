import React from 'react';
import { FaRegNewspaper, FaCalendarAlt, FaUserCircle, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function MobileClinicsStory() {
  return (
    <main className="max-w-[900px] mx-auto px-4 py-12">
      <article className="bg-white rounded-xl  p-8">
        <Link href="/blog" className="inline-flex items-center text-[#FC55E5] font-bold mb-6 hover:underline">
          <FaArrowLeft className="mr-2" /> Back to Blog
        </Link>
        <div className="mb-4 flex items-center gap-3">
          <FaRegNewspaper className="text-[#FC55E5] text-2xl" />
          <h1 className="font-verveine text-3xl lg:text-5xl text-[#B33791]">ECAN Launches New Mobile Screening Clinics</h1>
        </div>
        <div className="flex items-center text-[#75245F] text-sm mb-6 gap-4">
          <span className="flex items-center"><FaCalendarAlt className="mr-1 text-[#FC55E5]" />15 Jun 2025</span>
          <span className="flex items-center"><FaUserCircle className="mr-1 text-[#FC55E5]" />N. Dlamini</span>
        </div>
        <img src="/truck.jpg" alt="Mobile Clinic" className="w-full h-64 object-cover rounded-lg mb-6" />
        <section className="prose space-y-4 max-w-none text-[#75245F]">
          <p>
            The Eswatini Cancer Network (ECAN) is proud to announce the launch of our new mobile screening clinics, a major step forward in making cancer detection and care accessible to all communities across Eswatini.
          </p>
          <p>
            These state-of-the-art mobile units are equipped to provide breast and cervical cancer screenings, health education, and referrals for follow-up care. By bringing services directly to rural and underserved areas, ECAN is breaking down barriers to early detection and treatment.
          </p>
          <h2>How the Mobile Clinics Work</h2>
          <ul>
            <li>Clinics travel to communities on a rotating schedule, announced in advance via our website and local radio.</li>
            <li>Services are provided by trained nurses and healthcare professionals.</li>
            <li>All screenings are confidential, quick, and free or low-cost.</li>
            <li>Patients receive education on cancer prevention and next steps if further care is needed.</li>
          </ul>
          <h2>Community Impact</h2>
          <p>
            Since the launch, hundreds of women have already accessed life-saving screenings. Community leaders have praised the initiative for its convenience and the hope it brings to families who previously faced long journeys to health facilities.
          </p>
          <blockquote>
            "This mobile clinic came right to our village. I was able to get screened and learn more about cancer. It was easy and the nurses were so kind." <br />
            <span className="font-bold">— Community Member, Lubombo</span>
          </blockquote>
          <h2>What’s Next?</h2>
          <p>
            ECAN will continue to expand the mobile clinic program, with plans to reach every region of Eswatini. Stay tuned to our <Link href="/events-calendar" className="text-[#FC55E5] underline font-bold">Events Calendar</Link> for upcoming dates and locations.
          </p>
          <p>
            For more information or to support our work, <Link href="/contact" className="text-[#FC55E5] underline font-bold">contact us</Link> or consider making a <Link href="/donate" className="text-[#FC55E5] underline font-bold">donation</Link>.
          </p>
        </section>
      </article>
    </main>
  );
}
