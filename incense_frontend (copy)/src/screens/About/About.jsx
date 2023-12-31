import React from 'react';
import circles from '../../assets-compressed/circles.svg';
import first from '../../assets-compressed/1st.jpg';
import second from '../../assets-compressed/2nd.jpg';
import third from '../../assets-compressed/3rd.jpg';
import founderImage from '../../assets-compressed/Founder.png';
import {
  color,
  aboutUsPageDetails,
} from '../../shared/constants/index.constants.js';
import { Heading } from '../../shared/components/index.components.js';
import { Slider } from '../../shared/components/Slider/Slider.jsx';

export const About = () => {
  return (
    <>
      <Slider />
      <section className="pt-20 overflow-hidden">
        <div className="container mx-auto px-5 lg:px-20">
          <Heading text="About Us" align="right" />
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img src={first} alt="" className="w-full rounded-2xl" />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img src={second} alt="" className="w-full rounded-2xl" />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img src={third} alt="" className="w-full rounded-2xl" />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      <img src={circles} alt="circles pattern" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 lg:w-1/2 xl:w-5/12">
              <div className="my-7 ">
                <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl">
                  Founder
                </h2>
                <div className="flex flex-row flex-wrap inline-block align-baseline justify-center	">
                  <div>
                    <img
                      className="object-contain w-auto"
                      src={founderImage}
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="py-6 text-base xs:text-xs text-body-color font-semibold text-center text-black mx-5  w-auto max-w-[300px]">
                      {aboutUsPageDetails.aboutFounder}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <span className="block mb-2 text-lg font-semibold text-primary">
                  Why Choose Us?
                </span>
                <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl">
                  {aboutUsPageDetails.TagLine1}
                </h2>
                <p className="mb-8 text-base text-body-color">
                  {aboutUsPageDetails.TagLine2}
                </p>
                <span className="block mb-2 text-lg font-semibold text-primary">
                  Our Vision
                </span>
                <p className="mb-8 text-base text-body-color">
                  {aboutUsPageDetails.Vision}
                </p>
                <a
                  href="/#"
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-center text-black rounded-lg hover:bg-opacity-90 lg:px-8 xl:px-10"
                  style={{
                    background: color['cherry-blossom-pink'],
                    color: 'black',
                  }}
                >
                  Order Now!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
