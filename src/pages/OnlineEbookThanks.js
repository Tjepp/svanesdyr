import React from 'react';
import styled from 'styled-components';

import { 
  LandingpageOnline, 
  Column, 
  TitleCenter, 
  TextCenter, 
  Image, 
  Row,
  ButtonOnline,
 } from '../components';
import Responsive from '../components/layout/Responsive';
import { OnlineCoverPuppyFive } from '../assets';
import '../components/table/TableCss.css';

const OnlineEbookThanks = () => (
  <LandingpageOnline>
    <Background>
      <Row>
        <Column widthPercentage="100%">
          <Image src={OnlineCoverPuppyFive} />
          <br />
          <TitleCenter text="Wooohoooo! Det lykkedes!" />
          <TextCenter>
            Tusind tak for din investering i din hvalp og din tiltro til mig!
            <br />
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Du får lige straks en mail med din E-bog vedhæftet til direkte download!" />
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

      <ButtonOnline
        text="Lad mig se hvad du ellers tilbyder af onlinekurser! Tag mig tilbage til hjemmesiden"
        onClick={() => window.open('https://www.svanesdyr.dk/onlinekurser', '_blank')}
      ></ButtonOnline>

      <br />
      <br />
    </Background>
  </LandingpageOnline>
);

export default OnlineEbookThanks;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
