import styled from 'styled-components';
import { CoolSix } from '../../assets';
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
  Title,
  TitleCenter,
} from '../../components';
import Responsive from '../../components/layout/Responsive';
import SummerMenu from '../../components/menu/SummerMenu';

const DogSummerJump = () => (
  <LandingpageSummer>
    <MetaDogSummer />
    <Background>
      <Row>
        <Column widthPercentage="20%">
          <Title text="Udbud af sommerkurser" showHorizontalRuler />
          <SummerMenu />
        </Column>
        <Column widthPercentage="75%">
          <TitleCenter text="Hilse Pænt" />
          <FlexedRow>
            <Image
              src={CoolSix}
              alt="Kvinde bøjer sig ned mod glad labrador der kigger op under hilse pænt træning"
              width="300px"
              height="200px"
            />
            <TextContainer>
              <Text>
                <b>Fokus på at øve ikke-hoppe-op og hilse roligt</b>
                <br />
                Til dig der har en ivrig hund, som bare eeeelsker at hilse på andre.
              </Text>
              <Text>
                Vi gennemgår teknikker til at lære hunden at blive på jorden med alle 4 poter, når
                der skal hilses på mennesker. Derudover kigger vi også på, hvordan vi tillærer
                hunden at hilse roligt på andre hunde - uden at bruse fremad med stram line. Du vil
                gå fra dagen med gode teknikker til at lære din hund at finde roen i forbindelse med
                social kontakt med andre.
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
            <Text>
              Max 5 hunde pr. hold.
              <br />
              <i>Kurset afholdes ved minimum 3 tilmeldte</i>
            </Text>
          </TextCenter>
          <br />

          <TitleCenter text="Tilmelding til Hilse Pænt:" />
          <EasyMeList src="https://ezme.io/x/x1S/CU9P" />
        </Column>
      </Row>

      <br />
      <br />
    </Background>
  </LandingpageSummer>
);

export default DogSummerJump;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
