import React from 'react';
import styled from 'styled-components';

import {
  LandingpageOnline,
  Column,
  TitleCenter,
  TextCenter,
  Image,
  Row,
  ContactPopUp,
} from '../components';
import Responsive from '../components/layout/Responsive';
import { OnlineCoverWalk } from '../assets';
import '../components/table/TableCss.css';

const OnlineSoldOut = () => (
  <LandingpageOnline>
    <Background>
      <Row>
        <Column widthPercentage="100%">
          <Image src={OnlineCoverWalk} />
          <br />
          <TitleCenter text="Øv Øv øv - Kurset er lukket for adgang i denne omgang!" />
          <TextCenter>
            Tusind tak for din interesse i mit onlinekursus!
            <br />
            Desværre er salget lukket for denne omgang.
            <br />
          </TextCenter>
          <TextCenter>Det bliver muligt at tilmelde sig igen senere på året!</TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Ønsker du at være en af de første der får besked når det er muligt at være med igen?" />
          <TextCenter>
            Så smid mig en besked, hvor du skriver dit ønske og jeg sender dig en mail når næste
            kursusstart er planlagt!
          </TextCenter>
        </Column>
      </Row>

      <ContactPopUp text="Ja tak! Jeg vil med på venteliste til næste gang" />

      <br />
      <br />
    </Background>
  </LandingpageOnline>
);

export default OnlineSoldOut;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
