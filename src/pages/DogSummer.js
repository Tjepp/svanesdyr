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
  TricksOne,
  CoolThree,
  // NailClipSix,
  // CoolAgainOne,
  // PuppySeven,
  // PuppyContinuedOne,
  TricksTwo,
  NWGary,
  PuppySix,
  CoolSix,
} from '../assets';
import '../components/table/TableCss.css';

const Spotliste = [
  'Hvert kursus varer op til 90 minutter',
  'Det inkluderer 60 minutters undervisning og derefter 30 minutters hygge, snak og socialisering',
  'Der serveres både lunt og koldt at drikke, som kakao, kaffe, te og juice som er med i prisen',
  'Kurserne er for alle hunde i alle aldre',
  'Alle sommerkurser afholdes af Dyreadfærdskonsulent Sabrina Svane',
];


const PlayTypes = [
  'Små racer: Max skulderhøjde 30 cm.',
  'Mellemstore racer: Skulderhøjde fra 30 - 50 cm.',
  'Store racer: Skulderhøjde fra 50 cm og opefter',
];

const PlayRoom = [
  'Små racer: Max 8 hunde',
  'Mellemstore racer: Max 8 hunde',
  'Store racer: Max 6 hunde',
];

const NW = [
  'Et glas med 50 olie-kontaminerede emner',
  '10 ml lavendelhydrolat',
  'En pakke med filtdutter',
  'Forskellige centrifugerør',
  'En metaldåse med magnet, så du kan arbejde korrekt videre med duften hjemme uden at smitte hele huset',

];

const DogSummer = () => (
  <LandingpageOnline>
    <MetaDogSummer />
    <Background>
      <Row>
        <Column widthPercentage="100%">
          <Image src={OnlineCoverSummer} />
          <br />
          <TitleCenter text="Til dig der ønsker at tilbringe sommerdagene i uge 30 eller 31 sammen med din hund" />
          <TextCenter>
            Kom med og brug nogle af de solrige sommerdage i Nim i godt selskab med andre
            hundesnuder. Tag både din bedre halvdel og børnene med til en hyggelig stund - alle er
            velkomne!
          </TextCenter>
          <TextCenter bold>
            Der udbydes igen i år de populære sommerkurser!
          </TextCenter>
          <TextCenter>Fælles for alle sommerkurser er:
          <TextListMark texts={Spotliste} />
          </TextCenter>
          <TextCenter>
            Alle sommerens kurser foregår på træningspladsen Horsensvej 31, Nim, 8740 Brædstrup.
          </TextCenter>
          <br />
          <TitleCenter text="Er sommerkurset du vil med på fyldt??" />
          <TextCenter>
            Så smid mig en mail på hvilket kursus du gerne vil på venteliste på (og ved rigelig efterspørgsel starter jeg ekstra hold op!):
          </TextCenter>
          <ContactPopUp text="TILMELDING til sommerkursus venteliste" />
        </Column>
      </Row>
      <br />
      <br />

      <Row>
        <Column widthPercentage="100%">
          <LPHeadlineWalk text="Udbud af sommerkurser" />
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
                <b>Deltagelse pr. snude: 295,- kr.</b>
                <br />
                uanset antal tobenede der er med
                <br />
                Prisen inkluderer en skriftlig opsummering på dagens øvelser, til let videretræning derhjemme.
              </Text>
              <Text>Max 5 snuder pr. hold.</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Text bold>Tilmelding til Indkaldskursus:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/CUEH" />
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
                <b>Deltagelse pr. snude: 295,- kr.</b>
                <br />
                uanset antal tobenede der er med
                <br />
                Prisen inkluderer en skriftlig opsummering på dagens øvelser, til let videretræning derhjemme.
              </Text>
              <Text>Max 5 snuder pr. hold.</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Text bold>Tilmelding til Fitness for Alle:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/dmM1" />
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
                <b>Deltagelse pr. snude: 295,- kr.</b>
                <br />
                uanset antal tobenede der er med
                <br />
                Prisen inkluderer en skriftlig opsummering på dagens øvelser, til let videretræning derhjemme.
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
                <b>Deltagelse pr. snude: 295,- kr.</b>
                <br />
                uanset antal tobenede der er med
                <br />
                Prisen inkluderer en skriftlig opsummering på dagens øvelser, til let videretræning derhjemme.
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
                <b>Deltagelse pr. snude: 295,- kr.</b>
                <br />
                uanset antal tobenede der er med
                <br />
                Prisen inkluderer en skriftlig opsummering på dagens øvelser, til let videretræning derhjemme.
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
                <b>Deltagelse pr. snude: 245,- kr.</b>
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
                <b>Deltagelse pr. snude: 295,- kr.</b>
                <br />
                uanset antal tobenede der er med
                <br />
                Prisen inkluderer en skriftlig opsummering på dagens øvelser, til let videretræning derhjemme.
              </Text>
              <Text>Max 5 snuder pr. hold.</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Text bold>Tilmelding til Tricks og Sjov:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/dmMn" />
        </Column>
      </Row>

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
                <b>Deltagelse pr. snude: 295,- kr.</b>
                <br />
                uanset antal tobenede der er med
                <br />
                Prisen inkluderer en skriftlig opsummering på dagens øvelser, til let videretræning derhjemme.
              </Text>
              <Text>Max 5 snuder pr. hold.</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Text bold>Tilmelding til Inspiration til hverdagsaktivering:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/CUEu" />
        </Column>
      </Row>

      {/* NOSE WORK */}
      {/* <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Nose Work Momentsøg" />
          <FlexedRow>
            <Image src={NWGary} width="300px" height="200px" />
            <TextContainer>
              <Text>
                <b>Til hunden der selvsikkert søger på lavendelduft</b>
                <br />
                Vi gennemgår de fire momenter fra klasse 1; køretøjssøg, beholdersøg, indendørssøg og udendørssøg.
                Det primære fokus vil være succesoplevelser og hygge for hunden, samt ejers lineføring og markeringsadfærd hos hunden.
                Interesserede spørgsmål til konkurrenceregler mv. besvares hjertens gerne.
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
          <Text bold>Tilmelding til Nose Work Momentsøg:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/o8zt" />
        </Column>
      </Row> */}

      <br />
      <br />
      <Row>
        <Column widthPercentage="100%">
          <LPHeadlineWalk text="Udbud af sommerens Legestuer" />
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
                <b>Deltagelse pr. snude: 145,- kr.</b>
                <br />
                for 60 minutters legestue, uanset antal tobenede der er med
              </Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Text bold>Tilmelding til legestue:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/o8LW" />
          <br />
          <br />
        </Column>
      </Row>

      {/* REAKTIV TIL RO */}
      {/* <Row>
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
            </TextContainer> */}
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
          {/* </FlexedRow>
          <br />
          <Text bold>Tilmelding til Fra Reaktiv til RO:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/WvWW" />
        </Column>
      </Row> */}
      
      {/* INTENSIV HVALPEKURSUS */}
      {/* <Row>
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
      </Row> */}


      {/* NOSE WORK MED ANJA */}
      <br />
      <br />
      <Row>
        <Column widthPercentage="100%">
          <LPHeadlineWalk text="Nose Work med Anja Nielsen" />
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="4 timers intensiv introduktion til Nose Work - Lad jagten på duften begynde!" />
          <FlexedRow>
            <Image src={NWGary} width="300px" height="200px" />
            <TextContainer>
            <Text>
                <b>Med Hundetræner og Nose Work Instruktør Anja Nielsen fra Anja&Hund</b>
                <br />
                Nu har du muligheden for at få en grundig introduktion til en sportsgren, der giver din hund empowerment - selvtillid, kontrol og velvære.
                Nose Work er næsearbejde sat i system. Det udspringer af professionelt specialsøg, som vi bl.a. kender det fra narkohundes arbejde. 
              </Text>
              <Text>
                Nose Work er en sjov leg for alle hunde uanset alder, race og øvrige træningsbaggrund. Her er plads til alle. 
                Nose Work er også for reaktive hunde, da der altid kun er én hund, der arbejder, mens resten venter i bilerne.
              </Text>
              <Text>
                Kurset er ment som en lyn-introduktion til legen og sporten og vil være en blanding af teori og praksis.
                Efter kurset har du redskaberne til at kunne arbejde hjemme med de forskellige trin, du bliver præsenteret for på introen.
                <br />
                I praksisdelen vil du arbejde med papkassesøg og simpelt indendørssøg. Du får en grundig introduktion til sporten, og kan med din egen hund prøve de første søg. 
                Det gælder om at få et godt fundamentet for det at søge. Du vil lære at forstærke hundens naturlige søgeadfærd, og du vil lære at læse din hunds signaler (naturlige markeringsadfærd).
              </Text>
              <Text>
                Da Nose Work går ud på at lære din hund at finde specifikke dufte overalt - i alle miljøer - vil du på kurset også lære, hvordan du håndterer de forskellige dufte korrekt. I Nose Work arbejder man med 3 forskellige dufte: Lavendel, eukalyptus og anis. Lavendel er den første duft (iflg. konkurrenceprogrammet), og derfor den duft, vi vil koncentrere os om.
                Du vil blive præsenteret for lavendelduften både som æterisk olie og som hydrolat. Du lærer, hvordan du med olie kontaminerer (smitter) emner med duft. Det er vigtigt, at dette gøres korrekt, da du ellers kan spolere meget for dig selv og din hund. Og du lærer, hvordan du kan arbejde med hydrolater.
                Du og din hund får også lov at lave et enkelt søg eller to med parringer (godbid + duft).
              </Text>
              <Text>
                Alle deltagere på kurset vil få udleveret et startkit til videre træning hjemme. Startkittet består af:
                <TextListMark texts={NW} />
                Kurset har plads til max 4 hunde, så der er god tid til hver.
              </Text>
              <Text>
                <b>Deltagelse pr. hund: 1.095,- kr.</b>
                <br />
                <i>Bemærk din hund skal være tryg ved at sidde og vente i bilen, da hundene er på én ad gangen!</i>                
              </Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Text bold>Tilmelding til Introduktion til Nose Work:</Text>
          <EasyMeList src="https://ezme.io/x/x1S/WvWr" />
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
