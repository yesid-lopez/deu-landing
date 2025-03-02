"use client";

import { usePlausible } from "next-plausible";
import Image from "next/image";

export const DownloadIOSButton = () => {
  const plausible = usePlausible();

  return (
    <a
      href="https://luloai.com"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => plausible("DownloadAppStore")}
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
