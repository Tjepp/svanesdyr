import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import CookieConsent from 'react-cookie-consent';
import Header from '../Header';
import Menu from '../menu/Menu';
import FooterBottom from '../FooterBottom';
import FooterTop from '../FooterTop';

const Page = ({ children }) => (
  <Container>
    <Header />
    <Menu />
    {children}
    <FooterTop />
    <FooterBottom />
    <CookieConsent>This website uses cookies to enhance the user experience. </CookieConsent>
  </Container>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
