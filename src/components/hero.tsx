import { DownloadIOSButton } from "@/components/ui/download-ios-button";
import { IPhoneFrame } from "@/components/ui/iphone-frame";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const HeroCard = () => {
  return (
    <div className="grid place-items-center rounded-[30px] bg-stone-800 gap-4 p-4 h-full">
      {/* App Store Badge Button */}
      <DownloadIOSButton />
    </div>
  );
};

export default function Hero() {
  return (
    <section className="scale-95 relative grid place-items-center h-[100dvh] px-4">
      <IPhoneFrame className="relative">
          <Image
            src="/features/feature_1.jpeg"
            alt="DEU App dashboard"
            fill
            priority
            quality={100}
            className="object-cover pt-10"
          />
      </IPhoneFrame>
      <div className="absolute w-[95%] sm:w-[30%] sm:h-[110px] bottom-[13%] sm:bottom-[12%]">
        <HeroCard />
      </div>
      
      <div className="absolute bottom-4 animate-bounce">
        <ChevronDown className="h-8 w-8 text-stone-500" />
      </div>
    </section>
  );
}
