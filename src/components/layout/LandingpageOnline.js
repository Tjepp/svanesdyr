import PropTypes from 'prop-types';
import CookieConsent from 'react-cookie-consent';
import styled from 'styled-components';
import { StyledLinkOnline, TextContainer } from '..';

const LandingpageOnline = ({ children, noindex = false }) => (
  <Container>
    {noindex && <meta name="robots" content="noindex, nofollow" />}
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
  noindex: PropTypes.bool,
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
