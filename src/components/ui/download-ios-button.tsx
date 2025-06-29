"use client";

import Image from "next/image";

export const DownloadIOSButton = () => {
  
  return (
    <a
      href="https://apps.apple.com/de/app/deu-einb%C3%BCrgerungstest-2025/id6746731600?l=en-GB"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform hover:scale-105"
      data-umami-event="Download App Store"
    >
      <Image
        src="/app_store_badge.png"
        alt="Download on the App Store"
        width={200}
        height={60}
        className="object-contain"
      />
    </a>
  );
};
