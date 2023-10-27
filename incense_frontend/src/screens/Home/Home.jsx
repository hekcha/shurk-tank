import cover from '../../assets/asset-cover.jpg';
import incenseStick from '../../assets/incenseStick.png';
import workerImg from '../../assets/20180225_094335.jpg';

import { aboutUsPageDetails } from '../../shared/constants/companyData.js';
export const Home = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-wrap text-left lg:text-left items-center">
          {/* right-side card */}
          <div className="w-full lg:w-6/12 px-4 flex justify-center">
            <div className="max-w-sm w-full lg:max-w-full lg:flex">
              <div
                className="h-48 lg:h-[400px] lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                  backgroundImage: `url(${cover})`,
                }}
                title="card-cover"
              ></div>
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    {aboutUsPageDetails.TagLine1}
                  </div>
                  <p className="text-gray-700 text-base">
                    {aboutUsPageDetails.TagLine2}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* left-side image */}
          <div className="w-full lg:w-6/12 px-4 flex justify-center">
            <img
              alt=""
              src={workerImg}
              className="max-h-[400px] my-10"
              style={{
                boxShadow: `rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <section
        style={{
          backgroundImage: 'linear-gradient(0.25turn, #F78DA7 5%, #8ED1FC 95%)',
        }}
      >
        <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8">
          <div className="px-6 py-6 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
            <div className="xl:w-0 xl:flex-1">
              <h2 className="text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl sm:leading-9">
                Get notified whenever we offer exciting discounts.
              </h2>
              <p
                className="max-w-3xl mt-3 text-lg leading-6 text-white"
                id="newsletter-headline"
              >
                Sign up for our newsletter to stay up to date.
              </p>
            </div>
            <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
              <form
                target="_blank"
                className="sm:flex"
                aria-labelledby="newsletter-headline"
              >
                <input
                  aria-label="Email address"
                  type="email"
                  required=""
                  className="w-full px-5 py-3 text-base leading-6 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md appearance-none focus:outline-none focus:placeholder-gray-400"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              <p className="mt-3 text-sm leading-5 text-white">
                We will never spam. That's our promise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center pt-10">
        <img
          src={incenseStick}
          alt="incense-stick"
          style={{ height: '100px' }}
        />
      </div>
    </>
  );
};
