"use client"

import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import About from '../pages/about/page'
import Project from '../pages/projects/page'
import Blog from '../pages/blog/page'
import Contact from '../pages/contact/page'
import  BubbleMenu from '../../components/BubbleMenu'


const items = [
  {
    label: 'home',
    href: '#',
    ariaLabel: 'Home',
    rotation: -8,
    hoverStyles: { bgColor: '#4ade80', textColor: '#ffffff' }
  },
  {
    label: 'about',
    href: '#about',
    ariaLabel: 'About',
    rotation: 8,
    hoverStyles: { bgColor: '##4ade80', textColor: '#ffffff' }
  },
  {
    label: 'projects',
    href: '#projects',
    ariaLabel: 'Projects',
    rotation: 8,
    hoverStyles: { bgColor: '#4ade80', textColor: '#ffffff' }
  },
  {
    label: 'blog',
    href: '#blog',
    ariaLabel: 'Blog',
    rotation: 8,
    hoverStyles: { bgColor: '#4ade80', textColor: '#ffffff' }
  },
  {
    label: 'contact',
    href: '#contact',
    ariaLabel: 'Contact',
    rotation: -8,
    hoverStyles: { bgColor: '#4ade80', textColor: '#ffffff' }
  }
];




export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className=" bg-black w-screen overflow-x-hidden  text-white">
      
      {/* Navigation Bar */}
      <nav className="fixed top-0  left-0 right-0 bg-transparent border-b-transparent backdrop-blur-sm  z-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-xl font-bold hover:text-white/80 transition-colors duration-200"
              >
                {'< EDEN AWOKE />'}
              </button>
            </div>
            
            {/* Navigation Links */}
              <BubbleMenu
                onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className=""
                style={{}}
                items={items}
                menuAriaLabel="Toggle navigation"
                menuBg="transparent"
                menuContentColor="white"
                useFixedPosition={false}
                animationEase="back.out(1.5)"
                animationDuration={0.5}
                staggerDelay={0.12}
              />
          </div>
        </div>
      </nav>
       

      {/* Main Content */}
      <main className=" flex flex-col">
     
        {/* Home Section */}
        <section id="home" ref={heroRef} className="relative bg-black z-40 flex flex-row items-center justify-center w-screen min-h-screen gap-8 px-8 overflow-hidden">
         
           
            <div className='absolute md top-0 right-0 md:-right-20 w-full h-screen z-10 '>
              <video
                autoPlay
                loop
                muted
                playsInline
                
                className="w-full   h-full object-cover rounded-lg"
                onError={(e) => console.error('Video error:', e)}
                onLoadStart={() => console.log('Video loading started')}
                onCanPlay={() => console.log('Video can play')}
              >
                <source src="/eo.mp4" type="video/mp4" />
                <div className="text-white p-4">Video not supported or failed to load</div>
              </video>
            
          
            <motion.div 
              className="text-6xl md:text-8xl absolute left-0  md:top-1/3 top-3/4  ml-8 md:ml-20 flex flex-col font-semibold mb-4 z-20"
              style={{ y, opacity }}
            >
              <h1 className="text-white   -ml-4">Minimalist</h1>
              <span className="ml-6 md:ml-12 text-white">& Creative</span>
              <span className="ml-32 md:ml-72 text-2xl md:text-3xl text-white/80">Web Developer</span>
            </motion.div>
          </div>
        </section>

        <div id="about" className='z-40 relative bg-black'><About/></div>
       

        
        <section id="projects" className="relative min-h-screen bg-black py-20 z-40">
          <div className="">
            <div className="relative flex flex-col items-center justify-center py-12" style={{ perspective: '1000px' }}>
              <Project />
            </div>
          </div>
        </section>

        <section id="blog" className="relative min-h-[60vh] md:min-h-[70vh] bg-black z-40 py-12 md:py-20">
          <Blog />
        </section>

        <footer
          id="contact"
          
        >
          
            <Contact />
          
        </footer>

        
        
      </main>
   
  
  </div>
  )
} 