/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import { Table, Tbody, Tr, Td } from 'react-super-responsive-table';

import {
  Page,
  Banner,
  Column,
  MetaDogNailClip,
  Title,
  TitleColor,
  Text,
  BreadCrumps,
  Row,
  TextList,
  Image,
  StyledLink,
  DogCourseTableHead,
} from '../components';
import Responsive from '../components/layout/Responsive';
import DogMenu from '../components/menu/DogMenu';
import {
  NailClipOne,
  NailClipTwo,
  NailClipThree,
  NailClipFour,
  NailClipFive,
  NailClipSix,
} from '../assets';

const NailClipProgram = [
  'Chirag Patels "The Bucket Game"',
  'Indlæring af stationering',
  'Frivillig håndteringsprincip ved børstning, klipning mv.',
  'Slappe-af øvelse for let adgang til poter',
  'Introduktion til brug af neglefil',
  'Gode råd til at finde den gode, hundevenlige negleklipper',
  'Undervisning i neglens struktur og hvordan blødning undgås',
  'Undervisning i blid og korrekt vinkling under negleklipning',
  'Undervisning i hvordan lange negle gøres kortere (for at undgå klik på gulve)',
];

const NailClipBenefits = [
  'Personlig sparring omkring din hund og jeres samarbejde',
  'Hele 6 ugers træning',
  'Max 3 andre holdkammerater, så der er god tid til dig og din hund',
  'Adgang til online bibilotek med skriftlige trin-for-trin guides, så det er let at øve hjemme',
  'Udleveret en klikker til valgfrit brug i træningen',
];

const DogNailClip = () => (
  <Page>
    <MetaDogNailClip />
    <Banner text="Hundehold i Horsens">
      <BreadCrumps currentPage="Negleklipkursus" />
    </Banner>
    <Background>
      <Row marginTop="25px" marginBottom="45px">
        <Column widthPercentage="20%">
          <Title text="Udbud af hundehold" showHorizontalRuler />
          <DogMenu />
        </Column>
        <Column widthPercentage="75%">
          <Title text="Negleklipkursus i Horsens" showHorizontalRuler />
          <Text>
            Ønsker du at blive fortrolig med at klippe negle på din hund og samtidig gøre det til
            fælles hyggetid, fremfor et skræmmescenarie, så er du kommet til rette sted!
          </Text>
          <Text>
            Negleklipkurset tager udgangspunkt i princippet omkring frivillig håndtering. Det
            betyder at vi starter ud med at træne frivillig adfærd i hunden, som skal være
            startsignalet til hvornår neglelegen kan begynde. Din hund lærer altså at sige "jeg er
            klar" og "pause, tak" under neglelegen, og du lærer at aflæse hvornår din hund er tryg
            og utryg.
          </Text>
          <Text>
            Hovedfokus på kurset er at lære principperne omkring frivillig håndtering. Det er
            individuelt hvor lang tid hver hund skal bruge på at blive 100% tryg omkring
            potehåndtering og negleklipperi. Vær derfor forberedt på at efter endt kursus har i
            måske stadig træning at udføre inden i er helt i mål med at kunne klippe alle negle.
          </Text>
          <Text>
            Da vi øver frivillig håndtering er der god mulighed for at øve andre områder af den
            daglige pleje, som børstning, klip m. saks, tandbørstning, dryp med øjen- eller
            øredråber mv. Vi tilpasser det efter hvad du ønsker at fokusere på!
          </Text>
          <Text>
            Al træning foregår med{' '}
            <StyledLink to="/minemetoder"> belønningsbaserede træningsmetoder</StyledLink>, hvor vi
            bruger klikker eller "dygtig" til at markere korrekt adfærd og belønner hunden med mad.
            Hvis din hund laver fejl hjælper vi den ved at gøre opgaven nemmere og mere
            letforståelig. Alle bliver sat op til succes. Da vi arbejder med hundens følelser vil
            tryghed og tillid til dig og neglelegen være i centrum.
          </Text>
          <Text>
            <b>Træningsprogram for holdet</b>
            <br />I løbet af vores 6 uger sammen vil vi komme gennem følgende:
          </Text>
          <TextList texts={NailClipProgram} />
          <Text>
            <b>Hvad kan du forvente at få med?</b>
            <br />
            Ved deltagelse på Negleklipkurset får du:
          </Text>
          <TextList texts={NailClipBenefits} />
          {/* <Text>
            Bemærk at vi mødes <b>hver 14. dag</b> på dette hold, så der er god tid til at få trænet
            mellem hver lektion og nå i mål til afslutning.
          </Text> */}
          <br />

          <Title text="Skema for kommende holdstart" showHorizontalRuler />
          <TitleColor text="Din investering: 1095 kr." />
          <Text>
            i at kunne pleje din hunds negle <u>selv</u> og uden bekymring, da det bliver
            kvalitetstid fremfor overgreb.
          </Text>
          <Text italic>Bemærk betaling er bindende og beløb refunderes ikke.</Text>
          <br />

          {/* <br />
          <TitleColor text="Hold startes op på efterspørgsel." />
          <Text>
            <StyledLink to="/kontakt">Kontakt mig ved interesse.</StyledLink>
          </Text> */}

          <Title text="Maj start:" />
          <Table>
            <DogCourseTableHead />
            <Tbody>
              <Tr>
                <Td>Negleklip A</Td>
                <Td>Søndag</Td>
                <Td>8700</Td>
                <Td>
                  <StyledLink to="/kontakt">Kontakt mig</StyledLink>
                </Td>
                <Td>11.30 - 12.15</Td>
                <Td>15. maj</Td>
                <Td>10. juli</Td>
                <Td>29. maj + 26. juni + 3.juli</Td>
                <Td>
                  <font color="#D60E0E">Venteliste</font>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <br />

          <Title text="Billeder af neglekliplegen i aktion" showHorizontalRuler />
          <Row>
            <Column>
              <Image src={NailClipOne} />
            </Column>
            <Column>
              <Image src={NailClipTwo} />
            </Column>
            <Column>
              <Image src={NailClipThree} />
            </Column>
          </Row>

          <Row>
            <Column>
              <Image src={NailClipFour} />
            </Column>
            <Column>
              <Image src={NailClipFive} />
            </Column>
            <Column>
              <Image src={NailClipSix} />
            </Column>
          </Row>
        </Column>
      </Row>
    </Background>
  </Page>
);

export default DogNailClip;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
