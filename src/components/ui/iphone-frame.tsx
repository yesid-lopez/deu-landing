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
        "relative mx-auto rounded-[60px] border-[14px] border-black bg-white shadow-2xl",
        " h-[712px] w-[310px] sm:w-[290px] sm:h-[740px]",
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
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "absolute left-1/2 top-[12px] -translate-x-1/2 transform bg-black transition-all duration-300 cursor-pointer",
          isExpanded
            ? "h-[120px] w-[220px] rounded-[40px]"
            : "h-[30px] w-[120px] rounded-[40px]",
          "top-[12px]",
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
      </div>
      
      {/* Lock Button */}
      <div className="absolute -right-[14px] top-[150px] h-[65px] w-[4px] rounded-r-lg bg-black" />
      
      {/* Volume Buttons */}
      <div className="absolute -left-[14px] top-[150px] h-[65px] w-[4px] rounded-l-lg bg-black" />
      <div className="absolute -left-[14px] top-[230px] h-[65px] w-[4px] rounded-l-lg bg-black" />
    </div>
  );
} 
