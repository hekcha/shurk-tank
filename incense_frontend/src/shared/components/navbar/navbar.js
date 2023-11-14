import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro'; //eslint-disable-line
import { ReactComponent as DeliveryTruck } from '../../../assets-compressed/delivery-truck.svg';

import Header, {
  LogoLink,
  NavLinks,
  NavLink as NavLinkBase,
} from '../headers/light.js';

const StyledHeader = styled(Header)`
  ${tw`justify-between`}
  ${LogoLink} {
    ${tw`mr-8 pb-0`}
  }
`;

const NavLink = tw(NavLinkBase)`
  sm:text-sm sm:mx-6 flex flex-row items-center lg:text-xl
`;

const Container = tw.div`relative -mx-5 -mt-8`;
const LeftColumn = tw.div`ml-8 mr-8 xl:pl-10 xl:w-auto py-[50px]`;

const IconContainer = styled.div`
  ${tw`flex flex-row rounded-full p-1 bg-white text-gray-100`}
  svg {
    ${tw`w-6 h-6 mx-1`}
  }
`;

export default ({
  navLinks = [
    <NavLinks key={1}>
      <NavLink href="/about">About Us</NavLink>
      <NavLink href="/contact-us">Become a Partner</NavLink>
      <NavLink href="/shop">
        Shop Now
        <IconContainer>
          <DeliveryTruck />
        </IconContainer>
      </NavLink>
      <NavLink href="/login">Login</NavLink>
    </NavLinks>,
  ],
}) => {
  return (
    <Container>
      <LeftColumn>
        <StyledHeader links={navLinks} collapseBreakpointClass="sm" />
      </LeftColumn>
    </Container>
  );
};
