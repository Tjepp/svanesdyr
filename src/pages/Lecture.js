/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

import {
  Page,
  Banner,
  Column,
  Meta,
  Title,
  TitleColor,
  Text,
  Image,
  BreadCrumps,
  Row,
  StyledLink,
  // EasyMeList,
  FlexedRow,
  TitleCenter,
  TextContainer,
  TextListArrow,
  TextListMark,
} from '../components';
import Responsive from '../components/layout/Responsive';
import { lectureDogLanguage, PlayFive, dogOne } from '../assets';
import '../components/table/TableCss.css';

const HundeSprog = [
  'Hundens signaler; hvordan kommunikerer hunden sine følelser',
  'Stress og dens indflydelse på hundens adfærd',
  'Hvordan du aflæser på din hund om den er stresset',
  'Hvordan du bedst kan hjælpe hvis den stresser',
  'Hundens personlighed og tolerance, og hvilken indflydelse det har på adfærden',
];

const Play = [
  'Hvordan hunden kommunikerer om den er tryg eller utryg',
  'Hvad det betyder hvis hunden begynder at humpe en legekammerat',
  'De 4 legeregler du skal spotte, som tegn på den gode hundeleg',
  'Hvordan du kan lave positive introduktionsmøder mellem hundene',
  'og ikke mindst hvordan du bruger Samtykketesten - dit redskab til at kontrollere legen',
];

const Calm = [
  'aflæser din hunds tegn på stress, så du lettere kan se hvornår den føler sig presset',
  'undgår at din hund kortslutter, og fortsat kan lytte efter hvad du siger',
  'sætter din hund op til succes, så i kan få flere og flere dejlige gåture sammen',
  'tackler mødet med andre hunde i ro og mag',
  'og ikke mindst giver jeg dig 3 simple metoder til at indlære ro i mødet med andre hunde',
];

const Lecture = () => (
  <Page>
    <Meta />
    <Banner text="Foredrag hos Svanes Dyr">
      <BreadCrumps currentPage="Foredrag" />
    </Banner>
    <Background>
      <Row marginTop="25px">
        <Column widthPercentage="65%">
          <Title text="Foredrag med Sabrina Svane" showHorizontalRuler />
          {/* <Text>
            Jeg underviser ugentligt mange hundeejere i at blive klogere på deres hunde, ikke blot
            med hvordan de indlærer basal lydighed, men ligesåmeget i at forstå hundens sprog, vide
            hvordan hjernen fungerer på deres firbenede familiemedlem og hvor opmærksom de skal være
            på stress og dens negative følger, så de får hverdagen til at fungere.
          </Text> */}
          <Text>
            Min passion er at give ejere en hverdag i harmoni med deres dyr. Alle mine foredrag
            tager udgangspunkt i at give en god sum baggrundsviden, som fx i hvad stress er, hvordan
            hjernen fungerer og hvordan hunde kommunikerer. Og derefter vise hvordan den information
            kan bruges til at få succesoplevelser i hverdagen, uanset om deltagerne ønsker at
            forebygge eller ændre en uønsket adfærd.
          </Text>
          <Text>
            Jeg udbyder ofte foredrag i de populære emner omkring hundens sprog, god leg mellem hunde og
            reaktioner på andre på gåture, som du kan læse mere om længere nede på siden. Er du fra en
            hundeklub, et dyrlægehus eller er privatperson og ønsker du et andet fokusemne, så tøv
            ikke med at
            <StyledLink to="/kontakt"> kontakte mig</StyledLink> for at høre mere. Jeg tilbyder
            foredrag for både hunde- og kattejere, samt fagfolk indenfor træningsverdenen.
          </Text>
        </Column>
        <Column>
          <Title text="Priser for foredrag" showHorizontalRuler />
          <TitleColor text="Alle priser er inkl. moms" />
          <Text>
            <b>Timepris</b>
            <br />
            Hverdage man-fre:
            <b> 1.600,- kr/time</b>
            <br />
            Weekend lør-søn:
            <b> 1.950,- kr/time</b>
          </Text>
          <Text>Inklusiv forberedelsestillæg og udprint.</Text>
          <Text>Alle foredrag tilbydes også som webinar.</Text>
          <Text>
            <b>Kørsel</b>
            <br />
            Tillæg efter statens takster.
            <br />
            Evt. Broafgift tillægges også.
          </Text>
        </Column>
      </Row>
      {/* <Row>
        <Column widthPercentage="100%">
          <Title text="Kommende foredrag og workshops om hundeadfærd" showHorizontalRuler />
          <br />
          <EasyMeList src="https://ezme.io/x/x1S/k3Id" />
          <br />
        </Column>
      </Row> */}
      <Row>
        <Title text="Udbud af foredrag om hundeadfærd" showHorizontalRuler />
      </Row>
      <Row>
        <Column widthPercentage="100%">
        <TitleCenter text="Hundens Sprog - Adfærd, Stress og Håndtering" />
          <FlexedRow>
            <Image src={lectureDogLanguage} width="300px" height="200px" />
            <TextContainer>
              <Text bold>3 timers foredrag inkl. to pauser af 10 minutter og tid til spørgsmål</Text>
              <Text>
                  Ønsker du at kunne aflæse din hund, så du ved hvornår den føler sig tryg eller utryg?<br />
                  Vil du vide hvordan du kan hjælpe din hund hvis den viser tegn på stress?<br />
                  Så book tre inspirationsrige timer i selskab med Dyreadfærdskonsulent Sabrina Svane, der vil give dig redskaberne til at aflæse positive og negative situationer 
                  - og fortælle dig hvordan du håndterer en stressfuld situation, så du kan hjælpe din hund på bedste vis.<br />
                  Foredraget inkluderer gennemgang af:
                  <TextListArrow texts={HundeSprog} />
                  Du vil gå hjem med en bedre forståelse for din hund og dens adfærd, og ikke mindst en grundig viden om hvordan du undgår stressede situationer. 
                  Sådan en indsigt kan forebygge adfærdsproblemer som angst og aggression.
                  <br />
                  <br />
              </Text>
            </TextContainer>
          </FlexedRow>

          <TitleCenter text="Sådan kontrollerer du leg mellem hunde - og giver alle en god oplevelse" />
          <FlexedRow>
            <Image src={PlayFive} width="300px" height="200px" />
            <TextContainer>
              <Text bold>2,5 timers foredrag inkl. én pause af 10 min og 30 min tid til spørgsmål</Text>
              <Text>
                  Det er en myte, at hundene skal kunne klare sig selv, når det kommer til at sætte grænser overfor andre hunde! 
                  Hvis du overlader hundene til sig selv, så opstår der meget ofte en situation, hvor grænserne ikke respekteres. 
                  Der bliver simpelthen ikke lyttet. Når din hund ikke føler sig lyttet til, vil den begynde at råbe højere og adfærden eskalerer. 
                  I sidste ende kan du stå med en hund, der udviser angst eller aggression pga. dårlige oplevelser med andre hunde.
              </Text>
              <Text>
                  At overlade hundene til selv at finde ud af det, svarer til at overlade børnene i skolegården til sig selv, hvilket enhver forælder vil finde uacceptabelt. 
                  Der skal være en voksen, ansvarlig til stede, som kan afbryde når nok er nok og sørge for, at alle har en god stund sammen.<br />
                  I dette foredrag får du svaret på:
                  <TextListArrow texts={Play} />
                  <br />
                  <br />
              </Text>
            </TextContainer>
          </FlexedRow>

          <TitleCenter text="Fra Reaktiv til Ro i mødet med andre hunde - opskriften til dig der ønsker rolige gåture" />
          <FlexedRow>
            <Image src={dogOne} width="300px" height="200px" />
            <TextContainer>
              <Text bold>2,5 timers foredrag inkl. én pause af 10 min og 30 min tid til spørgsmål</Text>
              <Text>
                  Oplever du din hund "kortslutter" på gåtur i mødet med andre hunde og er ikke til at komme i kontakt med?<br />
                  Bliver gåturen sammen hurtigt mere frustrerende end givende?<br />
                  Ville du ønske du havde konkrete redskaber til at få din hund til at finde ro i mødet med andre?<br />
                  Så giver Dyreadfærdskonsulent Sabrina Svane dig opskriften til den rolige gåtur i dette foredrag! 
              </Text>
              <Text>
                  Jeg afholder flere gange årligt mit populære Helt-Cool forløb som har skabt succes for hundredvis af hunde og deres ejere, med at få mere ro på gåturen.
                  Uanset om det har været den overivrige, hilseglade vovse eller den sensitive, udadreagerede snude, så har jeg fulgt en fast opskrift på at skabe et solidt fundament af kontakt og ro i mødet med andre. 
                  Det er denne opskrift og min ekspertviden om adfærd jeg ønsker at give dig med i dette foredrag.<br />
                  Du vil lære hvordan du:
                  <TextListMark texts={Calm} />
                  <br />
                  <br />
              </Text>
            </TextContainer>
          </FlexedRow>

        </Column>
      </Row>

    </Background>
  </Page>
);

export default Lecture;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
