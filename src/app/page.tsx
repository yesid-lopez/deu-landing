import { IPhoneFrame } from "@/components/ui/iphone-frame";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-8">
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
    </main>
  );
}
