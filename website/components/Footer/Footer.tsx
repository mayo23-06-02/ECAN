import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

function Footer() {
    const companyLinks = [
        { title: 'Home', path: '/' },
        { title: 'About Us', path: '/about' },
        { title: 'Programs', path: '/programs' },
        { title: 'News & Reports', path: '/blog' },
        { title: 'Contact Us', path: '/contact' },
    ];
    const helpLinks = [
        { title: 'Contact Us', path: '/contact' },
        { title: 'Consult', path: '/consult' },
        { title: 'Book a Screening', path: '/screening' },
        { title: 'FAQ’s', path: '/faq' },
        { title: 'Advocacy', path: '/programs/advocacy' },
        { title: 'Volunteer', path: '/volunteer' },
    ];
    const socialLinks = [
        { name: 'Instagram', url: 'https://www.instagram.com/magicsealsa/', icon: <FaInstagram className="inline-block mr-2 text-xl align-middle" aria-label="Instagram" /> },
        { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61575021916917', icon: <FaFacebookF className="inline-block mr-2 text-xl align-middle" aria-label="Facebook" /> },
        { name: 'WhatsApp', url: 'https://wa.me/0639313869', icon: <FaWhatsapp className="inline-block mr-2 text-xl align-middle" aria-label="WhatsApp" /> },
    ];
    return (
        <footer className="bg-tertiary">
            <div className=" mx-auto px-6 max-w-[1400px] sm:px-6  py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
                    {/* Logo Section */}
                    <div className="flex flex-col items-start gap-4">
                        <Link href="/" className="flex items-center gap-2">
                            <Image src="/logo.svg" alt="Logo" width={40} height={50} />
                        </Link>
                        <p className="text-[#232357] font-outfit text-sm mt-2">Empowering Eswatini against cancer.</p>
                    </div>
                    {/* Company Links */}
                    <div>
                        <h3 className="font-bold text-lg text-primary mb-4 font-outfit">Company</h3>
                        <ul className="font-outfit font-light space-y-2 text-[#232357]">
                            {companyLinks.map((item) => (
                                <li key={item.path}>
                                    <Link
                                        href={item.path}
                                        className="hover:text-secondary transition-colors"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Help Links */}
                    <div>
                        <h3 className="font-bold text-lg text-primary mb-4 font-outfit">Help</h3>
                        <ul className="font-outfit font-light space-y-2 text-[#232357]">
                            {helpLinks.map((item) => (
                                <li key={item.path}>
                                    <Link
                                        href={item.path}
                                        className="hover:text-secondary transition-colors"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Social Links */}
                    <div>
                        <h3 className="font-bold text-lg text-primary mb-4 font-outfit">Social</h3>
                        <ul className="font-outfit font-light space-y-2 text-[#232357]">
                            {socialLinks.map((social) => (
                                <li key={social.name}>
                                    <a
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-secondary transition-colors flex items-center"
                                    >
                                        {social.icon}
                                        <span>{social.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="text-center text-sm mt-8 text-[#232357] space-y-2 flex flex-col lg:flex-row w-full lg:justify-between">
                    <p>© {new Date().getFullYear()} Eswatini Cancer Network (ECAN). All rights reserved.</p>
                    <p>
                        Developed by{' '}
                        <a
                            href="tel:+26878608308"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-secondary transition-colors"
                        >
                            Unbounded Creative Agency
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer