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
    <section className="scale-95 relative grid place-items-center h-[100dvh] px-4">
      <div className="relative flex flex-col items-center w-full max-w-screen-xl">
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
        <div className="absolute w-[400px] sm:max-w-[500px] h-[110px] bottom-0">
          <HeroCard />
        </div>
        <div className="absolute -bottom-12">
          <JumplingArrow />
        </div>
      </div>
    </section>
  );
}
