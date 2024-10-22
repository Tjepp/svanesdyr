import React from 'react';
import styled from 'styled-components';

import {
  LandingpageOnline,
  Column,
  TitleCenter,
  Text,
  TextCenter,
  TextContainer,
  Image,
  Row,
  FlexedRow,
  TextListMark,
  MetaDogSpot,
  EasyMeList,
} from '../components';
import Responsive from '../components/layout/Responsive';
import {
  OnlineCoverSpot,
  RecallOne,
  CoolThree,
  // NailClipSix,
  PuppySix,
  CoolSix,
} from '../assets';
import '../components/table/TableCss.css';

const Spotliste = [
  'Hvert kursus varer op til 60 minutter',
  'Der er max 5 hunde pr. kursus',
  'Kurserne er for alle hunde i alle aldre',
  'Alle spotkurser afholdes af Dyreadfærdskonsulent Sabrina Svane',
];

const DogSpot = () => (
  <LandingpageOnline>
    <MetaDogSpot />
    <Background>
      <Row>
        <Column widthPercentage="100%">
          <Image src={OnlineCoverSpot} />
          <br />
          <TitleCenter text="Kommende spotkurser hos Svanes Dyr i Nim, nær Horsens" />
          <TextCenter>
            Til dig der ønsker at udvide samarbejdet med din hund, men ikke har mulighed for fast holddeltagelse.
            <br />
            Spotkurserne har nemlig kun én mødegang med et bestemt træningsfokus.
            <br />
            Tilmeld dig lige dét emne du brænder for at lære mere om, eller tilmeld dig alle de spotkurser du synes dig og din hund skal med på!
          </TextCenter>
          <TextCenter>Fælles for alle spotkurser er:
          <TextListMark texts={Spotliste} />
          </TextCenter>
          <TextCenter>
            Alle spotkurser afholdes på træningspladsen Horsensvej 31, Nim, 8740 Brædstrup.
            <br />
            Hvis vejret er dårligt, er der mulighed for at gå indendøre.
          </TextCenter>
          <br />
        </Column>
      </Row>
      <br />
      <br />

      {/* HVERDAGSAKTIVERING */}
      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Inspiration til hverdagsaktivering" />
          <FlexedRow>
            <Image src={PuppySix} width="300px" height="200px" />
            <TextContainer>
              <Text>
                <b>Få velstimulerende opgaver der giver en glad og træt hund</b>
                <br />
                Inspiration til hverdagens aktiviteter, der kan trætte din hund godt i hovedet og undgå den finder på unoder.
                Vi kigger på aktivering, som i kan være fælles om, der oveni styrker jeres samarbejde.
                Ikke mindst gennemgår vi aktiveringsopgaver til de dage hvor det skal gå hurtigt, hvor hunden kan underholde sig selv mens du får klaret andre gøremål.
              </Text>
              <Text>
                <b>Deltagelse pr. snude: 190,- kr.</b>
                <br />
                uanset antal tobenede der er med
              </Text>
              <Text>Max 5 snuder pr. hold.</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Text bold>Tilmelding til Inspiration til hverdagsaktivering:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/CUEu" />
        </Column>
      </Row>

      {/* INDKALD */}
      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Indkald for begyndere" />
          <FlexedRow>
            <Image src={RecallOne} width="300px" height="200px" />
            <TextContainer>
              <Text>
                <b>Indkald Basis</b>
                <br />
                Basisholdet henvender sig til alle hunde i alle aldre, der har brug for et sikkert
                indkald. Du vil lære at skabe stor motivation i din hund ved at bruge effektive
                belønningsteknikker, så din hund får en høj forventning til dit fantastiske indkald.
                Vi vil gennemgå lette og sjove lege, som får din hund til at synes at indkald er en
                FEST.
              </Text>
              {/* <Text>
                <b>Indkald Øvet</b>
                <br />
                Føler du din hund kommer 9/10 gange? Men nogle gange ignorerer dig når du kalder? På
                øvet gennemgår vi forskellige forstyrrelseslege, som lærer din hund, at selvom der
                er spændende ting at give sig til, så er det stadig FEDT at komme når du kalder!
              </Text> */}
              <Text>
                <b>Deltagelse pr. snude: 190,- kr.</b>
                <br />
                uanset antal tobenede der er med
              </Text>
              <Text>Max 5 snuder pr. hold.</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Text bold>Tilmelding til Indkaldskursus:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/CUEH" />
        </Column>
      </Row>

      {/* GÅTURE */}
      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Rolige gåture" />
          <FlexedRow>
            <Image src={CoolThree} width="300px" height="200px" />
            <TextContainer>
              <Text>
                <b>Med fokus på gå-pænt-teknikker og selvkontrol</b>
                <br />
                Til dig der ønsker at få mere afslappede gåture, med en hund der kan finde ro og gå
                pænt i snor uden at hive armen af dig. Holdet henvender sig til alle hunde i alle
                aldre, som har tendens til at stresse op på en gåtur. Du får redskaberne til at
                skabe en kontaktsøgende og rolig hund, gennem forskellige øvelser, der også vil
                styrke jeres fælles samarbejde.
              </Text>
              <Text>
                <b>Deltagelse pr. snude: 190,- kr.</b>
                <br />
                uanset antal tobenede der er med
              </Text>
              <Text>Max 5 snuder pr. hold.</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Text bold>Tilmelding til Rolige Gåture:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/CU9F" />
        </Column>
      </Row>

      {/* HILSE PÆNT */}
      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Hilse pænt" />
          <FlexedRow>
            <Image src={CoolSix} width="300px" height="200px" />
            <TextContainer>
              <Text>
                <b>Fokus på at øve ikke-hoppe-op og hilse roligt</b>
                <br />
                Til dig der har en ivrig hund, som bare eeeelsker at hilse på andre.
              </Text>
              <Text>
                Vi gennemgår teknikker til at lære hunden at blive på jorden med alle 4 poter, når der skal hilses på mennesker. 
                Derudover kigger vi også på, hvordan vi tillærer hunden at hilse roligt på andre hunde - uden at bruse fremad med stram line.
                Du vil gå fra dagen med gode teknikker til at lære din hund at finde roen i forbindelse med social kontakt med andre.
              </Text>
              <Text>
                <b>Deltagelse pr. snude: 190,- kr.</b>
                <br />
                uanset antal tobenede der er med
              </Text>
              <Text>Max 5 snuder pr. hold.</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Text bold>Tilmelding til Hilse pænt:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/CU9P" />
        </Column>
      </Row>

      {/* HÅNDTERING */}
      {/* <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Introduktion til frivillig håndtering" />
          <FlexedRow>
            <Image src={NailClipSix} width="300px" height="200px" />
            <TextContainer>
              <Text>
                <b>Få samtykke til den daglige pleje</b>
                <br />
                Du får redskaberne til hvordan du træner frivillig adfærd i hunden, som skal være
                startsignalet til hvornår håndtering kan begynde. Din hund lærer altså at sige ”jeg
                er klar” og ”pause, tak” under håndtering, og du lærer at aflæse hvornår din hund er
                tryg og utryg. Vi gennemgår Chirag Patels The Bucket Game og hvordan du indlære
                start/slut signaler.
              </Text>
              <Text>
                <b>Deltagelse pr. snude: 190,- kr.</b>
                <br />
                uanset antal tobenede der er med
              </Text>
              <Text>Max 5 snuder pr. hold.</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Text bold>Tilmelding til Intro til Frivillig Håndtering:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/o8eg" />
        </Column>
      </Row> */}

      {/* BLIV */}
      {/* <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Bliv!" />
          <FlexedRow>
            <Image src={PuppyContinuedOne} width="300px" height="200px" />
            <TextContainer>
              <Text>
                <b>Bliv i sit og dæk SELV med forstyrrelser</b>
                <br />
                Ønsker du at få en stensikker placering fra din hund, når du beder den om at sætte
                sig eller lægge sig? Måske har du en drøm om at kunne få den til at blive liggende i
                sin kurv, selvom der er gæster på besøg? Dette kursus giver dig redskaberne til at
                få fjederen ud af hundens ben og en god bliv, uanset om du beder om sit eller dæk.
                Vi kigger på konceptet selv med forstyrrelser i brug!
              </Text>
              <Text>
                <b>Deltagelse pr. snude: 190,- kr.</b>
                <br />
                uanset antal tobenede der er med
              </Text>
              <Text>Max 5 snuder pr. hold.</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Text bold>Tilmelding til Bliv!:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/o8zC" />
        </Column>
      </Row> */}

      <br />
      <br />
    </Background>
  </LandingpageOnline>
);

export default DogSpot;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
