'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
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
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [progress, setProgress] = useState<number[]>(Array(6).fill(0));
  const [muted, setMuted] = useState<boolean[]>(Array(6).fill(true));
  const swiperRef = useRef<SwiperInstance | null>(null);

  // Array of text for each video
  const textArray = [
    "Our own video, which gives the viewers a fair idea of the knowledge we have in this field.",
    "Consistency is key, and the team helped me stay on top of things, pushing me when I needed it most.",
    "I got so many people complimenting the video editing and the idea that this video has, Gupdav researched everything, made the script and posted it, everything in just 2 days.",
    "The hooks they used in the video was what I was lagging on, they made me understand a users perspective and that significantly increased my views and business.",
    "These guys defines my unique style, which I’ll carry on for years, all because everything is good, the style, the editing, the motivation.",
    "They wrote me the exact script I was expecting, made my brand identity the way I wanted to portray myself on social media. Good guys!"
  ];

  const handleSlideChange = (swiper: SwiperCore) => {
    const activeIndex = swiper.realIndex;
    activeIndexRef.current = activeIndex;

    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeIndex) {
          video.play();
          video.muted = muted[index];
        } else {
          video.pause();
          video.muted = true;
        }
      }
    });
  };

  const handleVisibilityChange = () => {
    if (document.hidden) {
      videoRefs.current.forEach((video) => {
        if (video && !video.paused) {
          video.pause();
        }
      });
    } else {
      const activeVideo = videoRefs.current[activeIndexRef.current];
      if (activeVideo) {
        activeVideo.play();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    // Capture the current value of videoRefs.current
    const videoRefsCopy = [...videoRefs.current]; // Copy the current refs array

    // Create the observer instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          if (videoRefsCopy[activeIndexRef.current] === video) {
            video.play();
            video.muted = muted[activeIndexRef.current];
          }
        } else {
          video.pause();
          video.muted = true;
        }
      });
    }, {
      threshold: 0.5,
    });

    // Observe each video in the captured videoRefsCopy array
    videoRefsCopy.forEach((video) => {
      if (video) {
        observer.observe(video);
      }
    });

    // Cleanup function
    return () => {
      videoRefsCopy.forEach((video) => {
        if (video) {
          observer.unobserve(video);
        }
      });
      observer.disconnect();
    };
  }, [muted]);  // Dependency array includes `muted` since it affects observer behavior


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
    const isMuted = !muted[index];
    if (video) {
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
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          centeredSlides={true}
          slidesPerView="auto"
          spaceBetween={10}
          loop={true}
          onSlideChange={handleSlideChange}
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
          {[...Array(6)].map((_, i) => (
            <SwiperSlide key={i} style={{ width: '90%', maxWidth: '650px' }}> {/* Increased max width */}
              <CardContainer>
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-purple-100 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[40rem] h-auto rounded-xl p-6 border">
                  <div className="flex flex-row space-x-4">

                    {/* Increased Video Section */}
                    <CardItem translateZ="100" className="w-3/5 mt-4"> {/* Now 60% width for video */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ opacity: { duration: 0.5 }, scale: { duration: 0.5 } }}
                        className="w-full h-96 rounded-lg shadow-lg video relative"
                        onClick={() => handleMuteToggle(i)}
                      >
                        <video
                          ref={(el) => {
                            if (el) {
                              videoRefs.current[i] = el;
                            }
                          }}
                          className="w-full h-full rounded-xl bg-purple-200"
                          controls={false}
                          controlsList="nodownload noremoteplayback"
                          onTimeUpdate={() => handleTimeUpdate(i)}
                        >
                          <source src={`/reel${i + 1}.mp4`} type="video/mp4" />
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
                          className="absolute top-4 bg-white p-2 rounded-full shadow-md text-black text-xs"
                          style={{ opacity: 0.4 }}
                        >
                          {muted[i] ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
                        </button>
                      </motion.div>
                    </CardItem>

                    {/* Unique Text Panel for each slide */}
                    <div className="w-2/5 mt-4 p-4 bg-purple-200 rounded-lg flex flex-col justify-center items-center text-center relative"> {/* Now 40% width for the text */}
                      <p className="text-lg font-medium italic text-[#7A1CAC] mb-4">
                        {textArray[i]} {/* Display unique text for each video */}
                      </p>
                    </div>
                  </div>
                </CardBody>
              </CardContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ReelCarousel;
