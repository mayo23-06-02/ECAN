import React from 'react'

function MotionTextStrip() {
    // Repeat the text enough times to ensure seamless infinite loop on all screen sizes
    const text = 'SHARING STRENGTH • EMBRACING LIFE • SPREADING LIGHT  •';
    const repeatCount = 10; // Large enough for any screen
    return (
        <div className="relative bg-[#DB8DD0] text-white font-outfit text-center text-xl md:text-xl lg:text-xl font-bold py-2 shadow-md overflow-hidden">
            <div className="motion-strip-track">
                {Array.from({ length: repeatCount }).map((_, i) => (
                    <span className="mx-4" key={i}>{text}</span>
                ))}
            </div>
            <style jsx>{`
                .motion-strip-track {
                    display: flex;
                    width: max-content;
                    animation: motion-marquee 80s linear infinite;
                }
                @keyframes motion-marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    )
}

export default MotionTextStrip