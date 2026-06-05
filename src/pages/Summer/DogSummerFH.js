import styled from 'styled-components';
import { NailClipSix, SummerCover } from '../../assets';
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

const DogSummerFH = () => (
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
          <TitleCenter text="Intro til Frivillig Håndtering" />
          <FlexedRow>
            <Image
              src={NailClipSix}
              alt="Hundetræner klipper negle på hund der ligger afslappet på siden i en sofa"
              width="300px"
              height="200px"
            />
            <TextContainer>
              <Text>
                <b>Få samtykke til den daglige pleje</b>
                <br />
                Du får redskaberne til hvordan du træner frivillig adfærd i hunden, som skal være
                startsignalet til hvornår håndtering kan begynde. Din hund lærer altså at sige ”jeg
                er klar” og ”pause, tak” under håndtering, og du lærer at aflæse hvornår din hund er
                tryg og utryg. Vi gennemgår Chirag Patels The Bucket Game og hvordan du indlære
                start/slut signaler.
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

          <TitleCenter text="Tilmelding til Intro til Frivillig Håndtering:" />
          <EasyMeList src="https://ezme.io/x/x1S/o8eg" />
        </Column>
      </Row>

      <br />
      <br />
    </Background>
  </LandingpageOnline>
);

export default DogSummerFH;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
