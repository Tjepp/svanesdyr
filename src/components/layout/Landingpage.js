import styled from 'styled-components';
import React from 'react';
import CookieConsent from 'react-cookie-consent';
import Header from '../Header';
import FooterLandingpage from '../FooterBottom';

const Landingpage = ({ children }) => (
  <Container>
    <Header />
    {children}
    <FooterLandingpage />
    <CookieConsent>This website uses cookies to enhance the user experience. </CookieConsent>
  </Container>
);

export default Landingpage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align: center;
  justify-content: center;
  height:100%;
  width: 100%;
`;
