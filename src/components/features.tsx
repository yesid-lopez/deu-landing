"use client";

import { IPhoneFrame } from "@/components/ui/iphone-frame";
import featuresData from "@/data/features.json";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

// Update the type definition
type FeatureContent = {
  title: string;
  description: string;
  screenshot: string;
};

const featureContents: FeatureContent[] = featuresData.features;

function Screenshot({
  src,
  index,
  progress,
}: {
  src: string;
  index: number;
  progress: MotionValue<number>;
}) {
  const visibility = useTransform(
    progress,
    [index * 0.2 - 0.1, index * 0.2 + 0.05],
    ["none", "block"]
  );

  return (
    <motion.div className="absolute inset-0" style={{ display: visibility }}>
      <Image
        src={src}
        alt={`App screenshot ${index + 1}`}
        fill
        priority={index === 0}
        className="object-cover"
      />
    </motion.div>
  );
}

function FeatureText({
  index,
  progress,
}: {
  index: number;
  progress: MotionValue<number>;
}) {
  const transitionPoints = {
    start: index * 0.2,
    enter: index * 0.2 + 0.05,
    exit: (index + 1) * 0.2 - 0.05,
    end: (index + 1) * 0.2,
  };

  // Create all transforms unconditionally
  const baseYOffset = useSpring(
    useTransform(
      progress,
      [
        transitionPoints.start,
        transitionPoints.enter,
        transitionPoints.exit,
        transitionPoints.end,
      ],
      index === 0 ? [0, 0, 0, -250] : [250, 0, 0, -250]
    ),
    {
      stiffness: 100,
      damping: 20,
      mass: 0.1,
    }
  );

  const baseOpacity = useSpring(
    useTransform(
      progress,
      [
        transitionPoints.start,
        transitionPoints.enter,
        transitionPoints.exit,
        transitionPoints.end,
      ],
      index === 0 ? [1, 1, 1, 0] : [0, 1, 1, 0]
    ),
    {
      stiffness: 100,
      damping: 20,
    }
  );

  const lastItemYOffset = useSpring(
    useTransform(
      progress,
      [transitionPoints.start, transitionPoints.enter],
      [200, 0]
    ),
    {
      stiffness: 100,
      damping: 20,
      mass: 0.1,
    }
  );

  const lastItemOpacity = useSpring(
    useTransform(
      progress,
      [transitionPoints.start, transitionPoints.enter],
      [0, 1]
    ),
    {
      stiffness: 100,
      damping: 20,
    }
  );

  const isLastItem = index === featureContents.length - 1;

  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center text-white"
      style={{
        opacity: isLastItem ? lastItemOpacity : baseOpacity,
        y: isLastItem ? lastItemYOffset : baseYOffset,
      }}
    >
      <h3 className="text-3xl font-bold mb-4">
        {featureContents[index].title}
      </h3>
      <p className="text-lg opacity-90">{featureContents[index].description}</p>
    </motion.div>
  );
}
const FeatureRectangle = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] sm:w-[90%] h-[60%] sm:h-[70%] bg-stone-800 rounded-[3rem]" />
  );
};

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"], // Changed offset to make scrolling more responsive
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100, // Increased for more immediate response
    damping: 20, // Reduced for smoother movement
    mass: 0.1, // Reduced for quicker response
    restDelta: 0.001,
  });

  const stickyProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="h-[400dvh]" id="features">
      {/* Reduced height for tighter scrolling */}
      <div className="sticky top-0 md:h-screen h-[80vh]">
        <FeatureRectangle />
        <div className="absolute inset-0 grid grid-cols-12 items-center px-4 sm:px-8">
          <div className="hidden sm:block col-span-12 sm:col-start-2 sm:col-span-4">
            <IPhoneFrame>
              <div className="relative w-full h-full">
                {featureContents.map((feature, index) => (
                  <Screenshot
                    key={index}
                    src={feature.screenshot}
                    index={index}
                    progress={smoothProgress}
                  />
                ))}
              </div>
            </IPhoneFrame>
          </div>
          <div className="col-span-12 col-start-2 col-end-12 sm:col-span-5 sm:col-start-7 h-[250px] relative mx-5">
            {featureContents.map((_, index) => (
              <FeatureText
                key={index}
                index={index}
                progress={smoothProgress}
              />
            ))}
          </div>
        </div>
      </div>
      <motion.div
        className="fixed bottom-2 left-0 right-0 h-1 bg-primary"
        style={{ scaleX: stickyProgress }}
      />
    </div>
  );
}
