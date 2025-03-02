import { DownloadIOSButton } from "@/components/ui/download-ios-button";
import { IPhoneFrame } from "@/components/ui/iphone-frame";
import JumplingArrow from "@/components/ui/jumpling-arrow";
import Image from "next/image";

const HeroCard = () => {
  return (
    <div className="grid place-items-center rounded-[30px] bg-gray-900 gap-4 p-6 h-full w-full">
      {/* App Store Badge Button */}
      <DownloadIOSButton />
    </div>
  );
};

export default function Hero() {
  return (
    <section className="pt-12 sm:pt-16 px-4 md:px-6 pb-12">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        <div className="w-full flex justify-center relative">
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
          
          {/* Positioned HeroCard to overlap with the bottom of the iPhone frame */}
          <div className="absolute bottom-12 translate-y-1/2 w-[300px] sm:w-[400px] h-[110px] z-10">
            <HeroCard />
          </div>
        </div>

        <div className="absolute bottom-[70px] sm:bottom-[20px] translate-y-1/2">
          <JumplingArrow />
        </div>
      </div>
    </section>
  );
}
