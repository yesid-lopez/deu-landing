"use client";
import { ChevronDown } from "lucide-react";

const JumplingArrow = () => {
  return (
    <div
      className="absolute bottom-1 animate-bounce cursor-pointer"
      onClick={() =>
        document
          .getElementById("features")
          ?.scrollIntoView({ behavior: "smooth" })
      }
    >
      <ChevronDown className="h-8 w-8 text-stone-500" />
    </div>
  );
};

export default JumplingArrow;
