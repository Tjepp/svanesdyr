import styled from 'styled-components';
import { OnlineCoverPuppyFive } from '../assets';
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

const OnlineEbookThanks = () => (
  <LandingpageOnline noindex>
    <Background>
      <Row>
        <Column widthPercentage="100%">
          <Image
            src={OnlineCoverPuppyFive}
            alt="Coverbillede for e-bog om hvalpeopdragelse"
            priority
          />
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
        href="https://www.svanesdyr.dk/onlinekurser"
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
