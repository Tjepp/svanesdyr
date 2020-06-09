import styled from 'styled-components';
import React from 'react';
import CookieConsent from 'react-cookie-consent';
import Header from '../Header';
import FooterLandingpage from '../FooterLandingpage';

const Landingpage = ({ children }) => (
  <Container>
    <Header />
    {children}
    <FooterLandingpage />
  </Container>
);

export default Landingpage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
