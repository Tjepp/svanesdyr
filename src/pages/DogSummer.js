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
  LPHeadlineWalk,
  MetaDogSummer,
  ContactPopUp,
  EasyMeList,
} from '../components';
import Responsive from '../components/layout/Responsive';
import {
  OnlineCoverSummer,
  PuppyContinuedFive,
  RecallOne,
  TricksOne,
  CoolThree,
  NailClipSix,
  CoolAgainOne,
  PuppyContinuedOne,
  TricksTwo,
} from '../assets';
import '../components/table/TableCss.css';

const Spotliste = [
  'Hvert kursus varer op til 90 minutter',
  'Det inkluderer 60 minutters undervisning og derefter 30 minutters hygge, snak og socialisering',
  'Der serveres både lunt og koldt at drikke, som kakao, kaffe, te og juice som er med i prisen',
  'Kurserne er for alle hunde i alle aldre',
];

const DogSummer = () => (
  <LandingpageOnline>
    <MetaDogSummer />
    <Background>
      <Row>
        <Column widthPercentage="100%">
          <Image src={OnlineCoverSummer} />
          <br />
          <TitleCenter text="Til dig der ønsker at tilbringe sommerdagene sammen med din dejlige snude" />
          <TextCenter>
            Kom med og brug nogle af de solrige sommerdage i Horsens i godt selskab med andre
            snuder. Tag både din bedre halvdel og børnene med til en hyggelig stund - alle er
            velkomne!
          </TextCenter>
          <TextCenter>Fælles for alle sommerens kurser er:</TextCenter>
          <TextListMark texts={Spotliste} />
          <TextCenter>
            Alle sommerens kurser foregår på træningspladsen Sorthøjvej 40, 8700 Horsens.
            <br />
            Alle kurserne tilbydes af Dyreadfærdskonsulent Sabrina Svane.
          </TextCenter>
          <br />
          <TitleCenter text="Ønsker du at tilmelde dig flere sommerkurser på én gang?" />
          <TextCenter>
            Finder du flere end 3 forskellige kurser i kataloget spændende?
            <br />
            Slip for at tilmelde dig hvert kursus én ad gangen, og book alle de hold du ønsker at
            deltage på ved at sende en mail direkte til Sabrina:
          </TextCenter>
          <ContactPopUp text="TILMELDING til flere sommerkurser på én gang" />
        </Column>
      </Row>
      <br />
      <br />

      <Row>
        <Column widthPercentage="100%">
          <LPHeadlineWalk text="Udbud af sommerkurser" />
        </Column>
      </Row>

      {/* LEGESTUE */}
      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Legestue opdelt efter størrelse" />
          <FlexedRow>
            <Image src={PuppyContinuedFive} width="300px" height="200px" />
            <TextContainer>
              <Text>
                <b>God socialisering under kontrollerede forhold!</b>
                <br />
                Alle får en god oplevelse med hjem, da der tages hensyn til den enkelte hund. Oftest
                startes legen ud med at to hunde lukkes sammen ad gangen, så de kan få lov til at se
                hinanden an. Det gør det nemt at afbryde legen, hvis det bliver for meget for den
                ene hund, eller de har brug for en pause.
                <br />
                Din hund har sin egen personlighed og sin egen præference for leg. Nogle kan godt
                lide at løbe og jage, andre elsker at bryde og være vild. Derfor sættes legetimen
                op, så vi kan se hvilke hunde der passer bedst sammen i legestil.
              </Text>
              <Text>
                <b>Deltagelse pr. snude: 150,- kr.</b>
                <br />
                uanset antal tobenede der er med
              </Text>
              <Text>Max 8 snuder pr. hold.</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Text bold>Tilmelding små racers legestuer:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/kyHe" />
          <br />

          <Text bold>Tilmelding Store racers legestuer:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/kyHu" />
          <br />
        </Column>
      </Row>

      {/* INDKALD */}
      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Indkald begynder og øvet" />
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
              <Text>
                <b>Indkald Øvet</b>
                <br />
                Føler du din hund kommer 9/10 gange? Men nogle gange ignorerer dig når du kalder? På
                øvet gennemgår vi forskellige forstyrrelseslege, som lærer din hund, at selvom der
                er spændende ting at give sig til, så er det stadig FEDT at komme når du kalder!
              </Text>
              <Text>
                <b>Deltagelse pr. snude: 195,- kr.</b>
                <br />
                uanset antal tobenede der er med
              </Text>
              <Text>Max 5 snuder pr. hold.</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Text bold>Tilmelding til Indkaldskursus:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/kO24" />
        </Column>
      </Row>

      {/* FITNESS */}
      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Fitness for alle" />
          <FlexedRow>
            <Image src={TricksOne} width="300px" height="200px" />
            <TextContainer>
              <Text>
                <b>Fokus på god kropskontrol og kropsbevidsthed</b>
                <br />
                Til dig der ønsker at styrke din hunds bevidsthed om sin egen krop! Vi vil gennemgå
                øvelser der fokuserer på kontrol af alle fire poter, forparts- og bagpartskontrol og
                styrke- / balanceopgaver.
              </Text>
              <Text>
                Holdet henvender sig især også til dig der ønsker nye måder at trætte hunden på
                mentalt, gennem små, sjove opgaver, som styrker jeres samarbejde og ikke mindst
                hundens selvtillid. Alle hunde i alle aldre kan deltage.
              </Text>
              <Text>
                <b>Deltagelse pr. snude: 195,- kr.</b>
                <br />
                uanset antal tobenede der er med
              </Text>
              <Text>Max 5 snuder pr. hold.</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Text bold>Tilmelding til Fitness for Alle:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/kO2H" />
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
                <b>Deltagelse pr. snude: 195,- kr.</b>
                <br />
                uanset antal tobenede der er med
              </Text>
              <Text>Max 5 snuder pr. hold.</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Text bold>Tilmelding til Rolige Gåture:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/kO2M" />
        </Column>
      </Row>

      {/* HÅNDTERING */}
      <Row>
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
                <b>Deltagelse pr. snude: 195,- kr.</b>
                <br />
                uanset antal tobenede der er med
              </Text>
              <Text>Max 5 snuder pr. hold.</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Text bold>Tilmelding til Intro til Frivillig Håndtering:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/kOnp" />
        </Column>
      </Row>

      {/* BLIV */}
      <Row>
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
                <b>Deltagelse pr. snude: 195,- kr.</b>
                <br />
                uanset antal tobenede der er med
              </Text>
              <Text>Max 5 snuder pr. hold.</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Text bold>Tilmelding til Bliv!:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/kOnk" />
        </Column>
      </Row>

      {/* TRICKS */}
      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Tricks og Sjov!" />
          <FlexedRow>
            <Image src={TricksTwo} width="300px" height="200px" />
            <TextContainer>
              <Text>
                <b>Det perfekte kursus til barn og hund sammen</b>
                <br />
                Og ikke mindst til dig, som nyder at lære nyt med din hund. Tricks og Sjov lægger
                vægt på Empowerment principperne, hvor hunden selv skal tage <u>initiativ</u> til
                adfærd, være <u>kreativ</u> og have nok <u>gåpåmod</u> til at fortsætte.
              </Text>
              <Text>
                Vi gennemgår flere tricks og øvelser, som giver succes, samarbejdsglæde og ikke
                mindst et smil på læben til dig der holder snoren. Du vil blandt andet lære hvordan
                du lærer din hund Zig-zag mellem ben, kravle og snurre-rundt.
              </Text>
              <Text>
                <b>Deltagelse pr. snude: 195,- kr.</b>
                <br />
                uanset antal tobenede der er med
              </Text>
              <Text>Max 5 snuder pr. hold.</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Text bold>Tilmelding til Tricks og Sjov:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/kOnu" />
        </Column>
      </Row>
      <br />
      <br />
      <Row>
        <Column widthPercentage="100%">
          <LPHeadlineWalk text="Miljømøder" />
        </Column>
      </Row>

      {/* MILJØ */}
      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Miljøtræning for alle aldre" />
          <FlexedRow>
            <Image src={CoolAgainOne} width="300px" height="200px" />
            <TextContainer>
              <Text>
                <b>Få kyndig vejledning i at lære din hund at lystre i nye miljøer</b>
                <br />
                Miljøholdet fokuserer på at indlære kontakt og ro, selv i nye miljøer. Du vil få
                vejledning i at øve selvkontrol, kontaktlege og gå pænt nær andre hunde og
                forskellige forstyrrelser, som områderne byder på. Vi kan møde alt fra fremmede
                hunde, voksne, børn, cyklister, jogger mv.
              </Text>
              <Text>
                <b>Deltagelse pr. snude: 150,- kr.</b>
                <br />
                Miljømøderne varer op til 60 minutter og alle aldre kan deltage, hvalpe, som voksne
                snuder. Max 5 snuder pr. hold.
              </Text>
              <Text>
                Træningen foregår på én af følgende lokationer i Horsens:
                <br />
                <i>Bygholm Park</i>, 8700 Horsens med gratis parkering ved siden af Scandic Hotel
                <br />
                <i>Lunden</i>, 8700 Horsens med gratis parkering ved siden af Horsens Kunstmuseum
              </Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Text bold>Tilmelding til Miljømøder:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/kOnf" />
        </Column>
      </Row>

      <br />
      <br />
    </Background>
  </LandingpageOnline>
);

export default DogSummer;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
