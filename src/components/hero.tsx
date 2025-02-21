import { IPhoneFrame } from "@/components/ui/iphone-frame";
import Image from "next/image";
import LuloIcon from "@/components/ui/lulo-icon";
export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen">
      <LuloIcon />

      {/* Phone container */}
      <IPhoneFrame className="w-[320px] sm:w-[280px]">
        <Image
          src="/test_image.png"
          alt="Vita health dashboard"
          fill
          priority
          quality={100}
        />
      </IPhoneFrame>
      <h1 className="text-2xl md:text-3xl font-bold text-center m-4">
        Living in Germany starts here
      </h1>

      {/* App Store Badge Button */}
      <a
        href="https://apps.apple.com/your-app-link"
        target="_blank"
        rel="noopener noreferrer"
        className="m-4 transition-transform hover:scale-105"
      >
        <Image
          src="/app_store_badge.png"
          alt="Download on the App Store"
          width={200}
          height={60}
          className="object-contain"
        />
      </a>
    </section>
  );
}
