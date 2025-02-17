'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { Swiper as SwiperInstance } from 'swiper';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';

const YtCarousel: React.FC = () => {
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number[]>(Array(4).fill(0));
  const [muted, setMuted] = useState<boolean[]>(Array(4).fill(true));
  const swiperRef = useRef<SwiperInstance | null>(null);

  const videoLinks = [
    '/videos/video_1.mp4',
    '/videos/video_2.mp4',
    '/videos/video_3.mp4',
    '/videos/video_4.mp4',
  ];

  const textArray = [
    "This video was my 2nd video which brought me 20+ leads and 12 conversions just through the video, amazing work guys!",
    "My views went from 500-600 to 11k with the first video Gupdav did for me, I was blown away with their level of expertise.",
    "They not only researched the best content, wrote the best script but also gave me the video in just 2 days, so confident working with these guys.",
    "Not to brag, but this page is how we are trying to portray ourselves as 2 people who are trying to help everyone to grow their content.",
  ];

  const handleRealIndexChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

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

  const handleMuteToggle = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      const isMuted = !muted[index];
      video.muted = isMuted;
      setMuted((prevState) => {
        const newState = [...prevState];
        newState[index] = isMuted;
        return newState;
      });
    }
  };

  return (
    <div>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        centeredSlides={true}
        slidesPerView={1.5}
        spaceBetween={30}
        loop={true}
        onRealIndexChange={handleRealIndexChange}
        modules={[Pagination, Navigation]}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation
        className="mySwiper custom-swiper-bg"
      >
        {videoLinks.map((videoLink, i) => (
          <SwiperSlide key={i} className="flex justify-center items-center" style={{ width: 'auto' }}>
            <CardContainer className="flex-grow p-4 bg-black rounded-lg shadow-lg h-90">
              <CardBody className="flex flex-col md:flex-row items-stretch w-full h-full p-4 rounded-lg shadow-lg bg-purple-100 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-black/[0.1] rounded-xl p-6 border">

                <div className="w-full md:w-3/5 flex justify-center">
                  <CardItem translateZ="100" className="w-full">
                    <motion.div
                      className="relative w-full rounded-lg shadow-lg aspect-w-16 aspect-h-9"
                      onClick={() => handleVideoClick(i)}
                    >
                      <video
                        ref={(el) => {
                          if (el) {
                            videoRefs.current[i] = el;
                          }
                        }}
                        className="w-full h-full object-cover rounded-lg"
                        controls={false}
                      >
                        <source src={videoLink} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>

                      <div
                        style={{
                          position: 'absolute',
                          bottom: '0',
                          left: '0',
                          width: '100%',
                          height: '4px',
                          backgroundColor: '#e0e0e0',
                        }}
                      >
                        <div
                          style={{
                            height: '100%',
                            width: `${progress[i]}%`,
                            backgroundColor: '#7A1CAC',
                            transition: 'width 0.1s ease-in-out',
                          }}
                        ></div>
                      </div>

                      <button
                        onClick={() => handleMuteToggle(i)}
                        className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md text-black text-xs"
                        style={{ opacity: 0.4 }}
                      >
                        {muted[i] ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
                      </button>
                    </motion.div>
                  </CardItem>
                </div>

                <div className="w-full md:w-2/5 bg-purple-200 rounded-lg p-6 flex flex-col justify-center items-center md:items-start shadow-lg md:ml-7 h-90">
                  <p className="text-lg italic mb-4 text-[#7A1CAC] text-center md:text-left">
                    {textArray[i]}
                  </p>
                </div>
              </CardBody>
            </CardContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default YtCarousel;
