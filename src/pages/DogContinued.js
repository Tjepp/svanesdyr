/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import { Table, Tbody, Tr, Td } from 'react-super-responsive-table';
import { withRouter } from 'react-router-dom';
import {
  Page,
  Banner,
  Column,
  Meta,
  Title,
  Text,
  BreadCrumps,
  Row,
  DogCourseTableHead,
  TextList,
  Image,
  StyledLink
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

const DogContinued = () => (
  <Page>
    <Meta />
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
            Al træning foregår med <b><font color="#33CCCC">belønningsbaserede metoder</font></b>, hvor vi bruger klikker eller "dygtig" til at markere korrekt adfærd og belønner hvalpen med mad og leg.
            Hvis din hvalp laver fejl hjælper vi den ved at gøre opgaven nemmere og mere letforståelig. Alle bliver sat op til succes.
          </Text>
          <Text>
            <b>Træningsprogram for holdet</b><br />
            I løbet af vores 7 uger sammen vil vi komme igennem følgende:
          </Text>
          <TextList texts={ContinuedProgram} />
          <Text>
          <b>Leg og socialisering</b><br />
            Der vil fortsat være mulighed for kontrolleret leg mellem hundene, så socialisering af din hvalp kan fortsætte.
          </Text>
          <br />

          <Title text="Skema for kommende holdstart" showHorizontalRuler />
          <Title color="#33CCCC" text="Pris for deltagelse: 900 kr."/>
          <Table>
            <DogCourseTableHead />
            <Tbody>
              <Tr>
                <Td>Fortsætter1</Td>
                <Td>Søndag</Td>
                <Td>Hal</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>09.00 - 09.45</Td>
                <Td>1. marts</Td>
                <Td>19. april</Td>
                <Td>12. april (påske)</Td>
                <Td><font color="#D60E0E">1 plads</font></Td>
              </Tr>
              <Tr>
                <Td>Fortsætter2</Td>
                <Td>Tirsdag</Td>
                <Td>Hal</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>18.30 - 19.15</Td>
                <Td>3. marts</Td>
                <Td>21. april</Td>
                <Td>14. april (påske)</Td>
                <Td><font color="#D60E0E">*Venteliste*</font></Td>
              </Tr>
            </Tbody>
          </Table>
          <br />

          <Title text="Fortsætterhold Trin2+" showHorizontalRuler />
          <Text>
            Ved efterspørgsel udbydes der fortsætterhold for kursister, som har deltaget på tidligere hvalpehold og hvalpe-fortsætterhold.<br />
            Trin 2 +mere bygger videre på tidligere indlærte øvelser og giver mere udfordring til både hund og ejer i shaping, kropskontrol og tricks.
            Disse hold har intet fastlagt program og er derfor åbent for forslag til ønskede øvelser. Holdopstart annonceres her på siden.
          </Text>
          <Table>
            <DogCourseTableHead />
            <Tbody>
              <Tr>
                <Td>Fortsætter Trin2</Td>
                <Td>Tirsdag</Td>
                <Td>Hal</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>19.30 - 20.15</Td>
                <Td>3. marts</Td>
                <Td>21. april</Td>
                <Td>14. april (påske)</Td>
                <Td><font color="#D60E0E">*Venteliste*</font></Td>
              </Tr>
            </Tbody>
          </Table>
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
