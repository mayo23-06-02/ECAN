"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logo.svg"
import Button from "../Re-usable UI/Button";
import { BsArrowRight } from "react-icons/bs";
const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
        name: "Programs",
        href: "/programs",
        dropdown: [
            { name: "Advocacy", href: "/programs/advocacy" },
            { name: "Psychosocial", href: "/programs/psychosocial" },
            { name: "Screening", href: "/programs/screening" },
            { name: "Resource Mobilization", href: "/programs/resource-mobilization" },
            { name: "BTB", href: "/programs/btb" },
        ],
    },{
        name: "Donate",
        href: "/donate",
        dropdown: [
            { name: "Donate Now", href: "/donate" },
            { name: "Become a Volunteer", href: "/volunteer" },
            { name: "Corporate Partnerships", href: "/corporate-partnerships" },
        ],
    },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog & Reports", href: "/blog" },
    { name: "FAQs & Contact Us", href: "/contact" },
    
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);

    return (
        <header className="w-full lg:border-b-8 border-b-4 border-[#FEC5F6] bg-primary dark:bg-tertiary lg:px-12 px-4 z-50 sticky top-0 bg-white ">
            <nav className="max-w-[1600px] mx-auto flex items-center justify-between px-4 py-3 md:py-4">
                <Link href="/" className="flex items-center gap-2">
                    <Image src={Logo} alt="Logo" width={30} height={40} />
                </Link>
                <div className="flex-1 flex justify-center">
                    <ul className="hidden md:flex gap-8 items-center text-[#75245F]">
                        {navLinks.map((link, idx) => (
                            <li key={link.name} className="relative group">
                                {link.dropdown ? (
                                    <div
                                        className="relative"
                                        onMouseEnter={() => setDropdownIndex(idx)}
                                        onMouseLeave={() => setDropdownIndex(null)}
                                    >
                                        <button
                                            className="font-outfit text-sm font-bold text-[#75245F] dark:text-primary hover:text-tertiary dark:hover:text-secondary transition-colors flex items-center gap-1"
                                            onFocus={() => setDropdownIndex(idx)}
                                            onBlur={() => setDropdownIndex(null)}
                                            tabIndex={0}
                                            type="button"
                                        >
                                            {link.name}
                                            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                                        </button>
                                        {dropdownIndex === idx && (
                                            <ul
                                                className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-white dark:bg-tertiary rounded shadow-lg py-2 z-50"
                                            >
                                                {link.dropdown.map((item) => (
                                                    <li key={item.name}>
                                                        <Link
                                                            href={item.href}
                                                            className="block px-4 py-2 text-sm text-secondary dark:text-primary hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-tertiary dark:hover:text-secondary font-outfit transition-colors"
                                                            onClick={() => setDropdownIndex(null)}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="font-outfit text-sm font-bold hover:opacity-80 text-secondary dark:text-primary hover:text-tertiary dark:hover:text-secondary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden md:flex">
                    <Button variant="primary" onClick={() => alert("Clicked!")}>
                        <p className="whitespace-nowrap flex w-full justify-center items-center gap-4 font-outfit font-bold">
                            DONATE
                            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none animate-arrow-bounce">
                                <BsArrowRight className="bg-white text-[#FC55E5] rounded-full h-5 w-5 p-1" />
                            </span>
                        </p>
                    </Button>
                    
                </div>
                <div className="md:hidden">
                    <button
                        aria-label="Open menu"
                        onClick={() => setOpen(true)}
                        className="text-2xl text-tertiary dark:text-primary"
                    >
                        <FaBars />
                    </button>
                </div>
                {/* Mobile menu overlay */}
                {open && (
                    <div className="fixed inset-0 bg-tertiary/90 z-50 flex flex-col">
                        <div className="flex justify-end p-4">
                            <button
                                aria-label="Close menu"
                                onClick={() => setOpen(false)}
                                className="text-2xl text-primary"
                            >
                                <FaTimes />
                            </button>
                        </div>
                        <ul className="flex flex-col gap-8 items-center justify-center flex-1">
                            {navLinks.map((link) =>
                                link.dropdown ? (
                                    <li key={link.name} className="w-full">
                                        <span className="block font-outfit text-lg font-semibold text-secondary hover:text-primary transition-colors mb-2">
                                            {link.name}
                                        </span>
                                        <ul className="pl-4">
                                            {link.dropdown.map((item) => (
                                                <li key={item.name}>
                                                    <Link
                                                        href={item.href}
                                                        className="block px-2 py-1 text-base text-secondary hover:text-primary font-outfit transition-colors"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ) : (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="font-outfit text-lg font-semibold text-secondary hover:text-primary transition-colors"
                                            onClick={() => setOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                )
                            )}
                            <li>
                                <button
                                    className="mt-4 px-5 py-2 rounded-full bg-white text-tertiary font-outfit font-semibold shadow hover:bg-primary hover:text-white transition-colors block text-center w-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                    onClick={() => { setOpen(false); window.location.href = '/donate'; }}
                                    type="button"
                                >
                                    Donate
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
            <style jsx global>{`
@keyframes arrow-bounce {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(6px); }
}
.animate-arrow-bounce {
  animation: arrow-bounce 1s infinite;
}
`}</style>
        </header>
    );
}
