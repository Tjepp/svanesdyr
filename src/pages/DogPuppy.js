/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
// import { Table, Tbody, Tr, Td } from 'react-super-responsive-table';
import { withRouter } from 'react-router-dom';

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
  // DogCourseSimple,
  StyledLink,
  DogPuppyTestimonials,
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
  'Positiv miljøtræning, så nye og skræmmende ting kan mødes med selvtillid',
  'Øvelse i byttelege, så hvalpen lærer at aflevere og spytte ud, fremfor at stikke af med sager',
  'Frivillig håndtering, hvor du gør det til en leg at få tjekket tænder, ører, klippet negle m.v.',
  'God impulskontrol så dagligdagens små glæder bliver lettere med en hvalp, der har lært at have ro',
];

const PuppyBenefits = [
  'Gode muligheder for socialisering og leg under kontrollerede forhold',
  'Personlig sparring omkring din hvalp og jeres hverdag sammen',
  'Gode råd og tips til optimal aktivering af hvalpen',
  'Hele 7 ugers træning med ugentligt møde',
  'Max 3 andre holdkammerater, så der er god tid til dig',
  'Skriftlige trin-for-trin guides tilsendt hver uge på mail så du kan øve derhjemme',
  'Udleveret en klikker til valgfrit brug i træningen',
];

const DogPuppy = () => {
  return (
    <Page>
      <MetaDogPuppy />
      <Banner text="Hundehold i Horsens">
        <BreadCrumps currentPage="Hvalpehold" />
      </Banner>
      <Background>
        <Row marginTop="25px" marginBottom="45px">
          <Column widthPercentage="20%">
            <Title text="Udbud af hundehold" showHorizontalRuler />
            <DogMenu />
          </Column>
          <Column widthPercentage="75%">
            <Title text="Hvalpehold i Horsens" showHorizontalRuler />
            <Text>
              Ønsker du at skabe et stærkt tillidsfuld bånd med din hvalp, gennem masser af
              succesoplevelser, så er du kommet til rette sted!
            </Text>
            <Text>
              Hvalpeholdet henvender sig til alle hvalpe i alderen fra 8 uger og op til 6 mdr.
              <br />
              Jeg lægger stort fokus på miljøtræning, håndtering og sociliasering af din hvalp, så
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
              <br />I løbet af vores 7 uger sammen vil vi komme igennem følgende:
            </Text>
            <TextList texts={PuppyProgram} />
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

            <Title text="Skema for kommende holdstart" showHorizontalRuler />
            <TitleColor text="Din investering: 1095 kr." />
            <Text>
              i at få en rolig, imødekommende og selvsikker familiehund, der elsker at træne sammen
              med dig!
            </Text>
            <br />
            <Text italic>Bemærk betaling er bindende og beløb refunderes ikke.</Text>

            <Title text="Alle igangværende hold er desværre fyldt op." />

            <br />
            <TitleColor text="Jeg oplever i øjeblikket overvældende stor efterspørgsel på mine holdforløb." />
            <Text>
              Derfor kan jeg ikke love plads på hold indenfor kort tid. Jeg kan kun anbefale at være
              ude i god tid.
              <br />I øjeblikket er mine hold fyldt et par måneder på forhånd. Næste holdstart i år
              er til <b>oktober</b>.
              <br /> Ønsker du at skrives op til en plads på et fremtidigt holdforløb er du
              velkommen til at
              <StyledLink to="/kontakt"> kontakte mig</StyledLink>.
            </Text>

            {/* <Title text="Maj start:" />
            <Table>
              <DogCourseSimple />
              <Tbody>
                <Tr>
                  <Td>Hvalp I</Td>
                  <Td>Mandag</Td>
                  <Td>8700</Td>
                  <Td>
                    <StyledLink to="/kontakt">Kontakt mig</StyledLink>
                  </Td>
                  <Td>17.30 - 18.15</Td>
                  <Td>3. maj</Td>
                  <Td>14. juni</Td>
                  <Td>
                    <font color="#D60E0E">*Venteliste*</font>
                  </Td>
                </Tr>
              </Tbody>
            </Table> */}

            {/* <br /><TitleColor text="2021 hold er under planlægning."/> */}
            <br />

            <Title
              text="Dette siger kursisterne efter deltagelse på Hvalpehold"
              showHorizontalRuler
            />
            <br />
            <DogPuppyTestimonials></DogPuppyTestimonials>
            <br />

            <Title text="Billeder fra hvalpehold Horsens" showHorizontalRuler />
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

export default withRouter(DogPuppy);

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
