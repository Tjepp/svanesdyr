/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

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
  ContactPopUp,
  // EasyMeList,
} from '../components';
import Responsive from '../components/layout/Responsive';
import DogMenu from '../components/menu/DogMenu';
import {
  PuppyContinuedOne,
  PuppyContinuedTwo,
  PuppyContinuedThree,
  PuppyContinuedFour,
  PuppyContinuedFive,
  PuppyContinuedSix,
} from '../assets';

const ContinuedProgram = [
  'Det stærke indkald',
  'Følge med på gåtur: Lineføring',
  'Bagpartskontrol og på-plads indlæring',
  'Hilse pænt / ikke hoppe op af mennesker',
  'Positiv indlæring af et stop ord som "nej"',
  'Indlæring af at gå i kurven / falde til ro på signal',
  'Træning af rolige gåture omkring andre hunde og mennesker',
];

const PuppyBenefits = [
  'Gode muligheder for socialisering og leg under kontrollerede forhold',
  'Personlig sparring omkring din hvalp og jeres hverdag sammen',
  'Gode råd og tips til optimal aktivering af hvalpen',
  'Hele 7 ugers træning med ugentligt møde',
  'Max 4 andre holdkammerater, så der er god tid til dig',
  'Adgang til online bibilotek med skriftlige trin-for-trin guides, så det er let at øve hjemme',
  'Udleveret en klikker til valgfrit brug i træningen',
];

// const ContinuedTwoProgram = [
//   'Doggie-zen, ro omkring flere spændende sager',
//   'Øvelser i kropskontrol og kropsbevidsthed',
//   'Empowermentøvelse: Targettræning med poter',
//   'Hverdagsgåture med kontakt og ro',
//   'Træning af indkald med fristelser',
//   'Træning af at blive i position',
//   'Træning af ejer med klikkertiming og belønningsleveringer',
// ];

const DogContinued = () => (
  <Page>
    <MetaDogContinued />
    <Banner text="Hundehold i Horsens">
      <BreadCrumps currentPage="Fortsætterhold" />
    </Banner>
    <Background>
      <Row marginTop="25px" marginBottom="45px">
        <Column widthPercentage="20%">
          <Title text="Udbud af hundehold" showHorizontalRuler />
          <DogMenu />
        </Column>
        <Column widthPercentage="75%">
          <Title text="Fortsætterhold for hvalpe i Horsens" showHorizontalRuler />
          <Text>
            Ønsker du at fortsætte det gode samarbejde og succesoplevelserne med din hvalp, så er du
            kommet til rette sted!
          </Text>
          <Text>
            Hvalpe-fortsætterholdet tager udgangspunkt i at din hvalp kan basisøvelser som at give
            kontakt, sit og dæk.
            <br />
            Vi arbejder videre med basisøvelserne, træner lineføring og plads, samt lægger fokus på
            det stærke indkald og god selvkontrol omkring andre hunde og mennesker.
          </Text>
          <Text>
            Al træning foregår med{' '}
            <StyledLink to="/minemetoder"> belønningsbaserede træningsmetoder</StyledLink>, hvor vi
            bruger klikker eller "dygtig" til at markere korrekt adfærd og belønner hvalpen med mad
            og leg. Hvis din hvalp laver fejl hjælper vi den ved at gøre opgaven nemmere og mere
            letforståelig. Alle bliver sat op til succes.
          </Text>
          <Text>
            <b>Træningsprogram for holdet</b>
            <br />I løbet af vores 7 uger sammen vil vi komme igennem følgende:
          </Text>
          <TextList texts={ContinuedProgram} />
          <Text>
            <b>Hvad kan du forvente at få med?</b>
            <br />
            Ved deltagelse på Hvalpe-fortsætterholdet får du:
          </Text>
          <TextList texts={PuppyBenefits} />
          <Text>
            Der er afsat tid til <StyledLink to="/hundehold"> kontrolleret leg</StyledLink> til
            timerne.
          </Text>
          <br />

          <Title text="Holdstart for Hvalpe-Fortsætterholdet" showHorizontalRuler />
          <TitleColor text="Din investering: 1095 kr." />
          <Text>
            i at få en lydig og opmærksom unghund, der kan holde fokus, selv med teenagehjernen i
            spil.
          </Text>
          <Text italic>Bemærk betaling er bindende og beløb refunderes ikke.</Text>
          <br />
          <Title text="Kommende hold:" />
          {/* <EasyMeList src="https://ezme.io/x/x1S/k3z3" /> */}

          <link rel="stylesheet" href="https://secure.easyme.biz/connect/v2/loader.css" />
          <section className="ezme-loader">
            <div className="ezme-loader__title">
              <svg className="ezme-loader__svg" viewBox="0 0 100 100" width="20" height="20">
                <circle cx="50" cy="50" r="42" transform="rotate(-90,50,50)" />
              </svg>
              <div>Henter datoer...</div>
            </div>
            <div className="ezme-loader__subtitle">
              Problemer?
              <a
                href="https://ezme.io/x/x1S/k3z3"
                target="_blank"
                rel="noopener noreferrer"
                className="ezme-loader__link"
              >
                Åbn listen i nyt vindue
              </a>
            </div>
            <a href="https://easyme.dk/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://secure.easyme.biz/connect/v2/loader.svg"
                className="ezme-loader__brand"
                alt=""
              />
            </a>
          </section>

          <br />
          <Text>
            Oplever du holdene er fyldt op, eller søger du holdstart på et andet tidspunkt skriver
            jeg dig hjertens gerne på venteliste til næste ledige plads. Blot smid mig en besked om
            dit holdønske her:
          </Text>
          <ContactPopUp text="Ja tak! Skriv mig på venteliste" />
          <br />
          <br />

          {/* <Title text="Fortsætterhold Trin2+" showHorizontalRuler />
          <Text>
            Ved efterspørgsel udbydes der fortsætterhold for kursister, som har deltaget på
            tidligere hvalpe-fortsætterhold. Trin 2 bygger videre på tidligere indlærte øvelser og
            giver mere udfordring til både hund og ejer i shaping, kropskontrol og tricks.
          </Text>
          <Text>
            <b>Træningsprogram for Fortsætter-holdet</b>
          </Text>
          <TextList texts={ContinuedTwoProgram} />
          <Text italic>Ingen kommende opstart planlagt i øjeblikket</Text>

          <TitleColor text="Hold startes op på efterspørgsel." />
          <Text>
            <StyledLink to="/kontakt">Kontakt mig ved interesse.</StyledLink>
          </Text>
          <br /> */}

          <Title text="Billeder fra fortsætterhold" showHorizontalRuler />
          <Row>
            <Column>
              <Image src={PuppyContinuedOne} />
            </Column>
            <Column>
              <Image src={PuppyContinuedTwo} />
            </Column>
            <Column>
              <Image src={PuppyContinuedThree} />
            </Column>
          </Row>
          <Row>
            <Column>
              <Image src={PuppyContinuedFour} />
            </Column>
            <Column>
              <Image src={PuppyContinuedFive} />
            </Column>
            <Column>
              <Image src={PuppyContinuedSix} />
            </Column>
          </Row>
        </Column>
      </Row>
    </Background>
  </Page>
);

export default DogContinued;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
