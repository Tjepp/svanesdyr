import styled from 'styled-components';
import { PuppySix, SummerCover } from '../../assets';
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

const DogSummerActive = () => (
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
          <TitleCenter text="Inspiration til Hverdagsaktivering" />
          <FlexedRow>
            <Image
              src={PuppySix}
              alt="Hvid hvalp balancerer på blå træningspodier under hverdagsaktivering"
              width="300px"
              height="200px"
            />
            <TextContainer>
              <Text>
                <b>Få velstimulerende opgaver der giver en glad og træt hund</b>
                <br />
                Inspiration til hverdagens aktiviteter, der kan trætte din hund godt i hovedet og
                undgå den finder på unoder. Vi kigger på aktivering, som i kan være fælles om, der
                oveni styrker jeres samarbejde. Ikke mindst gennemgår vi aktiveringsopgaver til de
                dage hvor det skal gå hurtigt, hvor hunden kan underholde sig selv mens du får
                klaret andre gøremål.
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

          <TitleCenter text="Tilmelding til Inspiration til Hverdagsaktivering:" />
          <EasyMeList src="https://ezme.io/x/x1S/CUEH" />
        </Column>
      </Row>

      <br />
      <br />
    </Background>
  </LandingpageOnline>
);

export default DogSummerActive;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
