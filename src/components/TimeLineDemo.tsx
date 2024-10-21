"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import SaturnIcon from './ui/SaturnIcon';
import RocketIcon from './ui/RocketIcon';
import Star2Icon from './ui/Star2Icon';
import WandIcon from './ui/WandIcon';
import Image from 'next/image';

interface TimelineEntry {
  profileUrl?: string;
  resultUrl?: string;
  result2Url?: string;
  heading: string;
  description: string; // Could be used as an alternative image URL
  index: number;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const createRefCallback = (index: number) => (el: HTMLDivElement | null) => {
    refs.current[index] = el;
  };
  const [inViewStates, setInViewStates] = useState(Array(data.length).fill(false));
  const [imageStates, setImageStates] = useState(data.map(item => item.resultUrl));
  const [wandVisibilityStates, setWandVisibilityStates] = useState(Array(data.length).fill(true));

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 70%"],
  });

  const [height, setHeight] = useState(0);
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height - 350]);
  
  useEffect(() => {
    const calculateHeight = () => {
      if (containerRef.current) {
        setHeight(containerRef.current.getBoundingClientRect().height);
      }
    };
    calculateHeight();
    window.addEventListener('resize', calculateHeight);
    
    return () => {
      window.removeEventListener('resize', calculateHeight);
    };
  }, [containerRef]);

  useEffect(() => {
    refs.current = refs.current.slice(0, data.length); // Adjust ref array length if necessary

    const observers = refs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setInViewStates(prevState => {
            const newState = [...prevState];
            newState[index] = entry.isIntersecting;
            return newState;
          });
        },
        { rootMargin: "0px 0px -50% 0px" }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [data.length]);

  const handleImageClick = (index: number) => {
    setImageStates(prevImages => {
      const newImages = [...prevImages];
      const currentImage = newImages[index];
      newImages[index] =
        currentImage === data[index].resultUrl ? data[index].result2Url : data[index].resultUrl;
      return newImages;
    });

    setWandVisibilityStates(prevVisibility => {
      const newVisibility = [...prevVisibility];
      newVisibility[index] = !newVisibility[index];
      return newVisibility;
    });
  };

  return (
    <div className="w-full bg-white dark:bg-[#000] font-sans md:px-10" ref={containerRef}>
      <div className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <motion.div
            key={item.index}
            ref={createRefCallback(index)} // Assign ref to the item
            initial={{ backgroundColor: "rgb(237 233 254)", boxShadow: "none" }}
            animate={
              inViewStates[index]
                ? { backgroundColor: "rgb(196 181 253)", boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }
                : { backgroundColor: "rgb(237 233 254)", boxShadow: "none" }
            }
            transition={{ duration: 0.5 }}
            className="relative flex items-center justify-between py-10 mx-4 my-52 rounded-lg"
            style={{ height: "400px", width: "calc(100% - 32px)" }}
          >
            <motion.div className="relative w-1/2 flex justify-end pr-4 p-4 rounded-lg">
              <RocketIcon
                className="absolute"
                style={{
                  top: '-15%',
                  left: '10%',
                  width: '4rem',
                  height: '4rem',
                  animation: 'moveIcon 10s infinite alternate',
                }}
                fill='#7A1CAC'
              />
              {item.profileUrl && (
                <div className="flex flex-col justify-start h-full w-full mr-20">
                  <div className="flex items-center justify-end mb-2">
                    <h2 className="text-3xl font-semibold text-gray-50 dark:text-gray-50 mr-5">
                      {item.heading}
                    </h2>
                    <Image
                      src={item.profileUrl}
                      alt={item.heading}
                      width={64}
                      height={64}
                      className="rounded-full shadow-md object-cover"
                    />
                  </div>
                  <div className="mt-0 max-w-md text-right">
                    <p className="mt-2 text-2xl text-gray-800 dark:text-gray-800 -mr-7 ml-7">
                      {item.description}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>

            <motion.div className="relative w-1/2 flex justify-start pl-4 p-4 rounded-lg ml-20">
              <div className="max-w-md relative">
                <Star2Icon
                  className="absolute"
                  style={{
                    top: '110%',
                    left: '90%',
                    width: '4rem',
                    height: '4rem',
                    animation: 'moveIcon 10s infinite alternate',
                  }}
                  fill='#7A1CAC'
                />
                <motion.div
                  key={imageStates[index]} // Ensure exit animation is triggered
                  initial={{ opacity: 0 }} // Start invisible
                  animate={{ opacity: 1 }} // Fade in
                  exit={{ opacity: 0 }} // Fade out
                  transition={{ duration: 0.5 }} // Transition duration
                  onClick={() => handleImageClick(index)} // Pass index
                  className="relative cursor-pointer"
                >
                  {imageStates[index] && (
                    <Image
                    src={imageStates[index]} // Using the state variable for the image
                    alt={`description of ${item.heading}`}
                    width={400}
                    height={192}
                    className="shadow-md object-cover mt-4 rounded-xl"
                  />)}

                  <span className="absolute top-2 left-2 bg-purple-600 text-white text-sm px-2 py-1 rounded-lg">
                    {imageStates[index] === item.resultUrl ? "Before" : "After"}
                  </span>
                </motion.div>

                {wandVisibilityStates[index] && (
                  <div
                    onClick={() => handleImageClick(index)}
                    className="absolute -mt-10 cursor-pointer"
                    style={{ top: '10%', left: '110%', textAlign: 'center' }}
                  >
                    <WandIcon
                      className="absolute"
                      style={{
                        width: '3rem',
                        height: '3rem',
                        fill: 'white',
                        stroke: 'white',
                        animation: 'moveIcon 10s infinite alternate'
                      }}
                    />
                    <p className="text-white text-sm mt-12 bg-purple-500 rounded-3xl px-2 py-3 whitespace-nowrap">Click Me!</p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Timeline Connector */}
            <motion.div className="flex flex-col items-center absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="h-10 w-10 rounded-full bg-purple-500 dark:bg-purple-500 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-gray-800 border border-neutral-300 dark:border-neutral-700 p-2 transform-translate-z-1/2" />
              </div>
            </motion.div>
          </motion.div>
        ))}

        {/* Timeline Line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute inset-0 left-1/2 transform -translate-x-1/2 w-[5px] bg-transparent dark:transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
            }}
            className="absolute inset-x-0 top-0 w-[5px] bg-gradient-to-t from-purple-500 via-fuchsia-800 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
