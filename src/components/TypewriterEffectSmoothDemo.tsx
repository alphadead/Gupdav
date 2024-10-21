"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Your",
    },
    {
      text: "questions,",
    },
    {
      text: "answered",
      className: "text-[#7A1CAC] dark:text-[#7A1CAC]",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[20rem]  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
