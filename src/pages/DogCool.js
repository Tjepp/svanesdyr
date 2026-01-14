/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

import {
  Page,
  Banner,
  Column,
  MetaDogCool,
  Title,
  TitleColor,
  Text,
  BreadCrumps,
  Row,
  TextList,
  Image,
  StyledLink,
  DogCoolTestimonials,
  EasyMeList,
  ContactPopUp,
} from '../components';
import Responsive from '../components/layout/Responsive';
import DogMenu from '../components/menu/DogMenu';
import { CoolOne, CoolTwo, CoolThree, CoolFour, CoolFive, CoolSix } from '../assets';

const CoolProgram = [
  'Fornøjelige gåture, uden at trække i snoren',
  'Hilse pænt / ikke hoppe op af mennesker',
  'Positiv indlæring af et stop ord som "nej"',
  'Indlæring af at gå i kurven / falde til ro på signal',
  'Pauseknappen, så hunden kan falde til ro, når du er i ro',
  'Træning af rolige gåture omkring andre hunde og mennesker',
  'God impulskontrol så dagligdagens små glæder bliver lettere med en hund, der har lært at have ro',
];

const CoolBenefits = [
  '30 minutters privatlektion inkluderet, med fokus på din hund og dine behov',
  'Personlig sparring omkring din hund og jeres hverdag sammen til timerne',
  'Gode råd og tips til optimal aktivering af hunden',
  'Hele 6 lektioners træning med ugentligt holdmøde',
  'Max 3 andre holdkammerater, så der er god tid til dig',
  'Adgang til online bibilotek med skriftlige trin-for-trin guides, så det er let at øve hjemme',
  'Udleveret en klikker til valgfrit brug i træningen',
];

const DogCool = () => (
  <Page>
    <MetaDogCool />
    <Banner text="Hundehold i Nim, nær Horsens">
      <BreadCrumps currentPage="Helt-Cool" />
    </Banner>
    <Background>
      <Row marginTop="25px" marginBottom="45px">
        <Column widthPercentage="20%">
          <Title text="Udbud af hundehold" showHorizontalRuler />
          <DogMenu />
        </Column>
        <Column widthPercentage="75%">
          <Title text="Helt-Cool kursus i Nim, nær Horsens" showHorizontalRuler />
          <Text>
            Ønsker du at få en mere afslappet hverdag, med en hund der selv kan finde ro, som kan gå
            pænt i snor uden at hive armen af dig og hilse pænt, uden at hoppe op - så er du kommet
            til rette sted!
          </Text>
          <Text>
            Helt-Cool kurset henvender sig til alle hunde i alle aldre, som har tendens til at
            stresse. Mit fokus med dette kursus er at give dig redskaberne til at skabe en
            afbalanceret og rolig hund, gennem forskellige øvelser, der også vil styrke jeres fælles
            samarbejde.
          </Text>
          <Text>
            Al træning foregår med{' '}
            <StyledLink to="/minemetoder"> belønningsbaserede træningsmetoder</StyledLink>, hvor vi
            bruger klikker eller "dygtig" til at markere korrekt adfærd og belønner hunden med mad
            og leg. Hvis din hund laver fejl hjælper vi den ved at gøre opgaven nemmere og mere
            letforståelig. Alle bliver sat op til succes.
          </Text>
          <Text>
            <b>Passer kurset til din hund?</b>
            <br />
            Føler du din hund er lidt af et "damp"-barn eller bliver ustyrligt glad ved mødet med
            andre, så er dette hold det rette for jer! Kurset henvender sig <b>ikke</b> til hunde
            der er bange for andre hunde eller reagerer aggressivt ved synet af andre. Står du med
            denne problemstilling anbefaler jeg at du kigger på mit 
            <StyledLink to="/hundehold/reaktivtilro"> Reaktiv til Ro </StyledLink> kursus i stedet for.
            {/* Eller tjek om
            <StyledLink to="/hundehold/venligvovse"> Venlig-Vovse </StyledLink> holdet er noget for
            jer. */}
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
          <Text>I løbet af vores 7 mødegange sammen vil vi komme igennem følgende:
          <TextList texts={CoolProgram} />
          </Text>
          <Text>
            <b>Hvad kan du forvente at få med?</b>
            <br />
            Ved deltagelse på Helt-Cool kurset får du:
          <TextList texts={CoolBenefits} />
          </Text>
          <Text>
            Efter aftale er der mulighed for lidt kontrolleret leg i slutningen af lektionen.
          </Text>
          <Text>
            <b>Træningsplads</b>
            <br />
            Jeg afholder træning på følgende adresse: Horsensvej 31, Nim, 8740 Brædstrup
            <br />
            Træningen foregår udendørs.
          </Text>
          <br />

          <Title text="Holdstart for Helt-Cool kurset" showHorizontalRuler />
          <TitleColor text="Din investering: 1795 kr." />
          <Text>
            i at kunne nyde jeres daglige gåture og få gæster på besøg, med en hund der er helt-cool
            omkring andre.
          </Text>
          <Text italic>Bemærk betaling er bindende og beløb refunderes ikke.</Text>
            <br />
          <Title text="Kommende hold:" />
          <EasyMeList src="https://ezme.io/x/x1S/k3zd" />
          <br />
          <Title color="#872f35" text="Næste holdstart efter ovenstående er Maj 2026" />
          {/* <Title text="Ønsker du en plads? Så smid mig en mail og få fortrinsret til tilmelding:" /> */}
          <Text>
            Oplever du holdene er fyldt op, eller søger du holdstart på et andet tidspunkt skriver
            jeg dig hjertens gerne på venteliste til næste ledige plads. <b>Bemærk</b> at jeg <i>ikke</i> kan garantere dig en plads til næste opstart, selvom du noteres på min venteliste. 
            Kursister der allerede går hos mig har førsteprioritet til en plads. Derefter åbner jeg op for ventelisten.
          </Text>
          <Text>
            Vil du skrives op til næste opstart, så smid mig en besked om dit holdønske her:
          </Text>
          {/* <Title color="#872f35" text="Jeg afholder i øjeblikket ferie og er tilbage på kontoret igen den 18. september. Du får hurtigst muligt svar herefter." /> */}
          <ContactPopUp text="Ja tak! Skriv mig på venteliste" />
          <br />
          <br />
          <Title text="Dette siger kursisterne efter deltagelse på Helt-Cool" showHorizontalRuler />
          <br />
          <DogCoolTestimonials></DogCoolTestimonials>
          <br />

          <Title text="Stemningsbilleder fra Helt-Cool kursus" showHorizontalRuler />
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
          </Row>
        </Column>
      </Row>
    </Background>
  </Page>
);

export default DogCool;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
