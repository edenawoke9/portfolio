'use client';
import { useEffect, useState } from "react";

function Typewriter({ text, speed = 40, className = "" }: { text: string; speed?: number; className?: string }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return <span className={className}>{displayed}</span>;
}

export default function About(){
    const aboutText = `I am Eden Awoke, a full-stack software developer, who loves to create, modify, design, and develop websites. I design and develop digital solutions with attractive and well-coded interface which are perceived as easier to use and make users loyal.`;
    return  <section id="about" className="min-h-screen w-1/2 z-40 flex items-center bg-black ">
    <div >
      <h2 className="text-5xl font-extrabold mb-8">About Me</h2>
      <p className="text-3xl text-white/90 font-semibold leading-relaxed">
        <Typewriter text={aboutText} speed={40} />
      </p>
      
    </div>
  </section>
}