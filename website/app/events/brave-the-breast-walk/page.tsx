import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function BraveTheBreastWalk() {
  return (
    <main className="max-w-[900px] mx-auto px-4 py-12">
      <article className="bg-white  p-8">
        <Link href="/events-calendar" className="inline-flex items-center text-[#FC55E5] font-bold mb-6 hover:underline">
          <FaArrowLeft className="mr-2" /> Back to Events
        </Link>
        <h1 className="font-verveine text-3xl lg:text-5xl text-[#B33791] mb-4">Brave the Breast Walk</h1>
        <img src="/events/breast-walk.jpg" alt="Brave the Breast Walk" className="w-full h-64 object-cover rounded-lg mb-6" />
        <section className="prose space-y-6 max-w-none text-[#75245F]">
          <p>
            Walk with survivors, families, and supporters in Mbabane to promote early detection and honor those affected by breast cancer. This annual event brings together the community for a day of hope, solidarity, and action.
          </p>
          <h2>Event Highlights</h2>
          <ul>
            <li>Inspirational speeches from survivors and advocates</li>
            <li>Group walk through Coronation Park</li>
            <li>Health booths and free screening information</li>
            <li>Music, refreshments, and family-friendly activities</li>
          </ul>
          <h2>How to Register</h2>
          <p>
            Registration is open to all! Sign up online or at the event. Wear pink to show your support and help us spread the word about early detection.
          </p>
        </section>
      </article>
    </main>
  );
}
