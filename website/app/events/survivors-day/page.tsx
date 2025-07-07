import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function SurvivorsDay() {
  return (
    <main className="max-w-[900px] mx-auto px-4 py-12">
      <article className="bg-white  p-8">
        <Link href="/events-calendar" className="inline-flex items-center text-[#FC55E5] font-bold mb-6 hover:underline">
          <FaArrowLeft className="mr-2" /> Back to Events
        </Link>
        <h1 className="font-verveine text-3xl lg:text-5xl text-[#B33791] mb-4">Survivor's Day</h1>
        <img src="/events/survivors-day.jpg" alt="Survivor's Day" className="w-full h-64 object-cover rounded-lg mb-6" />
        <section className="prose space-y-6 max-w-none text-[#75245F]">
          <p>
            Celebrate resilience and hope with cancer survivors and their families at our annual Survivor's Day event. This special day is dedicated to honoring the strength and courage of those who have faced cancer.
          </p>
          <h2>What to Expect</h2>
          <ul>
            <li>Recognition ceremony for survivors</li>
            <li>Motivational talks and sharing of survivor stories</li>
            <li>Support resources for patients and families</li>
            <li>Music, food, and community celebration</li>
          </ul>
          <h2>Join Us</h2>
          <p>
            Everyone is welcome! Whether you are a survivor, family member, or supporter, your presence makes this day meaningful. <Link href="/contact" className="text-[#FC55E5] underline font-bold">Contact us</Link> for more details or to participate.
          </p>
        </section>
      </article>
    </main>
  );
}
