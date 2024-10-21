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
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-2 bg-gradient-to-br from-gray-100 to-gray-200 py-4 bg-clip-text text-center text-4xl font-light tracking-tight text-transparent md:text-7xl"
      >
        <div>
          <div>
            Unveiling Our Impact
          </div>
          <div className="pt-10 flex flex-row space-x-10 justify-center items-center">
            <div className="text-center">
              <div className="text-5xl">3900+</div>
              <div className="text-2xl mt-2 font-light">videos</div>
            </div>
            <div className="text-center">
              <div className="text-5xl">620M+</div>
              <div className="text-2xl mt-2 font-light">views</div>
            </div>
            <div className="text-center">
              <div className="text-5xl">780k+</div>
              <div className="text-2xl mt-2 font-light">hrs watchtime</div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          {/* Fixed positions for icons */}
          <RocketIcon
            className="absolute"
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
            className="absolute"
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
            className="absolute"
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
            className="absolute"
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
            className="absolute twinkle"
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
            className="absolute twinkle"
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
