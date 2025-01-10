import React from "react";
import { motion } from "framer-motion";
import background from "../../assets/phronesisb4.jpg";
import image from "../../assets/Operations-and-Logistics-Coordinators-Phronesis-Tour-Logistics-Best-Kenya-safari-logistics-company-based-in-Nairobi-1536x1024.webp";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gray-50">
      {/* Background */}
    <div
        className="absolute inset-0 bg-cover bg-center z-0"
         style={{ backgroundImage: `url(${background})` }}
         >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-28 text-center md:text-left">
        <motion.h1
          className="text-2xl md:text-4xl font-bold text-white leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Experience Africa’s <span className="text-yellow-500">Untamed Beauty</span>
        </motion.h1>
        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Bring the beauty of the African savannah to life on your smartphone
          or tablet so you can visualize your next adventure. Let us handle the
          logistics, while you focus on creating unforgettable memories.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          <button className="px-6 py-3 text-lg font-semibold text-white bg-yellow-500 hover:bg-yellow-600 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            Learn More
          </button>
          <button className="px-6 py-3 text-lg font-semibold text-yellow-500 bg-white hover:bg-gray-100 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            Watch Video
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

const ContentSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight mb-6">
            Seamless Safari Logistics,
            <span className="text-yellow-500"> Exceptional Experiences</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Empowering tour operators with reliable, end-to-end safari logistics
            across Africa. From transportation and accommodations to on-ground
            support, we handle every detail so you can focus on creating
            unforgettable journeys.
          </p>
          <button className="px-6 py-3 text-lg font-semibold text-white bg-yellow-500 hover:bg-yellow-600 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            Get Started
          </button>
        </div>

        {/* Image/Video */}
        <div className="relative group">
          <motion.div
            className="relative overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              className="w-full h-full object-cover rounded-lg"
              src={image}
              alt="Safari Journey"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AdvancedHero: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ContentSection />
    </>
  );
};

export default AdvancedHero;
