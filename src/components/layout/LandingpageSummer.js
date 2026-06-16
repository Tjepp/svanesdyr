import PropTypes from 'prop-types';
import { useEffect } from 'react';
import CookieConsent from 'react-cookie-consent';
import styled from 'styled-components';
import { OnlineSummer } from '../../assets';
import { Column, Image, Row } from '../../components';
import ContactPopUp from '../ContactPopUp';
import FooterBottom from '../FooterBottom';
import Header from '../Header';
import Responsive from './Responsive';

const LandingpageSummer = ({ children }) => {
  useEffect(() => {
    const easyMeAlreadyLoaded = document.getElementById('easyme-connect-alpine');
    if (easyMeAlreadyLoaded) window.location.reload();
  }, []);

  return (
    <Container>
      <Header />
      <Background>
        <Bar>
          <CenteredA href="/">
            <Img
              src="/img/LogoUpdate.png?w=800"
              srcSet="/img/LogoUpdate.png?w=400 400w, /img/LogoUpdate.png?w=800 800w"
              sizes="(max-width: 768px) 100vw, 400px"
              alt="Svanes Dyr logo"
              fetchPriority="high"
            />
          </CenteredA>
        </Bar>
      </Background>
      <Row>
        <Column widthPercentage="100%">
          <Image
            src={OnlineSummer}
            alt="Gruppe af hundeejere med deres hunde på træningsplads med teksten Sommerkurser uge 30 og 31"
            aspectRatio="1140 / 470"
            priority
          />
        </Column>
      </Row>
      {children}
      <Background>
        <Bar>
          <ContactPopUp text="Tilmelding til sommerkursus venteliste" />
        </Bar>
      </Background>
      <FooterBottom />
      <CookieConsent>This website uses cookies to enhance the user experience. </CookieConsent>
    </Container>
  );
};

LandingpageSummer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LandingpageSummer;

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
  width: 400px;
  height: 100px;
  ${Responsive.media.tablet`
    align-self: center;
  `}
  margin-bottom: 10px;
  margin-top: 10px;
`;

const CenteredA = styled.a``;
