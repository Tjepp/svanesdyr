/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
// import { Table, Tbody, Tr, Td } from 'react-super-responsive-table';
import { withRouter } from 'react-router-dom';

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
  // DogCourseSimple,
  TextList,
  Image,
  StyledLink,
  DogCoolTestimonials,
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
  'Personlig sparring omkring din hund og jeres hverdag sammen',
  'Gode råd og tips til optimal aktivering af hunden',
  'Hele 7 ugers træning med ugentligt møde',
  'Max 3 andre holdkammerater, så der er god tid til dig',
  'Skriftlige trin-for-trin guides tilsendt hver uge på mail så du kan øve derhjemme',
  'Udleveret en klikker til valgfrit brug i træningen',
];

const DogCool = () => (
  <Page>
    <MetaDogCool />
    <Banner text="Hundehold i Horsens">
      <BreadCrumps currentPage="Helt-Cool" />
    </Banner>
    <Background>
      <Row marginTop="25px" marginBottom="45px">
        <Column widthPercentage="20%">
          <Title text="Udbud af hundehold" showHorizontalRuler />
          <DogMenu />
        </Column>
        <Column widthPercentage="75%">
          <Title text="Helt-Cool kursus i Horsens" showHorizontalRuler />
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
            denne problemstilling anbefaler jeg at
            <StyledLink to="/kontakt"> booke tid </StyledLink>
            til en
            <StyledLink to="/hundetraening"> konsultation</StyledLink>, hvor du kan få personlig
            vejledning og redskaber til at hjælpe din hund.
            {/* Eller tjek om
            <StyledLink to="/hundehold/venligvovse"> Venlig-Vovse </StyledLink> holdet er noget for
            jer. */}
          </Text>
          <Text>
            <StyledLink to="/kontakt"> Kontakt mig </StyledLink> endelig hvis du er i tvivl.
          </Text>
          <Text>
            <b>Træningsprogram for holdet</b>
            <br />I løbet af vores 7 uger sammen vil vi komme igennem følgende:
          </Text>
          <TextList texts={CoolProgram} />
          <Text>
            <b>Hvad kan du forvente at få med?</b>
            <br />
            Ved deltagelse på Helt-Cool kurset får du:
          </Text>
          <TextList texts={CoolBenefits} />
          <Text>
            Der tages hensyn til sensitive hunde og praktiseres god afstand før, under og efter
            timerne. Til de legeglade hunde er der mulighed for lidt{' '}
            <StyledLink to="/hundehold"> kontrolleret leg</StyledLink> efter timen.
          </Text>
          <br />

          <Title text="Skema for kommende holdstart" showHorizontalRuler />
          <TitleColor text="Din investering: 995 kr." />
          <Text>
            i at kunne nyde jeres daglige gåture og få gæster på besøg, med en hund der er helt-cool
            omkring andre.
          </Text>
          <br />
          <Text italic>Bemærk betaling er bindende og beløb refunderes ikke.</Text>

          <Title text="Alle igangværende hold er desværre fyldt op." />

          <br />
          <TitleColor text="Jeg oplever i øjeblikket overvældende stor efterspørgsel på mine holdforløb." />
          <Text>
            Derfor kan jeg ikke love plads på hold indenfor kort tid. Jeg kan kun anbefale at være
            ude i god tid.
            <br />I øjeblikket er mine hold fyldt et par måneder på forhånd. Næste holdstart i år er
            til <b>oktober</b>.
            <br /> Ønsker du at skrives op til en plads på et fremtidigt holdforløb er du velkommen
            til at
            <StyledLink to="/kontakt"> kontakte mig</StyledLink>.
          </Text>

          {/* <Title text="Maj start:" />
          <Table>
            <DogCourseSimple />
            <Tbody>
              <Tr>
                <Td>Cool G</Td>
                <Td>Mandag</Td>
                <Td>8700</Td>
                <Td>
                  <StyledLink to="/kontakt">Kontakt mig</StyledLink>
                </Td>
                <Td>20.30 - 21.15</Td>
                <Td>3. maj</Td>
                <Td>14. juni</Td>
                <Td>
                  <font color="#D60E0E">*Venteliste*</font>
                </Td>
              </Tr>
            </Tbody>
          </Table> */}
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

export default withRouter(DogCool);

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
