"use client";

import LuloIcon from "./ui/lulo-icon";

export function AnnouncementBar() {
  return (
    <div className="w-full bg-gray-900 text-white h-[42px] flex items-center overflow-hidden">
      <div className="relative flex overflow-x-hidden w-full">
        <div className="animate-marquee whitespace-nowrap">
          {Array(10).fill(0).map((_, i) => (
            <span key={i} className="mx-4 inline-flex items-center">
              <LuloIcon width={24} height={24} className="mr-2" />
              <span className="text-sm font-medium uppercase tracking-wider">Coming soon...</span>
            </span>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
          {Array(10).fill(0).map((_, i) => (
            <span key={i} className="mx-4 inline-flex items-center">
              <LuloIcon width={24} height={24} className="mr-2" />
              <span className="text-sm font-medium uppercase tracking-wider">Coming soon...</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
} 
