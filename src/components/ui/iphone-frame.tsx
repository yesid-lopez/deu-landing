"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface IPhoneFrameProps {
  children?: React.ReactNode;
  className?: string;
}

export function IPhoneFrame({ children, className }: IPhoneFrameProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={cn(
        "relative mx-auto h-[712px] w-[350px] rounded-[60px] border-[14px] border-black bg-white shadow-xl",
        "sm:scale-100 scale-[0.85] sm:h-[712px] sm:w-[350px] h-[600px] w-[280px]",
        "sm:border-[14px] border-[10px]",
        "sm:rounded-[60px] rounded-[45px]",
        className
      )}
    >
      {/* Inner Screen */}
      <div className="h-full w-full overflow-hidden rounded-[35px] bg-white sm:rounded-[45px]">
        {children}
      </div>

      {/* Dynamic Island */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "absolute left-1/2 top-[12px] -translate-x-1/2 transform bg-black transition-all duration-300 cursor-pointer z-10",
          isExpanded
            ? "h-[120px] w-[220px] rounded-[40px]"
            : "h-[30px] w-[120px] rounded-[40px]",
          "sm:top-[12px] top-[10px]"
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
      </div>
      
      {/* Lock Button */}
      <div className="absolute sm:-right-[18px] -right-[14px] top-[150px] h-[65px] w-[4px] rounded-r-lg bg-black" />
      
      {/* Volume Buttons */}
      <div className="absolute sm:-left-[18px] -left-[14px] top-[150px] h-[65px] w-[4px] rounded-l-lg bg-black" />
      <div className="absolute sm:-left-[18px] -left-[14px] top-[230px] h-[65px] w-[4px] rounded-l-lg bg-black" />
    </div>
  );
} 
