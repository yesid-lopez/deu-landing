"use client";

import { motion } from "framer-motion";
import { MapPin, ListChecks, GraduationCap, type LucideIcon } from "lucide-react";

type Step = {
  number: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
  lightColor: string;
};

const steps: Step[] = [
  {
    number: "1",
    title: "Pick Your Bundesland",
    description:
      "Choose your German state so you get the region-specific questions that will actually appear in your exam.",
    Icon: MapPin,
    color: "bg-accent-blue",
    lightColor: "bg-accent-blue/10",
  },
  {
    number: "2",
    title: "Practice Daily",
    description:
      "Work through multiple-choice questions with instant feedback. Star the ones you want to revisit and build your knowledge step by step.",
    Icon: ListChecks,
    color: "bg-accent-pink",
    lightColor: "bg-accent-pink/10",
  },
  {
    number: "3",
    title: "Take a Mock Test",
    description:
      "Simulate the real exam end-to-end, review your results, and head into the test with the confidence of someone who's done it before.",
    Icon: GraduationCap,
    color: "bg-accent-emerald",
    lightColor: "bg-accent-emerald/10",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-sm font-semibold text-sage-600 uppercase tracking-wider">
            How it works
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight">
            Three simple steps
          </h2>
          <p className="mt-4 text-lg text-navy-400">
            Getting started is easy. No account needed, no subscription
            required.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-[72px] left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-0.5 bg-navy-200/40" />

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {steps.map((step, index) => {
              const { Icon } = step;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative mb-6 z-10">
                    <div className="w-36 h-36 rounded-full bg-white">
                      <div
                        className={`w-full h-full rounded-full ${step.lightColor} flex items-center justify-center`}
                      >
                        <Icon
                          className="w-16 h-16 text-navy-900"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                    <div
                      className={`absolute -bottom-1 -right-1 w-10 h-10 rounded-full ${step.color} text-white text-sm font-bold flex items-center justify-center shadow-lg`}
                    >
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-navy-500 leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
