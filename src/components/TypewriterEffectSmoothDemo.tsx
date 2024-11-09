"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Your",
      className: "text-2xl"
    },
    {
      text: "questions,",
      className: "text-2xl"
    },
    {
      text: "answered",
      className: "text-[#7A1CAC] dark:text-[#7A1CAC] text-2xl",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[10rem] sm:h-[12rem] md:h-[14rem]  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
