import React from 'react';
import { Slider } from '../../shared/components/Slider/Slider.jsx';
import Navbar from '../../shared/components/navbar/navbar.js';
import AboutFounder from "../../shared/components/aboutfounder/aboutfounder.js";

const About = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <AboutFounder />
    </>
  );
};

export default About;
