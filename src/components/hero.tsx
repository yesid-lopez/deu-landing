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
    <section className="pt-12 sm:pt-16 px-4 md:px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        <div className="w-full flex justify-center">
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
        </div>
        <div className="relative w-[400px] sm:max-w-[500px] h-[110px] mt-4">
          <HeroCard />
        </div>
        <div className="relative mt-4 mb-8">
          <JumplingArrow />
        </div>
      </div>
    </section>
  );
}
