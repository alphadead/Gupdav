'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
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

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeIndex) {
          video.play();
          video.muted = muted[index];
        } else {
          video.pause();
        }
      }
    });
  }, [activeIndex, muted]);

  const handleTimeUpdate = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      const progressPercentage = (video.currentTime / video.duration) * 100;
      setProgress((prevState) => {
        const newState = [...prevState];
        newState[index] = progressPercentage;
        return newState;
      });
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

  const handleMouseEnter = () => {
    console.log('Mouse Entered!');
    //console.log(swiperRef.current.autoplay);
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop(); // Stop autoplay on hover
    }
  };

  const handleMouseLeave = () => {
    console.log('Mouse Left!');
    //console.log(swiperRef.current.autoplay)
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start(); // Resume autoplay on mouse leave
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        centeredSlides={true}
        slidesPerView={1.5}
        spaceBetween={30}
        loop={true}
        onRealIndexChange={handleRealIndexChange}
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation
        autoplay={{
          delay: 1000, // Time in ms before moving to the next slide
          disableOnInteraction: false, // Allow autoplay to continue after interaction
        }}
        className="mySwiper custom-swiper-bg"
      >
        {videoLinks.map((videoLink, i) => (
          <SwiperSlide key={i} className="flex justify-center items-center" style={{ width: 'auto' }}>
            <CardContainer className="flex-grow p-4 bg-black rounded-lg shadow-lg h-90"> {/* Adjust height here if needed */}
              <CardBody className="flex flex-col md:flex-row items-stretch w-full h-full p-4 rounded-lg shadow-lg bg-purple-100 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-black/[0.1] rounded-xl p-6 border">

                {/* Left Side - Video (3/5 width) */}
                <div className="w-full md:w-3/5 flex justify-center">
                  <CardItem translateZ="100" className="w-full">
                    <motion.div
                      className="relative w-full rounded-lg shadow-lg aspect-w-16 aspect-h-9"
                      onClick={() => handleMuteToggle(i)}
                    >
                      <video
                        ref={(el) => {
                          if (el) {
                            videoRefs.current[i] = el;
                          }
                        }}
                        className="w-full h-full object-cover rounded-lg"
                        controls={false}
                        onTimeUpdate={() => handleTimeUpdate(i)}
                      >
                        <source src={videoLink} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>

                      {/* Progress bar */}
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

                      {/* Mute/Unmute button */}
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

                {/* Right Side - Text Panel (2/5 width) */}
                <div className="w-full md:w-2/5 bg-purple-200 rounded-lg p-6 flex flex-col justify-center items-start shadow-lg ml-7 h-90"> {/* Ensures this has the same height */}
                  <p className="text-lg italic mb-4 text-[#7A1CAC]">
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
