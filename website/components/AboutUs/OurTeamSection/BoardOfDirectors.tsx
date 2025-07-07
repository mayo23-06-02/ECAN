import React from 'react';
import Image from 'next/image';

const directors = [
  {
    name: 'Dr. Nomsa Dlamini',
    title: 'Chairperson',
    img: '/board/1.png',
  },
  {
    name: 'Mrs. Zipho Mthethwa',
    title: 'Vice Chair',
    img: '/board/2.png',
  },
  {
    name: 'Ms. Zanele Simelane',
    title: 'Treasurer',
    img: '/board/3.png',
  },
  {
    name: 'Mrs. Linda Dube',
    title: 'Secretary',
    img: '/board/4.png',
  },
 
];

export default function BoardOfDirectors() {
  return (
    <section className="py-12 px-4 max-w-[1200px] mx-auto">
      <h2 className="font-verveine text-4xl lg:text-5xl text-[#B33791] mb-8 text-center">Board of Directors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {directors.map((director) => (
          <div key={director.name} className="bg-[#F9ECF7]  pb-6 flex flex-col items-center">
            <div className=" mb-4  overflow-hidden ">
              <Image src={director.img} alt={director.name} width={500} height={20} className="object-cover w-full h-full" />
            </div>
            <div className="font-bold text-lg text-[#B33791] text-center">{director.name}</div>
            <div className="text-[#75245F] text-center">{director.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
