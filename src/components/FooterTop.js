import styled from 'styled-components';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Responsive from './layout/Responsive';
import { contactMap } from '../assets';
import FacebookColumn from './FacebookColumn';

const FooterTop = () => (
  <Background>
    <Container>
      <ShortAboutMe />
      <ContactMe />
      <FacebookColumn />
    </Container>
  </Background>
);

export default FooterTop;

const ShortAboutMe = () => (
  <ColumnContainer>
    <Title> Kort om mig </Title>
    <div>
      Svanes Dyr drives af Sabrina Svane, som er certificeret Dyreadfærdskonsulent (BSc ABT).
      Jeg specialiserer mig i løsning af problemadfærd hos henholdsvis hunde, katte og heste og kommer gerne på hjemmebesøg.
      Jeg anvender belønningsbaserede træningsmetoder og tilbyder holdtræning i Horsens for familiehunde.
    </div>
  </ColumnContainer>
);

const ContactMe = () => (
  <ColumnContainer>
    <Title> Kontakt Mig </Title>
    <ContactInfoContainer>
      <IconContainer>
        <FontAwesomeIcon icon="phone" color="#666" size="1x" />
        <SubTitle>Telefon: </SubTitle>
        <StyledA href="tel: 93960500">93 960 500</StyledA>
      </IconContainer>
      <IconContainer>
        <FontAwesomeIcon icon="envelope" color="#666" size="1x" />
        <SubTitle>Email: </SubTitle>
        <EmailText href="mailto:info@svanesdyr.dk">info@svanesdyr.dk</EmailText>
      </IconContainer>
      <IconContainer>
        <FontAwesomeIcon icon="map-marker-alt" color="#666" size="1x" />
        <SubTitle>Adresse: </SubTitle>
        <div>8740 Brædstrup</div>
      </IconContainer>
      <IconContainer>
        <FontAwesomeIcon icon="map-marker-alt" color="#666" size="1x" />
        <SubTitle>Træningsbane: </SubTitle>
        <div>8700 Horsens</div>
      </IconContainer>
      <IconContainer>
        <FontAwesomeIcon icon="info-circle" color="#666" size="1x" />
        <SubTitle>CVR-nr.: </SubTitle>
        <div>35903100</div>
      </IconContainer>
    </ContactInfoContainer>
  </ColumnContainer>
);

const StyledA = styled.a`
  text-decoration: none;
  color: #fff;
`;

const Background = styled.div`
  min-height: 90px;
  background: #333d46;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #414f5a;
  color: #a1a1a1;
  padding-bottom: 25px;
  ${Responsive.media.tablet`
    padding: 0;
  `}
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  justify-content: space-between;
  ${Responsive.media.tablet`
    flex-direction: column;
    align-items: center;
    padding: 15px;
  `}
`;

const Title = styled.h3`
  color: #fff;
`;

const SubTitle = styled.p`
  font-weight: 600;
  color: #727272;
  margin: 0;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

const ColumnContainer = styled.div`
  flex-direction: column;
  width: 32%;
  ${Responsive.media.tablet`
    width: 100%;
    align-self: end;
  `}
`;

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${contactMap});
  background-repeat: no-repeat;
  background-size: cover;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem;
`;

const EmailText = styled.a`
  margin-left: 0.5rem;
  color: #fff;
  text-decoration: none;
`;
