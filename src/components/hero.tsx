import { IPhoneFrame } from "@/components/ui/iphone-frame";
import Image from "next/image";

const HeroCard = () => {
  return (
    <div className="grid place-items-center rounded-[30px] bg-stone-800 gap-4 p-4">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-white">
        Living in Germany starts here
      </h1>

      {/* App Store Badge Button */}
      <a
        href="https://apps.apple.com/your-app-link"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-105"
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
    <section className="relative grid place-items-center min-h-screen w-full overflow-hidden p-4">
      <div className="relative w-full place-items-center">
        <IPhoneFrame className="relative">
          <Image
            src="/test_image.png"
            alt="Vita health dashboard"
            fill
            priority
            quality={100}
            className="object-cover"
          />
        </IPhoneFrame>
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-[85%] w-full sm:w-[40%]">
          <HeroCard />
        </div>
      </div>
    </section>
  );
}
