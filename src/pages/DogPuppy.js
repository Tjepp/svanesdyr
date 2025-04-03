/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

import {
  Page,
  Banner,
  Column,
  MetaDogPuppy,
  Title,
  TitleColor,
  Text,
  BreadCrumps,
  Row,
  TextList,
  Image,
  StyledLink,
  DogPuppyTestimonials,
  ContactPopUp,
  EasyMeList,
} from '../components';
import Responsive from '../components/layout/Responsive';
import DogMenu from '../components/menu/DogMenu';
import {
  PuppyOne,
  PuppyTwo,
  PuppyThree,
  PuppyFour,
  PuppyFive,
  PuppySix,
  PuppySeven,
  PuppyEight,
  PuppyNine,
} from '../assets';

const PuppyProgram = [
  'Fornøjelige gåture, uden at trække i snoren',
  'Pauseknappen, så hvalpen kan falde til ro, når du er i ro',
  'Kontaktøvelser, som sikrer dig, at DU altid er interessant',
  'Det sikre indkald hvor hvalpen kommer hver gang der kaldes',
  'Positiv miljøtræning, så nye og skræmmende ting kan mødes med selvtillid - selv i helt nyt miljø',
  'Øvelse i byttelege, så hvalpen lærer at aflevere og spytte ud, fremfor at stikke af med sager',
  'Frivillig håndtering, hvor du gør det til en leg at få tjekket tænder, ører, klippet negle m.v.',
  'God impulskontrol så dagligdagens små glæder bliver lettere med en hvalp, der har lært at have ro',
];

const PuppyBenefits = [
  'Gode muligheder for socialisering og leg under kontrollerede forhold',
  'Personlig sparring omkring din hvalp og jeres hverdag sammen',
  'Gode råd og tips til optimal aktivering af hvalpen',
  'Hele 8 ugers træning med ugentligt møde',
  'Max 4 andre holdkammerater, så der er god tid til dig',
  'Adgang til online bibilotek med skriftlige trin-for-trin guides, så det er let at øve hjemme',
  'Udleveret en klikker til valgfrit brug i træningen',
];

const DogPuppy = () => {
  return (
    <Page>
      <MetaDogPuppy />
      <Banner text="Hundehold i Nim, nær Horsens">
        <BreadCrumps currentPage="Hvalpehold" />
      </Banner>
      <Background>
        <Row marginTop="25px" marginBottom="45px">
          <Column widthPercentage="20%">
            <Title text="Udbud af hundehold" showHorizontalRuler />
            <DogMenu />
          </Column>
          <Column widthPercentage="75%">
            <Title text="Hvalpehold i Nim, nær Horsens" showHorizontalRuler />
            <Text>
              Ønsker du at skabe et stærkt tillidsfuld bånd med din hvalp, gennem masser af
              succesoplevelser, så er du kommet til rette sted!
            </Text>
            <Text>
              Hvalpeholdet henvender sig til alle hvalpe i alderen fra 8 uger og op til 6 mdr.
              <br />
              Jeg lægger stort fokus på miljøtræning, håndtering og socialisering af din hvalp, så
              du får en følelsesmæssig robust hvalp, der kan tackle hverdagens udfordringer med ro
              og overskud.
            </Text>
            <Text>
              Al træning foregår med{' '}
              <StyledLink to="/minemetoder"> belønningsbaserede træningsmetoder</StyledLink>, hvor
              vi bruger klikker eller "dygtig" til at markere korrekt adfærd og belønner hvalpen med
              mad og leg. Hvis din hvalp laver fejl hjælper vi den ved at gøre opgaven nemmere og
              mere letforståelig. Alle bliver sat op til succes.
            </Text>
            <Text>
              <b>Træningsprogram for holdet</b>
              <br />I løbet af vores 8 uger sammen vil vi komme igennem følgende:
            </Text>
            <TextList texts={PuppyProgram} />
            <Text>
              Programmet inkluderer en lektion hvor vi mødes et helt andet sted i Horsens for indlæring af kontakt
              og ro i nyt miljø.
            </Text>
            <Text>
              Tilmelding til hvalpeholdet inkluderer én fribillet til <StyledLink to="/hundehold/legestue"> Hundelegestue</StyledLink>, med ekstra mulighed for kontrolleret socialisering (værdi 100,- kr.). 
              Tilmelding til en af de månedlige legestuer sker efter aftale med Sabrina.
            </Text>
            <Text>
              Første lektion varer 60 minutter. Derefter varer hver lektion 45 minutter. Jeg tager udgangspunkt i din hvalp og dens behov,
              så forvent at du til tider kan opleve at blive afsluttet tidligere end de andre
              hvalpe.
            </Text>
            <Text>
              <b>Hvad kan du forvente at få med?</b>
              <br />
              Ved deltagelse på Hvalpeholdet får du:
            </Text>
            <TextList texts={PuppyBenefits} />
            <Text>
              Der er afsat tid til <StyledLink to="/hundehold"> kontrolleret leg</StyledLink> til
              timerne.
            </Text>
            <br />
            <Title text="Holdstart for Hvalpeholdet" showHorizontalRuler />
            <TitleColor text="Din investering: 1495 kr." />
            <Text>
              i at få en rolig, imødekommende og selvsikker familiehund, der elsker at træne sammen
              med dig!
            </Text>
            <Text italic>Bemærk betaling er bindende og beløb refunderes ikke.</Text>
            <br />
            <Title text="Kommende hold:" />
            <EasyMeList src="https://ezme.io/x/x1S/kCl5" />
            <br />
            <Title color="#872f35" text="Næste holdstart er sensommeren 2025" />
            {/* <Title text="Ønsker du en plads? Så smid mig en mail og få fortrinsret til tilmelding:" /> */}
            <Text>
              Oplever du holdene er fyldt op, eller søger du holdstart på et andet tidspunkt skriver
              jeg dig hjertens gerne på venteliste til næste ledige plads. Blot smid mig en besked
              om dit holdønske her:
            </Text>
            {/* <Title color="#872f35" text="Jeg afholder i øjeblikket ferie og er tilbage på kontoret igen den 18. september. Du får hurtigst muligt svar herefter." /> */}
            <ContactPopUp text="Ja tak! Skriv mig på venteliste" />
            <br />
            <br />
            <Title
              text="Dette siger kursisterne efter deltagelse på Hvalpehold"
              showHorizontalRuler
            />
            <br />
            <DogPuppyTestimonials></DogPuppyTestimonials>
            <br />
            <Title text="Stemningsbilleder fra hvalpeholdene" showHorizontalRuler />
            <Row>
              <Column>
                <Image src={PuppyOne} />
              </Column>
              <Column>
                <Image src={PuppyTwo} />
              </Column>
              <Column>
                <Image src={PuppyThree} />
              </Column>
            </Row>
            <Row>
              <Column>
                <Image src={PuppyFour} />
              </Column>
              <Column>
                <Image src={PuppyFive} />
              </Column>
              <Column>
                <Image src={PuppySix} />
              </Column>
            </Row>
            <Row>
              <Column>
                <Image src={PuppySeven} />
              </Column>
              <Column>
                <Image src={PuppyEight} />
              </Column>
              <Column>
                <Image src={PuppyNine} />
              </Column>
            </Row>
          </Column>
        </Row>
      </Background>
    </Page>
  );
};

export default DogPuppy;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
