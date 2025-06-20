


export default function Contact() {
  return (
    <section className="relative z-10 h-96 overflow-hidden">
      {/* Background Component */}
      <div className="fixed bottom-0 left-0 w-full ">
        <Component/>
      </div>

      {/* Overlay and Foreground Content */}
     
    </section>
  );
}
export function Component() {
  return (
    <div className=" relative flex  flex-col text-black bg-white/80">
        <div className="m-auto w-full pt-10 px-6 flex justify-between mb-10">
          <div>  <h1 className="text-3xl font-bold  md:text-4xl">
            Contact
          </h1>
          <p className="mt-4 text-lg ">
            I'd love to hear about your next project or collaboration. Feel free
            to reach out!
          </p>
          <a
            href="mailto:awokeeden9@gmail.com"
            className="mt-8 inline-block rounded-lg px-7 py-3 font-semibold text-black shadow transition-colors"
          >
            awokeeden9@gmail.com
          </a>
          </div>
         
          <div className="mt-10">
            <span className="mb-2 block font-medium text-black-300">
              Find me on:
            </span>
            <div className="flex gap-6">
              <a
                href="#"
                aria-label="Telegram"
                className="flex items-center gap-2 text-black-200 transition-colors hover:text-green-500"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <path
                    d="M21.05 3.55a2 2 0 0 0-2.18-.36L3.7 10.1a2 2 0 0 0 .18 3.7l3.7 1.2 1.2 3.7a2 2 0 0 0 3.7.18l6.91-15.17a2 2 0 0 0-.36-2.18z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-base">Telegram</span>
              </a>
              <a
                href="#"
                aria-label="Github"
                className="flex items-center gap-2 text-black-200 transition-colors hover:text-green-500"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.c68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-base">Github</span>
              </a>
              <a
                href="#"
                aria-label="Linkedin"
                className="flex items-center gap-2 text-black-200 transition-colors hover:text-green-500"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M7 10v7M7 7v.01M12 10v7m0-7c0-1.1.9-2 2-2s2 .9 2 2v7"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-base">Linkedin</span>
              </a>
            </div>
          </div>
        </div>
        <footer className="w-full px-6 pb-4">
          <span className="text-sm text-black-400">Eden Awoke © 2024</span>
        </footer>
      </div>
  );
}