"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import featuresData from "@/data/features.json";

type FeatureScreen = {
  title: string;
  description: string;
  screenshot: string;
};

const screens: FeatureScreen[] = featuresData.features;

const INITIAL_INDEX = Math.floor(screens.length / 2);

export function AppShowcase() {
  const [active, setActive] = useState(INITIAL_INDEX);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const scrollToIndex = useCallback((index: number, instant = false) => {
    const container = scrollRef.current;
    if (!container) return;
    const items = container.querySelectorAll<HTMLDivElement>("[data-index]");
    if (items[index]) {
      const item = items[index];
      const containerRect = container.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      const offset =
        itemRect.left -
        containerRect.left -
        containerRect.width / 2 +
        itemRect.width / 2;
      container.scrollBy({
        left: offset,
        behavior: instant ? "instant" : "smooth",
      });
    }
  }, []);

  useEffect(() => {
    scrollToIndex(INITIAL_INDEX, true);
  }, [scrollToIndex]);

  const prev = useCallback(() => {
    const n = active === 0 ? screens.length - 1 : active - 1;
    setActive(n);
    scrollToIndex(n);
  }, [active, scrollToIndex]);

  const next = useCallback(() => {
    const n = active === screens.length - 1 ? 0 : active + 1;
    setActive(n);
    scrollToIndex(n);
  }, [active, scrollToIndex]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const center = containerRect.left + containerRect.width / 2;
      const items = container.querySelectorAll<HTMLDivElement>("[data-index]");
      let closest = 0;
      let minDist = Infinity;
      items.forEach((item, i) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const dist = Math.abs(center - itemCenter);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setActive(closest);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX.current) * 1.5;
    if (scrollRef.current)
      scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };
  const onMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <section id="screenshots" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-sage-600 uppercase tracking-wider">
            App Preview
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight">
            Built to make
            <br />
            studying{" "}
            <span className="relative inline-block">
              <span className="text-gradient">effortless</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M1 5.5C47 2 153 2 199 5.5"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="mt-6 text-lg text-navy-400 max-w-lg mx-auto">
            Practice questions, take mock tests, and choose your Bundesland —
            all in a clean interface built for focus.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          className="flex gap-5 sm:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth px-[calc(50vw-130px)] sm:px-[calc(50vw-140px)] pb-4 no-scrollbar cursor-grab active:cursor-grabbing"
        >
          {screens.map((screen, index) => (
            <div
              key={screen.screenshot}
              data-index={index}
              className="snap-center flex-shrink-0"
            >
              <div
                className={`w-[260px] sm:w-[280px] transition-all duration-300 ${
                  active === index
                    ? "scale-100 opacity-100"
                    : "scale-90 opacity-40"
                }`}
              >
                <div className="relative aspect-[931/2016] rounded-[36px] overflow-hidden border-[6px] border-navy-900/90 shadow-2xl bg-white">
                  <Image
                    src={screen.screenshot}
                    alt={screen.title}
                    fill
                    sizes="280px"
                    draggable={false}
                    className="object-cover select-none pointer-events-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-sage-50 border border-sage-200 flex items-center justify-center text-navy-600 hover:bg-sage-100 transition-colors"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {screens.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActive(index);
                    scrollToIndex(index);
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    active === index
                      ? "w-6 h-2.5 bg-sage-500"
                      : "w-2.5 h-2.5 bg-sage-200 hover:bg-sage-300"
                  }`}
                  aria-label={`Go to screenshot ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-sage-50 border border-sage-200 flex items-center justify-center text-navy-600 hover:bg-sage-100 transition-colors"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Active screenshot caption */}
          <div className="mt-6 text-center max-w-md mx-auto">
            <h3 className="text-lg font-bold text-navy-900">
              {screens[active].title}
            </h3>
            <p className="mt-1 text-sm text-navy-400 leading-relaxed">
              {screens[active].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
