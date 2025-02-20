import { IPhoneFrame } from "@/components/ui/iphone-frame";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen">
      <div className="absolute w-[150px] h-[150px] relative">
        <Image
          src="/lulo.png"
          alt="Lulo logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Phone container */}
      <IPhoneFrame>
        <div className="h-full w-full relative">
          <Image
            src="/test_image.png"
            alt="Vita health dashboard"
            fill
            priority
            quality={100}
          />
        </div>
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
