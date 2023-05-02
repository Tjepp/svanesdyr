/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

import {
  Page,
  Banner,
  Column,
  MetaDogMorning,
  Title,
  TitleColor,
  Text,
  BreadCrumps,
  Row,
  TextList,
  // Image,
  StyledLink,
  EasyMeList,
  ContactPopUp,
} from '../components';
import Responsive from '../components/layout/Responsive';
import DogMenu from '../components/menu/DogMenu';

const RallyProgram = [
  'Lineføring; Følge i gang med øvelse i både venstre og højre side',
  'Vendinger i plads-placering sammen med fører',
  'Kontaktøvelser som sikrer dig, at DU altid er interessant',
  'Positionstræning med sit, dæk og stå',
  'Placering af hunden: Blive i position',
  'Øvelse i forskellige Rally-skilte',
];

const HoopersProgram = [
  'Introduktion til hoops og tønder',
  'Følge i gang og løb uden snor',
  'Afstandsdirigering',
  'Belønningsstrategier',
  'Placering af hunden: Blive i position',
];

const HoopersBenefits = [
  'Personlig sparring med Hoopers og Rally Instruktør Mona Lindhardt',
  'Ugentligt møde over 4 uger',
  'Max 4 andre holdkammerater, så der er god tid til dig',
];

const DogMorning = () => (
  <Page>
    <MetaDogMorning />
    <Banner text="Hundehold i Horsens">
      <BreadCrumps currentPage="Formiddagshold" />
    </Banner>
    <Background>
      <Row marginTop="25px" marginBottom="45px">
        <Column widthPercentage="20%">
          <Title text="Udbud af hundehold" showHorizontalRuler />
          <DogMenu />
        </Column>
        <Column widthPercentage="75%">
          <Title text="Formiddagshold i Horsens" showHorizontalRuler />
          <Text>
            Svanes Dyr byder velkommen til Hundeinstruktør Mona Lindhardt, som vil udbyde Hoopers og Rally-Lydighed i Horsens.
          </Text>
          <Text>
            Holdenes primære fokus er at øge din hunds selvtillid og styrke jeres fælles samarbejde.
            Der tages hensyn til den enkelte deltager på holdet, da træningen tilrettelægges efter den enkelte hunds niveau.
          </Text>
          <Text>
            Al træning foregår med{' '}
            <StyledLink to="/minemetoder"> belønningsbaserede træningsmetoder</StyledLink>, hvor vi markerer korrekt adfærd ved at rose og belønner hunden med mad
            og leg. Hvis din hund laver fejl hjælper vi den ved at gøre opgaven nemmere og mere
            letforståelig. Alle bliver sat op til succes.
          </Text>
          <Text>
            <b>Træningsprogram for Rally-Lydighed</b><br />
            Til Rally-Lydighed er der fokus på lydighedstræningen, uden præcisionsarbejdet. 
            Det største mål med Rally er nemlig at din hund udviser glæde og villighed til at samarbejde.
            I Rally-Lydighed skal dig og din hund udfører forskellige opgaver sammen, hvor opgaverne er listet op på skiltene på banen.
            Der findes omkring 130 forskellige skilte med forskellige samarbejdsøvelser, så holdet giver rig mulighed for at finde på nye, sjove opgaver sammen med din hund.
          </Text>
          <Text>
            I løbet af holdets 4 uger vil du få øvelse i følgende:
            <TextList texts={RallyProgram} />
          </Text>
          <Text>
            <b>Træningsprogram for Hoopers</b><br />
            Til Hoopers skal din hund lære selvstændigt at søge forhindringerne på banen, mens du står på afstand og guider.
            Hoopers minder om agility, men er langt mere skånsomt, da det ikke indebærer skarpe sving, hop eller kravlen på forhindringer.
            Derfor er Hoopers også velegnet til de yngre hunde.
            Hoopers er for alle racer, da det eneste krav er at din hund skal kunne løbe.
            Der fokuseres ikke på konkurrenceniveau, men udelukkende på at hver hund skal have en fest til træningen.
          </Text>
          <Text>
            I løbet af holdets 4 uger vil du få øvelse i følgende:
            <TextList texts={HoopersProgram} />
          </Text>
          <Text>
            <b>Hvad kan du forvente at få med?</b>
            <br />
            Ved deltagelse på Hoopers eller Rally-Lydighed får du:
            <TextList texts={HoopersBenefits} />
          </Text>
          <br />

          <Title text="Holdstart for Formiddagshold" showHorizontalRuler />
          <TitleColor text="Din investering: 795 kr." />
          <Text>
            i at styrke din hunds arbejdsglæde gennem sjove samarbejdsøvelser, som kan give god inspiration til hverdagens træning og hygge
          </Text>
          <Text italic>Bemærk betaling er bindende og beløb refunderes ikke.</Text>
          <br />
          <Title text="Kommende hold:" />
          <EasyMeList src="https://ezme.io/x/x1S/WBpy" />
          <br />
          <Text>
            Oplever du holdene er fyldt op, eller søger du holdstart på et andet tidspunkt skriver
            jeg dig hjertens gerne på venteliste til næste ledige plads. Blot smid mig en besked om
            dit holdønske her:
          </Text>
          <ContactPopUp text="Ja tak! Skriv mig på venteliste" />
          <br />
          <br />

          {/* <Title text="Stemningsbilleder fra Miljøholdene" showHorizontalRuler />
          <Row>
            <Column>
              <Image src={CoolAgainOne} />
            </Column>
            <Column>
              <Image src={CoolAgainTwo} />
            </Column>
            <Column>
              <Image src={CoolAgainThree} />
            </Column>
          </Row>
          <Row>
            <Column>
              <Image src={CoolAgainFour} />
            </Column>
            <Column>
              <Image src={CoolAgainFive} />
            </Column>
            <Column>
              <Image src={CoolAgainSix} />
            </Column>
          </Row>
          <Row>
            <Column>
              <Image src={CoolAgainSeven} />
            </Column>
            <Column>
              <Image src={CoolAgainEight} />
            </Column>
            <Column>
              <Image src={CoolAgainNine} />
            </Column>
          </Row> */}
        </Column>
      </Row>
    </Background>
  </Page>
);

export default DogMorning;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
