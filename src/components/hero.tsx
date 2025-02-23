import { DownloadIOSButton } from "@/components/ui/download-ios-button";
import { IPhoneFrame } from "@/components/ui/iphone-frame";

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
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-black">
            Coming Soon...
          </h1>
        </div>
      </IPhoneFrame>
      <div className="absolute w-[95%] sm:w-[30%] sm:h-[110px] bottom-[13%] sm:bottom12%]">
        <HeroCard />
      </div>
    </section>
  );
}
