import { DownloadIOSButton } from "@/components/ui/download-ios-button";
import { IPhoneFrame } from "@/components/ui/iphone-frame";
import JumplingArrow from "@/components/ui/jumpling-arrow";
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
      <div className="relative flex flex-col items-center">
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
        <div className="absolute w-[95%] sm:w-[30%] h-[110px] bottom-[140px] sm:bottom-[90px]">
          <HeroCard />
        </div>
        <div className="mt-4">
          <JumplingArrow />
        </div>
      </div>
    </section>
  );
}
