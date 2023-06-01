import React from 'react';
import styled from 'styled-components';

import {
  LandingpageOnline,
  Column,
  TitleCenter,
  Text,
  TextCenter,
  TextContainer,
  TextList,
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
  // TricksOne,
  CoolThree,
  NailClipSix,
  CoolAgainOne,
  PuppySeven,
  PuppyContinuedOne,
  TricksTwo,
  NWGary,
  MonaRally,
} from '../assets';
import '../components/table/TableCss.css';

const Spotliste = [
  'Hvert kursus varer op til 90 minutter',
  'Det inkluderer 60 minutters undervisning og derefter 30 minutters hygge, snak og socialisering',
  'Der serveres både lunt og koldt at drikke, som kakao, kaffe, te og juice som er med i prisen',
  'Kurserne er for alle hunde i alle aldre',
  'Alle Spot-kurser afholdes af Dyreadfærdskonsulent Sabrina Svane',
];

const Flerdagesliste = [
  'Hvert kursus varer op til 4 dage',
  'Hver dag mødes vi i op til 90 minutter',
  'Der serveres både lunt og koldt at drikke, som kakao, kaffe, te og juice som er med i prisen',
  'Kurserne er for alle hunde i alle aldre',
];

const PlayTypes = [
  'Små racer: Max skulderhøjde 30 cm.',
  'Mellemstore racer: Skulderhøjde fra 30 - 60 cm.',
  'Store racer: Skulderhøjde fra 60 cm og opefter',
];

const PlayRoom = [
  'Små racer: Max 10 hunde',
  'Mellemstore racer: Max 8 hunde',
  'Store racer: Max 6 hunde',
];

const DogSummer = () => (
  <LandingpageOnline>
    <MetaDogSummer />
    <Background>
      <Row>
        <Column widthPercentage="100%">
          <Image src={OnlineCoverSummer} />
          <br />
          <TitleCenter text="Til dig der ønsker at tilbringe sommerdagene i uge 29 eller 30 sammen med din dejlige snude" />
          <TextCenter>
            Kom med og brug nogle af de solrige sommerdage i Horsens i godt selskab med andre
            snuder. Tag både din bedre halvdel og børnene med til en hyggelig stund - alle er
            velkomne!
          </TextCenter>
          <TextCenter bold>
            Der udbydes igen i år de populære spot-kurser og som noget nyt flerdages temakurser!
          </TextCenter>
          <TextCenter>Fælles for alle SPOT-kurser er:
          <TextListMark texts={Spotliste} />
          </TextCenter>
          <TextCenter>Fælles for alle FLERDAGES-kurser er:
          <TextListMark texts={Flerdagesliste} />
          </TextCenter>
          <TextCenter>
            Alle sommerens kurser foregår på træningspladsen Sorthøjvej 40, 8700 Horsens.
          </TextCenter>
          <br />
          <TitleCenter text="Ønsker du at tilmelde dig flere sommerkurser på én gang?" />
          <TextCenter>
            Finder du flere end 3 forskellige kurser i kataloget spændende?
            <br />
            Slip for at tilmelde dig hvert kursus én ad gangen, og book alle de hold du ønsker at
            deltage på ved at sende en mail direkte til Sabrina, hvor du oplyser hvad du vil med på:
          </TextCenter>
          <ContactPopUp text="TILMELDING til flere sommerkurser på én gang" />
        </Column>
      </Row>
      <br />
      <br />

      <Row>
        <Column widthPercentage="100%">
          <LPHeadlineWalk text="Udbud af sommerens SPOT-kurser" />
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
                ene hund, eller de har brug for en pause. Din hund har sin egen præference for leg. Nogle kan godt
                lide at løbe og jage, andre elsker at bryde og være vild. Derfor sættes legetimen
                op, så vi kan se hvilke hunde der passer bedst sammen i legestil.
              </Text>
              <Text>
              <b>Legestuerne inddeles i 3 typer:</b>
              <TextList texts={PlayTypes} />
            </Text>
            <Text>
              <b>Antal pladser til legestuerne</b>
              <br />
              For at forholdene er kontrollerede er der begrænsning på hvor mange pladser hver legestue har til rådighed pr. gang:
              <TextList texts={PlayRoom} />
            </Text>
              <Text>
                <b>Deltagelse pr. snude: 175,- kr.</b>
                <br />
                uanset antal tobenede der er med
              </Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Text bold>Tilmelding til legestue:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/WvLZ" />
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
                <b>Deltagelse pr. snude: 245,- kr.</b>
                <br />
                uanset antal tobenede der er med
              </Text>
              <Text>Max 5 snuder pr. hold.</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Text bold>Tilmelding til Indkaldskursus:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/WvLo" />
        </Column>
      </Row>

      {/* FITNESS */}
      {/* <Row>
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
      </Row> */}

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
                <b>Deltagelse pr. snude: 245,- kr.</b>
                <br />
                uanset antal tobenede der er med
              </Text>
              <Text>Max 5 snuder pr. hold.</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Text bold>Tilmelding til Rolige Gåture:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/WvLf" />
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
                <b>Deltagelse pr. snude: 245,- kr.</b>
                <br />
                uanset antal tobenede der er med
              </Text>
              <Text>Max 5 snuder pr. hold.</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Text bold>Tilmelding til Intro til Frivillig Håndtering:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/WvLQ" />
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
                <b>Deltagelse pr. snude: 245,- kr.</b>
                <br />
                uanset antal tobenede der er med
              </Text>
              <Text>Max 5 snuder pr. hold.</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Text bold>Tilmelding til Bliv!:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/WvLy" />
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
                <b>Deltagelse pr. snude: 245,- kr.</b>
                <br />
                uanset antal tobenede der er med
              </Text>
              <Text>Max 5 snuder pr. hold.</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Text bold>Tilmelding til Tricks og Sjov:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/WvkC" />
        </Column>
      </Row>
      <br />
      <br />
      <Row>
        <Column widthPercentage="100%">
          <LPHeadlineWalk text="Udbud af sommerens FLERDAGES-kurser" />
        </Column>
      </Row>

      {/* REAKTIV TIL RO */}
      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Fra Reaktiv til Ro" />
          <FlexedRow>
            <Image src={CoolAgainOne} width="300px" height="200px" />
            <TextContainer>
              <Text>
                <b>Få kyndig vejledning i at lære din hund at finde ro nær andre hunde</b>
                <br />
                <i>Underviser: Dyreadfærdskonsulent Sabrina Svane</i>
                <br />
                Fra reaktiv til ro forløbet fokuserer på at indlære kontakt og ro i nærværet af andre hunde. 
                Du vil få personlig vejledning i hvordan du hjælper din hund med at finde ro nær andre hunde,
                herunder hvordan du sikrer dig din hund ikke stresser for meget og hvilke teknikker du kan tage i brug.
                Du vil få hjemmeopgaver med hvor du kan øve selvkontrol, kontaktlege og følge-med i snor. 
                <b> Bemærk</b> at du får givet teknikkerne til at arbejde videre derhjemme - du vil ikke komme helt i mål på 4 dage.
              </Text>
              <Text>
                <b>Deltagelse pr. snude: 975,- kr.</b>
                <br />
                Max 4 snuder pr. hold.<br />
                <i>Bemærk din hund skal være tryg ved at vente i bilen</i>.<br />
                Kurset strækker sig over 4 dage med op til 60 minutters undervisning med hundene i spil hver dag. 
                Derefter har vi 30 minutter til spørgsmål og opfølgning, hvor hundene hviler i bilerne. Kurset henvender sig til hunde i alle aldre. 
              </Text>
            </TextContainer>
            {/* <TextContainer>
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
            </TextContainer> */}
          </FlexedRow>
          <br />
          <Text bold>Tilmelding til Fra Reaktiv til RO:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/WvWW" />
        </Column>
      </Row>

      
      {/* INTENSIV HVALPEKURSUS */}
      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Intensivt Hvalpehold" />
          <FlexedRow>
            <Image src={PuppySeven} width="300px" height="200px" />
            <TextContainer>
              <Text>
                <b>Få svar på alle dine spørgsmål om dit nye familiemedlem</b>
                <br />
                <i>Underviser: Dyreadfærdskonsulent Sabrina Svane</i>
                <br />
                Ønsker du at skabe et stærkt tillidsfuld bånd med din hvalp, gennem masser af succesoplevelser, så er dette rette hold for dig. 
                Vi vil lægge fokus på miljøtræning, håndtering og socialisering af din hvalp, så du får en følelsesmæssig robust hvalp, der kan tackle hverdagens udfordringer med ro og overskud.
                Du vil også få redskaberne til at håndtere hvalpebideri, gå pænt uden at trække, møde andre hunde og mennesker i ro og hvordan du starter på jeres alene-hjemme træning.
              </Text>
              <Text>
                <b>Deltagelse pr. snude: 975,- kr. inkl. valgfri tilmelding til én af legestuedagene</b>
                <br />
                Max 5 snuder pr. hold.<br />
                Kurset strækker sig over 4 dage med op til 60 minutters undervisning hver dag. 
                Derefter har vi 30 minutter til individuelle spørgsmål og ikke mindst socialisering mellem snuderne. Kurset henvender sig til hvalpe i alderen fra 8 uger til 6 mdr. 
              </Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Text bold>Tilmelding til Intensivt Hvalpehold:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/WvWR" />
        </Column>
      </Row>


      {/* NOSE WORK MED ANJA */}
      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Nose Work med Anja Nielsen" />
          <FlexedRow>
            <Image src={NWGary} width="300px" height="200px" />
            <TextContainer>
              <Text>
                <b>Sjove udfordringer til den øvede Nose Work hund (lavendelsøg)</b>
                <br />
                <i>Underviser: Hundetræner og Nose Work Instruktør Anja Nielsen fra Anja&Hund</i>
                <br />
                Nu er det nørdetid! På dette kursus kigger vi på de mere avancerede søg som høje søg, tærskelsøg og detaljesøg. 
                I det omfang der er interesse for det, vil vi også kigge på konkurrenceregler.
                Vi træner på de 4 momenter i Nose Work: Indendørssøg, Udendørssøg, Køretøjssøg og Beholdersøg.
                Vi ser på søgemønstre og arbejder med fastholdelse ved kilde.
              </Text>
              <Text>
                <b>Deltagelse pr. snude: 945,- kr.</b>
                <br />
                <i>Bemærk din hund skal være duftsikker på lavendel og har allerede søgeglæde.</i>
                <br />
                Max 5 snuder pr. hold.<br />
                Kurset strækker sig over 3 dage med op til 90 minutters undervisning hver dag.
                Kurset henvender sig til hunde i alle aldre
              </Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Text bold>Tilmelding til Nose Work for øvede:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/WvWr" />
        </Column>
      </Row>


      {/* RALLY MED MONA */}
      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Rally-Lydighed med Mona Lindhardt" />
          <FlexedRow>
            <Image src={MonaRally} width="300px" height="200px" />
            <TextContainer>
              <Text>
                <b>Til dig som vil snuse til Rally (begynder) og til dig der vil have nye udfordringer (øvet)</b>
                <br />
                <i>Underviser: Rally-Lydighed instruktør Mona Lindhardt</i>
                <br />
                Til Rally-Lydighed er der fokus på lydighedstræningen, uden præcisionsarbejdet. 
                Det største mål med Rally er nemlig at din hund udviser glæde og villighed til at samarbejde.
                I Rally-Lydighed skal dig og din hund udfører forskellige opgaver sammen, hvor opgaverne er listet op på skiltene på banen.
                Der findes omkring 130 forskellige skilte med forskellige samarbejdsøvelser, så holdet giver rig mulighed for at finde på nye, sjove opgaver sammen med din hund.
              </Text>
              <Text>
                <b>Deltagelse pr. snude: 795,- kr.</b>
                <br />
                <i>For at deltage i Rally-Lydighed skal din hund kunne træne med andre hunde omkring sig.</i>
                <br />
                Max 5 snuder pr. hold.<br />
                Kurset strækker sig over 3 dage med op til 60 minutters undervisning hver dag.
                Derefter har vi 30 minutter til spørgsmål og ikke mindst hygge mellem to- og firbenede.
                Kurset henvender sig til hunde i alle aldre
              </Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Text bold>Tilmelding til Rally:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/WvLT" />
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
