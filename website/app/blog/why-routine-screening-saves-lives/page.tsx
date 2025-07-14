import React from 'react';
import { FaRegNewspaper, FaCalendarAlt, FaUserCircle, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function WhyScreeningSavesLivesStory() {
  return (
    <main className="max-w-[900px] mx-auto px-4 py-12">
      <article className="bg-white rounded-xl p-8">
        <Link href="/blog" className="inline-flex items-center text-[#FC55E5] font-bold mb-6 hover:underline">
          <FaArrowLeft className="mr-2" /> Back to Blog
        </Link>
        <div className="mb-4 flex items-center gap-3">
          <FaRegNewspaper className="text-[#FC55E5] text-2xl" />
          <h1 className="font-verveine text-3xl lg:text-5xl text-[#B33791]">Why Routine Screening Saves Lives: A Message to Eswatini&quot;s Women</h1>
        </div>
        <div className="flex items-center text-[#75245F] text-sm mb-6 gap-4">
          <span className="flex items-center"><FaCalendarAlt className="mr-1 text-[#FC55E5]" />14 July 2025</span>
          <span className="flex items-center"><FaUserCircle className="mr-1 text-[#FC55E5]" />EBCCN Team</span>
        </div>
        <Image src="/fight.jpg" alt="Routine Screening" width={900} height={256} className="w-full h-92 object-cover rounded-lg mb-6" />
        <section className="prose space-y-4 max-w-none text-[#75245F]">
          <p>
            Early detection is key to surviving breast and cervical cancer. In this blog post, we explain the importance of regular screenings, how to access our mobile clinics, and what to expect during a screening. Real stories from women who caught cancer early thanks to EBCCN&quot;s programs are also featured.
          </p>
          <h2>Why Screening Matters</h2>
          <p>
            Routine screening can find cancer before symptoms appear, when it’s most treatable. Our mobile clinics travel across Eswatini, making it easier for women to get checked close to home.
          </p>
          <h2>What to Expect</h2>
          <ul>
            <li>Friendly, professional staff to guide you through the process.</li>
            <li>Quick, confidential screenings for breast and cervical cancer.</li>
            <li>Information and support every step of the way.</li>
          </ul>
          <h2>Real Stories</h2>
          <p>
            &quot;I was nervous at first, but the nurses made me feel comfortable. They found something early, and now I’m healthy and grateful.&quot; — <span className="font-bold">Thandi, Manzini</span>
          </p>
          <p>
            Don’t wait. Early detection saves lives. Visit our mobile clinics or contact us to learn more about screening opportunities.
          </p>
        </section>
      </article>
    </main>
  );
}
