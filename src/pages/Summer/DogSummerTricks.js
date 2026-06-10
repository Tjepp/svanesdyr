import styled from 'styled-components';
import { TricksTwo } from '../../assets';
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

const DogSummerTricks = () => (
  <LandingpageSummer>
    <MetaDogSummer />
    <Background>
      <Row>
        <Column widthPercentage="20%">
          <Title text="Udbud af sommerkurser" showHorizontalRuler />
          <SummerMenu />
        </Column>
        <Column widthPercentage="75%">
          <TitleCenter text="Tricks og Sjov" />
          <FlexedRow>
            <Image
              src={TricksTwo}
              alt="Hvid terrier ligger på skateboard under tricks og sjov træning"
              width="300px"
              height="200px"
            />
            <TextContainer>
              <Text>
                <b>Det perfekte kursus til barn og hund sammen</b>
                <br />
                Og ikke mindst til dig, som nyder at lære nyt med din hund. Tricks og Sjov lægger
                vægt på Empowerment principperne, hvor hunden selv skal tage <u>initiativ</u> til
                adfærd, være <u>kreativ</u> og have nok <u>gåpåmod</u> til at fortsætte.
              </Text>
              <Text>
                Vi gennemgår flere tricks og øvelser, som giver succes, samarbejdsglæde og ikke
                mindst et smil på læben til dig der holder snoren. Du vil blandt andet lære hvordan
                du lærer din hund Zig-zag mellem ben, kravle og snurre-rundt.
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

          <TitleCenter text="Tilmelding til Tricks og Sjov:" />
          <EasyMeList src="https://ezme.io/x/x1S/fmtu" />
        </Column>
      </Row>

      <br />
      <br />
    </Background>
  </LandingpageSummer>
);

export default DogSummerTricks;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
