"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const APP_STORE_URL =
  "https://apps.apple.com/de/app/deu-einb%C3%BCrgerungstest-2025/id6746731600?l=en-GB";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.lulo.deu";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-warm-white">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-[10%] w-[500px] h-[500px] bg-accent-blue/[0.04] rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-[5%] w-[600px] h-[600px] bg-accent-pink/[0.04] rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-sage-200/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — Text */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-navy-400 text-base sm:text-lg font-medium mb-5 tracking-wide">
                The best app for the citizenship test
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-navy-900">
                <span className="relative inline-block">
                  <span className="text-accent-blue">Pass</span>
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    viewBox="0 0 100 8"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M1 6C20 2 80 2 99 6"
                      stroke="#3b82f6"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                the Leben in Deutschland{" "}
                <span className="relative inline-block">
                  <span className="text-accent-pink">test</span>
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    viewBox="0 0 100 8"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M1 6C20 2 80 2 99 6"
                      stroke="#e84393"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                the{" "}
                <span className="relative inline-block">
                  <span className="text-accent-emerald">easy</span>
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    viewBox="0 0 100 8"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M1 6C20 2 80 2 99 6"
                      stroke="#10b981"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                way.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-7 text-lg sm:text-xl text-navy-400 max-w-lg leading-relaxed mx-auto lg:mx-0"
            >
              Practice official Einbürgerungstest questions across all 16
              Bundesländer, take full mock tests, and get instant feedback —
              fully offline, no account required.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-9 flex flex-wrap items-center gap-5 justify-center lg:justify-start"
            >
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-umami-event="Download App Store"
                className="inline-block transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
              >
                <Image
                  src="/images/appstore/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
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
                  src="/images/playstore/google-play-badge-blk.svg"
                  alt="Get it on Google Play"
                  width={180}
                  height={53}
                  className="h-[52px] w-auto"
                />
              </a>
            </motion.div>
          </div>

          {/* Right — App screenshots */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            {/* Decorative icons */}
            <div className="absolute -top-12 -right-10 w-28 h-28 sm:w-36 sm:h-36 opacity-70 pointer-events-none">
              <Image src="/images/icon_3.svg" alt="" width={150} height={150} className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-10 -right-14 w-24 h-24 sm:w-32 sm:h-32 opacity-50 pointer-events-none">
              <Image src="/images/icon_5.svg" alt="" width={130} height={130} className="w-full h-auto" />
            </div>

            <div className="relative z-10 flex items-start gap-3 sm:gap-5">
              <div className="w-[42%] sm:w-[230px] lg:w-[250px] mt-10 shrink-0">
                <div className="relative aspect-[931/2016] rounded-[36px] overflow-hidden border-[6px] border-navy-900/90 shadow-2xl bg-white">
                  <Image
                    src="/features/feature_1.jpeg"
                    alt="DEU study dashboard"
                    fill
                    priority
                    sizes="(max-width: 768px) 42vw, 250px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-[42%] sm:w-[230px] lg:w-[250px] shrink-0">
                <div className="relative aspect-[931/2016] rounded-[36px] overflow-hidden border-[6px] border-navy-900/90 shadow-2xl bg-white">
                  <Image
                    src="/features/feature_2.jpeg"
                    alt="Multiple choice practice questions"
                    fill
                    priority
                    sizes="(max-width: 768px) 42vw, 250px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
