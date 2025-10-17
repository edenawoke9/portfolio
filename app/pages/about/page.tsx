"use client"
import { useState, useEffect, useRef } from "react";
import React from "react";

export default function About() {
    const text = `I'm Eden Awoke, a full-stack developer who builds beautiful and functional websites. My focus is on creating clean code and attractive designs that provide an easy-to-use experience and help build a loyal user base.`;
    const words = text.split(" ");

    const [visibleWords, setVisibleWords] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const lastScroll = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Calculate how much of the section is visible
            const sectionTop = rect.top;
            const sectionHeight = rect.height;
            
            // Start revealing words when section enters viewport
            // Complete all words when section is 70% through viewport
            let progress = 0;
            
            if (sectionTop < windowHeight && sectionTop > -sectionHeight) {
                // Section is in viewport
                const visibleAmount = Math.min(windowHeight - sectionTop, sectionHeight);
                progress = Math.max(0, visibleAmount / (sectionHeight * 0.9));
            }
            
            const wordIndex = Math.min(
                words.length,
                Math.floor(progress * words.length)
            );
            
            setVisibleWords(wordIndex);
            lastScroll.current = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial call
        return () => window.removeEventListener("scroll", handleScroll);
    }, [words.length]);

    // Tech stack arrays
    const frontendStack = [
        "React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS", "JavaScript"
    ];
    
    const backendStack = [
        "Node.js", "Express", "MongoDB", "Python", "Django", "PostgreSQL", "REST APIs"
    ];

    return <div ref={sectionRef}>
        <div className="flex  lg:flex-row flex-col gap-4  lg:m-20 ml-4  justify-center">
        <div>
            <h1 className="text-2xl">About</h1>
        </div>
        <div className={`text-4xl md:text-5xl lg:ml-20     font-mono flex flex-wrap`}>
            {words.map((word, i) => (
                <span
                    key={i}
                    className={`transition-opacity duration-300 ${
                        i < visibleWords ? "opacity-90" : "opacity-30"
                    }`}
                    style={{ marginRight: "0.3em" }}
                >
                    {word}
                </span>
            ))}
        </div>
        
    </div>
   
    {/* Frontend Stack - Left to Right */}
    <div className="w-full overflow-hidden bg-transparent-4  mt-52 ">
        <div className="relative">
            <div className="flex gap-8 animate-scroll-frontend whitespace-nowrap">
                {/* First set */}
                {frontendStack.map((tech, idx) => (
                    <span
                        key={`frontend-first-${idx}`}
                        className="blob-btn text-xl lg:text-2xl font-semibold text-black px-6 py-2 bg-zinc-100 rounded-lg shadow flex-shrink-0"
                    >
                        <span className="blob-btn__inner">
                            <span className="blob-btn__blobs">
                                <span className="blob-btn__blob"></span>
                                <span className="blob-btn__blob"></span>
                                <span className="blob-btn__blob"></span>
                                <span className="blob-btn__blob"></span>
                            </span>
                        </span>
                        <span className="blob-btn__text">{tech}</span>
                    </span>
                ))}
                {/* Second set for seamless loop */}
                {frontendStack.map((tech, idx) => (
                    <span
                        key={`frontend-second-${idx}`}
                        className="blob-btn text-xl lg:text-2xl font-semibold text-black px-6 py-2 bg-zinc-100 rounded-lg shadow flex-shrink-0"
                    >
                        <span className="blob-btn__inner">
                            <span className="blob-btn__blobs">
                                <span className="blob-btn__blob"></span>
                                <span className="blob-btn__blob"></span>
                                <span className="blob-btn__blob"></span>
                                <span className="blob-btn__blob"></span>
                            </span>
                        </span>
                        <span className="blob-btn__text">{tech}</span>
                    </span>
                ))}
            </div>
        </div>
    </div>

    {/* Backend Stack - Right to Left */}
    <div className="w-full overflow-hidden bg-transparent py-4 mt-4">
        <div className="relative">
            <div className="flex gap-8 animate-scroll-backend whitespace-nowrap">
                {/* First set */}
                {backendStack.map((tech, idx) => (
                    <span
                        key={`backend-first-${idx}`}
                        className="blob-btn text-xl lg:text-2xl font-semibold text-black px-6 py-2 bg-zinc-50 rounded-lg shadow flex-shrink-0"
                    >
                        <span className="blob-btn__inner">
                            <span className="blob-btn__blobs">
                                <span className="blob-btn__blob"></span>
                                <span className="blob-btn__blob"></span>
                                <span className="blob-btn__blob"></span>
                                <span className="blob-btn__blob"></span>
                            </span>
                        </span>
                        <span className="blob-btn__text">{tech}</span>
                    </span>
                ))}
                {/* Second set for seamless loop */}
                {backendStack.map((tech, idx) => (
                    <span
                        key={`backend-second-${idx}`}
                        className="blob-btn text-xl lg:text-2xl font-semibold text-black px-6 py-2 bg-zinc-50 rounded-lg shadow flex-shrink-0"
                    >
                        <span className="blob-btn__inner">
                            <span className="blob-btn__blobs">
                                <span className="blob-btn__blob"></span>
                                <span className="blob-btn__blob"></span>
                                <span className="blob-btn__blob"></span>
                                <span className="blob-btn__blob"></span>
                            </span>
                        </span>
                        <span className="blob-btn__text">{tech}</span>
                    </span>
                ))}
            </div>
        </div>
    </div>
    {/* Add the animation CSS */}
     <style jsx>{`
         @keyframes scroll-left-to-right {
             0% { transform: translateX(-50%); }
             100% { transform: translateX(0); }
         }
         @keyframes scroll-right-to-left {
             0% { transform: translateX(0); }
             100% { transform: translateX(-50%); }
         }
         .animate-scroll-frontend {
             animation: scroll-left-to-right 15s linear infinite;
         }
         .animate-scroll-backend {
             animation: scroll-right-to-left 15s linear infinite;
         }
         @media (max-width: 768px) {
             .animate-scroll-frontend {
                 animation: scroll-left-to-right 10s linear infinite;
             }
             .animate-scroll-backend {
                 animation: scroll-right-to-left 10s linear infinite;
             }
         }

         /* Blob Button Styles */
         .blob-btn {
             z-index: 1;
             position: relative;
             padding: 20px 46px;
             text-align: center;
             text-transform: uppercase;
             color: #000000;
             font-size: 16px;
             font-weight: bold;
             background-color: transparent;
             outline: none;
             border: none;
             transition: color 0.5s;
             cursor: pointer;
             border-radius: 30px;
         }

         .blob-btn:after {
             content: "";
             z-index: -2;
             position: absolute;
             left: 3px;
             top: 3px;
             width: 100%;
             height: 100%;
             transition: all 0.3s 0.2s;
             border-radius: 30px;
         }

         .blob-btn:hover {
             color: #FFFFFF;
             border-radius: 30px;
         }

         .blob-btn:hover:after {
             transition: all 0.3s;
             left: 0;
             top: 0;
             border-radius: 30px;
         }

         .blob-btn__inner {
             z-index: -1;
             overflow: hidden;
             position: absolute;
             left: 0;
             top: 0;
             width: 100%;
             height: 100%;
             border-radius: 30px;
             background: #ffffff;
         }

         .blob-btn__blobs {
             position: relative;
             display: block;
             height: 100%;
             filter: url('#goo');
         }

         .blob-btn__blob {
             position: absolute;
             top: 2px;
             width: 25%;
             height: 100%;
             background: #4ade80 ;
             border-radius: 100%;
             transform: translate3d(0, 150%, 0) scale(1.7);
             transition: transform 0.45s;
         }

         .blob-btn__blob:nth-child(1) {
             left: 0%;
             transition-delay: 0s;
         }
         .blob-btn__blob:nth-child(2) {
             left: 30%;
             transition-delay: 0.08s;
         }
         .blob-btn__blob:nth-child(3) {
             left: 60%;
             transition-delay: 0.16s;
         }
         .blob-btn__blob:nth-child(4) {
             left: 90%;
             transition-delay: 0.24s;
         }

         .blob-btn:hover .blob-btn__blob {
             transform: translateZ(0) scale(1.7);
         }

         .blob-btn__text {
             position: relative;
             z-index: 2;
         }
     `}</style>
     
     {/* SVG Filter for Gooey Effect */}
     <svg style={{ position: 'absolute', width: 0, height: 0 }}>
         <defs>
             <filter id="goo">
                 <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                 <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                 <feBlend in="SourceGraphic" in2="goo" />
             </filter>
         </defs>
     </svg>
   </div>;
}
