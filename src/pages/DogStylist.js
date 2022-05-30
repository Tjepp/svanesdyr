/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

import {
  Page,
  Banner,
  Column,
  MetaDogStylist,
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
import {
  NailClipSeven,
  NailClipEight,
  NailClipNine,
  NailClipFour,
  NailClipFive,
  NailClipSix,
} from '../assets';

const StylistProgram = [
  'Undervisning i forskellige pelstypers krav til pleje',
  'Vask med shampoo, og hvilken shampoo din hund skal bruge',
  'Børstning; metoder og tidsforbrug, og valg af børstetype',
  'Klip af hår, trimning eller med saks',
  'Klopleje og klip',
  'Ørepleje og pluk af hårtotter, efter relevans for racen',
];

const TrainerProgram = [
  'Chirag Patels "The Bucket Game"',
  'Frivillig håndteringsprincip ved børstning, klipning mv.',
  'Indlæring af stationering; ro på bord og i bad hos frisøren',
  'Tryg potehåndtering og negleklipning',
  'Gode råd til at finde den gode, hundevenlige negleklipper',
  'Undervisning i neglens struktur og hvordan blødning undgås',
];

const StylistBenefits = [
  'Personlig sparring omkring din hund med to professionelle hundefolk',
  'Hele 5 fysiske mødegange med individuel rådgivning i jeres træning',
  'Max 4 andre holdkammerater, så der er god tid til dig og din hund',
  'Adgang til online bibilotek med skriftlige trin-for-trin guides, så det er let at øve hjemme',
  'Adgang til lukket facebookgruppe, hvor du ubegrænset kan stille spørgsmål til din hund og jeres træning hjemme',
];

const DogStylist = () => (
  <Page>
    <MetaDogStylist />
    <Banner text="Hundehold i Horsens">
      <BreadCrumps currentPage="Tryg Frisørtid" />
    </Banner>
    <Background>
      <Row marginTop="25px" marginBottom="45px">
        <Column widthPercentage="20%">
          <Title text="Udbud af hundehold" showHorizontalRuler />
          <DogMenu />
        </Column>
        <Column widthPercentage="75%">
          <Title
            text="Tryg Frisørtid m/Hundefrisør Torsten Nielsen i Horsens"
            showHorizontalRuler
          />
          <Text>
            Ønsker du en hund der er helt tryg og tilfreds med at komme på besøg hos sin
            hundefrisør? Eller ønsker du vejledning i hvordan du selv kan vedligeholde din hunds
            pels og negle, så det bliver tryg kvalitetstid fremfor et skræmmescenarie?
          </Text>
          <Text>
            Dine ønsker kan blive opfyldt på dette intensive, intime kursus med to kyndige
            undervisere!
          </Text>
          <Text>
            Tryg Frisørtid tager udgangspunkt i princippet omkring frivillig håndtering. Det betyder
            at vi starter ud med at træne frivillig adfærd i hunden, som skal være startsignalet til
            hvornår håndteringen kan begynde. Din hund lærer altså at sige "jeg er klar" og "pause,
            tak" så håndteringen bliver en leg, og du lærer at aflæse hvornår din hund er tryg og
            utryg.
          </Text>
          <Text>
            Hovedfokus på kurset er at lære principperne omkring frivillig håndtering. Det er
            individuelt hvor lang tid hver hund skal bruge på at blive 100% tryg omkring alle delene
            der sker hos en hundefrisør; bad, blow, pelsklip, børstning og negleklip. Vær derfor
            forberedt på at efter endt kursus har i måske stadig træning at udføre inden i er helt i
            mål med at kunne udføre alt på én gang.
          </Text>
          <Text>
            Da vi øver frivillig håndtering er der god mulighed for at øve andre områder af den
            daglige pleje, som tandbørstning, dryp med øjen- eller øredråber mv. Vi sætter fokus på
            dig og din hund og jeres behov!
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
            <br />I løbet af vores 5 mødegange sammen vil hundefrisør Torsten Nielsen dække følgende
            emner:
          </Text>
          <TextList texts={StylistProgram} />
          <Text>Din adfærdsbehandler Sabrina Svane vil desuden dække følgende emner:</Text>
          <TextList texts={TrainerProgram} />
          <Text>
            Udover fysisk fremmøde på træningspladsen, vil du få adgang til en lukket facebookgruppe
            få dage før vi mødes første gang. Her kan du ubegrænset stille spørgsmål til din hund og
            jeres træning hjemme under hele forløbet, og lægge videoer op for personlig feedback.
            Denne gruppe lukkes når holdet afsluttes. Du vil stadig kunne tilgå materialet derinde
            efter afslutning, men ikke slå kommentarer op længere.
          </Text>
          <Text>
            <b>Dine undervisere</b>
            <br />
            Torsten Nielsen arbejder fast hos Mermaid's Cut'n Care i Grenaa, samtidig med at han er
            selvstændig udekørende hundefrisør. Torsten går meget op i at give hver hund en god
            oplevelse til frisørtiden, og har derfor også efteruddannet sig i hundens signaler og
            frivillig håndteringsprincipper. Hans motto er at "Alle hunde fortjener en god oplevelse
            i trygge hænder".
          </Text>
          <Text>
            Sabrina Svane er drivkraften bag Svanes Dyr, og du kan læse mere om hende
            <StyledLink to="/dyreadfaerdskonsulent"> lige her </StyledLink>.
          </Text>
          <Text>
            <b>Hvad kan du forvente at få med?</b>
            <br />
            Ved deltagelse på Tryg Frisørtid får du:
          </Text>
          <TextList texts={StylistBenefits} />
          {/* <Text>
            Bemærk at vi mødes <b>hver 14. dag</b> på dette hold, så der er god tid til at få trænet
            mellem hver lektion og nå i mål til afslutning.
          </Text> */}
          <br />

          <Title text="Holdstart for Negleklipkurset" showHorizontalRuler />
          <TitleColor text="Din investering: 1795 kr." />
          <Text>
            i at kunne pleje din hunds pels og negle <u>selv</u> eller sende den til hudnefrisøren
            uden bekymring, da det bliver ren kvalitetstid fremfor overgreb.
          </Text>
          <Text italic>Bemærk betaling er bindende og beløb refunderes ikke.</Text>
          <br />
          <Title text="Kommende hold:" />
          <EasyMeList src="https://ezme.io/x/x1S/k37A" />
          <br />
          <Text>
            Oplever du holdene er fyldt op, eller søger du holdstart på et andet tidspunkt skriver
            jeg dig hjertens gerne på venteliste til næste ledige plads. Blot smid mig en besked om
            dit holdønske her:
          </Text>
          <ContactPopUp text="Ja tak! Skriv mig på venteliste" />
          <br />
          <br />
          <Title text="Stemningsbilleder fra tryg håndtering" showHorizontalRuler />
          <Row>
            <Column>
              <Image src={NailClipFour} />
            </Column>
            <Column>
              <Image src={NailClipEight} />
            </Column>
            <Column>
              <Image src={NailClipSix} />
            </Column>
          </Row>

          <Row>
            <Column>
              <Image src={NailClipSeven} />
            </Column>
            <Column>
              <Image src={NailClipFive} />
            </Column>
            <Column>
              <Image src={NailClipNine} />
            </Column>
          </Row>
        </Column>
      </Row>
    </Background>
  </Page>
);

export default DogStylist;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
