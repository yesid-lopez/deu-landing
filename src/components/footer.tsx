"use client";

import Image from "next/image";
import Link from "next/link";

const APP_STORE_URL =
  "https://apps.apple.com/de/app/deu-einb%C3%BCrgerungstest-2025/id6746731600?l=en-GB";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.lulo.deu";

export default function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Curved top edge */}
      <div className="h-6 w-full bg-navy-900 relative overflow-hidden">
        <div className="absolute bottom-0 left-[-50%] right-0 h-12 w-[200%] bg-black rounded-t-[100%]"></div>
      </div>

      {/* Glass-like layer */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] z-10 pointer-events-none"></div>

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 opacity-20 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center 30%, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 70%)",
        }}
      ></div>

      {/* Grain layers */}
      <div
        className="absolute inset-0 opacity-50 mix-blend-overlay pointer-events-none z-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          backgroundRepeat: "repeat",
        }}
      ></div>

      <div
        className="absolute inset-0 opacity-30 mix-blend-soft-light pointer-events-none z-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "300px 300px",
          backgroundRepeat: "repeat",
        }}
      ></div>

      <div className="max-w-7xl mx-auto pt-10 pb-0 px-6 md:px-12 relative z-30">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <Image
                src="/DEU.png"
                alt="DEU logo"
                width={32}
                height={32}
                className="w-8 h-8 rounded-xl"
              />
              <span className="font-semibold text-lg group-hover:opacity-80 transition-opacity">
                DEU
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Your mobile companion for the Leben in Deutschland test. Practice
              questions, mock tests, and instant feedback — built for offline
              study.
            </p>
          </div>

          {/* App Column */}
          <div>
            <h4 className="text-lg mb-4 font-medium">App</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#screenshots"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Screenshots
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-umami-event="Download App Store"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Download on iOS
                </a>
              </li>
              <li>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-umami-event="Download Google Play"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Download on Android
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-lg mb-4 font-medium">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Developer Column */}
          <div>
            <h4 className="text-lg mb-4 font-medium">Developer</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.luloai.com/about-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.luloai.com/contact-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-umami-event="Download App Store"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  App Store Page
                </a>
              </li>
              <li>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-umami-event="Download Google Play"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Google Play Page
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Big lulo branding */}
        <div className="mt-10 relative overflow-hidden" style={{ height: "8rem" }}>
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter absolute bottom-[-1rem] sm:bottom-[-1.25rem] md:bottom-[-2rem] lg:bottom-[-3rem] select-none">
            lulo
          </h2>
          <Image
            src="/lulo.png"
            alt="Lulo"
            width={192}
            height={192}
            className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 absolute bottom-[-2rem] sm:bottom-[-2.5rem] md:bottom-[-3.5rem] lg:bottom-[-4.5rem] right-0 invert"
          />
        </div>

        {/* Bottom bar */}
        <div className="py-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 relative z-40">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Lulo. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-accent-blue font-medium">Leben</span>
            <span className="text-gray-600">&middot;</span>
            <span className="text-accent-pink font-medium">in</span>
            <span className="text-gray-600">&middot;</span>
            <span className="text-accent-emerald font-medium">Deutschland</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
