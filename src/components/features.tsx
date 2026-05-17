"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Feature = {
  number: string;
  title: string;
  description: string;
  iconPath: string;
};

const features: Feature[] = [
  {
    number: "01",
    title: "300+ Official Questions",
    description:
      "Practice every official Einbürgerungstest question, organized for clear and structured study.",
    iconPath: "/images/icon_1.svg",
  },
  {
    number: "02",
    title: "Realistic Mock Tests",
    description:
      "Simulate the exam end-to-end with full mock tests and timed sessions to know exactly where you stand.",
    iconPath: "/images/icon_7.svg",
  },
  {
    number: "03",
    title: "All 16 Bundesländer",
    description:
      "Pick your state and study the region-specific questions you'll actually be asked.",
    iconPath: "/images/icon_9.svg",
  },
  {
    number: "04",
    title: "Instant Feedback",
    description:
      "Correct answers in green, mistakes in red — learn the moment you answer.",
    iconPath: "/images/icon_2.svg",
  },
  {
    number: "05",
    title: "Save Favorites",
    description:
      "Star the trickiest questions and revisit them anytime to lock in what you've learned.",
    iconPath: "/images/icon_5.svg",
  },
  {
    number: "06",
    title: "Offline & Private",
    description:
      "No account, no internet, no tracking. Study anywhere with your data safely on your device.",
    iconPath: "/images/icon_6.svg",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <span className="text-sm font-semibold text-sage-600 uppercase tracking-wider">
            Features
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight">
            Everything you need{" "}
            <span className="text-gradient">in one place</span>
          </h2>
          <p className="mt-3 text-base text-navy-400">
            Built specifically for the Leben in Deutschland test.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <BentoCard
            feature={features[0]}
            index={0}
            className="sm:col-span-2 bg-feature-indigo"
            layout="horizontal"
          />

          <BentoCard
            feature={features[1]}
            index={1}
            className="sm:row-span-2 bg-feature-rose"
            layout="tall"
          />

          <BentoCard
            feature={features[2]}
            index={2}
            className="bg-feature-eucalyptus"
            layout="compact"
          />

          <BentoCard
            feature={features[3]}
            index={3}
            className="bg-feature-honey"
            layout="compact"
          />

          <BentoCard
            feature={features[4]}
            index={4}
            className="bg-feature-terra"
            layout="compact"
          />

          <BentoCard
            feature={features[5]}
            index={5}
            className="sm:col-span-2 bg-feature-graphite"
            layout="horizontal"
          />
        </div>
      </div>
    </section>
  );
}

interface BentoCardProps {
  feature: Feature;
  index: number;
  className: string;
  layout: "horizontal" | "tall" | "compact";
}

function BentoCard({ feature, index, className, layout }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`${className} rounded-2xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/[0.06]" />
        <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-white/[0.04]" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-white/[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-black/[0.08]" />
      </div>

      {layout === "horizontal" && <HorizontalLayout feature={feature} />}
      {layout === "tall" && <TallLayout feature={feature} />}
      {layout === "compact" && <CompactLayout feature={feature} />}
    </motion.div>
  );
}

function HorizontalLayout({ feature }: { feature: Feature }) {
  return (
    <div className="relative z-10 h-full flex items-end justify-between p-6 sm:p-8 min-h-[220px]">
      <div className="flex-1">
        <span className="inline-block text-sm font-semibold text-white/55 tracking-[0.15em] mb-3">
          {feature.number}
        </span>
        <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
        <p className="text-sm text-white/80 leading-relaxed max-w-[280px]">
          {feature.description}
        </p>
      </div>
      <div className="w-24 h-24 sm:w-28 sm:h-28 relative flex-shrink-0 ml-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
        <Image
          src={feature.iconPath}
          alt={feature.title}
          fill
          className="object-contain drop-shadow-lg"
          unoptimized
          loading="lazy"
        />
      </div>
    </div>
  );
}

function TallLayout({ feature }: { feature: Feature }) {
  return (
    <div className="relative z-10 h-full flex flex-col p-6 sm:p-8 min-h-[280px] sm:min-h-0">
      <span className="inline-block text-sm font-semibold text-white/55 tracking-[0.15em] mb-3">
        {feature.number}
      </span>
      <div className="flex-1 flex items-center justify-center py-6">
        <div className="w-28 h-28 sm:w-36 sm:h-36 relative transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
          <Image
            src={feature.iconPath}
            alt={feature.title}
            fill
            className="object-contain drop-shadow-lg"
            unoptimized
            loading="lazy"
          />
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
        <p className="text-sm text-white/80 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

function CompactLayout({ feature }: { feature: Feature }) {
  return (
    <div className="relative z-10 h-full flex flex-col p-6 min-h-[220px]">
      <div className="flex items-start justify-between mb-auto">
        <span className="inline-block text-sm font-semibold text-white/55 tracking-[0.15em]">
          {feature.number}
        </span>
        <div className="w-14 h-14 sm:w-16 sm:h-16 relative transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
          <Image
            src={feature.iconPath}
            alt={feature.title}
            fill
            className="object-contain drop-shadow-lg"
            unoptimized
            loading="lazy"
          />
        </div>
      </div>
      <div className="mt-auto">
        <h3 className="text-2xl font-bold text-white mb-1.5">
          {feature.title}
        </h3>
        <p className="text-[13px] text-white/80 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
