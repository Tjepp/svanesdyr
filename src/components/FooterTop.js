import styled from 'styled-components';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import media from './Media';
import { contactMap } from '../assets';
import FacebookColumn from './FacebookColumn';

const FooterTop = () => (
  <Background>
    <Container>
      <ShortAboutMe />
      <FacebookColumn />
      <ContactMe />
    </Container>
  </Background>
);

export default FooterTop;

const ShortAboutMe = () => (
  <ColumnContainer>
    <Title> Kort om mig </Title>
    <div>
      Jeg hedder Sabrina Svane og er certificeret Dyreadfærdskonsulent (BSc ABT). Jeg specialiserer
      mig i løsning af problemadfærd hos henholdsvis hunde, katte og heste og kommer gerne på
      hjemmebesøg. Derudover tilbyder jeg almindelig holdtræning for familiehunde. Jeg benytter mig
      af belønningsbaserede træningsmetoder med forståelse for dyrets natur.
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
        <div>93 960 500</div>
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
    </ContactInfoContainer>
  </ColumnContainer>
);

const Background = styled.div`
  min-height: 90px;
  background: #333d46;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #414f5a;
  color: #a1a1a1;
  padding: 50px 0;
  ${media.tablet`
    padding: 0;
  `}
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  justify-content: space-evenly;
  ${media.tablet`
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
  width: 25%;
  ${media.tablet`
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
