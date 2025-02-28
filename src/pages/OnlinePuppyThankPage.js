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
import { OnlineCoverBeany } from '../assets';
import '../components/table/TableCss.css';

const OnlineThankPage = () => (
  <LandingpageOnline>
    <Background>
      <Row>
        <Column widthPercentage="100%">
          <Image src={OnlineCoverBeany} />
          <br />
          <TitleCenter text="Wooohoooo! Du er med!" />
          <TextCenter>
            Tusind tak for din investering i din hvalp og din tiltro til mig!
            <br />
            Jeg glææææder mig til at vise dig hvordan jeg skaber ro, nærvær og succes i hverdagen med min lille, nye hvalp!
            <br />
            Så du kan se metoderne i aktion og skabe samme succes og ro med din hvalp.
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Du får lige straks en velkomstmail med din E-bog og link med adgang til den lukkede facebookgruppe" />
          <TextCenter>
            Føler du dig snydt, så tjek din spam mappe - måske putter jeg mig der.
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Kan du ikke vente?" />
          <TextCenter>
            Du kan straks søge om adgang til den lukkede facebookgruppe, lige her:
          </TextCenter>
        </Column>
      </Row>

      <ButtonOnline
        text="Ja tak, før mig straks ind til den lukkede facebookgruppe!"
        onClick={() =>
          window.open('https://www.facebook.com/groups/konfliktfrihvalpeopdragelse2025', '_blank')
        }
      ></ButtonOnline>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter color="#872f35" text="Vi ''ses'' online inden længe!" />
        </Column>
      </Row>
      <br />
      <br />
    </Background>
  </LandingpageOnline>
);

export default OnlineThankPage;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
