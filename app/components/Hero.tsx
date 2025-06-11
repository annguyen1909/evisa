"use client"

import { useEffect, useState } from "react";
import CheckEligibility from "../../components/shared/CheckEligibility";

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
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Welcome to UnitedEvisa - Trusted Global Visa Assistant
        </h1>
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
          Simplify the way you get a Visa
        </p>
      </div>
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
