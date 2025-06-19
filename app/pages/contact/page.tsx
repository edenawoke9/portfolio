// import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#7b7be6] via-[#a8a8f0] to-[#b3a7f6] py-12 px-2">
      <div
        className="relative w-full mx-auto flex flex-col md:flex-row items-stretch bg-white p-12"
        style={{
          maxWidth: '950px',
          boxShadow: '0 20px 50px rgba(45, 35, 66, 0.2)',
          borderRadius: '4% 35% 12% 8% / 8% 15% 30% 5%',
          boxSizing: 'border-box'
        }}
      >
        {/* Left: Form */}
        <div className="flex-1 flex flex-col justify-center z-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#6c63ff] mb-2">Let's talk</h2>
          <p className="text-[#7b7be6] mb-8">To request a quote or want to meet up for coffee, contact us directly or fill out the form and we will get back to you promptly.</p>
          <form className="space-y-5">
            <input type="text" placeholder="Your Name" className="w-full rounded-full bg-[#f4f6fb] px-6 py-4 text-[#6c63ff] placeholder-[#b3a7f6] focus:outline-none focus:ring-2 focus:ring-[#6c63ff] text-base" />
            <input type="email" placeholder="Your Email" className="w-full rounded-full bg-[#f4f6fb] px-6 py-4 text-[#6c63ff] placeholder-[#b3a7f6] focus:outline-none focus:ring-2 focus:ring-[#6c63ff] text-base" />
            <textarea placeholder="Your Message" rows={4} className="w-full rounded-3xl bg-[#f4f6fb] px-6 py-4 text-[#6c63ff] placeholder-[#b3a7f6] focus:outline-none focus:ring-2 focus:ring-[#6c63ff] text-base" />
            <button type="submit" className="w-full mt-2 py-4 rounded-full bg-[#6c63ff] text-white font-semibold shadow-lg hover:bg-[#5548c8] transition text-lg">Send Message</button>
          </form>
        </div>
        {/* Right: Illustration, Info, Socials */}
        <div className="flex-1 flex flex-col justify-center items-center md:pl-12 z-20">
          {/* Illustration */}
          <div className="mb-6">
            <svg width="160" height="140" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="80" cy="70" r="70" fill="#e6e6fa" />
              <rect x="50" y="70" width="60" height="40" rx="10" fill="#6c63ff" />
              <rect x="60" y="50" width="40" height="30" rx="6" fill="#fff" />
              <polygon points="80,80 120,70 80,110 40,70" fill="#b3a7f6" />
              <circle cx="120" cy="40" r="8" fill="#6c63ff" />
              <rect x="110" y="30" width="16" height="6" rx="3" fill="#fff" />
              <circle cx="40" cy="40" r="4" fill="#b3a7f6" />
              <rect x="30" y="30" width="8" height="3" rx="1.5" fill="#fff" />
              <circle cx="130" cy="100" r="3" fill="#b3a7f6" />
              <circle cx="30" cy="100" r="3" fill="#6c63ff" />
              <rect x="120" y="110" width="10" height="3" rx="1.5" fill="#fff" />
            </svg>
          </div>
          <div className="mb-6 text-[#7b7be6] text-base space-y-2 w-full">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#6c63ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>151 New Park Ave, Hartford, CT 06106, United States</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#6c63ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span>contactus@inveritasoft.com</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#6c63ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 007.48 19h9.04a2 2 0 001.83-1.3L17 13M7 13l1.5-6h7l1.5 6" /></svg>
              <span>+1 (203) 302-9545</span>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#6c63ff]/10 text-[#6c63ff] hover:bg-[#6c63ff]/20 transition"><svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg></a>
            <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#6c63ff]/10 text-[#6c63ff] hover:bg-[#6c63ff]/20 transition"><svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0024 4.557z"/></svg></a>
            <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#6c63ff]/10 text-[#6c63ff] hover:bg-[#6c63ff]/20 transition"><svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.808 2.256 6.088 2.243 6.497 2.243 12c0 5.503.013 5.912.072 7.192.059 1.276.353 2.449 1.32 3.416.967.967 2.14 1.261 3.416 1.32 1.28.059 1.689.072 7.192.072s5.912-.013 7.192-.072c1.276-.059 2.449-.353 3.416-1.32.967-.967 1.261-2.14 1.32-3.416.059-1.28.072-1.689.072-7.192s-.013-5.912-.072-7.192c-.059-1.276-.353-2.449-1.32-3.416C21.449.425 20.276.131 19 .072 17.72.013 17.311 0 12 0z"/></svg></a>
          </div>
        </div>
      </div>
    </section>
  );
}