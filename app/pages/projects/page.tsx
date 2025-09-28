'use client';

import { useState } from 'react';
import Image from 'next/image';

// Define the Project type
interface ProjectType {
    number: string;
    title: string;
    description: string;
    image: string;
    techStack: string[];
    github: string;
}

export default function Project() {
    const projects: ProjectType[] = [
        {
            "number": "1",
            "title": "Instagram Clone",
            "description": "A full-stack social media application emulating the core features of Instagram, including user authentication, posts, comments, and follows.",
            "image": "/ig.png",
            "techStack": ["Next.js", "React", "Tailwind CSS", "Ruby on Rails", "PostgreSQL"],
            "github": "https://instagram-clone-t21l.vercel.app/login"
        },
        {
            "number": "2",
            "title": "Candy Crush Telegram Mini-App",
            "description": "A recreation of the classic Candy Crush game, built as a Telegram Mini-App to be played directly within the Telegram messenger.",
            "image": "/candycrush.png",
            "techStack": ["React", "TypeScript", "Node.js", "Telegram Mini-App API"],
            "github": "https://t.me/PlayCCrushBot"
        },
        {
            "number": "3",
            "title": "Tewanay Client Website",
            "description": "A polished and responsive informational website built for a client to establish their online presence and communicate their brand message.",
            "image": "/tewanay.png",
            "techStack": ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
            "github": "https://www.tewanay.com/"
        },
        {
            "number": "4",
            "title": "CPU Scheduling Visualizer",
            "description": "An algorithmic simulator that visualizes the Round Robin CPU scheduling process, designed to help understand operating system concepts.",
            "image": "/cpu.jpeg",
            "techStack": ["Python", "Tkinter"],
            "github": "https://github.com/edenawoke9/Round-robin-Simulator-"
        },
        {
            "number": "5",
            "title": "Besenbet E-commerce",
            "description": "A niche e-commerce platform dedicated to Christian books and products, featuring a complete shopping cart, product management, and checkout system.",
            "image": "/shop.png",
            "techStack": ["Next.js", "React", "Node.js", "TypeScript", "MongoDB"],
            "github": "https://github.com/edenawoke9/Besenbet-front-end"
        },
        {
            "number": "6",
            "title": "AAU Student Test Bank",
            "description": "An interactive test bank platform for Addis Ababa University students to practice with past exam questions and test their knowledge.",
            "image": "/cs.png",
            "techStack": ["React", "JavaScript", "Firebase", "HTML", "CSS"],
            "github": "https://github.com/edenawoke9/cs-tests"
        },
        {
            "number": "7",
            "title": "Hunt Software Consultancy Website",
            "description": "A professional and modern corporate website developed for a client, Hunt Software Consultancy, to showcase their services and portfolio.",
            "image": "/hunt.png",
            "techStack": ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
            "github": "https://www.huntsoftwareconsulting.com"
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [modalProject, setModalProject] = useState<ProjectType | null>(null);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    const openModal = (project: ProjectType) => {
        setModalProject(project);
    };

    const closeModal = () => {
        setModalProject(null);
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-black w-full  py-20">
            <div className="max-w-6xl mx-auto px-4">
            <div className="relative">
                    <h2 className="text-7xl sm:text-[290px] font-serif text-white opacity-40 flex justify-center tracking-tight leading-none">

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
                                <div className={`bg-white opacity-70 rounded-3xl p-8 relative min-h-[500px] md:w-[350px] w-[300px]  ml-8 mr-8  group`}>
                                    {/* Render navigation buttons only for the active (middle) card */}
                                    {offset === 0 && (
                                        <>
                                            <button
                                                onClick={prevProject}
                                                className="absolute left-0 top-1/2 bg-green-900 -translate-y-1/2 -translate-x-1/2 text-white text-3xl font-mono p-2 hover:text-gray-600 transition-colors z-20 bg-black/80 rounded-full flex items-center justify-center w-12 h-12 shadow"
                                                aria-label="Previous Project"
                                            >
                                                &larr;
                                            </button>
                                            <button
                                                onClick={nextProject}
                                                className="absolute right-0 bg-green-900 top-1/2 -translate-y-1/2 translate-x-1/2 text-white text-3xl font-mono p-2 hover:text-gray-600 transition-colors z-20 bg-black/80 rounded-full shadow  flex items-center justify-center w-12 h-12"
                                                aria-label="Next Project"
                                            >
                                                &rarr;
                                            </button>
                                        </>
                                    )}
                                    {/* Project Number */}
                                    <div className="absolute z-50 -left-0 -top-4 text-[120px] font-serif text-black/10">
                                        {project.number}
                                    </div>
                                    {/* Content Container */}
                                    <div className="relative z-10 h-full flex flex-col">
                                       
                                        <div className="bg-white/90 rounded-2xl p-4 shadow-lg">
                                            <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                                               <Image src={project.image} width={200} height={200} alt="project.name"  className='w-full h-full object-contain opacity-100'/>
                                            </div>
                                        </div>
                                        {/* Text Content */}
                                        <div className="mt-8">
                                            <h3 className="text-2xl font-serif mb-4">{project.title}</h3>
                                            <p className="text-black/70 leading-relaxed text-sm">
                                                {project.description}
                                            </p>
                                            <button
                                                className="mt-6 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-semibold"
                                                onClick={() => openModal(project)}
                                            >
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Navigation */}
                
                    
                    
                

                {/* Modal */}
                {modalProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
                        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative animate-fadeIn">
                            <button
                                className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
                                onClick={closeModal}
                                aria-label="Close"
                            >
                                &times;
                            </button>
                            <div className="mb-6">
                                <img
                                    src={modalProject.image}
                                    alt={modalProject.title}
                                    className="w-full h-64 object-cover rounded-xl mb-4 border"
                                />
                                <h3 className="text-2xl font-serif mb-2">{modalProject.title}</h3>
                                <p className="text-black/70 mb-4">{modalProject.description}</p>
                                <div className="mb-4">
                                    <span className="font-semibold">Tech Stack:</span>
                                    <ul className="list-disc list-inside ml-2 mt-1 text-sm text-black/80">
                                        {modalProject.techStack.map((tech, idx) => (
                                            <li key={idx}>{tech}</li>
                                        ))}
                                    </ul>
                                </div>
                                <a
                                    href={modalProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-semibold"
                                >
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}