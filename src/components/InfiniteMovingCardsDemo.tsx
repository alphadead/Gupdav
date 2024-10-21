"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

export const testimonials = [
  {
    quote:
      "Thanks to their efforts, we grew from 18k to 50k Instagram followers in 3 months. Their editing, script ideas, and consistent support kept me motivated and on top of my work. Highly appreciate them!",
    name: "Omkar, immigrant_talks",
  },
  {
    quote:
      "Gupdav delivered a range of short form videos for us that showed a high level of video editing. Ideal for personal brands and creators.",
    name: "Cameron Dower, Manager of Timothy Armoo, timarmoo",
  },
  {
    quote: "They have helped me define a style that suits my personality which has helped me grow  my personal brand",
    name: "CA Mukander Beniwal, ca.mukanderbeniwal",
  },
  {
    quote:
      "Not only was I hesitant to come infront of the camera but also had very less clue what to speak, Gupdav not only helped me get confident but also designed amazing scripts for my brand",
    name: "Sammy, founder of Page ISRO.in",

  },
  {
    quote:
      "Guys have the best energy and they know what they are speaking, knowledge in content that I trust them with my entire content.",
    name: "Conrad, Founder of LoveMyTan",
  },
  {
    quote:
      "They are the ones who have always pushed to post consistently, which eventually increased my business through content and helped me get confident infront of the camera.",
    name: "Ali, Founder of ecomgeniousgroup",
  },
];