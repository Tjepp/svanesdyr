import styled from 'styled-components';
import { RecallOne, SummerCover } from '../../assets';
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

const DogSummerRecall = () => (
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
          <TitleCenter text="Indkald begynder og øvet" />
          <FlexedRow>
            <Image
              src={RecallOne}
              alt="Hundetræner holder hund i selen og peger på hunden mens hun snakker til ejer"
              width="300px"
              height="200px"
            />
            <TextContainer>
              <Text>
                <b>Indkald Basis</b>
                <br />
                Basisholdet henvender sig til alle hunde i alle aldre, der har brug for et sikkert
                indkald. Du vil lære at skabe stor motivation i din hund ved at bruge effektive
                belønningsteknikker, så din hund får en høj forventning til dit fantastiske indkald.
                Vi vil gennemgå lette og sjove lege, som får din hund til at synes at indkald er en
                FEST.
              </Text>
              <Text>
                <b>Indkald Øvet</b>
                <br />
                Føler du din hund kommer 9/10 gange? Men nogle gange ignorerer dig når du kalder? På
                øvet gennemgår vi forskellige forstyrrelseslege, som lærer din hund, at selvom der
                er spændende ting at give sig til, så er det stadig FEDT at komme når du kalder!
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

          <TitleCenter text="Tilmelding til Indkaldskursus:" />
          <EasyMeList src="https://ezme.io/x/x1S/CUEH" />
        </Column>
      </Row>

      <br />
      <br />
    </Background>
  </LandingpageOnline>
);

export default DogSummerRecall;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
