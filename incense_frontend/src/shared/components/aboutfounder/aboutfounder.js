import React from 'react';
import circles from '../../../assets-compressed/circles.svg';
import first from '../../../assets-compressed/1st.jpg';
import second from '../../../assets-compressed/2nd.jpg';
import third from '../../../assets-compressed/3rd.jpg';
import founderImage from '../../../assets-compressed/Founder.png';
import { Heading } from '../Heading/Heading.jsx';

function AboutFounder() {
  const color = {
    'cherry-blossom-pink': '#FDAEBAff',
    'light-coral': '#E18080ff',
    'salmon-pink': '#FE829Bff',
    'salmon-pink-2': '#FEA5B2ff',
    'lavender-blush': '#EDE6EAff',
  };

  const aboutUsPageDetails = {
    TagLine1: `Exceptional fragrances, quality, innovation, and customer-focused variety set us apart.`,
    TagLine2: `Shree Ansh Agarbatti is a renowned brand known for crafting fragrant incense sticks. With state-of-the-art facilities in Gorakhpur, we produce a wide range of premium incense products, including our flagship collection. We prioritize customer satisfaction, innovation, and creativity, carefully creating each incense stick. Our product line consists of 35 varieties, spanning floral, oriental, premium, woody, cosmetic, and florabatti fragrances.`,
    Vision: `The brand envisions a future where every Indian household uses Shree Ansh Agarbatti to enhance prayers with purity and divinity. Incense sticks purify prayers, uplift moods, bring calmness, and improve concentration.`,
    aboutFounder: `The Founder, Late Mr. Anup Chaurasia through his hard work, dedication, and dynamism made the company most trusted and popular brands. Now run and operated by Amit Chaurasia. With his hardwork and dedication, we try to provide best quality incense sticks to our customers.`,
  };
  return (
    <div className="mb-[100px]">
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
              <div className="my-7 flex flex-row">
                <div className="basis-1/3">
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
                  </div>
                </div>
                <div className="basis-2/3">
                  <p className="py-[70px] text-base xs:text-xs text-body-color font-semibold text-center text-black mx-5  w-auto max-w-[300px]">
                    {aboutUsPageDetails.aboutFounder}
                  </p>
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
                  }}>
                  Order Now!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutFounder;
