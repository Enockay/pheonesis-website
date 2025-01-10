// App.tsx
import React from "react";
import Header from "./componets/pages/Header";
import HeroSection from "./componets/pages/Heros";
import VideoSection from "./componets/pages/VedioSection";
import ServicesSection from "./componets/pages/Services";
import AdvancedHero from "./componets/pages/AddOn";
import Footer from "./componets/pages/Footer";
import Testimonials from "./componets/pages/testimonies";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* Header Component */}
      <Header />
      <HeroSection/>
      <VideoSection/>
      <ServicesSection/>
      <AdvancedHero/>
      <Testimonials/>
      <Footer/>
    </div>
  );
};

export default App;
