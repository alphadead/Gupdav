import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import MoonIcon from './ui/MoonIcon';
import SaturnIcon from './ui/SaturnIcon';
import StarIcon from './ui/StarIcon';
import RocketIcon from './ui/RocketIcon';
import Star2Icon from './ui/Star2Icon';

export function LampDemo() {
  return (
    <LampContainer className="relative">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative mt-8 md:mt-2 py-4 bg-gradient-to-br from-gray-100 to-gray-200 bg-clip-text text-center text-5xl md:text-7xl font-light tracking-tight text-transparent"
      >
        <div className="mt-96 md:mt-8 text-center px-4 md:px-0">
          <h2 className="text-4xl md:text-7xl">Unveiling Our Impact</h2>
          <div className="pt-10 flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-10 justify-center items-center">
            <div className="text-center">
              <div className="text-4xl md:text-5xl">3900+</div>
              <div className="text-xl md:text-2xl mt-2 font-light">videos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl">620M+</div>
              <div className="text-xl md:text-2xl mt-2 font-light">views</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl">780k+</div>
              <div className="text-xl md:text-2xl mt-2 font-light">hrs watchtime</div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          {/* Fixed positions for icons */}
          <RocketIcon
            className="absolute hidden md:block"
            style={{
              top: '10%',
              left: '-10%',
              width: '4rem',
              height: '4rem',
              animation: 'moveIcon 10s infinite alternate',
            }}
            fill="#808184"
          />
          <StarIcon
            className="absolute hidden md:block"
            style={{
              color: '#FFF',
              top: '115%',
              right: '10%',
              width: '4rem',
              height: '4rem',
              animation: 'moveIcon 10s infinite alternate',
            }}
            fill="#808184"
          />
          <SaturnIcon
            className="absolute hidden md:block"
            style={{
              color: '#FFF',
              top: '120%',
              left: '20%',
              width: '4rem',
              height: '4rem',
              animation: 'moveIcon 10s infinite alternate',
            }}
            fill="#808184"
          />
          <MoonIcon
            className="absolute hidden md:block"
            style={{
              color: '#FFF',
              top: '65%',
              right: '-15%',
              width: '4rem',
              height: '4rem',
              animation: 'moveIcon 10s infinite alternate',
            }}
            fill="#808184"
          />
          <Star2Icon
            className="absolute twinkle hidden md:block"
            style={{
              color: '#FFF',
              top: '15%',
              right: '-20%',
              width: '4rem',
              height: '4rem',
            }}
            fill="#808184"
          />
          <Star2Icon
            className="absolute twinkle hidden md:block"
            style={{
              color: '#FFF',
              top: '100%',
              right: '105%',
              width: '4rem',
              height: '4rem',
            }}
            fill="#808184"
          />
        </div>
        <style jsx>{`
          @keyframes moveIcon {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-20px);
            }
          }

          @keyframes twinkle {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.5);
              opacity: 0.6;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          .twinkle {
            animation: twinkle 1.5s infinite;
          }
        `}</style>
      </motion.h1>
    </LampContainer>
  );
}
