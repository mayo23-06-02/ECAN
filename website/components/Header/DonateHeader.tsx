"use client";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsWhatsapp, BsInstagram } from "react-icons/bs";

function DonateHeader() {
  return (
    <div className="flex flex-col md:flex-row font-outfit items-center justify-center md:space-x-16 bg-primary bg-[#DB8DD0] text-white px-4 py-2  w-full">
      <div className="relative flex items-center gap-2 mb-2 md:mb-0 animate-fade-in-left sm:text-xs w-full md:w-auto">
        <div className="block md:hidden w-full overflow-x-hidden">
          <div className="whitespace-nowrap animate-marquee text-center w-max">
            Stand Up. Give Back. Beat Cancer.{" "}
          </div>
        </div>
        <>
          <p className="text-sm whitespace-nowrap  hidden md:block">
            Stand Up. Give Back. Beat Cancer.
          </p>
          <p className="text-sm underline cursor-pointer whitespace-nowrap animate-reveal hidden md:block">
            www.ecan.org.sz/donate
          </p>
        </>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-16 animate-fade-in-right">
        <div className="hidden lg:inline">
          <div className="flex items-center gap-4">
            <a href="https://wa.me/26879021071" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <BsWhatsapp className="text-lg hover:text-tertiary transition-colors cursor-pointer" />
            </a>
            <a href="https://www.facebook.com/swazilandbreastandcervicalcancernetwork/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <BsFacebook className="text-lg hover:text-tertiary transition-colors cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/breastandcervicalcancernetwork/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <BsInstagram className="text-lg hover:text-tertiary transition-colors cursor-pointer" />
            </a>
          </div>
        </div>
        <div className="hidden lg:inline">
          <Link href="/donate">
          <div>
            <p className="underline font-bold animate-reveal">DONATE NOW!</p>
          </div>
          </Link>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in-left {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fade-in-right {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes reveal {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out;
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out;
        }
        .animate-reveal {
          animation: reveal 1.2s 0.5s both;
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}

export default DonateHeader;