import React from 'react';
import AnimationRevealPage from '../../shared/helpers/AnimationRevealPage.js';
import Hero from '../../shared/components/hero/FullWidthWithImage.js';
import Features from '../../shared/components/features/ThreeColSimple.js';
import MainFeature from '../../shared/components/features/TwoColSingleFeatureWithStats.js';
import SliderCard from '../../shared/components/cards/ThreeColSlider.js';
import TrendingCard from '../../shared/components/cards/TwoTrendingPreviewCardsWithImage.js';
import Blog from '../../shared/components/blogs/PopularAndRecentBlogPosts.js';
import Testimonial from '../../shared/components/testimonials/TwoColumnWithImageAndProfilePictureReview.js';
import FAQ from '../../shared/components/faqs/SimpleWithSideImage.js';
import SubscribeNewsLetterForm from '../../shared/components/forms/SimpleSubscribeNewsletter.js';

const Home = () => {
  return (
    <div>
      <AnimationRevealPage>
        <Hero />
        <Features />
        <SliderCard />
        {/* <TrendingCard /> */}
        {/* <MainFeature /> */}
        {/* <Blog /> */}
        {/* <Testimonial textOnLeft={true} /> */}
        {/* <FAQ /> */}
        {/* <SubscribeNewsLetterForm /> */}
      </AnimationRevealPage>
    </div>
  );
};

export default Home;
