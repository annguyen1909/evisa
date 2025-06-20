"use client"

import { useEffect, useState } from "react";
import CheckEligibility from "../../components/shared/CheckEligibility";
import { motion } from "framer-motion";


export default function Hero() {
  const backgroundImages = [
    '/images/hero/hero.jpg',
    '/images/hero/hero2.jpg',
    '/images/hero/hero3.jpg',
    '/images/hero/hero4.jpg',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(-1); // Start with no image


  useEffect(() => {
    const preloadImages = () => {
      backgroundImages.forEach((src) => {
        const img = new window.Image();
        img.src = src;
      });

      // Once the first image is loaded, show it
      const firstImg = new Image();
      firstImg.src = backgroundImages[0];
      firstImg.onload = () => {
        setCurrentImageIndex(0);
      };
    };

    preloadImages();
  }, []);



  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      style={{

      }}
      className="w-full overflow-hidden relative bg-cover bg-center bg-no-repeat p-14 z-0 text-center flex flex-col items-center gap-24 max-md:gap-12 max-md:p-16 text-white transition-all duration-1000 ease-in-out"
    >
      {backgroundImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          style={{ backgroundImage: `url(${src})`, zIndex: -1 }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"
        style={{ zIndex: -1 }} />
      <motion.div
        className="backdrop-blur-[64px] bg-white/40 p-8 rounded-2xl max-w-7xl shadow-xl z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          Welcome to <span className="font-extrabold bg-gradient-to-r from-[#16610E]/40 to-[#16610E]/90 bg-clip-text text-transparent">UNITED</span><span className="bg-gradient-to-r from-[#CB6601]/70 to-[#CB6601]/90 bg-clip-text text-transparent">eVisa</span>
        </h1>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          Trusted Global Visa Assistant
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          Simplify the way you get a visa — fast, reliable, and stress-free
        </p>
      </motion.div>
      <div className="">
        <CheckEligibility />
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            className={`h-3 rounded-full mx-1 transition-all duration-300 ease-in-out transform 
      ${index === currentImageIndex
                ? 'w-10 scale-110 bg-gray-300 border-gray-300 border-2'
                : 'w-3 scale-100 bg-transparent border-gray-300 border-2'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}

      </div>
    </section>
  );
}
