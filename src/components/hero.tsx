import { IPhoneFrame } from "@/components/ui/iphone-frame";
import Image from "next/image";

const HeroCard = () => {
  return (
    <div className="flex flex-col items-center rounded-[30px] bg-stone-800">
      <h1 className="text-2xl md:text-3xl font-bold text-center m-4 text-white">
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
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[100dvh] p-5">
      <IPhoneFrame className="sm:h-[580px] sm:w-[320px]">
        <Image
          src="/test_image.png"
          alt="Vita health dashboard"
          fill
          priority
          quality={100}
        />
      </IPhoneFrame>
      <div className="relative transform -translate-y-[60%] w-[90%] sm:w-[40%]">
        <HeroCard />
      </div>
    </section>
  );
}
