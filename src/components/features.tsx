"use client";

import { IPhoneFrame } from "@/components/ui/iphone-frame";

export function Features() {
  return (
    <section className="flex h-screen">
      <div className="relative w-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] sm:h-[70%] bg-black/90 rounded-[3rem]" />
        <div className="absolute inset-0 grid grid-cols-12 items-center">
          <div className="col-span-12 sm:col-start-3 sm:col-span-4">
            <IPhoneFrame />
          </div>
        </div>
      </div>
    </section>
  );
}
