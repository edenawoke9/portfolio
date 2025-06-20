'use client';
import { useEffect, useState } from "react";

export default function About() {
    const slides = [
        {
            title: "About Me",
            content: "I am Eden Awoke, a full-stack software developer, who loves to create, modify, design, and develop websites."
        },
        {
            title: "My Expertise",
            content: "I design and develop digital solutions with attractive and well-coded interface which are perceived as easier to use and make users loyal."
        },
        {
            title: "My Vision",
            content: "Creating seamless, intuitive, and innovative web experiences that bridge the gap between technology and human interaction."
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(1);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
    };

    const getSlideClass = (index: number) => {
        if (index === currentSlide) {
            return "transform scale-100 opacity-100 z-30";
        }
        if (index === (currentSlide + 1) % 3) {
            return "transform -translate-x-[60%] scale-90 opacity-50 z-20";
        }
        return "transform translate-x-[60%] scale-90 opacity-50 z-20";
    };

    return (
        <section className="w-full relative overflow-hidden flex items-center justify-center bg-black">
            <div className="relative w-full max-w-7xl h-[600px] flex items-center justify-center">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute w-[600px] p-8 bg-gray-900/50 backdrop-blur-sm rounded-xl 
                            transition-all duration-700 ease-in-out ${getSlideClass(index)}`}
                    >
                        <h2 className="text-4xl font-extrabold mb-6 text-center">{slide.title}</h2>
                        <p className="text-2xl text-white/90 font-semibold leading-relaxed text-center">
                            {slide.content}
                        </p>
                    </div>
                ))}
                
                <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-sm transition-all"
                >
                    ←
                </button>
                <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-sm transition-all"
                >
                    →
                </button>
            </div>
        </section>
    );
}