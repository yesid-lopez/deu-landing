"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface IPhoneFrameProps {
  children?: React.ReactNode;
  className?: string;
}

export function IPhoneFrame({ children, className }: IPhoneFrameProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isInitialAnimationComplete, setIsInitialAnimationComplete] = useState(false);

  useEffect(() => {
    // Trigger initial animation once component mounts
    if (!hasAnimated) {
      setTimeout(() => {
        setHasAnimated(true);
        // Reset back to original size after animation
        setTimeout(() => {
          setIsInitialAnimationComplete(true);
        }, 300); // Duration matches the animation
      }, 500);
    }
  }, [hasAnimated]);

  return (
    <div
      className={cn(
        "relative mx-auto rounded-[60px] border-[14px] border-black bg-white shadow-2xl",
        "h-[660px] w-[320px]",
        "sm:h-[680px] sm:w-[330px]",
        "border-[10px]",
        "rounded-[45px]",
        className
      )}
    >
      {/* Inner Screen */}
      <div className="h-full w-full overflow-hidden rounded-[35px] bg-white">
        {children}
      </div>

      {/* Dynamic Island */}
      <div className="absolute left-0 right-0 top-[12px] flex justify-center">
        <motion.div
          initial={{ scale: 1 }}
          animate={{
            scale: hasAnimated && !isInitialAnimationComplete ? 1.8 : 1,
          }}
          whileHover={{ scale: isExpanded ? 1 : 1.2 }}
          transition={{
            duration: isExpanded ? 0 : 0.2,
            type: "spring",
            stiffness: 200
          }}
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            "bg-black transition-all duration-300 cursor-pointer",
            isExpanded
              ? "h-[120px] w-[220px] rounded-[40px]"
              : "h-[30px] w-[120px] rounded-[40px]",
            "z-10"
          )}
        >
          {/* Optional: Add content inside Dynamic Island */}
          <div className="flex h-full w-full items-center justify-center">
            {isExpanded && (
              <div className="text-white text-sm p-4">
                Dynamic Island Content
              </div>
            )}
          </div>
        </motion.div>
      </div>
      
      {/* Lock Button */}
      <div className="absolute -right-[14px] top-[150px] h-[65px] w-[4px] rounded-r-lg bg-black" />
      
      {/* Volume Buttons */}
      <div className="absolute -left-[14px] top-[150px] h-[65px] w-[4px] rounded-l-lg bg-black" />
      <div className="absolute -left-[14px] top-[230px] h-[65px] w-[4px] rounded-l-lg bg-black" />
    </div>
  );
} 
