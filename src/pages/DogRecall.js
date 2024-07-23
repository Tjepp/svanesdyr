/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
// import { Table, Tbody, Tr, Td } from 'react-super-responsive-table';

import {
  Page,
  Banner,
  Column,
  MetaDogRecall,
  Title,
  TitleColor,
  Text,
  BreadCrumps,
  Row,
  TextList,
  Image,
  StyledLink,
  ContactPopUp,
} from '../components';
import Responsive from '../components/layout/Responsive';
import DogMenu from '../components/menu/DogMenu';
import { RecallOne, RecallTwo, RecallThree, RecallFour, RecallFive, RecallSix } from '../assets';

const RecallProgram = [
  'Kontaktøvelser, som sikrer dig, at DU altid er interessant',
  'Råd til hverdagens motivation og forventninger hos din hund',
  'Stop-and-go, lær din hund at stoppe på signal, selvom den er på vej væk',
  'God impulskontrol så dagligdagens spændende sager sagtens kan ignoreres',
  'Belønningsteknikker der lærer dig at finde den helt rigtige "godbid" til din hund',
];

const RecallBenefits = [
  'Personlig sparring omkring din hund og jeres hverdag sammen',
  'Hele 7 ugers træning med ugentligt møde',
  'Max 3 andre holdkammerater, så der er god tid til dig',
  'Skriftlige trin-for-trin guides tilsendt på mail så du kan øve derhjemme',
  'Udleveret en klikker til valgfrit brug i træningen',
];

const ContinuedRecallProgram = [
  'IndkaldsFESTEN; Fra uinteressant til førsteprioritet for din hund!',
  'Forstyrrelseslegen; Det stærke indkald omkring fristelser',
  'Træning af indkald under leg med andre hunde',
  'Fra kravlegård til kørebane: Succesfulde indkald i nye omgivelser',
];

const DogRecall = () => (
  <Page>
    <MetaDogRecall />
    <Banner text="Hundehold i Nim, nær Horsens">
      <BreadCrumps currentPage="Indkaldskursus" />
    </Banner>
    <Background>
      <Row marginTop="25px" marginBottom="45px">
        <Column widthPercentage="20%">
          <Title text="Udbud af hundehold" showHorizontalRuler />
          <DogMenu />
        </Column>
        <Column widthPercentage="75%">
          <Title text="Indkaldskursus i Nim, nær Horsens" showHorizontalRuler />
          <Text>
            Ønsker du at give din hund mere frihed på gåturene og være sikker på den kommer første
            gang du kalder, selv ved forstyrrelser, så er du kommet til rette sted!
          </Text>
          <Text>
            Indkaldsholdet henvender sig til alle hunde i alle aldre, der har brug for et stærkt og
            sikkert indkald. Du vil lære at skabe stor motivation i din hund ved at bruge effektive
            belønningsteknikker, så din hund får en høj forventning til det fantastiske indkald.
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
            <br />I løbet af vores 7 uger sammen vil vi komme igennem følgende:
          </Text>
          <TextList texts={RecallProgram} />
          <Text>
            <b>Hvad kan du forvente at få med?</b>
            <br />
            Ved deltagelse på Indkaldskurset får du:
          </Text>
          <TextList texts={RecallBenefits} />
          <br />

          <Title text="Holdstart for Indkaldskurset" showHorizontalRuler />
          <TitleColor text="Din investering: 1095 kr." />
          <Text>i at få et indkald der virker, så i ubekymret kan nyde jeres ture ude.</Text>
          <br />
          <Text italic>Bemærk betaling er bindende og beløb refunderes ikke.</Text>

          <br />
          <Title text="Hold startes op på efterspørgsel." />
          <ContactPopUp text="Kontakt mig ved interesse" />
          <br />

          <Title text="Indkald Miljøhold" showHorizontalRuler />
          <Text>
            Ved efterspørgsel udbydes der fortsætterhold for kursister, som har deltaget på
            tidligere indkaldshold.
            <br />
            Det primære fokus på Miljøholdet er at generalisere det sikre indkald, ved at tage
            træningen ud i nye varierende situationer over 6 mødegange. Vi mødes hver 14. dag på
            dette hold og på en ny lokation til hver lektion.
          </Text>
          <Text>
            <b>Træningsprogram for Miljøholdet</b>
          </Text>
          <TextList texts={ContinuedRecallProgram} />
          <br />
          <br />

          <Title text="Billeder fra Indkaldskursus" showHorizontalRuler />
          <Row>
            <Column>
              <Image src={RecallOne} />
            </Column>
            <Column>
              <Image src={RecallTwo} />
            </Column>
            <Column>
              <Image src={RecallThree} />
            </Column>
          </Row>
          <Row>
            <Column>
              <Image src={RecallFour} />
            </Column>
            <Column>
              <Image src={RecallFive} />
            </Column>
            <Column>
              <Image src={RecallSix} />
            </Column>
          </Row>
        </Column>
      </Row>
    </Background>
  </Page>
);

export default DogRecall;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
