/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import { Table, Tbody, Tr, Td } from 'react-super-responsive-table';

import {
  Page,
  Banner,
  Column,
  MetaDogTricks,
  Title,
  TitleColor,
  Text,
  BreadCrumps,
  Row,
  DogCourseTableHead,
  TextList,
  Image,
  StyledLink,
} from '../components';
import Responsive from '../components/layout/Responsive';
import DogMenu from '../components/menu/DogMenu';
import { TricksOne, TricksTwo, TricksThree, TricksFour, TricksFive, TricksSix } from '../assets';

const FitProgram = [
  'Udstrækning og styrkeøvelser',
  'Balancetræning med bolde mv.',
  'Kropsbevidsthed om at bruge alle fire poter',
  'Kropskontrol med bagpart og forpart',
  'Empowerment øvelser med initiativ, vedholdenhed og gåpåmod',
];

const FitBenefits = [
  'Personlig sparring omkring din hund og hjælp til øvelser',
  'Hele 7 ugers træning med ugentligt møde',
  'Max 3 andre holdkammerater, så der er god tid til dig',
  'Udleveret en klikker til valgfrit brug i træningen',
];

const DogEmpower = () => (
  <Page>
    <MetaDogTricks />
    <Banner text="Hundehold i Horsens">
      <BreadCrumps currentPage="Fit Empowerment" />
    </Banner>
    <Background>
      <Row marginTop="25px" marginBottom="45px">
        <Column widthPercentage="20%">
          <Title text="Udbud af hundehold" showHorizontalRuler />
          <DogMenu />
        </Column>
        <Column widthPercentage="75%">
          <Title text="Fit Empowerment i Horsens" showHorizontalRuler />
          <Text>
            Ønsker du en glad samarbejdspartner, som er initiativrig og synes træning med dig er
            FEDT, så er du kommet til rette sted!
          </Text>
          <Text>
            Dog Fitness møder Empowerment på dette hold, da vi både har Fitness øvelser med fokus på
            balance- og styrketræning, samt Empowerment øvelser, der lægger vægt på at fremme
            initiativ og kreativitet fra din hunds side. Holdet er specielt designet til de
            sensitive hunde, som har brug for mere selvtillid og gåpåmod. Alle hunderacer i alle
            aldre kan deltage.
          </Text>
          <Text>
            Uanset hvilken øvelse vi gennemgår vil vi lægge vægt på <b>Empowerment</b> principperne:
            Hunden skal selv tage <u>initiativ</u> til adfærd, være <u>kreativ</u> og have nok{' '}
            <u>gåpåmod</u> og <u>vedholdenhed</u> til at fortsætte. Du vil blive skarp på
            klikkertræning, timing og ikke mindst hvordan du altid sætter din hund op til succes.
          </Text>
          <Text>
            Al træning foregår med{' '}
            <StyledLink to="/minemetoder"> belønningsbaserede træningsmetoder</StyledLink>, hvor vi
            bruger klikker eller "dygtig" til at markere korrekt adfærd og belønner hunden med mad
            og leg. Hvis din hund laver fejl hjælper vi den ved at gøre opgaven nemmere og mere
            letforståelig. Alle bliver sat op til succes.
          </Text>
          <Text>
            <b>Træningsprogram for holdet</b>
            <br />I løbet af vores 7 uger sammen vil vi komme omkring øvelser, som har fokus på
            følgende:
          </Text>
          <TextList texts={FitProgram} />
          <Text>
            <b>Hvad kan du forvente at få med?</b>
            <br />
            Ved deltagelse på Fit Empowerment får du:
          </Text>
          <TextList texts={FitBenefits} />
          <br />

          <Title text="Skema for kommende holdstart" showHorizontalRuler />
          <TitleColor text="Din investering: 1095 kr." />
          <Text>i at få en selvsikker og kreativ hund, som synes al træning med dig er FEDT.</Text>
          <Text italic>Bemærk betaling er bindende og beløb refunderes ikke.</Text>
          <br />
          {/* <Title text="Alle igangværende hold er desværre fyldt op." /> */}
          {/* 
          <TitleColor text="Hold startes op på efterspørgsel." />
          <Text>
            <StyledLink to="/kontakt">Kontakt mig ved interesse.</StyledLink>
          </Text> */}

          <Title text="Marts start:" />
          <Table>
            <DogCourseTableHead />
            <Tbody>
              <Tr>
                <Td>Fit Empower A</Td>
                <Td>Søndag</Td>
                <Td>8700</Td>
                <Td>
                  <StyledLink to="/kontakt">Kontakt mig</StyledLink>
                </Td>
                <Td>11.30 - 12.15</Td>
                <Td>13. marts</Td>
                <Td>8. maj</Td>
                <Td>10. april</Td>
                <Td>
                  <font color="#D60E0E">1 plads</font>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Title text="Fit Fortsætterhold:" />
          <Text>Mødegang hver 14. dag:</Text>
          <Table>
            <DogCourseTableHead />
            <Tbody>
              <Tr>
                <Td>Fit 2A</Td>
                <Td>Mandag</Td>
                <Td>8700</Td>
                <Td>
                  <StyledLink to="/kontakt">Kontakt mig</StyledLink>
                </Td>
                <Td>19.30 - 20.15</Td>
                <Td>24. marts</Td>
                <Td>4. juli</Td>
                <Td>11. april + 6. juni</Td>
                <Td>
                  <font color="#D60E0E">Venteliste</font>
                </Td>
              </Tr>
              <Tr>
                <Td>Fit 2B</Td>
                <Td>Tirsdag</Td>
                <Td>8700</Td>
                <Td>
                  <StyledLink to="/kontakt">Kontakt mig</StyledLink>
                </Td>
                <Td>19.30 - 20.15</Td>
                <Td>5. april</Td>
                <Td>28. juni</Td>
                <Td>--</Td>
                <Td>
                  <font color="#D60E0E">Venteliste</font>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <br />
          <TitleColor text="Jeg oplever overvældende stor efterspørgsel på mine holdforløb." />
          <Text>
            Derfor kan jeg ikke love plads på hold indenfor kort tid. Jeg kan kun anbefale at være
            ude i god tid.
            <br />
            Typisk fyldes mine hold et par måneder på forhånd. Næste holdstart er i{' '}
            <b>august 2022</b>.
            <br /> Ønsker du at skrives op til en plads på et fremtidigt holdforløb er du velkommen
            til at
            <StyledLink to="/kontakt"> kontakte mig</StyledLink>.
          </Text>
          <br />

          <Title text="Billeder fra Fit Empowerment" showHorizontalRuler />
          <Row>
            <Column>
              <Image src={TricksOne} />
            </Column>
            <Column>
              <Image src={TricksTwo} />
            </Column>
            <Column>
              <Image src={TricksThree} />
            </Column>
          </Row>
          <Row>
            <Column>
              <Image src={TricksFour} />
            </Column>
            <Column>
              <Image src={TricksFive} />
            </Column>
            <Column>
              <Image src={TricksSix} />
            </Column>
          </Row>
        </Column>
      </Row>
    </Background>
  </Page>
);

export default DogEmpower;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
