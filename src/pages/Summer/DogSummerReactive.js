import styled from 'styled-components';
import { CoolAgainSix } from '../../assets';
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

const DogSummerReactive = () => (
  <LandingpageSummer>
    <MetaDogSummer />
    <Background>
      <Row>
        <Column widthPercentage="20%">
          <Title text="Udbud af sommerkurser" showHorizontalRuler />
          <SummerMenu />
        </Column>
        <Column widthPercentage="75%">
          <TitleCenter text="Reaktiv til Ro sommermøde" />
          <FlexedRow>
            <Image
              src={CoolAgainSix}
              alt="Brun Cavalier hund ligger roligt på tæppet ved sin ejer og kigger op"
              width="300px"
              height="200px"
            />
            <TextContainer>
              <Text>
                <b>Med fokus på kontakt og ro blandt nye, fremmede hunde</b>
                <br />
                Dette sommermøde er kun for tidligere kursister på Reaktiv til Ro kurset, så alle
                deltagere på dagen har fælles problemstilling.
              </Text>
              <Text>
                Fokus er på ro og kontakt blandt helt nye hundesnuder, men i velkendte omgivelser.
                Så du får mulighed for at generalisere træningen ud blandt andre, fremmede hunde,
                under kontrollerede forhold.
              </Text>
              <Text>
                Mødet bygges op, som du kender det fra hovedkurset; Hver hund kommer ind på banen én
                ad gangen, og hver hund forlader banen én ad gangen. Så alle sættes op til succes
                med at kunne finde ro blandt de nye. Positiv oplevelse er hovedfokus.
              </Text>
            </TextContainer>
          </FlexedRow>
          <TextCenter>
            <br />
            <Text>
              <b>Deltagelse pr. hund: 245,- kr.</b>
              <br />
              uanset antal tobenede der er med
            </Text>
            <Text>Max 4 hunde pr. møde.</Text>
          </TextCenter>
          <br />

          <TitleCenter text="Tilmelding til Reaktiv til Ro sommermøde:" />
          <EasyMeList src="https://ezme.io/x/x1S/f7gl" />
        </Column>
      </Row>

      <br />
      <br />
    </Background>
  </LandingpageSummer>
);

export default DogSummerReactive;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
