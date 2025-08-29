import React, { useEffect, useRef, useState } from 'react';

const LazyVideo = ({ src, className = '', poster }) => {
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '100px', // Increased margin for earlier loading
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target); // Stop observing once in view
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView && videoRef.current) {
      const playVideo = () => {
        videoRef.current.play().catch((error) => {
          console.log('Auto-play failed:', error);
        });
      };

      if (isLoaded) {
        playVideo();
      } else {
        videoRef.current.addEventListener('loadeddata', () => {
          setIsLoaded(true);
          playVideo();
        });
      }
    }
  }, [isInView, isLoaded]);

  return (
    <>
      <video
        ref={videoRef}
        className={className}
        muted
        playsInline
        loop
        poster={poster}
        preload="auto"
      >
        {isInView && <source src={src} type="video/mp4" />}
        Your browser does not support the video tag.
      </video>
      {!isLoaded && isInView && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-10 h-10 border-4 border-electric-aqua border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </>
  );
};

export default LazyVideo;
