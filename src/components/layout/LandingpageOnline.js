import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import CookieConsent from 'react-cookie-consent';
import { TextContainer, StyledLinkOnline } from '..';

const LandingpageOnline = ({ children }) => (
  <Container>
    {children}
    <TextContainer>
      © Copyright 2018 by SvanesDyr. All Rights Reserved.
      <br />
      <StyledLinkOnline to="/onlinehandelsbetingelser"> Handelsbetingelser </StyledLinkOnline>
      <StyledLinkOnline to="/privatlivspolitik"> Privatlivspolitik </StyledLinkOnline>
    </TextContainer>
    <CookieConsent>This website uses cookies to enhance the user experience. </CookieConsent>
  </Container>
);

LandingpageOnline.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LandingpageOnline;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
