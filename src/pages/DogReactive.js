/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

import {
  Page,
  Banner,
  Column,
  MetaDogCoolReactive,
  Title,
  TitleColor,
  Text,
  BreadCrumps,
  Row,
  TextList,
  // Image,
  StyledLink,
  DogReactiveTestimonials,
  EasyMeList,
  ContactPopUp,
} from '../components';
import Responsive from '../components/layout/Responsive';
import DogMenu from '../components/menu/DogMenu';
// import { CoolOne, CoolTwo, CoolThree, CoolFour, CoolFive, CoolSix } from '../assets';

const ReactiveProgram = [
  'Kontaktøvelser, som sikrer dig, at DU altid er interessant',
  'Hverdagsaktiviteter og øvelser med fokus på at reducere stress',
  'Hverdagsaktiviteter og øvelser med fokus på at øge selvtillid og gåpåmod',
  'Træning af rolige gåture omkring andre hunde og mennesker',
  'Rolige gåture: Øvelse i at gå væk fra andre hunde',
  'Rolige gåture: Øvelse i fortovspassager med andre hunde',
  'Rolige gåture: Øvelse i at gå mod andre hunde, uden reaktion',
  'God impulskontrol så mødet med andre bliver lettere med en hund, der har lært at holde ro',
];

const ReactiveBenefits = [
  '30 minutters privatlektion inkluderet, med fokus på din hund og dine behov',
  'Personlig sparring omkring din hund og jeres hverdag sammen til timerne',
  'Gode råd og tips til optimal aktivering af hunden',
  'Hele 6 lektioners træning med ugentligt holdmøde',
  'Max 3 andre holdkammerater, så der er god tid til dig',
  'Adgang til online bibilotek med skriftlige trin-for-trin guides, så det er let at øve hjemme',
  'Udleveret en klikker til valgfrit brug i træningen',
];

const DogReactive = () => (
  <Page>
    <MetaDogCoolReactive />
    <Banner text="Hundehold i Nim, nær Horsens">
      <BreadCrumps currentPage="Reaktiv til Ro" />
    </Banner>
    <Background>
      <Row marginTop="25px" marginBottom="45px">
        <Column widthPercentage="20%">
          <Title text="Udbud af hundehold" showHorizontalRuler />
          <DogMenu />
        </Column>
        <Column widthPercentage="75%">
          <Title text="Reaktiv til Ro kursus i Nim, nær Horsens" showHorizontalRuler />
          <Text>
            Oplever du din hund knurrer, gør eller farer ud overfor andre hunde, så er din hund nødvendigvis ikke aggressiv. 
            For selvom hunden lyder og ser aggressiv ud, er det meget sjældent at årsagen er aggression, men derimod dårlige oplevelser, mistillid til andre, ren usikkerhed eller angst, som skal arbejdes med.
          </Text>
          <Text>
            Ønsker du at kunne nyde gåturene med en hund der kan finde ro, selv i mødet med andre hunde
             - så er du kommet til rette sted!
          </Text>
          <Text>
            Reaktiv til Ro kurset henvender sig til alle hunde i alle aldre, som har tendens til at
            reagere negativt på mødet med andre hunde. Mit fokus med dette kursus er at give dig redskaberne til hvordan du sætter din hund op til succes, 
            så i kan få flere og flere dejlige gåture sammen. Dette gør vi gennem forskellige øvelser, der også vil styrke jeres fælles
            samarbejde.
          </Text>
          <Text>
            Al træning foregår med{' '}
            <StyledLink to="/minemetoder"> belønningsbaserede træningsmetoder</StyledLink>, hvor vi
            bruger klikker eller "dygtig" til at markere korrekt adfærd og belønner hunden med mad
            og leg. Målet er at gøre din hund tryg ved nærværet af andre, så den ikke føler behov for at reagere negativt. Trygheden kommer ved at give goder som mad og leg.
            Hvis din hund laver fejl hjælper vi den ved at gøre opgaven nemmere og mere
            letforståelig. Alle bliver sat op til succes.
          </Text>
          <Text>
            <b>Passer kurset til din hund?</b>
            <br />
            Kurset henvender sig til hunde der udviser nervøsitet eller ængstelse for andre hunde eller reagerer aggressivt i mødet med dem.
            Din hund skal være ok med andre hunde indenfor en afstand på 50 meter.
            Kan din hund ikke tåle blot synet af en anden hund - og reagerer uanset afstanden - så vil jeg anbefale dig 
            at <StyledLink to="/kontakt"> booke tid </StyledLink> til en <StyledLink to="/hundetraening"> konsultation</StyledLink>, hvor du kan få personlig
            vejledning og redskaber til at hjælpe din hund.
          </Text>
          <Text>
            Føler du din hund bliver ustyrlig <b>glad</b> ved mødet med andre, så er dette hold <b>ikke</b> det rette for jer! 
            Står du med denne problemstilling anbefaler jeg at du deltager på mit 
            <StyledLink to="/hundehold/coolhold"> Helt-Cool kursus</StyledLink>, hvor du kan få de rette redskaber til at hjælpe din overglade hund.
          </Text>
          <Text>
            <StyledLink to="/kontakt"> Kontakt mig </StyledLink> endelig hvis du er i tvivl.
          </Text>
          <Text>
            <b>Træningsprogram for holdet</b>
            <br />
            Jeg værdsætter tid til at lære dig og din hund at kende og høre om dine ønsker til jeres
            fælles hverdag. Derfor er første mødegang en privat session varende op til 30 minutter,
            hvor det kun er dig og din hund på banen. Privatlektionen giver dig mulighed for at få
            svar på dine spørgsmål og jeg kan komme med konkret feedback til dig og din hund inden i
            starter i holdsammenhæng (værdi 550,- kr.).
          </Text>
          <Text>I løbet af vores 7 mødegange sammen vil vi komme igennem følgende:</Text>
          <TextList texts={ReactiveProgram} />
          <Text>
            <b>Hvad kan du forvente at få med?</b>
            <br />
            Ved deltagelse på Reaktiv til Ro kurset får du:
          </Text>
          <TextList texts={ReactiveBenefits} />
          <Text>
            Der tages hensyn til at holdet er for de sensitive hunde og derfor praktiseres der god afstand før, under og efter
            timerne.
          </Text>
          <br />

          <Title text="Holdstart for Reaktiv til Ro kurset" showHorizontalRuler />
          <TitleColor text="Din investering: 1795 kr." />
          <Text>
            i at kunne nyde jeres daglige gåture, med en hund der er rolig og kontaktbar omkring andre.
          </Text>
          <Text italic>Bemærk betaling er bindende og beløb refunderes ikke.</Text>
            <br />
          <Title text="Kommende hold:" />
          <EasyMeList src="https://ezme.io/x/x1S/dflH" />
          <br />
          <Title color="#872f35" text="Næste holdstart er November 2025" />
          {/* <Title text="Ønsker du en plads? Så smid mig en mail og få fortrinsret til tilmelding:" /> */}
          <Text>
            Oplever du holdene er fyldt op, eller søger du holdstart på et andet tidspunkt skriver
            jeg dig hjertens gerne på venteliste til næste ledige plads. Blot smid mig en besked om
            dit holdønske her:
          </Text>
          {/* <Title color="#872f35" text="Jeg afholder i øjeblikket ferie og er tilbage på kontoret igen den 18. september. Du får hurtigst muligt svar herefter." /> */}
          <ContactPopUp text="Ja tak! Skriv mig på venteliste" />
          <br />
          <br />
          <Title text="Dette siger kursisterne efter deltagelse på Reaktiv til Ro" showHorizontalRuler />
          <br />
          <DogReactiveTestimonials></DogReactiveTestimonials>
          <br />
{/* 
          <Title text="Stemningsbilleder fra Reaktiv til Ro kurset" showHorizontalRuler />
          <Row>
            <Column>
              <Image src={CoolOne} />
            </Column>
            <Column>
              <Image src={CoolTwo} />
            </Column>
            <Column>
              <Image src={CoolThree} />
            </Column>
          </Row>
          <Row>
            <Column>
              <Image src={CoolFour} />
            </Column>
            <Column>
              <Image src={CoolFive} />
            </Column>
            <Column>
              <Image src={CoolSix} />
            </Column>
          </Row> */}
        </Column>
      </Row>
    </Background>
  </Page>
);

export default DogReactive;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
