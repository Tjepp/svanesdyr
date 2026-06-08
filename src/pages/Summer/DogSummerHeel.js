import styled from 'styled-components';
import { CoolOne } from '../../assets';
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

const DogSummerHeel = () => (
  <LandingpageSummer>
    <MetaDogSummer />
    <Background>
      <Row>
        <Column widthPercentage="20%">
          <Title text="Udbud af sommerkurser" showHorizontalRuler />
          <SummerMenu />
        </Column>
        <Column widthPercentage="75%">
          <TitleCenter text="Plads position" />
          <FlexedRow>
            <Image
              src={CoolOne}
              alt="Labrador går pænt ved siden af sin ejer og kigger op til plads sommerkurset"
              width="300px"
              height="200px"
            />
            <TextContainer>
              <Text>
                <b>Lær hunden at gå på plads ved benet er fedt!</b>
                <br />
                Til dig der ønsker en stabil plads-position til hverdagsbrug!
              </Text>
              <Text>
                Kurset henvender sig til den almene hundeejer, <i>ikke</i> til dig der målrettet går
                efter en præcision i pladstræning til lydighedsprogram.
              </Text>
              <Text>
                Vi gennemgår teknikker til at lære hunden at finde plads-positionen ved dit ben,
                mens du står stille. Derudover kigger vi også på en lineføring, hvordan vi lærer
                hunden at følge dig, tæt ved benet, i bevægelse. Du vil gå fra dagen med gode
                teknikker til at lære din hund at positionen ved dit ben er mega fedt.
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

          <TitleCenter text="Tilmelding til Plads Position:" />
          <EasyMeList src="https://ezme.io/x/x1S/fm8T" />
        </Column>
      </Row>

      <br />
      <br />
    </Background>
  </LandingpageSummer>
);

export default DogSummerHeel;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
