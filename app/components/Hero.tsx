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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
      }}
      className="w-full overflow-hidden relative bg-cover bg-center bg-no-repeat p-14 z-0 text-center flex flex-col items-center gap-24 max-md:gap-12 max-md:p-16 text-white transition-all duration-1000 ease-in-out"
    >
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Welcome to UnitedEvisa - Trusted Global Visa Assistant
        </h1>
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
          Simplify the way you get a Visa
        </p>
      </div>
      <div>
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
