import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 690"
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
        <foreignObject x="20" y="90" width="150" height="200">
          <p xmlns="http://www.w3.org/1999/xhtml">Footer</p>
        </foreignObject>
      </svg>
    </>
  );
};
