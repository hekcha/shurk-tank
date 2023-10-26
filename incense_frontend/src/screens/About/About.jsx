import React from 'react';
import circles from '../../assets/circles.svg';
import first from '../../assets/1st.jpg';
import second from '../../assets/2nd.jpg';
import third from '../../assets/3rd.jpg';
import { color } from '../../shared/constants/colors';

export const About = () => {
  return (
    <>
      <section className="pt-20 overflow-hidden">
        <div className="container mx-auto px-5">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src={first}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src={second}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src={third}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      <img src={circles} alt="circles pattern" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-2 text-lg font-semibold text-primary">
                  Why Choose Us
                </span>
                <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl">
                  Make your customers happy by giving services.
                </h2>
                <p className="mb-8 text-base text-body-color">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less.
                </p>
                <a
                  href="/#"
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-center text-black rounded-lg hover:bg-opacity-90 lg:px-8 xl:px-10"
                  style={{
                    background: color['cherry-blossom-pink'],
                    color: 'black',
                  }}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
