"use client"
import { useState, useEffect, useRef } from "react";
import React from "react";

export default function About() {
    const text = `I'm Eden Awoke, a full-stack developer who builds beautiful and functional websites. My focus is on creating clean code and attractive designs that provide an easy-to-use experience and help build a loyal user base.`;
    const words = text.split(" ");

    const [visibleWords, setVisibleWords] = useState(0);
    const lastScroll = useRef(0);

    useEffect(() => {
        const threshold = 40; // px per word

        const handleScroll = () => {
            const scrolled = window.scrollY;
            const wordIndex = Math.min(
                words.length,
                Math.floor(scrolled / threshold)
            );
            setVisibleWords(wordIndex);
            lastScroll.current = scrolled;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [words.length]);

    // Tech stack array
    const techStack = [
        "React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Python", "Django", "PostgreSQL"
    ];

    return <div><div className="flex  ml-8 mt-20 justify-center">
        <div>
            <h1 className="text-2xl">About</h1>
        </div>
        <div className={`text-4xl md:text-6xl ml-36  pb-20  font-mono flex flex-wrap`}>
            {words.map((word, i) => (
                <span
                    key={i}
                    className={`transition-opacity duration-500 ${
                        i < visibleWords ? "opacity-100" : "opacity-30"
                    }`}
                    style={{ marginRight: "0.3em" }}
                >
                    {word}
                </span>
            ))}
        </div>
        
    </div>
   
    <div className="w-full overflow-hidden  bg-black py-4 mt-20">
        <div className="relative">
            <div className="flex gap-8 animate-scroll-tech whitespace-nowrap">
                {techStack.concat(techStack).map((tech, idx) => (
                    <span
                        key={idx}
                        className="text-xl md:text-2xl font-semibold text-white px-6 py-2 bg-gray-800 rounded-lg shadow mx-2"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </div>
    {/* Add the animation CSS */}
    <style jsx>{`
        @keyframes scroll-tech {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-scroll-tech {
            animation: scroll-tech 20s linear infinite;
        }
    `}</style>
   </div>;
}
