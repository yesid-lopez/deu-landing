"use client";

import { IPhoneFrame } from "@/components/ui/iphone-frame";
import featuresData from "@/data/features.json";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type FeatureContent = {
  title: string;
  description: string;
  screenshot: string;
};

export function Features() {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const features: FeatureContent[] = featuresData.features;
  const currentFeature = features[currentFeatureIndex];
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Function to handle next feature
  const handleNext = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    setCurrentFeatureIndex((prev) =>
      prev === features.length - 1 ? 0 : prev + 1
    );
  }, [features.length]);

  // Set up the timer for automatic advancement
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    // Set timeout to advance to next feature after 3 seconds
    timerRef.current = setTimeout(() => {
      handleNext();
    }, 5000);

    // Cleanup on unmount or when dependencies change
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [currentFeatureIndex, isPaused, handleNext]);

  // Pause on user interaction
  const handleUserInteraction = useCallback(() => {
    // Clear any existing pause timeout
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    setIsPaused(true);

    // Resume after 10 seconds of inactivity
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 10000);

    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center py-4 px-2 sm:py-8 sm:px-4 md:py-16"
      id="features"
      onMouseEnter={() => {
        setIsPaused(true);
        if (timerRef.current) {
          clearTimeout(timerRef.current);
          timerRef.current = null;
        }
      }}
      onMouseLeave={() => {
        setIsPaused(false);
      }}
    >
      <div className="flex flex-col lg:flex-row items-center gap-2 sm:gap-4 md:gap-12 w-full max-w-6xl mx-auto">
        {/* iPhone Frame with Feature Screenshot */}
        <div className="relative w-full lg:w-auto flex justify-center mb-2 sm:mb-4 lg:mb-0">
          <IPhoneFrame className="scale-40 sm:scale-100 pt-4 sm:pt-8 z-10">
            <div className="relative w-full h-full bg-white">
              {/* Feature Screenshot */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`screenshot-${currentFeatureIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 pt-10"
                >
                  <Image
                    src={currentFeature.screenshot}
                    alt={`${currentFeature.title} screenshot`}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </IPhoneFrame>
        </div>

        {/* Feature Description */}
        <div className="w-full lg:w-3/5 max-w-[400px] sm:max-w-[500px] lg:max-w-2xl mx-auto lg:mx-0">
          {/* Static card container with fixed dimensions */}
          <div className="bg-gray-900 text-white p-5 lg:p-10 rounded-2xl shadow-lg h-[280px] sm:h-[320px] lg:h-[400px] w-full flex flex-col relative overflow-hidden">
            {/* Content container with static navigation */}
            <div className="flex flex-col h-full">
              {/* Animated text content */}
              <div className="flex-grow overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${currentFeatureIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-3 lg:mb-5 text-white leading-tight">
                      {currentFeature.title}
                    </h3>
                    <p className="text-md sm:text-xl text-gray-200 mb-3 sm:mb-4 lg:mb-8 overflow-y-auto max-h-[120px] sm:max-h-[140px] lg:max-h-none leading-relaxed">
                      {currentFeature.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Static navigation and counter (not animated) */}
              <div className="mt-auto pt-1 sm:pt-2">
                {/* Feature Navigation */}
                <div className="flex gap-1 sm:gap-2 justify-center sm:justify-start">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentFeatureIndex(index);
                        handleUserInteraction();
                      }}
                      className={cn(
                        "w-4 h-4 sm:h-3 sm:w-3 rounded-full transition-all",
                        currentFeatureIndex === index
                          ? "bg-cyan-500 w-4 sm:w-5 md:w-6"
                          : "bg-gray-600 hover:bg-gray-500"
                      )}
                      aria-label={`View feature ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Feature counter */}
                <div className="mt-1 sm:mt-2 text-sm sm:text-sm text-gray-400 text-center sm:text-left">
                  {currentFeatureIndex + 1} of {features.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
