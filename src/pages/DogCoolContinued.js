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
  Image,
  StyledLink,
  EasyMeList,
  ContactPopUp,
} from '../components';
import Responsive from '../components/layout/Responsive';
import DogMenu from '../components/menu/DogMenu';
import {
  CoolAgainOne,
  CoolAgainTwo,
  CoolAgainThree,
  CoolAgainFour,
  CoolAgainFive,
  CoolAgainSix,
  CoolAgainSeven,
  CoolAgainEight,
  CoolAgainNine,
} from '../assets';

const ContinuedCoolProgram = [
  'Indlæring af at finde ro og slappe af, når i skal lave ”ingenting” sammen',
  'Rolige gåture: Øvelse i at gå væk fra andre hunde',
  'Rolige gåture: Øvelse i fortovspassager med andre hunde',
  'Rolige gåture: Øvelse i stop-op og hilsemøder med andre',
  'Hverdagsgåture med kontakt og ro i nye miljøer',
  'Ro og kontakt nær flere forstyrrelser på én gang',
  'Afventende ro omkring spændende sager i bevægelse',
  'Placering af hunden: Indlæring af bliv',
];

const CoolEnvironmentBenefits = [
  'Personlig sparring på at finde ro i nye områder',
  'Personlig sparring på at passere fremmede hunde og mennesker',
  'Hele 4 mødegange på en ny lokation hver gang i Horsens og omegn',
  'Max 4 andre holdkammerater, så der er god tid til dig',
];

const DogCoolContinued = () => (
  <Page>
    <MetaDogCoolContinued />
    <Banner text="Hundehold i Horsens">
      <BreadCrumps currentPage="Miljø Hold" />
    </Banner>
    <Background>
      <Row marginTop="25px" marginBottom="45px">
        <Column widthPercentage="20%">
          <Title text="Udbud af hundehold" showHorizontalRuler />
          <DogMenu />
        </Column>
        <Column widthPercentage="75%">
          <Title text="Miljøhold i Horsens" showHorizontalRuler />
          <Text>
            På miljøholdet fokuseres der på mine kendte Cool-principper med kontakt og ro, som
            udøves i <u>nye miljøer</u> over 4 lektioner af op til 60 min. pr. lektion. Holdet
            udbydes i to udgaver, hvor du kan vælge at have mødegang hver uge eller hver 14. dag.
            Dog altid på en ny lokation i Horsens og omegn til hver lektion.
          </Text>
          <Text>
            Holdets primære fokus er at give din hund det sorte bælte i god impulskontrol! Hvor de
            rolige gåture praktiseres i stor stil. Du får en mere afslappet hverdag, med en hund der
            selv kan finde ro når du er i ro og som kan gå pænt i snor uden at hive armen af dig.
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
            <br />I løbet af vores uger sammen vil vi komme igennem følgende:
          </Text>
          <TextList texts={ContinuedCoolProgram} />
          <Text>
            <b>Hvad kan du forvente at få med?</b>
            <br />
            Ved deltagelse på Miljøholdet får du:
          </Text>
          <TextList texts={CoolEnvironmentBenefits} />
          <Text>Der tages hensyn til sensitive hunde og praktiseres god afstand.</Text>
          <br />

          <Title text="Holdstart for Miljøholdet" showHorizontalRuler />
          <TitleColor text="Din investering: 795 kr." />
          <Text>
            i at kunne nyde jeres daglige gåture, med en hund der kan finde ro og holde kontakt,
            selv når i kommer nye steder.
          </Text>
          <Text italic>Bemærk betaling er bindende og beløb refunderes ikke.</Text>
          <br />
          <Title text="Kommende hold:" />
          <EasyMeList src="https://ezme.io/x/x1S/k3zy" />
          <br />
          <Text>
            Oplever du holdene er fyldt op, eller søger du holdstart på et andet tidspunkt skriver
            jeg dig hjertens gerne på venteliste til næste ledige plads. Blot smid mig en besked om
            dit holdønske her:
          </Text>
          <ContactPopUp text="Ja tak! Skriv mig på venteliste" />
          <br />
          <br />

          {/* <Title text="Januar start:" />
          <Table>
            <DogCourseSimple />
            <Tbody>
              <Tr>
                <Td>Fortsat Cool A</Td>
                <Td>Mandag</Td>
                <Td>8700</Td>
                <Td>
                  <StyledLink to="/kontakt">Kontakt mig</StyledLink>
                </Td>
                <Td>19.30 - 20.15</Td>
                <Td>17. jan</Td>
                <Td>28. feb</Td>
                <Td>
                  <font color="#D60E0E">Venteliste</font>
                </Td>
              </Tr>
            </Tbody>
          </Table> */}

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

          <Title text="Stemningsbilleder fra Miljø holdene" showHorizontalRuler />
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
          </Row>
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
