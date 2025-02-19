import { IPhoneFrame } from "@/components/ui/iphone-frame";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-8">
      <div className="absolute top-10 sm:top-0 w-20 h-20 relative">
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
            className="object-cover"
            priority
          />
        </div>
      </IPhoneFrame>
    </div>
  );
}
