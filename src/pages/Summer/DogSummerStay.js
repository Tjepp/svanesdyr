import styled from 'styled-components';
import { PuppyContinuedOne, SummerCover } from '../../assets';
import {
  Column,
  EasyMeList,
  FlexedRow,
  Image,
  LandingpageOnline,
  MetaDogSummer,
  Row,
  Text,
  TextCenter,
  TextContainer,
  Title,
  TitleCenter,
} from '../../components';
import Responsive from '../../components/layout/Responsive';
import SummerMenu from '../../components/menu/SummerMenu';

const DogSummerStay = () => (
  <LandingpageOnline>
    <MetaDogSummer />
    <Background>
      <Row>
        <Image
          src={SummerCover}
          alt="Gruppe af hundeejere med deres hunde på træningsplads med teksten Sommerkurser"
          priority
        />
      </Row>
      <Row>
        <Column widthPercentage="20%">
          <Title text="Udbud af sommerkurser" showHorizontalRuler />
          <SummerMenu />
        </Column>
        <Column widthPercentage="75%">
          <TitleCenter text="Bliv" />
          <FlexedRow>
            <Image
              src={PuppyContinuedOne}
              alt="Hund ligger afslappet på et tæppe med løs line og kigger"
              width="300px"
              height="200px"
            />
            <TextContainer>
              <Text>
                <b>Bliv i sit og dæk SELV med forstyrrelser</b>
                <br />
                Ønsker du at få en stensikker placering fra din hund, når du beder den om at sætte
                sig eller lægge sig? Måske har du en drøm om at kunne få den til at blive liggende i
                sin kurv, selvom der er gæster på besøg? Dette kursus giver dig redskaberne til at
                få fjederen ud af hundens ben og en god bliv, uanset om du beder om sit eller dæk.
                Vi kigger på konceptet selv med forstyrrelser i brug!
              </Text>
            </TextContainer>
          </FlexedRow>
          <TextCenter>
            <br />
            <Text>
              <b>Deltagelse pr. hund: 245,- kr.</b>
              <br />
              uanset antal tobenede der er med
              <br />
              Prisen inkluderer en skriftlig opsummering på dagens øvelser, til let videretræning
              derhjemme.
            </Text>
            <Text>Max 5 hunde pr. hold.</Text>
          </TextCenter>
          <br />

          <TitleCenter text="Tilmelding til Bliv:" />
          <EasyMeList src="https://ezme.io/x/x1S/o8zC" />
        </Column>
      </Row>

      <br />
      <br />
    </Background>
  </LandingpageOnline>
);

export default DogSummerStay;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
