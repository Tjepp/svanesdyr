/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import { Table, Tbody, Tr, Td } from 'react-super-responsive-table';
import { withRouter } from 'react-router-dom';
import {
  Page,
  Banner,
  Column,
  MetaDogContinued,
  Title,
  TitleColor,
  Text,
  BreadCrumps,
  Row,
  TextList,
  Image,
  StyledLink,
  DogCourseSimple
  // DogCourseYearShift
} from '../components';
import Responsive from '../components/layout/Responsive';
import DogMenu from '../components/menu/DogMenu';
import { PuppyContinuedOne, PuppyContinuedTwo, PuppyContinuedThree, PuppyContinuedFour, PuppyContinuedFive, PuppyContinuedSix } from '../assets';

const ContinuedProgram = [
  'Det stærke indkald',
  'Følge med på gåtur: Lineføring',
  'Bagpartskontrol og på-plads indlæring',
  'Hilse pænt / ikke hoppe op af mennesker',
  'Positiv indlæring af et stop ord som "nej"',
  'Indlæring af at gå i kurven / falde til ro på signal',
  'Nose Work basis til sjov og mental aktivering derhjemme',
  'Træning af rolige gåture omkring andre hunde og mennesker'
];

const PuppyBenefits = [
  'Gode muligheder for socialisering og leg under kontrollerede forhold',
  'Personlig sparring omkring din hvalp og jeres hverdag sammen',
  'Gode råd og tips til optimal aktivering af hvalpen',
  'Hele 7 ugers træning med ugentligt møde',
  'Max 3 andre holdkammerater, så der er god tid til dig',
  'Skriftlige trin-for-trin guides tilsendt på mail så du kan øve derhjemme',  
  'Udleveret en klikker til valgfrit brug i træningen'
];

const DogContinued = () => (
  <Page>
    <MetaDogContinued />
    <Banner text="Hundehold i Horsens">
      <BreadCrumps currentPage="Fortsætterhold" />
    </Banner>
    <Background>
    <Row marginTop={"25px"} marginBottom={"45px"}>
        <Column widthPercentage="20%">
          <Title text="Udbud af hundehold" showHorizontalRuler />
          <DogMenu/>
        </Column>
        <Column widthPercentage="75%">
          <Title text="Fortsætterhold for hvalpe i Horsens" showHorizontalRuler />
          <Text>
            Ønsker du at fortsætte det gode samarbejde og succesoplevelserne med din hvalp, så er du kommet til rette sted!
          </Text>
          <Text>
            Hvalpe-fortsætterholdet tager udgangspunkt i at din hvalp kan basisøvelser som at give kontakt, sit og dæk.<br />
            Vi arbejder videre med basisøvelserne, træner lineføring og plads, samt lægger fokus på det stærke indkald og god selvkontrol omkring andre hunde og mennesker.
          </Text>
          <Text>
            Al træning foregår med <StyledLink to="/minemetoder"> belønningsbaserede træningsmetoder</StyledLink>, hvor vi bruger klikker eller "dygtig" til at markere korrekt adfærd og belønner hvalpen med mad og leg.
            Hvis din hvalp laver fejl hjælper vi den ved at gøre opgaven nemmere og mere letforståelig. Alle bliver sat op til succes.
          </Text>
          <Text>
            <b>Træningsprogram for holdet</b><br />
            I løbet af vores 7 uger sammen vil vi komme igennem følgende:
          </Text>
          <TextList texts={ContinuedProgram} />
          <Text>
            <b>Hvad kan du forvente at få med?</b><br />
            Ved deltagelse på Hvalpe-fortsætterholdet får du:
          </Text>
          <TextList texts={PuppyBenefits} />
          <Text>
            Der er afsat tid til <StyledLink to="/hundehold"> kontrolleret leg</StyledLink> til timerne.
          </Text>
          <br />

          <Title text="Skema for kommende holdstart" showHorizontalRuler />
          <TitleColor text="Din investering: 995 kr."/>
          <Text>i at få en lydig og opmærksom unghund, der kan holde fokus, selv med teenagehjernen i spil.</Text>
          <br /><Text italic>
            Bemærk betaling er bindende og beløb refunderes ikke.
          </Text>

          <Title text="Januar start:" />
          <Table>
            <DogCourseSimple />
            <Tbody>
              <Tr>
                <Td>Fortsætter A</Td>
                <Td>Søndag</Td>
                <Td>Ude</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>09.00 - 09.45</Td>
                <Td>10. jan</Td>
                <Td>21. feb</Td>
                <Td><font color="#D60E0E">*Venteliste*</font></Td>
              </Tr>
              <Tr>
                <Td>Fortsætter B</Td>
                <Td>Mandag</Td>
                <Td>8700</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>17.30 - 18.15</Td>
                <Td>11. jan</Td>
                <Td>22. feb</Td>
                <Td><font color="#D60E0E">*Venteliste*</font></Td>
              </Tr>
              <Tr>
                <Td>Fortsætter C</Td>
                <Td>Tirsdag</Td>
                <Td>8700</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>18.30 - 19.15</Td>
                <Td>12. jan</Td>
                <Td>23. feb</Td>
                <Td><font color="#D60E0E">*Venteliste*</font></Td>
              </Tr>
            </Tbody>
          </Table>
          <Title text="Februar start:" />
          <Table>
            <DogCourseSimple />
            <Tbody>
              <Tr>
                <Td>Fortsætter D</Td>
                <Td>Mandag</Td>
                <Td>8700</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>19.30 - 20.15</Td>
                <Td>8. feb</Td>
                <Td>22. marts</Td>
                <Td><font color="#D60E0E">4 pladser</font></Td>
              </Tr>
            </Tbody>
          </Table>
          
          {/* <br /><TitleColor text="2021 hold er under planlægning."/> */}
          <br />

          <Title text="Fortsætterhold Trin2+" showHorizontalRuler />
          <Text>
            Ved efterspørgsel udbydes der fortsætterhold for kursister, som har deltaget på tidligere hvalpehold og hvalpe-fortsætterhold.<br />
            Trin 2 +mere bygger videre på tidligere indlærte øvelser og giver mere udfordring til både hund og ejer i shaping, kropskontrol og tricks.
            Disse hold har intet fastlagt program og er derfor åbent for forslag til ønskede øvelser. Holdopstart annonceres her på siden.
          </Text>
          <br />
          <Text italic>Ingen kommende opstart planlagt i øjeblikket</Text>

          {/* <Table>
            <DogCourseSimple />
            <Tbody>
              <Tr>
                <Td>Fortsat 2A</Td>
                <Td>Søndag</Td>
                <Td>Ude</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>09.00 - 09.45</Td>
                <Td>10. jan</Td>
                <Td>21. feb</Td>
                <Td><font color="#D60E0E">1 plads</font></Td>
              </Tr>
            </Tbody>
          </Table> */}
          <br />
      
        <Title text="Billeder fra fortsætterhold" showHorizontalRuler />
        <Row>
        <Column>
          <Image src={PuppyContinuedOne}/>
        </Column>
        <Column>
          <Image src={PuppyContinuedTwo}/>
        </Column>
        <Column>
          <Image src={PuppyContinuedThree}/>
        </Column>
        </Row>
        <Row>
        <Column>
          <Image src={PuppyContinuedFour}/>
        </Column>
        <Column>
          <Image src={PuppyContinuedFive}/>
        </Column>
        <Column>
          <Image src={PuppyContinuedSix}/>
        </Column>
        </Row>


        </Column>
      </Row>
    </Background>
  </Page>
);

export default withRouter(DogContinued);

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
