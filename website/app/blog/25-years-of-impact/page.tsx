import React from 'react';
import { FaRegNewspaper, FaCalendarAlt, FaUserCircle, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function Impact25YearsStory() {
  return (
    <main className="max-w-[900px] mx-auto px-4 py-12">
      <article className="bg-white rounded-xl p-8">
        <Link href="/blog" className="inline-flex items-center text-[#FC55E5] font-bold mb-6 hover:underline">
          <FaArrowLeft className="mr-2" /> Back to Blog
        </Link>
        <div className="mb-4 flex items-center gap-3">
          <FaRegNewspaper className="text-[#FC55E5] text-2xl" />
          <h1 className="font-verveine text-3xl lg:text-5xl text-[#B33791]">25 Years of Impact: EBCCN’s Journey in the Fight Against Cancer</h1>
        </div>
        <div className="flex items-center text-[#75245F] text-sm mb-6 gap-4">
          <span className="flex items-center"><FaCalendarAlt className="mr-1 text-[#FC55E5]" />14 July 2025</span>
          <span className="flex items-center"><FaUserCircle className="mr-1 text-[#FC55E5]" />EBCCN Team</span>
        </div>
        <Image src="/impact-25.jpg" alt="25 Years of Impact" width={900} height={256} className="w-full h-64 object-cover rounded-lg mb-6" />
        <section className="prose space-y-4 max-w-none text-[#75245F]">
          <p>
            This year, EBCCN proudly celebrates 25 years of unwavering commitment to reducing the cancer burden in Eswatini. From community outreach to launching the country’s first chemotherapy treatment unit, we’ve grown into a trusted partner in public health. This post reflects on our journey, major milestones, and the lives we’ve touched along the way.
          </p>
          <h2>Our Journey</h2>
          <p>
            Since our founding in 2000, EBCCN has worked tirelessly to raise awareness, provide screenings, and support those affected by cancer. Our journey has been marked by innovation, compassion, and a relentless drive to make a difference.
          </p>
          <h2>Major Milestones</h2>
          <ul>
            <li>Launched Eswatini’s first mobile cancer screening clinics, reaching thousands in rural areas.</li>
            <li>Established the first chemotherapy treatment unit in the country.</li>
            <li>Partnered with local and international organizations to expand access to care.</li>
            <li>Trained hundreds of healthcare workers in early detection and patient support.</li>
          </ul>
          <h2>Lives Touched</h2>
          <p>
            Over the past 25 years, we’ve supported countless individuals and families, offering hope and practical help. Our impact is measured not just in numbers, but in the stories of survivors, caregivers, and communities empowered to fight cancer together.
          </p>
          <p>
            Thank you to everyone who has been part of our journey. Together, we are building a healthier, more hopeful future for Eswatini.
          </p>
        </section>
      </article>
    </main>
  );
}
