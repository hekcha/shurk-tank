import React, { useState } from 'react';
import Slider from 'react-slick';
import tw from 'twin.macro';
import styled from 'styled-components';
import { SectionHeading } from '../misc/Headings';
import { PrimaryButton as PrimaryButtonBase } from '../misc/Buttons';
import { ReactComponent as AnahataIcon } from '../../../assets-compressed/anahata.svg';
import { ReactComponent as FlowerIcon } from '../../../assets-compressed/flower.svg';
import { ReactComponent as KarmaIcon } from '../../../assets-compressed/karma.svg';
import { ReactComponent as LeafIcon } from '../../../assets-compressed/leafIcon.svg';
import { ReactComponent as MeditationIcon } from '../../../assets-compressed/meditation.svg';
import { ReactComponent as OmIcon } from '../../../assets-compressed/omIcon.svg';
import { ReactComponent as ScentIcon } from '../../../assets-compressed/scent-icon.svg';
import { ReactComponent as StarIcon } from 'feather-icons/dist/icons/star.svg';
import { ReactComponent as ChevronLeftIcon } from 'feather-icons/dist/icons/chevron-left.svg';
import { ReactComponent as ChevronRightIcon } from 'feather-icons/dist/icons/chevron-right.svg';
import premiumImage1 from '../../../assets-compressed/all-set.jpg';
import premiumImage2 from '../../../assets-compressed/48.jpg';
import premiumImage3 from '../../../assets-compressed/BEL-PATRA.jpg';
import premiumImage4 from '../../../assets-compressed/kavya.jpg';
import premiumImage5 from '../../../assets-compressed/ramayan.jpg';
import premiumImage6 from '../../../assets-compressed/shree.jpg';
import premiumImage7 from '../../../assets-compressed/charlie-12.jpg';
import premiumImage8 from '../../../assets-compressed/divyansh-985.jpg';
import premiumImage9 from '../../../assets-compressed/vaishnavi.jpg';
const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`,
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-3 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`flex flex-row rounded-full p-1 bg-white text-gray-100`}
  svg {
    ${tw`w-6 h-6 mx-1`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(
  PrimaryButtonBase,
)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: premiumImage1,
      title: 'Divine Aroma',
      description:
        'Our Divine Aroma Collection brings together a universe of scents to suit every mood and occasion, from invigorating mornings to peaceful evenings.',
      scentText: 'All',
      rating: '4.8',
    },
    {
      imageSrc: premiumImage2,
      title: 'Premium',
      description:
        'Embrace the essence of purity with every light. Our Divine Fragrance Collection is a testament to the art of fine incense making, capturing the heart of nature’s most intoxicating scents.',
      scentText: 'Premium',
      rating: 4.9,
    },
    {
      imageSrc: premiumImage3,
      title: 'Shree Bel Patra',
      description:
        'Crafted in homage to the sacred Bel Patra leaf, an offering beloved by Lord Shiva, this incense aims to sanctify your space with its purifying aroma.',
      scentText: 'Bel Patra',
      rating: '5.0',
    },
    {
      imageSrc: premiumImage4,
      title: 'Kavya',
      description:
        "With Kavya's two-fold fragrance, embrace a more profound sense of peace and serenity in your daily meditation and relaxation rituals.",
      scentText: 'Premium',
      rating: 4.5,
    },
    {
      imageSrc: premiumImage5,
      title: 'Ramayan',
      description:
        'Inspired by the grandeur of the epic tale, our Ramayan incense sticks envelop you in a scent narrative as rich and profound as the story itself. Each stick is designed to elevate your prayers and meditations, connecting you to the divine with its sacred scents.',
      scentText: 'Celestial Fragrance',
      rating: 4.7,
    },
    {
      imageSrc: premiumImage6,
      title: 'Shree 200',
      description:
        'Experience the fresh scent of garden blooms with Shree 200 incense sticks, perfect for a refreshing, floral ambiance at home.',
      scentText: 'Fragrant Bliss',
      rating: 4.6,
    },
    {
      imageSrc: premiumImage7,
      title: 'Charlie',
      description:
        "Turn your home into a sanctuary of peace with Charlie's Charismatic Incense. Perfect for enhancing your moments of relaxation, meditation, or social gatherings.",
      scentText: 'Home Aroma Symphony',
      rating: 4.2,
    },
    {
      imageSrc: premiumImage8,
      title: 'Shree Divyansh',
      description:
        'Bring the essence of nature indoors with Shree Divyansh Floral Incense. Light up a stick and let the floral notes dissolve away the stress of the day, nurturing a haven of tranquility in your home.',
      scentText: 'Divyanjali Floral Incense',
      rating: 4.6,
    },
    {
      imageSrc: premiumImage9,
      title: 'Vaishnavi',
      description:
        'Discover the essence of duality with Vaishnavi Dual Sensation Incense. Light a stick and let the harmonious fragrances transport you to a world of peace and vitality.',
      scentText: 'Vaishnavi Dual Sensation Incense',
      rating: 4.8,
    },
  ];

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Premium Range</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}>
              <ChevronLeftIcon />
            </PrevButton>
            <NextButton onClick={sliderRef?.slickNext}>
              <ChevronRightIcon />
            </NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                  <RatingsInfo>
                    <StarIcon />
                    <Rating>{card.rating}</Rating>
                  </RatingsInfo>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  <IconWithText>
                    <IconContainer>
                      <ScentIcon />
                    </IconContainer>
                    <Text>{card.scentText}</Text>
                  </IconWithText>
                  <IconWithText>
                    <IconContainer>
                      <KarmaIcon />
                      <AnahataIcon />
                      <FlowerIcon />
                      <LeafIcon />
                      <MeditationIcon />
                      <OmIcon />
                    </IconContainer>
                    <Text>{card.pricingText}</Text>
                  </IconWithText>
                </SecondaryInfoContainer>
                <Description>{card.description}</Description>
              </TextInfo>
              <PrimaryButton>Shop Now</PrimaryButton>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
