import React from 'react';
import styled from 'styled-components';

import {
  LandingpageOnline,
  Column,
  TitleCenter,
  TextCenter,
  Image,
  Row,
} from '../components';
import Responsive from '../components/layout/Responsive';
import { OnlineCoverFest } from '../assets';
import '../components/table/TableCss.css';

const PartyThanks = () => (
  <LandingpageOnline>
    <Background>
      <Row>
        <Column widthPercentage="100%">
          <Image src={OnlineCoverFest} />
          <br />
          <TitleCenter text="Wooohoooo! Du er med!" />
          <TextCenter>
            Tusind tak fordi du vil deltage i min afskedsfest i Egebjerg!
            <br />
            Jeg glæder mig til en hyggelig dag hvor vi sammen tager god afsked med banen!
            <br />
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Du får lige straks en bekræftelse på mail med oplysninger om dagens arrangement" />
          <TextCenter>
            Føler du dig snydt, så tjek din spam mappe - måske putter jeg mig der.
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter color="#872f35" text="Vi ses den 3. august!" />
        </Column>
      </Row>

      <br />
      <br />
    </Background>
  </LandingpageOnline>
);

export default PartyThanks;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
