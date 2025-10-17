"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';

// Sample blog data
const blogPosts = [
    {
        id: 1,
        title: "2024 Blog Refresh, Markdown Experiments",
        author: "Eden Awoke",
        date: "2024-04-16",
        excerpt: "Welcome to my portfolio! I'd like to inform you that the blog section is currently in a testing phase.",
        content: "This is a detailed blog post about refreshing the blog design and experimenting with markdown features. The content would go here with full details about the development process, challenges faced, and solutions implemented.",
        tags: ["Web Development", "Design", "Markdown"]
    }]

export default function BlogPage() {
    const [selectedPost, setSelectedPost] = useState(null);

    const openModal = (post) => {
        setSelectedPost(post);
    };

    const closeModal = () => {
        setSelectedPost(null);
    };

    const handleTouchStart = (e) => {
        e.currentTarget.classList.add('active');
    };

    const handleTouchEnd = (e) => {
        setTimeout(() => {
            e.currentTarget.classList.remove('active');
        }, 300);
    };

    return (
        <section className=" h-64  text-white  md:py-20 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div 
                    className="mb-8 md:mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h1 
                        className="text-2xl  font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Blogs
                    </motion.h1>
                    <motion.div 
                        className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    />
                </motion.div>

                {/* Featured Blog Post */}
                <motion.div 
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.h2 
                            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            {blogPosts[0].title}
                        </motion.h2>
                        <motion.div 
                            className="flex items-center gap-4 mb-6 text-gray-400 text-sm md:text-base"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <span className="font-medium">{blogPosts[0].author}</span>
                            <span>•</span>
                            <span>{blogPosts[0].date}</span>
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        className="flex flex-col justify-center"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <motion.p 
                            className="text-base md:text-lg text-gray-300 leading-relaxed mb-6 md:mb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            {blogPosts[0].excerpt}
                        </motion.p>
                        <motion.button
                            className="blob-btn self-start px-6 md:px-8 py-2 md:py-3 bg-transparent text-white rounded-full border-2 border-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300 relative overflow-hidden group"
                            onClick={() => openModal(blogPosts[0])}
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="blob-btn__inner">
                                <span className="blob-btn__blobs">
                                    <span className="blob-btn__blob"></span>
                                    <span className="blob-btn__blob"></span>
                                    <span className="blob-btn__blob"></span>
                                    <span className="blob-btn__blob"></span>
                                </span>
                            </span>
                            <span className="blob-btn__text text-sm md:text-base relative z-10 group-hover:text-black transition-colors duration-300">More Blogs</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.button>
                    </motion.div>
                </motion.div>

              

                {/* Modal */}
                {selectedPost && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-2 md:p-4 z-50">
                        <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[95vh] md:max-h-[90vh] overflow-y-auto">
                            <div className="p-4 md:p-8">
                                <div className="flex justify-between items-start mb-4 md:mb-6">
                                    <div className="flex-1 pr-4">
                                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 leading-tight">{selectedPost.title}</h2>
                                        <div className="flex items-center gap-2 md:gap-4 text-gray-400 text-sm md:text-base">
                                            <span>{selectedPost.author}</span>
                                            <span>•</span>
                                            <span>{selectedPost.date}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={closeModal}
                                        className="text-gray-400 hover:text-white text-2xl md:text-3xl flex-shrink-0 w-8 h-8 flex items-center justify-center"
                                    >
                                        ×
                                    </button>
                                </div>
                                <div className="prose prose-invert max-w-none">
                                    <p className="text-gray-300 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                                        {selectedPost.content}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-4 md:mt-6">
                                        {selectedPost.tags.map((tag, idx) => (
                                            <span key={idx} className="px-2 md:px-3 py-1 bg-gray-700 text-xs md:text-sm rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Blob Button Styles */}
            <style jsx>{`
                /* Blob Button Styles */
                .blob-btn {
                    z-index: 1;
                    position: relative;
                    padding: 20px 46px;
                    text-align: center;
                    text-transform: uppercase;
                    color: #FFFFFF;
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
                    background: transparent;
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
                    background: #87CEEB;
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

                .blob-btn:hover .blob-btn__blob,
                .blob-btn:active .blob-btn__blob,
                .blob-btn.active .blob-btn__blob {
                    transform: translateZ(0) scale(1.7);
                }

                /* Mobile touch support */
                @media (hover: none) and (pointer: coarse) {
                    .blob-btn:active .blob-btn__blob {
                        transform: translateZ(0) scale(1.7);
                    }
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
        </section>
    );
}
