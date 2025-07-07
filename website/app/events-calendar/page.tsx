import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaMapMarkerAlt, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const events = [
	{
		title: 'October Breast Cancer Awareness Month',
		date: 'October 1–31, 2025',
		description:
			'Raise awareness with us during International Breast Cancer Awareness Month through talks, screenings, and community events across Eswatini.',
		location: 'Nationwide',
		cta: 'Read More',
		link: '/events/october-breast-cancer-awareness',
		image: '/breast-walk.png',
		type: 'upcoming',
	},
	{
		title: 'Brave the Breast Walk',
		date: 'October 12, 2025',
		description:
			'Walk with survivors, families, and supporters in Mbabane to promote early detection and honor those affected by breast cancer.',
		location: 'Coronation Park, Mbabane',
		cta: 'Read More',
		link: '/events/brave-the-breast-walk',
		image: '/breast-walk.png',
		type: 'upcoming',
	},
	{
		title: "Survivor's Day",
		date: 'November 15, 2025',
		description:
			'Celebrate resilience and hope with cancer survivors and their families at our annual Survivor\'s Day event.',
		location: 'Manzini Community Center',
		cta: 'Read More',
		link: '/events/survivors-day',
		image: '/breast-walk.png',
		type: 'upcoming',
	},
	{
		title: 'Cervical Cancer Awareness Month',
		date: 'January 2026',
		description:
			'Learn about cervical cancer prevention and access free screenings during our nationwide campaign.',
		location: 'Various Health Centers',
		cta: 'Read More',
		link: '/events/cervical-cancer-awareness',
		image: '/breast-walk.png',
		type: 'upcoming',
	},
	// Example past event
	{
		title: '2024 Annual Cancer Symposium',
		date: 'March 10, 2024',
		description:
			'A gathering of experts, survivors, and advocates to share research, stories, and strategies for cancer control in Eswatini.',
		location: 'Royal Swazi Convention Centre',
		cta: 'Read More',
		link: '/breast-walk.png',
		image: '/breast-walk.png',
		type: 'past',
	},
];

export default function EventsPage() {
	return (
		<main className="max-w-[1400px] mx-auto px-4 py-12">
			<h1 className="font-verveine text-4xl lg:text-6xl text-[#B33791] mb-8 text-center">
				Events Calendar
			</h1>
			<p className="text-lg text-[#75245F] mb-12 max-w-2xl mx-auto text-center">
				Explore our upcoming and past events. Join us in raising awareness,
				supporting survivors, and making a difference in the fight against cancer
				in Eswatini.
			</p>
			<div className="mb-16">
				<h2 className="text-2xl font-bold text-primary mb-6">Upcoming Events</h2>
				<div className="grid md:grid-cols-2 gap-8">
					{events
						.filter((e) => e.type === 'upcoming')
						.map((event) => (
							<div
								key={event.title}
								className="bg-[#F9ECF7] border-b-8 border-[#B33791] p-6 flex flex-col md:flex-row gap-6"
							>
								<Image
									src={event.image}
									alt={event.title}
									width={400}
									height={160}
									className="w-full md:w-48 h-40 object-cover rounded-lg"
								/>
								<div className="flex-1 flex flex-col justify-between">
									<div>
										<h3 className="text-xl font-bold text-primary mb-2 font-outfit flex items-center">
											{event.title}
										</h3>
										<div className="flex items-center text-sm text-secondary mb-2">
											<FaCalendarAlt className="mr-1" />
											<span>{event.date}</span>
										</div>
										<div className="flex items-center text-sm text-secondary mb-3">
											<FaMapMarkerAlt className="mr-1" />
											<span>{event.location}</span>
										</div>
										<p className="text-[#232357] mb-4 font-outfit">
											{event.description}
										</p>
									</div>
									<Link
										href={event.link}
										className="inline-flex items-center text-[#FC55E5] font-bold hover:underline mt-2"
									>
										{event.cta}{' '}
										<FaArrowRight className="ml-2" />
									</Link>
								</div>
							</div>
						))}
				</div>
			</div>
			<div>
				<h2 className="text-2xl font-bold text-primary mb-6">Past Events</h2>
				<div className="grid md:grid-cols-2 gap-8">
					{events
						.filter((e) => e.type === 'past')
						.map((event) => (
							<div
								key={event.title}
								className="bg-pink-50 p-6  flex flex-col md:flex-row gap-6"
							>
								<Image
									src={event.image}
									alt={event.title}
									width={400}
									height={160}
									className="w-full md:w-48 h-40 object-cover rounded-lg"
								/>
								<div className="flex-1 flex flex-col justify-between">
									<div>
										<h3 className="text-xl font-bold text-primary mb-2 font-outfit flex items-center">
											{event.title}
										</h3>
										<div className="flex items-center text-sm text-secondary mb-2">
											<FaCalendarAlt className="mr-1" />
											<span>{event.date}</span>
										</div>
										<div className="flex items-center text-sm text-secondary mb-3">
											<FaMapMarkerAlt className="mr-1" />
											<span>{event.location}</span>
										</div>
										<p className="text-[#232357] mb-4 font-outfit">
											{event.description}
										</p>
									</div>
									<Link
										href={event.link}
										className="inline-flex items-center text-[#FC55E5] font-bold hover:underline mt-2"
									>
										{event.cta}{' '}
										<FaArrowRight className="ml-2" />
									</Link>
								</div>
							</div>
						))}
				</div>
			</div>
		</main>
	);
}
