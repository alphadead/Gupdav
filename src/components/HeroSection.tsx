import { Spotlight } from './ui/Spotlight';
import { Button } from './ui/moving-border';
import Link from 'next/link';
import MoonIcon from './ui/MoonIcon';
import SaturnIcon from './ui/SaturnIcon';
import StarIcon from './ui/StarIcon';
import RocketIcon from './ui/RocketIcon';
import Star2Icon from './ui/Star2Icon';
import { FC,useEffect, useState } from 'react';

const HeroSection: FC = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-10 relative z-10 w-full text-center">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <h1 className="mt-20 md:mt-40 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          The Personal <span className='text-[#7A1CAC]'>Branding & Content</span> Universe
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          We help business owners and founders start and grow their content to put themselves out and define a face for everything they do.
        </p>
        <div className="mt-10">
          <a
            href="https://calendly.com/gupdav/improve-your-social-presence"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Get in touch
            </Button>
          </a>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        {/* Fixed positions for icons */}
        <RocketIcon
          className="absolute"
          style={{
            top: '10%',
            left: '10%',
            width: '4rem',
            height: '4rem',
            animation: 'moveIcon 10s infinite alternate',
          }}
          fill='#808184'
        />
        <StarIcon
          className="absolute"
          style={{
            color: '#FFF',
            top: '80%',
            right: '10%',
            width: '4rem',
            height: '4rem',
            animation: 'moveIcon 10s infinite alternate',
          }}
          fill='#808184'
        />
        <SaturnIcon
          className="absolute"
          style={{
            color: '#FFF',
            top: '70%',
            left: '20%',
            width: '4rem',
            height: '4rem',
            animation: 'moveIcon 10s infinite alternate',
          }}
          fill='#808184'
        />
        <MoonIcon
          className="absolute"
          style={{
            color: '#FFF',
            top: '20%',
            right: '15%',
            width: '4rem',
            height: '4rem',
            animation: 'moveIcon 10s infinite alternate',
          }}
          fill='#808184'
        />
        <Star2Icon
          className="absolute twinkle"
          style={{
            color: '#FFF',
            top: '30%',
            right: '60%',
            width: '4rem',
            height: '4rem',
          }}
          fill='#808184'
        />
        <Star2Icon
          className="absolute twinkle"
          style={{
            color: '#FFF',
            top: '55%',
            right: '25%',
            width: '4rem',
            height: '4rem',
          }}
          fill='#808184'
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
      `}</style>
    </div>
  );
};

export default HeroSection;