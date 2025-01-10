import React, { useState, useEffect } from "react";
import background1 from "../../assets/phronesisB1.jpg";
import background2 from "../../assets/phronesisb4.jpg";
import background3 from "../../assets/phronesisBackground.jpg";

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    background1,
    background2,
    background3,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-2000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide})` }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 ">
        <h1 className="text-xl md:text-4xl font-extrabold leading-tight text-white tracking-wide drop-shadow-lg">
          Explore Africa with Phronesis
          <span className="block text-yellow-400">
            Your Trusted Safari Logistics Partner
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed tracking-wide">
          Streamline your safari operations with Phronesis. We handle the
          logistics, so you can focus on creating unforgettable experiences for
          your guests.
        </p>

        <a
          href="#"
          className="mt-8 px-8 py-4 text-lg font-semibold text-white bg-yellow-500 hover:bg-yellow-600 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          Partner with Us Today
        </a>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
    </section>
  );
};

export default HeroSection;
