import styled from 'styled-components';
import { TricksOne } from '../../assets';
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

const DogSummerFitness = () => (
  <LandingpageSummer>
    <MetaDogSummer />
    <Background>
      <Row>
        <Column widthPercentage="20%">
          <Title text="Udbud af sommerkurser" showHorizontalRuler />
          <SummerMenu />
        </Column>
        <Column widthPercentage="75%">
          <TitleCenter text="Fitness for alle" />
          <FlexedRow>
            <Image
              src={TricksOne}
              alt="Hund balancerer med forpoter og bagpoter på balancepuder under træning"
              width="300px"
              height="200px"
            />
            <TextContainer>
              <Text>
                <b>Fokus på god kropskontrol og kropsbevidsthed</b>
                <br />
                Til dig der ønsker at styrke din hunds bevidsthed om sin egen krop! Vi vil gennemgå
                øvelser der fokuserer på kontrol af alle fire poter, forparts- og bagpartskontrol og
                styrke- / balanceopgaver.
              </Text>
              <Text>
                Holdet henvender sig især også til dig der ønsker nye måder at trætte hunden på
                mentalt, gennem små, sjove opgaver, som styrker jeres samarbejde og ikke mindst
                hundens selvtillid. Alle hunde i alle aldre kan deltage.
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

          <TitleCenter text="Tilmelding til Fitness for alle:" />
          <EasyMeList src="https://ezme.io/x/x1S/fm8M" />
        </Column>
      </Row>

      <br />
      <br />
    </Background>
  </LandingpageSummer>
);

export default DogSummerFitness;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
