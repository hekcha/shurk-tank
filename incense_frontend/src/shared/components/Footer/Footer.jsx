import React from 'react';
import './Footer.css';
import logo from '../../../assets/logo-white.png';
import instagram from '../../../assets/instagram.svg';
import facebook from '../../../assets/facebook.svg';
import twitter from '../../../assets/twitter.svg';

export const Footer = () => {
  return (
    <div>
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 590"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150 "
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stopColor="#F78DA7"></stop>
            <stop offset="95%" stopColor="#8ED1FC"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,700 C 0,700 0,233 0,233 C 97.00478468899522,194.73205741626793 194.00956937799043,156.46411483253587 295,152 C 395.99043062200957,147.53588516746413 500.96650717703346,176.8755980861244 591,207 C 681.0334928229665,237.1244019138756 756.1244019138757,268.03349282296654 844,277 C 931.8755980861243,285.96650717703346 1032.5358851674641,272.99043062200957 1134,262 C 1235.4641148325359,251.00956937799043 1337.732057416268,242.00478468899522 1440,233 C 1440,233 1440,700 1440,700 Z"
          stroke="none"
          strokeWidth="0"
          fill="url(#gradient)"
          fillOpacity="0.53"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stopColor="#F78DA7"></stop>
            <stop offset="95%" stopColor="#8ED1FC"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,700 C 0,700 0,466 0,466 C 66.94736842105263,447.0622009569378 133.89473684210526,428.1244019138756 238,410 C 342.10526315789474,391.8755980861244 483.36842105263156,374.5645933014354 584,390 C 684.6315789473684,405.4354066985646 744.6315789473686,453.61722488038276 847,475 C 949.3684210526314,496.38277511961724 1094.1052631578946,490.9665071770335 1200,485 C 1305.8947368421054,479.0334928229665 1372.9473684210527,472.51674641148327 1440,466 C 1440,466 1440,700 1440,700 Z"
          stroke="none"
          strokeWidth="0"
          fill="url(#gradient)"
          fillOpacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-1"
        ></path>
      </svg>

      <footer
        className="relative pt-8 pb-6"
        style={{
          backgroundImage: 'linear-gradient(0.25turn, #F78DA7 5%, #8ED1FC 95%)',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <div className="justify-start sm:pb-2.5 md:pb-5">
                <img
                  src={logo}
                  alt="company logo"
                  style={{
                    height: '120px',
                  }}
                />
              </div>
              {/* <h4 className="text-3xl fonat-semibold text-blueGray-700">
                Let's keep in touch!
              </h4> */}
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:translate-y-1 active:translate-y-1 transition-all"
                  type="button"
                >
                  <span className="flex justify-center items-center">
                    <img src={facebook} className="h-5" alt="social media" />
                  </span>
                </button>
                <button
                  className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:translate-y-1 active:translate-y-1 transition-all"
                  type="button"
                >
                  <span className="flex justify-center items-center">
                    <img src={instagram} className="h-5" alt="social media" />
                  </span>
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:translate-y-1 active:translate-y-1 transition-all"
                  type="button"
                >
                  <span className="flex justify-center items-center">
                    <img src={twitter} className="h-5" alt="social media" />
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/presentation?ref=njs-profile"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                        href="https://blog.creative-tim.com?ref=njs-profile"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                        href="https://www.github.com/creativetimofficial?ref=njs-profile"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                      >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/terms?ref=njs-profile"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/privacy?ref=njs-profile"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/contact-us?ref=njs-profile"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Address:
                <a
                  href="https://maps.app.goo.gl/esvj5UkrWBXzgWoY6"
                  className="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  Shree Ansh Agarbatti co. Gola Bazar, Gorakhpur, Uttar Pradesh,
                  273408, India
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
