import styled from 'styled-components';
import { PuppyContinuedFive } from '../../assets';
import {
  Column,
  EasyMeList,
  FlexedRow,
  Image,
  LandingpageSummer,
  MetaDogSummer,
  Row,
  Text,
  TextCenter,
  TextContainer,
  TextList,
  Title,
  TitleCenter,
} from '../../components';
import Responsive from '../../components/layout/Responsive';
import SummerMenu from '../../components/menu/SummerMenu';

const PlayTypes = [
  'Små racer: Max skulderhøjde 30 cm.',
  'Mellemstore racer: Skulderhøjde fra 30 - 50 cm.',
  'Store racer: Skulderhøjde fra 50 cm og opefter',
];

const PlayRoom = [
  'Små racer: Max 8 hunde',
  'Mellemstore racer: Max 8 hunde',
  'Store racer: Max 6 hunde',
];

const DogSummerPlay = () => (
  <LandingpageSummer>
    <MetaDogSummer />
    <Background>
      <Row>
        <Column widthPercentage="20%">
          <Title text="Udbud af sommerkurser" showHorizontalRuler />
          <SummerMenu />
        </Column>
        <Column widthPercentage="75%">
          <TitleCenter text="Legestue opdelt efter størrelse" />
          <FlexedRow>
            <Image
              src={PuppyContinuedFive}
              alt="To hunde leger sammen på græsset under legestue"
              width="300px"
              height="200px"
            />
            <TextContainer>
              <Text>
                <b>God socialisering under kontrollerede forhold!</b>
                <br />
                Alle får en god oplevelse med hjem, da der tages hensyn til den enkelte hund. Oftest
                startes legen ud med at to hunde lukkes sammen ad gangen, så de kan få lov til at se
                hinanden an. Det gør det nemt at afbryde legen, hvis det bliver for meget for den
                ene hund, eller de har brug for en pause. Din hund har sin egen præference for leg.
                Nogle kan godt lide at løbe og jage, andre elsker at bryde og være vild. Derfor
                sættes legetimen op, så vi kan se hvilke hunde der passer bedst sammen i legestil.
              </Text>
            </TextContainer>
          </FlexedRow>
          <TextCenter>
            <br />
            <Text>
              <b>Legestuerne inddeles i 3 typer:</b>
              <TextList texts={PlayTypes} />
            </Text>
            <Text>
              <b>Antal pladser til legestuerne</b>
              <br />
              For at forholdene er kontrollerede er der begrænsning på hvor mange pladser hver
              legestue har til rådighed pr. gang:
              <TextList texts={PlayRoom} />
            </Text>
            <Text>
              <b>Deltagelse pr. hund: 110,- kr.</b>
              <br />
              for 60 minutters legestue, uanset antal tobenede der er med
            </Text>
          </TextCenter>
          <br />

          <TitleCenter text="Tilmelding til Sommerlegestuer:" />
          <EasyMeList src="https://ezme.io/x/x1S/knhZ" />
        </Column>
      </Row>

      <br />
      <br />
    </Background>
  </LandingpageSummer>
);

export default DogSummerPlay;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
