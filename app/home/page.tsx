"use client"

import Link from 'next/link'
import { useEffect, useState } from 'react'
import About from '../pages/about/page'
import Project from '../pages/projects/page'
import Contact from '../pages/contact/page'
import SplineScene from '../components/SplineScene'

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-b border-white/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-xl font-bold hover:text-white/80 transition-colors duration-200"
              >
                EDEN
              </button>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  About Me
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('about')}
              className="text-white/80 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-white/80 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white/80 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
     
        {/* Home Section */}
       
          <div className="flex  items-center justify-between">
            <h1 className="text-4xl font-bold mb-8">HI THIS IS EDEN</h1>
            <SplineScene/>
         
          </div>
         
      

        {/* About Section */}
        <div id="about"><About/></div>

        {/* Projects Section */}
        <div id="project"><Project/></div>

        {/* Contact Section */}
        <div id="contact"><Contact/></div>
      </main>
    </div>
  )
} 