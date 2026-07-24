"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const APP_STORE_URL =
  "https://apps.apple.com/de/app/deu-einb%C3%BCrgerungstest-2025/id6746731600?l=en-GB";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.lulo.deu";

const stats = [
  { value: "300+", label: "Official Questions" },
  { value: "16", label: "Bundesländer" },
  { value: "100%", label: "Offline" },
];

export function DownloadCTA() {
  return (
    <section className="relative py-20 lg:py-28 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-[15%] w-[500px] h-[500px] bg-accent-blue/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] bg-accent-pink/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-emerald/[0.03] rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-semibold text-navy-400 uppercase tracking-wider">
            Get Started
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Ready to ace the{" "}
            <span className="text-gradient">Einbürgerungstest</span>?
          </h2>
          <p className="mt-4 text-lg text-navy-300">
            Download DEU for free and start studying today. No account
            needed, no subscription required.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-5"
        >
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="Download App Store"
            className="inline-block transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
          >
            <Image
              src="/images/appstore/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg"
              alt="Download on the App Store"
              width={180}
              height={60}
              className="h-[52px] w-auto"
            />
          </a>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="Download Google Play"
            className="inline-block transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
          >
            <Image
              src="/images/playstore/google-play-badge-wht.svg"
              alt="Get it on Google Play"
              width={180}
              height={53}
              className="h-[52px] w-auto"
            />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mt-14 flex items-center justify-center gap-8 sm:gap-14"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-8 sm:gap-14">
              {i > 0 && <div className="w-px h-10 bg-navy-700/60" />}
              <div className="text-center">
                <span className="block text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </span>
                <div className="text-sm text-navy-400 mt-1">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
