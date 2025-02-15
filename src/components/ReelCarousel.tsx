'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import { Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { Swiper as SwiperInstance } from 'swiper';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import './styles.css';

const ReelCarousel: React.FC = () => {
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const activeIndexRef = useRef<number>(0);
  const [muted, setMuted] = useState<boolean[]>(Array(6).fill(true));
  const swiperRef = useRef<SwiperInstance | null>(null);

  // Text captions for each video
  const textArray = [
    "Our own video, which gives the viewers a fair idea of the knowledge we have in this field.",
    "Consistency is key, and the team helped me stay on top of things, pushing me when I needed it most.",
    "I got so many people complimenting the video editing and the idea that this video has, Gupdav researched everything, made the script and posted it, everything in just 2 days.",
    "The hooks they used in the video was what I was lagging on, they made me understand a user's perspective and that significantly increased my views and business.",
    "These guys define my unique style, which I’ll carry on for years, all because everything is good, the style, the editing, the motivation.",
    "They wrote me the exact script I was expecting, made my brand identity the way I wanted to portray myself on social media. Good guys!"
  ];

  // Toggle play/pause when video is clicked
  const handleVideoClick = (index: number) => {
    const video = videoRefs.current[index];

    if (video) {
      if (video.paused || video.ended) {
        // Pause all other videos
        videoRefs.current.forEach((vid, i) => {
          if (i !== index && vid) {
            vid.pause();
            vid.currentTime = 0; // Reset time
          }
        });

        video.play(); // Play the tapped video
      } else {
        video.pause(); // Pause if it's already playing
      }
    }
  };

  // Mute/unmute video
  const handleMuteToggle = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.muted = !video.muted; // Directly toggle video mute property
      setMuted((prevState) => {
        const newState = [...prevState];
        newState[index] = video.muted; // Ensure React state matches actual video mute state
        return newState;
      });
    }
  };

  // Stop all videos when the slide changes
  const handleSlideChange = (swiper: SwiperCore) => {
    const activeIndex = swiper.realIndex;
    activeIndexRef.current = activeIndex;

    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index !== activeIndex) {
          video.pause();
          video.currentTime = 0; // Reset time
        }
      }
    });
  };

  return (
    <div>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={10}
        loop={true}
        onSlideChange={handleSlideChange}
        modules={[Pagination, Navigation]}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation
        className="mySwiper custom-swiper-bg"
      >
        {[...Array(6)].map((_, i) => (
          <SwiperSlide key={i} style={{ width: '90%', maxWidth: '650px' }}>
            <CardContainer>
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-purple-100 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[40rem] h-auto rounded-xl p-6 border">
                <div className="flex flex-row space-x-4">

                  {/* Video Section */}
                  <CardItem translateZ="100" className="w-3/5 mt-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ opacity: { duration: 0.5 }, scale: { duration: 0.5 } }}
                      className="w-full h-96 rounded-lg shadow-lg video relative"
                      onClick={() => handleVideoClick(i)}
                    >
                      <video
                        ref={(el) => {
                          if (el) {
                            videoRefs.current[i] = el;
                          }
                        }}
                        className="w-full h-full rounded-xl bg-purple-200"
                        controls={false}
                        muted={muted[i]}
                      >
                        <source src={`/reel${i + 1}.mp4`} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>

                      {/* Mute button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent video play toggle when muting
                          handleMuteToggle(i);
                        }}
                        className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md text-black text-xs"
                        style={{ opacity: 0.8 }}
                      >
                        {muted[i] ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
                      </button>
                    </motion.div>
                  </CardItem>

                  {/* Text Panel */}
                  <div className="w-2/5 mt-4 p-4 bg-purple-200 rounded-lg flex flex-col justify-center items-center text-center">
                    <p className="text-lg font-medium italic text-[#7A1CAC] mb-4">
                      {textArray[i]}
                    </p>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReelCarousel;
