/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

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
  TextList,
  Image,
  StyledLink,
  ContactPopUp,
  EasyMeList,
} from '../components';
import Responsive from '../components/layout/Responsive';
import DogMenu from '../components/menu/DogMenu';
import { TricksOne, TricksTwo, TricksThree, TricksFour, TricksFive, TricksSix } from '../assets';

const FitProgram = [
  'Udstrækning og styrkeøvelser',
  'Balancetræning med bolde mv.',
  'Kropsbevidsthed om at bruge alle fire poter',
  'Kropskontrol med bagpart og forpart',
  'Empowerment øvelser i lydtræning',
  'Empowerment øvelser med initiativ, vedholdenhed og gåpåmod',
];

const FitBenefits = [
  'Personlig sparring omkring din hund og hjælp til øvelser',
  'Hele 7 ugers træning med ugentligt møde',
  'Max 4 andre holdkammerater, så der er god tid til dig',
  'Adgang til online bibilotek med skriftlige guides, så det er let at øve hjemme',
  'Udleveret en klikker til valgfrit brug i træningen',
];

const DogEmpower = () => (
  <Page>
    <MetaDogTricks />
    <Banner text="Hundehold i Nim, nær Horsens">
      <BreadCrumps currentPage="Fit Empowerment" />
    </Banner>
    <Background>
      <Row marginTop="25px" marginBottom="45px">
        <Column widthPercentage="20%">
          <Title text="Udbud af hundehold" showHorizontalRuler />
          <DogMenu />
        </Column>
        <Column widthPercentage="75%">
          <Title text="Fit Empowerment i Nim, nær Horsens" showHorizontalRuler />
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

          <Title text="Holdstart for Fit Empowerment" showHorizontalRuler />
          <TitleColor text="Din investering: 1195 kr." />
          <Text>i at få en selvsikker og kreativ hund, som synes al træning med dig er FEDT.</Text>
          <Text italic>Bemærk betaling er bindende og beløb refunderes ikke.</Text>
          <br />
          <Title text="Kommende hold:" />
          <EasyMeList src="https://ezme.io/x/x1S/WXZW" />
          <br />
          <Title color="#872f35" text="Næste holdstart er Februar 2025" />
          <Title text="Ønsker du en plads? Så smid mig en mail og jeg noterer dig straks på ventelisten:" />
          {/* <Text>
            Oplever du holdene er fyldt op, eller søger du holdstart på et andet tidspunkt skriver
            jeg dig hjertens gerne på venteliste til næste ledige plads. Blot smid mig en besked om
            dit holdønske her:
          </Text> */}
          {/* <Title color="#872f35" text="Jeg afholder i øjeblikket ferie og er tilbage på kontoret igen den 18. september. Du får hurtigst muligt svar herefter." /> */}
          <ContactPopUp text="Ja tak! Skriv mig på venteliste" />
          {/* <Title text="Hold startes op på efterspørgsel." />
          <ContactPopUp text="Kontakt mig ved interesse" /> */}
          <br />
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
