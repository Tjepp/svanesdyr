import React from 'react';
import styled from 'styled-components';

import { LandingpageOnline, Column, TitleCenter, TextCenter, Image, Row } from '../components';
import Responsive from '../components/layout/Responsive';
import { LogoUpdateBlack } from '../assets';
import '../components/table/TableCss.css';

const OnlineSoundbookThanks = () => (
  <LandingpageOnline>
    <Background>
      <Row>
        <Column widthPercentage="100%">
          <Image src={LogoUpdateBlack} />
          <br />
          <TitleCenter text="Wooohoooo! Det lykkedes!" />
          <TextCenter>
            Tusind tak for din investering i din hund og din tiltro til mig!
            <br />
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Du får lige straks en mail med dit link til at hente din Lydbog direkte" />
          <TextCenter>
            Føler du dig snydt, så tjek din spam mappe - måske putter jeg mig der.
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter color="#872f35" text="Rigtig god fornøjelse!" />
        </Column>
      </Row>

      <br />
      <br />
    </Background>
  </LandingpageOnline>
);

export default OnlineSoundbookThanks;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
