/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

import {
  Page,
  Banner,
  Column,
  MetaDogCoolContinued,
  Title,
  TitleColor,
  Text,
  BreadCrumps,
  Row,
  TextList,
  StyledLink,
  EasyMeList,
  ContactPopUp,
} from '../components';
import Responsive from '../components/layout/Responsive';
import DogMenu from '../components/menu/DogMenu';


const ContinuedCoolProgram = [
  'Indlæring af at finde ro og slappe af, når i skal lave ”ingenting” sammen',
  'Rolige gåture: Øvelse i at gå væk fra andre hunde',
  'Rolige gåture: Øvelse i fortovspassager med andre hunde',
  'Rolige gåture: Øvelse i stop-op og hilsemøder med andre',
  'Ro og kontakt nær flere forstyrrelser på én gang',
  'Afventende ro omkring spændende sager i bevægelse',
  'Placering af hunden: Indlæring af bliv',
];

const CoolContinuedBenefits = [
  'Personlig sparring omkring din hund og jeres hverdag sammen til timerne',
  'Vejledning i at passere fremmede hunde og mennesker i ro',
  'Hele 6 lektioners træning med ugentligt holdmøde',
  'Max 4 andre holdkammerater, så der er god tid til dig',
  'Adgang til online bibilotek med skriftlige trin-for-trin guides, så det er let at øve hjemme',
];

const DogCoolContinued = () => (
  <Page>
    <MetaDogCoolContinued />
    <Banner text="Hundehold i Nim, nær Horsens">
      <BreadCrumps currentPage="Fortsat Helt-Cool" />
    </Banner>
    <Background>
      <Row marginTop="25px" marginBottom="45px">
        <Column widthPercentage="20%">
          <Title text="Udbud af hundehold" showHorizontalRuler />
          <DogMenu />
        </Column>
        <Column widthPercentage="75%">
          <Title text="Fortsat Helt-Cool i Nim for tidligere kursister" showHorizontalRuler />
          <Text>
            Ønsker du at styrke din hunds kontakt og ro blandt andre hunde, selv når de kommer helt tæt på eller leger vildt i nærheden, så er fortsætterholdet det rette hold for dig!
          </Text>
          <Text>
            Fortsat Helt-Cool henvender sig til dig der allerede har deltaget på Helt-Cool kurset eller Hvalpe-Fortsætterholdet, da jeg tager udgangspunkt i indlærte principper.
            Vi vil på dette hold skrue op for udfordringerne og kræve gradvist mere af din hund, så du stadig kan opnå ro, selv når andre hunde kommer tæt på eller omgivelserne bliver ekstra forstyrrende.
          </Text>
          <Text>
            Holdets primære fokus er at give din hund det sorte bælte i god impulskontrol! Hvor de
            rolige gåture praktiseres i stor stil. Du får en mere afslappet hverdag, med en hund der
            selv kan finde ro når du er i ro og som kan gå pænt forbi andre hunde og mennesker.
            Kurset henvender sig til alle hunde i alle aldre.
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
            <br />I løbet af vores 6 mødegange sammen vil vi komme igennem følgende:
          </Text>
          <TextList texts={ContinuedCoolProgram} />
          <Text>
            <b>Hvad kan du forvente at få med?</b>
            <br />
            Ved deltagelse på Fortsat Helt-Cool får du:
          </Text>
          <TextList texts={CoolContinuedBenefits} />
          <Text>Der tages hensyn til sensitive hunde og praktiseres god afstand. Til de legeglade hunde er der mulighed for lidt{' '}
            <StyledLink to="/hundehold"> kontrolleret leg</StyledLink> i lektionen.</Text>
          <br />

          <Title text="Holdstart for Fortsat Helt-Cool" showHorizontalRuler />
          <TitleColor text="Din investering: 1195 kr." />
          <Text>
            i at kunne nyde jeres daglige gåture, med en hund der kan finde ro og holde kontakt,
            selv nær andre hunde.
          </Text>
          <Text italic>Bemærk betaling er bindende og beløb refunderes ikke.</Text>
          <br />
          <Title text="Kommende hold:" />
          <EasyMeList src="https://ezme.io/x/x1S/LXeP" />
          <br />
          <Title color="#872f35" text="Næste holdstart er Februar 2026" />
          {/* <Title text="Ønsker du en plads? Så smid mig en mail og få fortrinsret til tilmelding:" /> */}
          <Text>
            Oplever du holdene er fyldt op, eller søger du holdstart på et andet tidspunkt skriver
            jeg dig hjertens gerne på venteliste til næste ledige plads. <b>Bemærk</b> at jeg <i>ikke</i> kan garantere dig en plads til næste opstart, selvom du noteres på min venteliste. 
            Kursister der allerede går hos mig har førsteprioritet til en plads. Derefter åbner jeg op for ventelisten.
          </Text>
          <Text>
            Vil du skrives op til næste opstart, så smid mig en besked om dit holdønske her:
          </Text>
          <br />
          {/* <Title color="#872f35" text="Jeg afholder i øjeblikket ferie og er tilbage på kontoret igen den 18. september. Du får hurtigst muligt svar herefter." /> */}
          <ContactPopUp text="Ja tak! Skriv mig på venteliste" />
          <br />
          <br />

          {/* <br />
          <TitleColor text="Jeg oplever overvældende stor efterspørgsel på mine holdforløb." />
          <Text>
            Derfor kan jeg ikke love plads på hold indenfor kort tid. Jeg kan kun anbefale at være
            ude i god tid.
            <br />
            Typisk fyldes mine hold et par måneder på forhånd. Næste holdstart er i{' '}
            <b>marts 2022</b>.
            <br /> Ønsker du at skrives op til en plads på et fremtidigt holdforløb er du velkommen
            til at
            <StyledLink to="/kontakt"> kontakte mig</StyledLink>.
          </Text> */}

        </Column>
      </Row>
    </Background>
  </Page>
);

export default DogCoolContinued;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
