"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import Button from "@/components/Re-usable UI/Button";

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
            { name: "BTB", href: "/events/brave-the-breast-walk" },
        ],
    },
    {
        name: "Donate",
        href: "/donate",
        dropdown: [
            { name: "Donate Now", href: "/donate" },
            { name: "Become a Volunteer", href: "/volunteer" },
        ],
    },
    { name: "Blog & Reports", href: "/blog" },
    { name: "FAQs & Contact Us", href: "/contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
        if (isOpen) setActiveDropdown(null); // Close dropdowns when menu closes
    };

    const handleDropdownToggle = (index: number) => {
        setActiveDropdown((prev) => (prev === index ? null : index));
    };

    const closeAll = () => {
        setIsOpen(false);
        setActiveDropdown(null);
    };

    return (
        <header className="w-full lg:border-b-8 border-b-4 border-[#FEC5F6] bg-white dark:bg-gray-800 lg:px-12 px-4 z-50 sticky top-0">
            <nav className="max-w-[1600px] mx-auto flex items-center justify-between px-4 py-3 md:py-4">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="Logo" width={30} height={40} priority />
                </Link>
                <div className="flex-1 flex justify-center">
                    <ul className="hidden md:flex gap-8 items-center text-[#75245F] dark:text-white">
                        {navLinks.map((link, idx) => (
                            <li key={link.name} className="relative group">
                                {link.dropdown ? (
                                    <div className="relative">
                                        <button
                                            className="font-outfit text-sm font-bold text-[#75245F] dark:text-white hover:text-[#FC55E5] dark:hover:text-[#FC55E5] transition-colors flex items-center gap-1 focus:outline-none"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleDropdownToggle(idx);
                                            }}
                                            aria-expanded={activeDropdown === idx}
                                            aria-haspopup="true"
                                            tabIndex={0}
                                        >
                                            {link.name}
                                            <svg
                                                className={`w-3 h-3 ml-1 transition-transform duration-200 ${activeDropdown === idx ? "rotate-180" : ""}`}
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {activeDropdown === idx && (
                                            <ul className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-white dark:bg-gray-700 rounded-lg shadow-lg py-2 z-50">
                                                {link.dropdown.map((item) => (
                                                    <li key={item.name}>
                                                        <Link
                                                            href={item.href}
                                                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-[#FC55E5]/10 dark:hover:bg-[#FC55E5]/20 hover:text-[#FC55E5] dark:hover:text-[#FC55E5] font-outfit transition-colors"
                                                            onClick={closeAll}
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
                                        className="font-outfit text-sm font-bold text-[#75245F] dark:text-white hover:text-[#FC55E5] dark:hover:text-[#FC55E5] transition-colors"
                                        onClick={closeAll}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden md:flex">
                    <Link href="/donate" className="group">
                        <Button variant="primary" >
                            <p className="whitespace-nowrap flex w-full justify-center items-center gap-4 font-outfit font-bold">
                                DONATE
                                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none animate-arrow-bounce">
                                    <BsArrowRight className="bg-white text-[#FC55E5] rounded-full h-5 w-5 p-1" />
                                </span>
                            </p>
                        </Button>
                    </Link>
                </div>
                <div className="md:hidden">
                    <button
                        aria-label="Toggle menu"
                        onClick={toggleMenu}
                        className="text-2xl text-[#75245F] dark:text-white"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>
            {/* Mobile side drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white dark:bg-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex justify-end p-4">
                    <button
                        aria-label="Close menu"
                        onClick={toggleMenu}
                        className="text-2xl text-[#75245F] dark:text-white"
                    >
                        <FaTimes />
                    </button>
                </div>
                <ul className="flex flex-col gap-6 p-6">
                    {navLinks.map((link, idx) => (
                        <li key={link.name}>
                            {link.dropdown ? (
                                <div>
                                    <button
                                        className="font-outfit text-lg font-semibold text-[#75245F] dark:text-white hover:text-[#FC55E5] transition-colors flex items-center justify-between w-full focus:outline-none"
                                        onClick={() => handleDropdownToggle(idx)}
                                        aria-expanded={activeDropdown === idx}
                                        aria-haspopup="true"
                                        tabIndex={0}
                                    >
                                        {link.name}
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === idx ? "rotate-180" : ""}`}
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {activeDropdown === idx && (
                                        <ul className="pl-4 mt-2 space-y-2">
                                            {link.dropdown.map((item) => (
                                                <li key={item.name}>
                                                    <Link
                                                        href={item.href}
                                                        className="block px-2 py-1 text-base text-gray-700 dark:text-gray-200 hover:text-[#FC55E5] font-outfit transition-colors"
                                                        onClick={closeAll}
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
                                    className="font-outfit text-lg font-semibold text-[#75245F] dark:text-white hover:text-[#FC55E5] transition-colors"
                                    onClick={closeAll}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </li>
                    ))}
                    <li>
                        <button
                            className="w-full px-5 py-2 rounded-full bg-[#FC55E5] text-white font-outfit font-semibold shadow hover:bg-[#75245F] transition-colors text-center"
                            onClick={() => {
                                closeAll();
                                window.location.href = "/donate";
                            }}
                        >
                            Donate
                        </button>
                    </li>
                </ul>
            </div>
            {/* Overlay for mobile menu */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={toggleMenu}
                    aria-hidden="true"
                ></div>
            )}
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