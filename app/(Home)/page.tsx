import React from "react";
import Navbar from "../components/Navbar";
import HeroPage from "./Hero";
import Footer from "../components/Footer";
import WhatIDoPage from "./WhatIDo";
import Skills from "./Skills";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroPage />
      <WhatIDoPage />
      <Skills />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
