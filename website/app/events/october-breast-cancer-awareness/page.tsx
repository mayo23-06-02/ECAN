import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function OctoberBreastCancerAwareness() {
  return (
    <main className="max-w-[900px] mx-auto px-4 py-12">
      <article className="bg-white  p-8">
        <Link href="/events-calendar" className="inline-flex items-center text-[#FC55E5] font-bold mb-6 hover:underline">
          <FaArrowLeft className="mr-2" /> Back to Events
        </Link>
        <h1 className="font-verveine text-3xl lg:text-5xl text-[#B33791] mb-4">October Breast Cancer Awareness Month</h1>
        <img src="/events/breast-cancer-month.jpg" alt="Breast Cancer Awareness" className="w-full h-64 object-cover rounded-lg mb-6" />
        <section className="prose space-y-6 max-w-none text-[#75245F]">
          <p>
            Join ECAN throughout October for International Breast Cancer Awareness Month! We are hosting a series of talks, free screenings, and community events across Eswatini to raise awareness and promote early detection.
          </p>
          <h2>What to Expect</h2>
          <ul>
            <li>Educational workshops and Q&A sessions with medical experts</li>
            <li>Mobile screening clinics in all four regions</li>
            <li>Community walks and survivor celebrations</li>
            <li>Distribution of educational materials and pink ribbons</li>
          </ul>
          <h2>How to Participate</h2>
          <p>
            Everyone is welcome! Check our schedule for events near you or <Link href="/contact" className="text-[#FC55E5] underline font-bold">contact us</Link> to get involved as a volunteer or sponsor.
          </p>
          <p>
            Let’s unite to fight breast cancer and support those affected. Your participation saves lives!
          </p>
        </section>
      </article>
    </main>
  );
}
