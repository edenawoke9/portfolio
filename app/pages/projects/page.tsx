'use client';

import { useState } from 'react';

export default function Project() {
    const projects = [
        {
            number: "1",
            title: "Bingo Card Design",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            image: "/bingo-card.jpg",
            
        },
        {
            number: "2",
            title: "Mockup Stationery",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            image: "/mockup-stationery.jpg",
            
        },
        {
            number: "3",
            title: "El Trompo",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            image: "/el-trompo.jpg",
         
        },
        {
            number: "4",
            title: "Another Project",
            description: "Description for another project.",
            image: "/bingo-card.jpg",

        },
        {
            number: "5",
            title: "Fifth Project",
            description: "This is the fifth project in the carousel.",
            image: "/mockup-stationery.jpg",
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    return (
        <section className="min-h-screen bg-black py-20">
            <div className="max-w-7xl mx-auto px-4">
            <div className="relative">
                    <h2 className="text-8xl sm:text-[290px] font-serif text-white opacity-80 flex justify-center tracking-tight leading-none">

                        PROJECTS
                    </h2>
                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-black rounded-full"></div>
                </div>
                {/* Projects Carousel */}
                <div className="relative h-[600px] flex items-center justify-center" style={{ perspective: '1000px' }}>
                    {projects.map((project, index) => {
                        const offset = (index - currentIndex + projects.length) % projects.length;
                        const isVisible = Math.abs(offset) <= 2 || offset === projects.length - 1 || offset === projects.length - 2;

                        let transform = '';
                        let zIndex = 0;
                        let opacity = 0;

                        if (offset === 0) {
                            transform = 'translateX(0) scale(1)';
                            zIndex = 3;
                            opacity = 1;
                        } else if (offset === 1 || offset === projects.length -1) {
                            const x = (offset === 1) ? '95%' : '-95%';
                            transform = `translateX(${x}) scale(0.8)`;
                            zIndex = 2;
                            opacity = 0.6;
                        } else if (offset === 2 || offset === projects.length - 2) {
                            const x = (offset === 2) ? '165%' : '-165%';
                            transform = `translateX(${x}) scale(0.6)`;
                            zIndex = 1;
                            opacity = 0.3;
                        }


                        return (
                            <div
                                key={project.number}
                                className="absolute transition-all duration-500 ease-out"
                                style={{
                                    transform: transform,
                                    zIndex: zIndex,
                                    opacity: isVisible ? opacity : 0,
                                    visibility: isVisible ? 'visible' : 'hidden',
                                }}
                            >
                                <div className={`bg-white opacity-70 rounded-3xl p-8 relative min-h-[500px] w-[400px] group`}>
                                    {/* Project Number */}
                                    <div className="absolute -left-4 -top-4 text-[120px] font-serif text-black/10">
                                        {project.number}
                                    </div>

                                    {/* Content Container */}
                                    <div className="relative z-10 h-full flex flex-col">
                                        {/* Image Card */}
                                        <div className="bg-white/90 rounded-2xl p-4 shadow-lg">
                                            <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                                                {/* Replace with actual image */}
                                                <div className="absolute inset-0 bg-black/5"></div>
                                            </div>
                                        </div>

                                        {/* Text Content */}
                                        <div className="mt-8">
                                            <h3 className="text-2xl font-serif mb-4">{project.title}</h3>
                                            <p className="text-black/70 leading-relaxed text-sm">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Navigation */}
                <div className="flex justify-center items-center mt-12 space-x-4">
                    <button onClick={prevProject} className="text-white text-4xl font-mono p-2 hover:text-gray-400 transition-colors">
                        &larr;
                    </button>
                    <button onClick={nextProject} className="text-white text-4xl font-mono p-2 hover:text-gray-400 transition-colors">
                        &rarr;
                    </button>
                </div>
            </div>
        </section>
    );
}