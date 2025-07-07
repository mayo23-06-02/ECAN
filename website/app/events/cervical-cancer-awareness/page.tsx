import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';

export default function CervicalCancerAwareness() {
  return (
    <main className="max-w-[900px] mx-auto px-4 py-12">
      <article className="bg-white rounded-xl p-8">
        <Link href="/events-calendar" className="inline-flex items-center text-[#FC55E5] font-bold mb-6 hover:underline">
          <FaArrowLeft className="mr-2" /> Back to Events
        </Link>
        <h1 className="font-verveine text-3xl lg:text-5xl text-[#B33791] mb-4">Cervical Cancer Awareness Month</h1>
        <Image src="/events/cervical-cancer.jpg" alt="Cervical Cancer Awareness" width={900} height={256} className="w-full h-64 object-cover rounded-lg mb-6" />
        <section className="prose max-w-none text-[#75245F]">
          <p>
            January is Cervical Cancer Awareness Month! ECAN is leading a nationwide campaign to educate, screen, and empower women to take charge of their health.
          </p>
          <h2>Campaign Activities</h2>
          <ul>
            <li>Free cervical cancer screenings at health centers</li>
            <li>Workshops on prevention and early detection</li>
            <li>Distribution of educational materials</li>
            <li>Community outreach and radio programs</li>
          </ul>
          <h2>Get Involved</h2>
          <p>
            Find a screening event near you or <Link href="/contact" className="text-[#FC55E5] underline font-bold">contact us</Link> to learn more about cervical cancer prevention.
          </p>
        </section>
      </article>
    </main>
  );
}
