"use client";
import { ChevronDown } from "lucide-react";

const JumplingArrow = () => {
  return (
    <div
      className="animate-bounce cursor-pointer"
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
