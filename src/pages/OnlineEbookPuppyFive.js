import React from 'react';
import styled from 'styled-components';

import {
  LandingpageOnline,
  Column,
  MetaOnlineEbookPuppyFive,
  TitleCenter,
  Text,
  TextCenter,
  TextContainer,
  Image,
  Row,
  FlexedRow,
  TextList,
  TextListMark,
  TextListArrow,
  LPHeadlinePuppy,
  ButtonOnline,
} from '../components';
import Responsive from '../components/layout/Responsive';
import {
  FrontNoOne,
  OnlineCoverPuppyFive,
  OnlinePupFive,
  OnlinePupFour,
  OnlinePupThree,
  OnlinePupTwo,
} from '../assets';
import '../components/table/TableCss.css';

const LPstep3 = [
  'Du sætter dig på sofaen, for at lade op efter dagens opgaver',
  'Din hvalp kommer hen og napper dig i buksebenet',
  'Du beder den om at lade være, hvilket starter bjæf og diskussion mellem jer',
  'Du prøver at få fat på din hvalp for at få ro, men den vilde fangeleg går i gang',
  'Efter hvad føles som en evighed sætter du dig igen på sofaen, din hvalp sover, du udmattet og frustreret over konflikten skulle opstå',
];

const LPstep4 = [
  'Du sætter dig på sofaen, for at lade op efter dagens opgaver',
  'Din hvalp kommer hen og putter sig op ad dig for at vise hvad den har fundet',
  'Du aer din hvalp, mens den hygger sig med sit gnav ved din side',
  'Idet din hvalp er færdig med sit gnav går den hen og tager en tår vand',
  'Lige efter lægger den sig fladt på maven og falder i en dyb søvn',
];

const LPstep5 = [
  'helt undgå ulvetimen og få ro sammen med din hvalp, hver dag, igen og igen',
  'opbygge gode rutiner fra start, hvor din hvalp lytter til og overholder dine husregler, så du slipper for at skælde ud',
  'vide hvordan du får din hvalp til at bruge sit legetøj i stedet for dine sko',
  'lære din hvalp at tisse udenfor, fremfor indenfor',
  'få succes for jer begge på gåture, når din hvalp har ro og automatisk søger dig',
  'konkurrere med andre spændende sager på tur, fordi din hvalp synes du er den fedeste i verden at hænge ud med!',
];

const LPstep7 = [
  'Vil skabe den bedste relation til din hvalp, så den synes du er FED at være sammen med, selv når der er legekammerater i nærheden',
  'Ønsker værktøjet til konfliktfri opdragelse, hvor du helt kan undgå skældud og stadig få succes med din hvalp hver dag og igen og igen',
  'Søger den bedste tilgang til miljøtræning og socialisering, uden at få stress over at i skal nå en lang tjekliste',
  'Ønsker konkrete redskaber til at give din hvalp masser af gåpåmod til at møde alt nyt med ophøjet ro',
  'Ønsker konkrete øvelser til at lære hvalpen at finde ro af sig selv, både hjemme og ude på tur',
];

const LPstep8 = [
  'Flyt-Fokus strategien til konfliktfri opdragelse',
  'Formlen på miljøtræning uden stress',
  'Trin-for-trin guide med konkrete øvelser, der lærer din hvalp kontakt og ro på gåturene',
  'Opskriften på ro i hjemmet med stationstræning',
];

const LPstep15 = [
  'Fordi du får mere glæde og ro tilbage til hverdagen. Du kan nyde din hvalp, fremfor at blive frustreret over den.',
  'Fordi du får skabt et stærkere tillidsforhold og øget samarbejdsvillighed med din hvalp. Det kommer ikke kun til gavn på jeres gåture sammen, men også i al anden omgang i har med hinanden i hverdagen.',
  'Fordi dét du lærer kan bruges i mange sammenhænge, hvor du ønsker at din hvalp gør som du siger. Du lærer at se på din hvalps adfærd fra en anden vinkel, så du ved hvad du kan gøre for at skabe succes. Det vil gøre al jeres træning fremadrettet lettere og mere succesfuld.',
];

const OnlineEbookPuppyFive = () => (
  <LandingpageOnline>
    <MetaOnlineEbookPuppyFive />

    <Background>
      <Row>
        <Column widthPercentage="100%">
          <Image src={OnlineCoverPuppyFive} />
          <br />
          <TitleCenter text="Til dig der ønsker en konfliktfri hverdag med fokus på at skabe en tillidsfuld hvalp, som synes du er det bedste i verden!" />
          <TextCenter>Denne bog er til dig, der:</TextCenter>
          <TextListMark texts={LPstep7} />
          <TextCenter>
            Uanset om du lige har fået din hvalp hjem, om din hvalp allerede er nogle uger gammel
            eller du stadig <i>spændt</i> venter på dagen dit nye familiemedlem lander, så får du
            her opskriften på at skabe en tæt og tillidsfuld relation til din hvalp.
          </TextCenter>
        </Column>
      </Row>

      <ButtonOnline
        text="Ja tak! Jeg er klar på at få en tillidsfuld og rolig hvalp"
        onClick={() => window.open('https://ezme.io/c/x1S/okHo', '_blank')}
      ></ButtonOnline>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <TitleCenter text="Forestil dig det her;" />
          <TextListArrow texts={LPstep3} />
          <TextCenter>
            Findes der en bedre måde at bruge dine aftener på? <br />
            Ja da!
          </TextCenter>
        </Column>
      </Row>

      <Row marginBottom="25px">
        <Column widthPercentage="100%">
          <TitleCenter text="Prøv i stedet at forestille dig det her:" />
          <TextListArrow texts={LPstep4} />
          <TextCenter>
            Sikke et drømmescenarie, ik?
            <br />
            Hvor dig og din hvalp kan nyde hinandens selskab og knytte bånd, fremfor at diskutere og
            blive frustrerede!
          </TextCenter>
          <TextCenter>
            Et scenarie du sagtens kan få til at blive til virkelighed i dag.. og igen i morgen.. og
            dagen efter.. og dagen efter igen.. og sådan kan du fortsætte - resten af hvalpens
            levetid!
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <LPHeadlinePuppy text="Med denne bog i hånden kan du:" />
          <TextList texts={LPstep5} />
        </Column>
      </Row>

      {/* <Row>
        <TitleCenter
          color="#872f35"
          text="Dét har andre fået ud af deltagelse på kurset:"
          showHorizontalRuler
        />
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
        <TitleCenter showHorizontalRuler />
      </Row> */}

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Udover alt dette får du også disse helt konkrete værktøjer:" />
          <TextListMark texts={LPstep8} />
          <TextCenter>Fordelt over 4 letlæselige og appetitlige lektioner:</TextCenter>
          <FlexedRow>
            <Image src={OnlinePupTwo} width="400px" height="300px" />
            <br />
            <Image src={OnlinePupThree} width="400px" height="300px" />
          </FlexedRow>
          <FlexedRow>
            <br />
            <Image src={OnlinePupFour} width="400px" height="300px" />
            <br />
            <Image src={OnlinePupFive} width="400px" height="300px" />
          </FlexedRow>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="80%">
          <TitleCenter text="E-bogen leveres af din erfarne Dyreadfærdskonsulent" />
          <FlexedRow>
            <Image src={FrontNoOne} width="300px" height="200px" />
            <TextContainer>
              <Text bold>Sabrina Svane</Text>
              <Text>
                Jeg er indehaver af Svanes Dyr og har flere gange årligt hvalpe og deres ejere på
                succesfulde holdforløb til at blive velsocialiserede, rolige snuder, med masser af
                gåpåmod til hverdagens udfordringer.
              </Text>
              <Text>
                Udover holdforløb er jeg ofte på hvalpevisit hos nybagte hvalpeejere, hvor de samme
                spørgsmål ofte opstår omkring hvalpens opdragelse, socialisering og rutiner til
                hverdagen. Alle hvalpeejere ønsker at gøre sit bedste for deres nyeste familiemedlem
                og undgå konflikter, få succes og knytte bånd. Herfra er inspirationen til bogen
                opstået.
              </Text>
            </TextContainer>
          </FlexedRow>
        </Column>
      </Row>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <TitleCenter text="Din investering i opskriften på at få den rolige familiehund du drømmer om" />
          <TitleCenter color="#008037" text="Kun 349,- kr. inkl. moms" />
          <TextCenter>
            En investering der kan spare dig frustration, tid og penge!
            <br />
            Bogen giver dig konkrete værktøjer til at skabe en positiv relation med gensidig tillid
            mellem dig og din hvalp. Værktøjer jeg dækker på et hvalpevisit i hjemmet til en værdi
            af 1.425,- kr. + kørsel - og som du får leveret direkte i din indbakke!
          </TextCenter>
          <TextCenter>
            Du sparer altså snildt over tusind kroner når du med bogen i hånden ikke får brug for et
            besøg i hjemmet! Ikke mindst kan du ganske hurtigt og let komme gennem lektionerne og gå
            i gang med de konkrete tiltag de byder. Så du kan undgå flere konflikter allerede fra i
            dag, kan slippe frustrationerne og få overskud til smil, samvær og tid til at knytte
            bånd med din dejlige hvalp.
          </TextCenter>
        </Column>
      </Row>

      <ButtonOnline
        text="Ja tak! Lad mig fluks få bogen i min indbakke!"
        onClick={() => window.open('https://ezme.io/c/x1S/okHo', '_blank')}
      ></ButtonOnline>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <LPHeadlinePuppy text="Sådan får du adgang til din investering" />
          <br />
          <br />
          <TitleCenter text="PDF-format leveret direkte til din mail adresse!" />
          <TextCenter>
            Straks efter betaling får du din e-bog tilsendt på mail, som er en skriftlig guide på 4 lektioner i PDF format.
            <br />
            Via filen i din mail kan du downloade bogen og gemme den på din computer, tablet eller mobil.
            Læs den direkte på skærmen, eller print den ud og sid med den i hånden, mens du drikker
            en god kop kaffe.
          </TextCenter>
          <TextCenter>
            Bogen er din til evigt eje og brug! Læs den lige når det passer dig - om det bliver
            hjemme i sofaen eller på busturen til arbejde. Find den frem når du har behov for at
            genopfriske metoderne eller når du engang i fremtiden får ny hvalp i hjemmet igen!
          </TextCenter>
        </Column>
      </Row>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <TitleCenter text="Stadig i tvivl om det er noget for dig og din hvalp? Her er 3 argumenter for hvorfor du kan få gavn af bogens indhold:" />
          <TextListArrow texts={LPstep15} />
        </Column>
      </Row>

      <ButtonOnline
        text="Jeg er klar til at få succesoplevelser med min hvalp!"
        onClick={() => window.open('https://ezme.io/c/x1S/okHo', '_blank')}
      ></ButtonOnline>
      <br />
      <br />
    </Background>
  </LandingpageOnline>
);

export default OnlineEbookPuppyFive;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
