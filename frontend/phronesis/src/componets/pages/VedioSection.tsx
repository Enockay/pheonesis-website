import React, { useRef, useEffect, useState } from "react";
import video from "../../assets/phronesis-video.mp4";

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    const handlePlay = () => {
      videoElement.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handlePlay();
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <>
      <section className="relative bg-gray-50 py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight mb-6">
                Experience Africa’s Untamed Beauty with
                <span className="text-yellow-500"> Seamless Logistics</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Imagine standing in the heart of the Kenyan savannah, surrounded
                by the sights, sounds, and rhythm of nature. With Phronesis Tour
                Logistics, we handle every detail of your journey so all you
                need to do is embrace the adventure. Specializing in safari
                logistics, we partner with tour operators, travel agencies, and
                private groups worldwide to craft safe, seamless, and
                unforgettable safari experiences across Kenya.
              </p>
              <button className="px-6 py-3 text-lg font-semibold text-white bg-yellow-500 hover:bg-yellow-600 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Video Section */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <div className="aspect-w-16 aspect-h-9">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    src={video}
                    muted={isMuted}
                    loop
                    playsInline
                    poster="/path-to-thumbnail.jpg" // Optional: Add a poster image
                  >
                    {/* Fallback content for unsupported browsers */}
                    Your browser does not support the video tag.
                  </video>
                </div>
                {/* Mute/Unmute Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                  <button
                    className="text-white bg-yellow-500 p-4 rounded-full shadow-lg hover:bg-yellow-600 transition-colors"
                    onClick={toggleMute}
                  >
                    {isMuted ? "🔈" : "🔊"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sinusoidal Separator */}
      <div className="relative w-full hidden">
        <svg
          className="absolute bottom-0 w-full h-20 md:h-40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#faf089" /* Background color below the curve */
            d="M0,128L48,160C96,192,192,256,288,250.7C384,245,480,171,576,144C672,117,768,139,864,149.3C960,160,1056,160,1152,149.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default VideoSection;
