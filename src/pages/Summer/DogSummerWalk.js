import styled from 'styled-components';
import { CoolThree } from '../../assets';
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

const DogSummerWalk = () => (
  <LandingpageSummer>
    <MetaDogSummer />
    <Background>
      <Row>
        <Column widthPercentage="20%">
          <Title text="Udbud af sommerkurser" showHorizontalRuler />
          <SummerMenu />
        </Column>
        <Column widthPercentage="75%">
          <TitleCenter text="Rolige Gåture" />
          <FlexedRow>
            <Image
              src={CoolThree}
              alt="To hundeejere går med deres hunde på træningsplads under rolige gåture kursus"
              width="300px"
              height="200px"
            />
            <TextContainer>
              <Text>
                <b>Med fokus på gå-pænt-teknikker og selvkontrol</b>
                <br />
                Til dig der ønsker at få mere afslappede gåture, med en hund der kan finde ro og gå
                pænt i snor uden at hive armen af dig. Holdet henvender sig til alle hunde i alle
                aldre, som har tendens til at stresse op på en gåtur og får "travlt". Du får
                redskaberne til at skabe en kontaktsøgende og rolig hund, gennem forskellige
                øvelser, der også vil styrke jeres fælles samarbejde.
              </Text>
              <Text>
                Holdet henvender sig ikke til hunde der reagerer negativt på andre hunde og
                mennesker.
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
            <br />
            <i>Kurset afholdes ved minimum 3 tilmeldte</i>
          </TextCenter>
          <br />

          <TitleCenter text="Tilmelding til Rolige Gåture:" />
          <EasyMeList src="https://ezme.io/x/x1S/CU9F" />
        </Column>
      </Row>

      <br />
      <br />
    </Background>
  </LandingpageSummer>
);

export default DogSummerWalk;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
