import styled from 'styled-components';
import { OnlineCoverCool } from '../assets';
import {
  ButtonOnline,
  Column,
  Image,
  LandingpageOnline,
  Row,
  TextCenter,
  TitleCenter,
} from '../components';
import Responsive from '../components/layout/Responsive';
import '../components/table/TableCss.css';

const OnlineWebinarThankCool = () => (
  <LandingpageOnline noindex>
    <Background>
      <Row>
        <Column widthPercentage="100%">
          <Image
            src={OnlineCoverCool}
            alt="Coverbillede for webinar om at holde hunden cool"
            priority
          />
          <br />
          <TitleCenter text="Wooohoooo! Du er med!" />
          <TextCenter>
            Tusind tak for din investering i din hund og din tiltro til mig!
            <br />
            Jeg glææææder mig til at nørde adfærd i et par timer og give dig redskaberne til at
            skabe mere ro i mødet med andre hunde på gåturene!
            <br />
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Du får lige straks en mail med bekræftelse på din tilmelding!" />
          <TextCenter>
            Føler du dig snydt, så tjek din spam mappe - måske putter jeg mig der.
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter color="#872f35" text="Vi ses online!" />
        </Column>
      </Row>

      <ButtonOnline
        text="Lad mig se hvad du ellers tilbyder af onlinekurser! Tag mig til hjemmesiden"
        href="https://www.svanesdyr.dk/onlinekurser"
      ></ButtonOnline>
      <br />
      <br />
    </Background>
  </LandingpageOnline>
);

export default OnlineWebinarThankCool;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
