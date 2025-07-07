import React from 'react';
import Link from 'next/link';
import { FaFileDownload, FaUserFriends, FaBullhorn, FaHandsHelping, FaHeart, FaChevronRight } from 'react-icons/fa';

const stats = [
    {
        label: 'Breast & Cervical Cancer',
        value: '50%+',
        description: 'of all cancer diagnoses among women in Eswatini',
    },
    {
        label: 'Late Stage Presentation',
        value: '70%',
        description: 'of women with cervical cancer present at a late stage',
    },
];

const initiatives = [
    {
        title: '“Screen Her Now” Campaign',
        description:
            'Raising awareness about the importance of regular cervical cancer screening, especially in high-risk populations.',
        icon: <FaBullhorn className="text-[#FC55E5] text-2xl" />,
    },
    {
        title: '“Cancer Is Not a Death Sentence” Initiative',
        description:
            'A national media campaign focused on reducing stigma and encouraging early help-seeking behaviors.',
        icon: <FaHandsHelping className="text-[#FC55E5] text-2xl" />,
    },
];

const ctas = [
    {
        label: 'Sign Our Petition',
        href: '/petition',
        icon: <FaFileDownload className="mr-2" />,
    },
    {
        label: 'Join Our Campaign',
        href: '/join-campaign',
        icon: <FaUserFriends className="mr-2" />,
    },
    {
        label: 'Share Your Story',
        href: '/share-story',
        icon: <FaChevronRight className="mr-2" />,
    },
    {
        label: 'Donate to Save Lives',
        href: '/donate',
        icon: <FaHeart className="mr-2" />,
    },
];

const partners = [
    {
        name: 'Cancer Survivor Champion',
        bio: 'A community voice representing hope and resilience. Survivor stories coming soon.',
        // Add photo or avatar if available
    },
    // Add more advocates/partners as needed
];

export default function AdvocacyPage() {
    return (
        <main className="max-w-[1400px] mx-auto px-4 py-12">
            <section className="mb-12">

                        <h1 className="font-verveine text-4xl lg:text-6xl text-[#B33791] mb-4">Advocacy for Change</h1>


                <p className="text-lg text-[#75245F] mb-6 max-w-2xl">
                    We promote policy changes that prioritize cancer prevention and treatment
                    in national health agendas. We highlight the rights of patients and
                    survivors to quality care, dignity, and psychosocial support, and
                    mobilize public and private sector support to strengthen cancer care
                    infrastructure in Eswatini.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="bg-[#F9ECF7] border-[#B33791] border-b-8 p-6 flex flex-col items-center text-center "
                        >
                            <div className="text-5xl font-bold text-[#FC55E5] mb-2">
                                {stat.value}
                            </div>
                            <div className="font-bold text-primary text-lg mb-1">
                                {stat.label}
                            </div>
                            <div className="text-[#75245F]">{stat.description}</div>
                        </div>
                    ))}
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">
                        Our Advocacy Initiatives
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 ">
                        {initiatives.map((item) => (
                            <div
                                key={item.title}
                                className="bg-[#F9ECF7]  p-6  flex items-start gap-4"
                            >
                                {item.icon}
                                <div>
                                    <div className="font-bold text-lg text-[#B33791] mb-1">
                                        {item.title}
                                    </div>
                                    <div className="text-[#75245F]">
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">Key Actions</h2>
                    <div className="flex flex-wrap gap-4">
                        {ctas.map((cta) => (
                            <Link
                                key={cta.label}
                                href={cta.href}
                                className="inline-flex items-center px-5 py-3 rounded-full bg-[#FC55E5] text-white font-bold font-outfit  hover:bg-[#B33791] transition-colors"
                            >
                                {cta.icon} {cta.label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">
                        Spotlight: Champions & Partners
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {partners.map((p) => (
                            <div
                                key={p.name}
                                className="bg-[#F9ECF7] rounded-xl p-6  flex flex-col items-start"
                            >
                                <div className="font-bold text-lg text-[#B33791] mb-1">
                                    {p.name}
                                </div>
                                <div className="text-[#75245F]">{p.bio}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">Resources</h2>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="/resources/advocacy-brief.pdf"
                            className="inline-flex items-center px-4 py-2 rounded bg-white border border-[#FC55E5] text-[#FC55E5] font-bold font-outfit  hover:bg-[#FC55E5] hover:text-white transition-colors"
                            download
                        >
                            <FaFileDownload className="mr-2" /> Advocacy Brief
                        </a>
                        <a
                            href="/resources/policy-position.pdf"
                            className="inline-flex items-center px-4 py-2 rounded bg-white border border-[#FC55E5] text-[#FC55E5] font-bold font-outfit  hover:bg-[#FC55E5] hover:text-white transition-colors"
                            download
                        >
                            <FaFileDownload className="mr-2" /> Policy Position Paper
                        </a>
                        <a
                            href="/resources/fact-sheet.pdf"
                            className="inline-flex items-center px-4 py-2 rounded bg-white border border-[#FC55E5] text-[#FC55E5] font-bold font-outfit hover:bg-[#FC55E5] hover:text-white transition-colors"
                            download
                        >
                            <FaFileDownload className="mr-2" /> Fact Sheet
                        </a>
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">
                        Survivor Stories & Videos
                    </h2>
                    <div className="bg-[#F9ECF7] rounded-xl p-6 text-[#75245F]">
                        <p>
                            Testimonies from survivors and caregivers will be included here to
                            humanize the issues and emphasize the importance of timely action.
                        </p>
                        <div className="mt-4">
                            <a
                                href="/videos/survivor-montage.mp4"
                                className="text-[#FC55E5] underline font-bold"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Watch Video Montage
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}