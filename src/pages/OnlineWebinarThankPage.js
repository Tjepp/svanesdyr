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
import { OnlineCoverDogPlay } from '../assets';
import '../components/table/TableCss.css';

const OnlineWebinarThankPage = () => (
  <LandingpageOnline>
    <Background>
      <Row>
        <Column widthPercentage="100%">
          <Image src={OnlineCoverDogPlay} />
          <br />
          <TitleCenter text="Wooohoooo! Du er med!" />
          <TextCenter>
            Tusind tak for din investering i din hund og din tiltro til mig!
            <br />
            Jeg glææææder mig til at nørde adfærd i et par timer og give dig redskaberne til at
            spotte forskellen mellem god og dårlig hundeleg!
            <br />
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Du får lige straks en mail med bekræftelse på din tilmelding" />
          <TextCenter>
            Føler du dig snydt, så tjek din spam mappe - måske putter jeg mig der.
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter color="#872f35" text="Vi ses inden længe!" />
        </Column>
      </Row>

      <ButtonOnline
        text="Lad mig se hvad du ellers tilbyder af onlinekurser! Tag mig til hjemmesiden"
        onClick={() => window.open('https://www.svanesdyr.dk/onlinekurser', '_blank')}
      ></ButtonOnline>
      <br />
      <br />
    </Background>
  </LandingpageOnline>
);

export default OnlineWebinarThankPage;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
