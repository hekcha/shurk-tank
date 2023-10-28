import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Slider.css';

// Import your images here
import image1 from '../../../assets/48.jpg';
import image2 from '../../../assets/1st.jpg';
import image3 from '../../../assets/all-set.jpg';
import image4 from '../../../assets/charlie-12.jpg';
import image5 from '../../../assets/divyansh.jpg';
import logo from '../../../assets/logo.png';
import banner from '../../../assets/IMG-20210809-WA0014.jpg';

import image6 from '../../../assets/mogra-series.jpg';
import image7 from '../../../assets/PXL_20210821_150149269 - Copy.jpg';
import image8 from '../../../assets/shree.jpg';
import image9 from '../../../assets/vaishnavi.jpg';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  logo,
  banner,
  image6,
  image7,
  image8,
  image9,
];

export const Slider = () => {
  const carousel = useRef();
  const controls = useAnimation();

  useEffect(() => {
    const scrollWidth = carousel.current.scrollWidth;
    const carouselWidth = carousel.current.offsetWidth;
    let x = 0;

    const animateSlider = () => {
      // Update x position slowly
      x -= 1; // You can adjust the speed by changing the value here

      // If the carousel has reached the end, reset to the beginning
      if (x < -(scrollWidth - carouselWidth)) {
        x = 0;
      }

      controls.start({
        x: x,
        transition: { duration: 0.5 },
      });

      requestAnimationFrame(animateSlider);
    };

    animateSlider();

    // Clean up the animation loop when the component unmounts
    return () => cancelAnimationFrame(animateSlider);
  }, [controls]);

  return (
    <div className="slider">
      <motion.div ref={carousel} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0 }}
          className="inner-carousel"
          animate={controls}
        >
          {images.map((image, index) => (
            <motion.div className="item" key={index}>
              <img src={image} alt="" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
