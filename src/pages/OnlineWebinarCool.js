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
  TextList,
  TextListMark,
  LPHeadlineWebinar,
  ButtonOnline,
  MetaOnlineWebinarCool,
  TextListArrow,
} from '../components';
import Responsive from '../components/layout/Responsive';
import { OnlineCoverCool, FrontNoOne, TestiOnlineWalkOne, TestiOnlineWalkThree } from '../assets';
import '../components/table/TableCss.css';

const LPstep3 = [
  'Du er træt af din hund skal kommentere alle i møder?',
  'Du er frustreret over din hund ikke lytter til dig når andre er nær?',
  'Du længes efter at kunne nyde gåturen uden stress og uro?',
  'Du ved ikke helt hvordan du skal få bugt med din hunds dårlige opførsel?',
];

const LPstep5 = [
  'aflæser din hunds tegn på stress, så du lettere kan se hvornår den føler sig presset',
  'undgår at din hund kortslutter, og fortsat kan lytte efter hvad du siger',
  'sætter din hund op til succes, så i kan få flere og flere dejlige gåture sammen',
  'tackler mødet med andre hunde i ro og mag',
];

const LPstep8 = [
  'Konkret øvelse i kan træne hjemme, som styrker din hunds kontak til dig i mødet med andre',
  '3 simple metoder til at indlære ro i mødet med andre hunde',
  'Fotoalbumsprincippet, der giver dig indsigt i din hunds hukommelse, så i fremadrettet kan få succes uanset hvad!',
];

const OnlineWebinarCool = () => (
  <LandingpageOnline>
    <MetaOnlineWebinarCool />
    <Background>
      <Row>
        <Column widthPercentage="100%">
          <Image src={OnlineCoverCool} />
          <br />
          <TitleCenter text="Et online webinar til dig der ønsket en afslappet hund, der kan nyde gåturen sammen med dig" />
          <TextCenter>
            Oplever du din hund "kortslutter" på gåtur i mødet med andre hunde og er ikke til at
            komme i kontakt med?
          </TextCenter>
          <TextCenter>Bliver gåturen sammen hurtigt mere frustrerende end givende?</TextCenter>
          <TextCenter>
            Ville du ønske du havde konkrete redskaber til at få din hund til at finde ro i mødet
            med andre?
          </TextCenter>
          <TextCenter>
            Få svar på hvad du konkret kan gøre, når Dyreadfærdskonsulent Sabrina Svane går LIVE og
            giver dig opskriften på at skabe ro for din hund i mødet med andre hunde.
          </TextCenter>
          {/* <TextCenter>
            Få svar på hvad du konkret kan gøre, når Dyreadfærdskonsulent Sabrina Svane giver dig opskriften på at skabe ro for din hund i mødet med andre hunde.
          </TextCenter> */}
        </Column>
      </Row>

      <ButtonOnline
        text="Jeg er klar! Tag mig til tilmeldingssiden"
        onClick={() => window.open('https://ezme.io/c/x1S/OVO7', '_blank')}
      ></ButtonOnline>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <TitleCenter text="Kan du nikke genkendende til bare ét af følgende udsagn;" />
          <TextListArrow texts={LPstep3} />
        </Column>
      </Row>

      <Row marginBottom="25px">
        <Column widthPercentage="100%">
          <TitleCenter text="Så har jeg både en god og en dårlig nyhed til dig.." />
          <TextCenter>
            .. Den dårlige nyhed er, at din hund reagerer på andre hunde, fordi du fortsat smider
            den i situationer den ikke kan overskue. Det er desværre et smertefuldt faktum, at mange
            hunde reagerer på andre hunde, fordi deres diskrete forsøg på at undgå situationen
            bliver overset. Manglende vejledning og følelsen af ikke at blive hørt resulterer i
            negative reaktioner.
          </TextCenter>
          <TextCenter>
            .. Den gode nyhed er, at
            <b> DU </b>
            kan lære hvordan du skaber succes for din hund, så den føler sig set og vejledt! Med de
            enkelte, afgørende metoder du får på webinaret, kan du undgå frustration og stress for
            jer begge og lykkedes med at holde din hunds lytteklapper ude, så i kan få den rolige
            gåtur du drømmer om!
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <LPHeadlineWebinar text="På webinaret vil du lære hvordan du;" />
          <TextList texts={LPstep5} />
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Udover alt dette, kan du forvente at få helt konkrete værktøjer med fra webinaret:" />
          <TextListMark texts={LPstep8} />
          <TextCenter>
            og ikke mindst mulighed for at få svar på nogle af dine brændende spørgsmål, da der
            afsættes ½ time til spørgsmål.
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <LPHeadlineWebinar text="Dét har andre fået ud af deltagelse på kurset:" />
      </Row>
      <Row>
        <Column widthPercentage="80%">
          <TitleCenter text="”Mange af de ting, du har sagt, har været en kæmpe øjenåbner. Nogle ting var jeg klar over, men aldrig tillagt så stor betydning, og andre ting var helt nye (som det at omgivelser er så vigtige)”" />
          <FlexedRow>
            <Image src={TestiOnlineWalkOne} width="200px" height="300px" />
            <TextContainer>
              <Text>
                Mest bed jeg mærke i, at hunden skal <b>guides</b> til den ønskede adfærd, og dermed
                ikke “bevidst” er ulydig (jeg tænker ofte på udtrykket “at hun tilbyder en adfærd”),
                at det er mig, der skal være den voksne og pålidelige, så hun ikke selv skal tage
                stilling til andre hunde og mennesker, men i stedet tjekke ind hos mig.
              </Text>
              <Text>
                Vi havde også meget stor glæde af din fortælling om stress. Det var en af de ting,
                vi havde observeret, men som først rigtig blev tydeligt i min bevidsthed, da du
                viste stress-trappen og dermed synliggjorde det. Og så var det en kæmpe
                overraskelse, at hunde “tager billeder” og dermed skal trænes forskellige steder.
                Jeg har altid undret mig over, at Karla ikke kunne de samme ting hjemme som til
                træning. Men det gav pludselig mening.
              </Text>
              <Text>
                Vi har brugt det du har fortalt meget. Det har virkelig gjort en forskel for hunden
                og os ejere!
              </Text>
              <Text>- Sanne Guldholdt og Karla</Text>
            </TextContainer>
          </FlexedRow>
        </Column>
      </Row>
      <Row>
        <Column widthPercentage="80%">
          <TitleCenter text=" ”For en måned siden var jeg på webinar med Svanes Dyr, og i dag virker hun allerede meget gladere og mere afslappet.” " />
          <FlexedRow>
            <Image src={TestiOnlineWalkThree} width="200px" height="300px" />
            <TextContainer>
              <Text>
                Jeg har to hunde, som jeg nok har forsømt lidt i træning, så begge har fået nogle
                unoder, som jeg ikke lige kunne overskue at komme til livs. Hende på billedet her,
                var blevet mest irriterende at gå med. Hun trak på vej ud og gad ikke med hjem, hun
                reagerede underligt på mange vi mødte, både folk med og uden hund.
              </Text>
              <Text>
                En måned (og MANGE godbidder) senere. Hun er nu en ren fornøjelse at gå med. Hver
                gåtur overrasker mig. Hun søger mig (og mine godbidder) hele tiden, hun trækker
                sjældent, følger trop og når vi møder andre på vejen kan jeg nemt fange hendes
                opmærksomhed. Og hun virker meget gladere og mere afslappet.
              </Text>
              <Text>
                Der er stadig en masse at arbejde med. Men hold nu fast hvor gik det stærkt med
                hende her!
              </Text>
              <Text>- Katrine Edelbo</Text>
            </TextContainer>
          </FlexedRow>
        </Column>
      </Row>

      <Row>
        <TitleCenter showHorizontalRuler />
      </Row>

      <Row>
        <Column widthPercentage="80%">
          <TitleCenter text="Undervisningen leveres af din erfarne Dyreadfærdskonsulent" />
          <FlexedRow>
            <Image src={FrontNoOne} width="300px" height="200px" />
            <TextContainer>
              <Text bold>Sabrina Svane</Text>
              <Text>
                Jeg er indehaver af Svanes Dyr, hvor jeg flere gange årligt afholder mine populære
                Helt-Cool og Reaktiv til Ro forløb som har skabt succes for hundredvis af hunde og
                deres ejere, med at få mere ro på gåturen.
              </Text>
              <Text>
                Uanset om det har været den overivrige, hilseglade vovse eller den sensitive,
                udadreagerede snude, så har jeg fulgt en fast opskrift på at skabe et solidt
                fundament af kontakt og ro i mødet med andre. Det er denne opskrift og min
                ekspertviden om adfærd jeg ønsker at give dig med i dette webinar.
              </Text>
            </TextContainer>
          </FlexedRow>
        </Column>
      </Row>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <TitleCenter text="Din investering i at få mindre stressfyldte og mere afslappede gåture med din hund:" />
          <TitleCenter color="#008037" text="Kun 249 kr. inkl. moms" />
          <TextCenter>
            Hvilket er billigere end at købe en bog om adfærd, som kan give en overflod af
            information uden at du får konkrete værktøjer til netop gåturene og mødet med andre
            hunde.
          </TextCenter>
        </Column>
      </Row>

      <ButtonOnline
        text="Jeg er klar på at få mere ro på gåturen!"
        onClick={() => window.open('https://ezme.io/c/x1S/OVO7', '_blank')}
      ></ButtonOnline>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <TextCenter italic>
            Bemærk at din tilmelding er bindende og beløb refunderes ikke
          </TextCenter>
        </Column>
      </Row>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <LPHeadlineWebinar text="Sådan foregår webinaret" />
          {/* <LPHeadlineWebinar text="Sådan får du adgang til webinaret" /> */}
          <br />
          <br />
          <TitleCenter text="LIVE webinar på Zoom!" />
          {/* <TitleCenter text="Webinaret ligger optaget i en lukket facebookgruppe med adgang ÅRET UD!" /> */}
          <TextCenter>
            Straks efter køb vil du få tilsendt en mail med bekræftelse på din tilmelding.
            <br />
            Få dage før vi skal ses vil du modtage en ny mail, med link til Zoom, hvor webinaret
            afholdes. I denne mail vil du også modtage slides fra webinarets fremvisning, som du kan
            downloade og printe ud efter ønske. Disse slides har du til evigt eje efter download.
          </TextCenter>
          {/* <TextCenter bold>
            Der er i øjeblikket ingen ny dato for næste webinar afholdelse.
          </TextCenter> */}
          <TextCenter bold>
            Webinaret bliver afholdt tirsdag den 3. marts 2026 fra kl. 19.00 - 21.30.
          </TextCenter>
          {/* <TextCenter>
            Jeg var LIVE på denne dato, derfor vil du i webinarets forløb også opleve at jeg svarer på spørgsmål fra deltagerne på dagen.<br />
            Du får derfor ekstra fif og gode råd med i mine svar på spørgsmålene.
          </TextCenter> */}
          <TextCenter>
            Der er afsat 2 timer til gennemgang af webinarets materiale, hvor der vil være billeder
            og videoer undervejs så du får et godt indblik i metoderne du skal praktisere hjemme.
            <br />
            Undervejs vil der være 10 minutters pause til at hente forfriskninger.
            <br />
            Vi slutter webinaret af med ½ time afsat til spørgsmål, som du kan stille direkte i
            kommentarsporet.
          </TextCenter>
          <TextCenter>
            Kan du ikke være med på selve dagen?
            <br />
            Fortvivl ikke!
            <br />
            Webinaret optages og bliver sendt ud til dig efterfølgende!
          </TextCenter>
          {/* <TextCenter bold>
            Du har adgang til frit at se eller gense webinaret frem til og med den 31. december 2024.
          </TextCenter> */}
        </Column>
      </Row>
      <br />

      <ButtonOnline
        text="Ja tak! Jeg skal med!"
        onClick={() => window.open('https://ezme.io/c/x1S/OVO7', '_blank')}
      ></ButtonOnline>
      <br />
      <br />
    </Background>
  </LandingpageOnline>
);

export default OnlineWebinarCool;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
