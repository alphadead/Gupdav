'use client';

import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { LampDemo } from "@/components/LampDemo";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/components/InfiniteMovingCardsDemo";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ReelCarousel from "@/components/ReelCarousel";
import { Cover } from "@/components/ui/cover";
import { FloatingDock } from "@/components/ui/floating-dock";
import { TypewriterEffectSmoothDemo } from "@/components/TypewriterEffectSmoothDemo";
import Collapsible from "@/components/Collapsible";
import App from "@/components/PriceSection";
import Footer from "@/components/Footer";
import {Timeline} from "@/components/TimeLineDemo";
import YtCarousel from "@/components/YtCarousel";
interface TimelineEntry {
  profileUrl?: string;
  resultUrl?: string;
  result2Url?: string;
  heading: string;
  description: string;
  index: number;
  imgIndex : number;
}
const timelineData: TimelineEntry[] = [
  {profileUrl: '/images/user_image_1.png', resultUrl: '/images/before_result_1.png', result2Url: '/images/after_result_1.png', heading: "CA Mukander Beniwal", description:'Chartered Accountant, Helps people to save taxes and money.', index:1, imgIndex:1},
  {profileUrl: '/images/user_image_2.png',resultUrl: '/images/before_result_2.png', result2Url: '/images/after_result_2.png', heading: "Timothy Armoo", description:'Sold his company at $60M and now spends his money on diet coke and helps people scale their business.', index:2, imgIndex:1},
  {profileUrl: '/images/user_image_3.png',resultUrl: '/images/before_result_3.png', result2Url: '/images/after_result_3.png', heading: "Yudi J", description:'Study abroad expert and coach, helps to study and build a career in the USA', index:3, imgIndex:1},
  {profileUrl: '/images/user_image_4.png',resultUrl: '/images/before_result_4.png', result2Url: '/images/after_result_4.png', heading: "Omkar", description:'Civil Engineer, helps people to travel to the USA make a successful live in the USA and never have any problem related to immigration', index:4, imgIndex:1},
  {profileUrl: '/images/user_image_5.png',resultUrl: '/images/before_result_5.png', result2Url: '/images/after_result_5.png', heading: "Gupdav", description:'Helps people scale their personal brand and increase their revenue.', index:5, imgIndex:1},
];

export default function Home() {
  // Animation controls
  const controls = useAnimation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // useInView hook to monitor element visibility
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  // Effect to start animation when inView changes
  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
      });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Navbar />
      <section id="about-us">
        <div id="hero-section" className="pb-10"><HeroSection /></div>
        <InfiniteMovingCards items={testimonials} direction="left" speed="normal" />
        {/* <div className="bg-gradient-to-br from-slate-200 to-slate-300 mt-20 -mb-28 bg-clip-text text-center text-4xl font-light tracking-tight text-transparent md:text-7xl">Results</div>
        <div className="-mb-32"><Timeline data={timelineData}/></div> */}
      </section>
      <div className="mt-20"><LampDemo /></div>
      <div className="bg-gradient-to-br from-slate-200 to-slate-300 -mt-32 bg-clip-text text-center text-4xl font-light tracking-tight text-transparent md:text-7xl"><Cover>Some of our Work</Cover></div>
      <section id="our-work"><div className="mt-10 -mb-36"><ReelCarousel /></div></section>
      <YtCarousel/>
      <section id="prices" className="mt-20">
        <div className="bg-gradient-to-br from-slate-200 to-slate-300 bg-clip-text text-center text-4xl font-light tracking-tight text-transparent md:text-7xl mb-8">How it works</div>
        <div className="h-auto flex items-center justify-center space-x-10 text-xl">
          <App />  
        </div>
        <section className="mt-0">
        <div className="bg-gradient-to-br from-slate-200 to-slate-300 bg-clip-text text-center text-2xl font-light tracking-tight text-transparent md:text-5xl mb-8"><a href="https://gupdav.my.canva.site/gupdav" className="hover:text-[#7A1CAC] transition-colors">Need more information in detail? Click HERE!</a></div>
      </section>
      </section>
      <div className="qna -mt-10">
        <TypewriterEffectSmoothDemo />
        <div className="flex flex-col items-center justify-center space-y-5 -mt-10 mb-20">
          <Collapsible title="Can I customize the content packages?">
            <p>Yes. Please contact us via our website to schedule a call with our team and we&apos;ll create a content package designed for your specific goals.</p>
          </Collapsible>
          <Collapsible title="Can I send you the scripts for the videos?">
            <p>Absolutely. If you have a very specific brief or a detailed script you would like us to use, we will bring your vision to life.</p>
          </Collapsible>
          <Collapsible title="What is the timelines of a project?">
            <p>Instagram moves fast: we know it well! From the day we get the brief to the creation of the contents, we try to complete everything within 2-3 working days.</p>
          </Collapsible>
          <Collapsible title="Why are performance packages recommended for 3 months minimum?">
            <p>On Instagram, performance has an always on approach. Performance is all about test & learn, we cannot test and learn and see optimum results in only 1 month of campaign. As a brand, in order to see significant results you need to be consistent in posting, hence investing in at least 3 months to get optimized results.</p>
          </Collapsible>
        </div>
      </div>
      <Footer />
    </main>
  );
}
