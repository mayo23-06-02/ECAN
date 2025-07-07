import React from 'react';
import { FaRegNewspaper, FaFilePdf, FaCalendarAlt, FaUserCircle, FaArrowRight } from 'react-icons/fa';

const blogPosts = [
	{
		title: 'ECAN Launches New Mobile Screening Clinics',
		date: '2025-06-15',
		excerpt:
			'Our new mobile clinics are bringing life-saving cancer screening services to rural communities across Eswatini. Learn how these clinics are making a difference and what communities can expect.',
		href: '/blog/ecan-mobile-clinics',
		author: 'N. Dlamini',
		image: '/truck.jpg',
		tags: ['Screening', 'Outreach', 'Impact'],
	},
	{
		title: 'Cancer Awareness Month: Key Takeaways',
		date: '2025-05-01',
		excerpt:
			'Highlights from our national campaign, including outreach events, survivor stories, and prevention tips. Discover the most impactful moments and resources shared.',
		href: '/blog/cancer-awareness-month',
		author: 'S. Mthethwa',
		image: '/truck.jpg',
		tags: ['Awareness', 'Events', 'Stories'],
	},
];

const reports = [
	{
		title: '2024 Annual Impact Report',
		href: '/reports/ecan-impact-report-2024.pdf',
	},
	{
		title: 'Screening Program Outcomes 2023',
		href: '/reports/screening-outcomes-2023.pdf',
	},
];

export default function BlogPage() {
	return (
		<main className="max-w-[1400px] mx-auto px-4 py-12">
			<section className="mb-12">
				<h1 className="font-verveine text-4xl lg:text-6xl text-[#B33791] mb-4">Blog & Reports</h1>
				<p className="text-lg text-[#75245F] mb-8 max-w-2xl">
					Read the latest news, stories, and reports from the Eswatini Cancer Network. Stay informed about our
					programs, impact, and the fight against cancer in Eswatini.
				</p>
				<div className="grid md:grid-cols-2 gap-8 mb-12">
					{blogPosts.map((post) => (
						<a
							key={post.title}
							href={post.href}
							className="group block bg-[#f3f0f3] border-b-8 border-[#B33791]  p-0   overflow-hidden "
							aria-label={`Read full story: ${post.title}`}
						>
							<div className="h-48 w-full bg-gray-200 relative">
								<img
									src={post.image}
									alt={post.title}
									className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
									loading="lazy"
								/>
								<div className="absolute top-3 left-3 flex gap-2">
									{post.tags.map((tag) => (
										<span
											key={tag}
											className="bg-[#FC55E5] text-white text-xs font-bold px-2 py-1 rounded-full shadow"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
							<div className="p-6">
								<div className="flex items-center gap-3 mb-2">
									<FaRegNewspaper className="text-[#FC55E5] text-2xl" />
									<span className="text-[#B33791] font-bold text-lg">{post.title}</span>
								</div>
								<div className="flex items-center text-[#75245F] text-sm mb-2 gap-4">
									<span className="flex items-center">
										<FaCalendarAlt className="mr-1 text-[#FC55E5]" />
										{new Date(post.date).toLocaleDateString('en-GB', {
											year: 'numeric',
											month: 'short',
											day: 'numeric',
										})}
									</span>
									<span className="flex items-center">
										<FaUserCircle className="mr-1 text-[#FC55E5]" />
										{post.author}
									</span>
								</div>
								<div className="text-[#75245F] mb-4">{post.excerpt}</div>
								<span className="inline-flex items-center text-[#FC55E5] font-bold group-hover:underline">
									Read Full Story
									<FaArrowRight className="ml-2" />
								</span>
							</div>
						</a>
					))}
				</div>
				<div>
					<h2 className="text-2xl font-bold text-primary mb-4">Reports & Publications</h2>
					<div className="flex flex-wrap gap-4">
						{reports.map((r) => (
							<a
								key={r.title}
								href={r.href}
								className="inline-flex items-center px-4 py-2 rounded bg-white border border-[#FC55E5] text-[#FC55E5] font-bold font-outfit shadow hover:bg-[#FC55E5] hover:text-white transition-colors"
								download
							>
								<FaFilePdf className="mr-2" /> {r.title}
							</a>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}