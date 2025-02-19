"use client";

import { cn } from "@/lib/utils";

interface IPhoneFrameProps {
  children?: React.ReactNode;
  className?: string;
}

export function IPhoneFrame({ children, className }: IPhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative mx-auto h-[712px] w-[350px] rounded-[60px] border-[14px] border-black bg-white shadow-xl",
        className
      )}
    >
      {/* Inner Screen */}
      <div className="h-full w-full overflow-hidden rounded-[45px] bg-white">
        {children}
      </div>

      {/* Notch */}
      <div className="absolute left-1/2 top-0 h-[30px] w-[150px] -translate-x-1/2 transform rounded-b-[20px] bg-black z-10" />
      
      {/* Side Button */}
      <div className="absolute -right-[14px] top-[120px] h-[32px] w-[3px] rounded-l-lg bg-black" />
      
      {/* Volume Buttons */}
      <div className="absolute -left-[14px] top-[120px] h-[64px] w-[3px] rounded-r-lg bg-black" />
      <div className="absolute -left-[14px] top-[200px] h-[64px] w-[3px] rounded-r-lg bg-black" />
    </div>
  );
} 
