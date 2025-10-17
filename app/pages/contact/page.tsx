"use client"

import { useEffect, useState } from "react"

export default function Contact() {
  return (
    <section className="relative z-10 h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Component */}
      <div className="fixed  bottom-0 left-0 w-full">
        <Component />
      </div>
      {/* Overlay and Foreground Content */}
    </section>
  )
}

export function Component() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative flex flex-col w-screen justify-center bg-white items-center text-black   p-4 md:p-20  backdrop-blur-sm">
      {/* Animated background gradient */}
      <div className="absolute w-screen inset-0 bg-gradient-to-r from-green-50/20 to-blue-50/20 animate-pulse" />

      <div
        className={` w-full   flex justify-between mb-10 relative z-10 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="animate-fade-in-up w-full b"  style={{ animationDelay: "0.2s" }}>
          <div className="flex w-full md:flex-row flex-col   justify-between">
            <div>
            <h1 className="text-3xl font-bold md:text-4xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent animate-gradient">
            Contact
           
          </h1>
          <p className="mt-4 text-lg animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            I'd love to hear about your next project or collaboration. Feel free to reach out!
          </p>
            </div>
         
          <div
          className={`mt-10 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
          style={{ animationDelay: "0.8s" }}
        >
          <span className="mb-2 block font-medium text-gray-700 animate-fade-in">Find me on:</span>

          <div className="flex flex-wrap gap-6">
            <a
              href="@Panther_a"
              aria-label="Telegram"
              className="flex items-center gap-2 text-gray-600 transition-all duration-300 hover:text-green-400 hover:scale-110 hover:-translate-y-1 group animate-fade-in-left"
              style={{ animationDelay: "1s" }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                className="group-hover:animate-bounce"
              >
                <path
                  d="M21.05 3.55a2 2 0 0 0-2.18-.36L3.7 10.1a2 2 0 0 0 .18 3.7l3.7 1.2 1.2 3.7a2 2 0 0 0 3.7.18l6.91-15.17a2 2 0 0 0-.36-2.18z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-base group-hover:font-semibold transition-all duration-300">Telegram</span>
            </a>

            <a
              href="https://github.com/edenawoke9"
              aria-label="Github"
              className="flex items-center gap-2 text-gray-600 transition-all duration-300 hover:text-green-400 hover:scale-110 hover:-translate-y-1 group animate-fade-in-left"
              style={{ animationDelay: "1.2s" }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                className="group-hover:animate-spin"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-base group-hover:font-semibold transition-all duration-300">Github</span>
            </a>

            <a
              href="https://www.linkedin.com/in/eden-awoke-581495297/"
              aria-label="Linkedin"
              className="flex items-center gap-2 text-gray-600 transition-all duration-300 hover:text-green-400 hover:scale-110 hover:-translate-y-1 group animate-fade-in-left"
              style={{ animationDelay: "1.4s" }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                className="group-hover:animate-pulse"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="1.5" />
                <path
                  d="M7 10v7M7 7v.01M12 10v7m0-7c0-1.1.9-2 2-2s2 .9 2 2v7"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-base group-hover:font-semibold transition-all duration-300">Linkedin</span>
            </a>
          </div>
        </div>
          </div>
          

         

          <a
            href="mailto:awokeeden9@gmail.com"
            className="mt-8 inline-block rounded-lg px-7 py-3 font-semibold text-black shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-green-50 border border-gray-200 animate-fade-in-up group"
            style={{ animationDelay: "0.6s" }}
          >
            <span className="group-hover:animate-pulse">awokeeden9@gmail.com</span>
          </a>
        </div>

       
      </div>

      <footer
        className={`w-full px-6 pb-4 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ animationDelay: "1.6s" }}
      >
        <span className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300">
          Eden Awoke © 2024
        </span>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  )
}
