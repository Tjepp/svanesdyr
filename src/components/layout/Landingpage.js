import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import CookieConsent from 'react-cookie-consent';
import Responsive from './Responsive';
import { logoLightGrey } from '../../assets';
import Header from '../Header';
import FooterBottom from '../FooterBottom';
import ContactPopUp from '../ContactPopUp';

const Landingpage = ({ children }) => (
  <Container>
    <Header />
    <Background>
      <Bar>
        <Img src={logoLightGrey} alt="logo" />
      </Bar>
    </Background>
    {children}
    <Background>
      <Bar>
        <ContactPopUp text="Book din tid nu" />
      </Bar>
    </Background>
    <FooterBottom />
    <CookieConsent>This website uses cookies to enhance the user experience. </CookieConsent>
  </Container>
);

Landingpage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Landingpage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const Background = styled.div`
  min-height: 90px;
  background: #0f292f;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #000;
`;

const Bar = styled.div`
  display: flex;
  z-index: 9999;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  ${Responsive.media.tablet`
    flex-direction: column;
    margin: 0; 
  `}
`;

const Img = styled.img`
  vertical-align: middle;
  border: 0;
  width: 200px;
  height: 110px;
  ${Responsive.media.tablet`
    align-self: center;
  `}
  margin-bottom: 10px;
  margin-top: 10px;
`;
