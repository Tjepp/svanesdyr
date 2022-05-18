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
  'undgå ulvetimen og få ro sammen med din hvalp',
  'opbygge de gode vaner fra start, hvor din hvalp lytter til og overholder dine husregler',
  'undgå konflikter og skabe succes for jer begge på ture ud af hjemmet',
  'vide hvordan du skal gribe miljøtræning og socialisering an, uden unødig stress for både dig og din hvalp',
  'konkurrere med andre spændende sager på tur, fordi din hvalp automatisk søger dig',
  'lære din hvalp at ro altid kan betale sig, uanset om i er ude eller hjemme',
];

const LPstep7 = [
  'Ønsker værktøjet til konfliktfri opdragelse, hvor du kan få succes med din hvalp hver dag og igen og igen',
  'Søger den bedste tilgang til miljøtræning og socialisering, uden at få stress over hvad i skal nå',
  'Ønsker konkrete redskaber til at lære hvalpen at finde ro, både hjemme og ude',
];

const LPstep8 = [
  'Flyt-Fokus strategien til konfliktfri opdragelse',
  'Formlen på miljøtræning uden stress',
  'Trin-for-trin guide med konkrete øvelser, der lærer din hvalp kontakt og ro på gåturene',
  'Opskriften på ro i hjemmet',
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
          <TitleCenter text="Til dig der ønsker en konfliktfri hverdag med fokus på at skabe de gode vaner fra start" />
          <TextCenter>Denne E-bog er til dig, der:</TextCenter>
          <TextListMark texts={LPstep7} />
          <TextCenter>
            Uanset om du lige har fået din hvalp hjem, om din hvalp allerede er nogle uger gammel
            eller du stadig spændt venter på dagen dit nye familiemedlem lander, så får du her
            opskriften på at få succes med din hvalp.
          </TextCenter>
        </Column>
      </Row>

      <ButtonOnline
        text="Jeg er klar på at få succesoplevelser med min hvalp!"
        onClick={() => window.open('https://ezme.io/c/x1S/kBbJ', '_blank')}
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
          <TextCenter>Sikke et drømmescenarie, ik?</TextCenter>
          <TextCenter>
            Et scenarie du sagtens kan få til at blive til virkelighed i dag.. og igen i morgen.. og
            dagen efter.. og dagen efter igen.. og sådan kan du fortsætte!
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <LPHeadlinePuppy text="Med E-bogen i hånden kan du" />
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
          <TitleCenter text="Udover alt dette får du disse helt konkrete værktøjer:" />
          <TextListMark texts={LPstep8} />
          <TextCenter>Fordelt over bogens 4 kapitler:</TextCenter>
          <FlexedRow>
            <Image src={OnlinePupTwo} width="200px" height="300px" />
            <br />
            <Image src={OnlinePupThree} width="200px" height="300px" />
            <br />
            <Image src={OnlinePupFour} width="200px" height="300px" />
            <br />
            <Image src={OnlinePupFive} width="200px" height="300px" />
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
                og undgå konflikter, få succes og knytte bånd. Herfra er inspirationen til E-bogen
                opstået.
              </Text>
            </TextContainer>
          </FlexedRow>
        </Column>
      </Row>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <TitleCenter text="Din investering i opskriften på at få den rolige familiehund du drømmer om" />
          <TitleCenter color="#008037" text="Kun 449,- kr. inkl. moms" />
          <TextCenter>
            En investering der kan spare dig tårer, tid og penge!
            <br />
            E-bogen er letlæselig og med konkrete råd og værktøjer, som jeg kommer omkring når jeg
            er på hvalpevisit af 1,5 times varighed til en værdi af 1.425,- kr. + kørsel til din
            bopæl.
          </TextCenter>
          <TextCenter>
            Du sparer altså snildt over tusind kroner når du med bogen i hånden ikke får brug for et
            besøg i hjemmet! Ikke mindst kan du på under halvanden time læse bogen og gå i gang med
            de konkrete tiltag den byder. Så du undgår konflikter fra start og har mere overskud til
            smil over din dejlige lydige og rolige hvalp.
          </TextCenter>
        </Column>
      </Row>

      <ButtonOnline
        text="Ja tak! Send fluks bogen til min mail!"
        onClick={() => window.open('https://ezme.io/c/x1S/kBbJ', '_blank')}
      ></ButtonOnline>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <LPHeadlinePuppy text="Sådan får du adgang til din investering" />
          <br />
          <br />
          <TitleCenter text="PDF-format leveret direkte til din mail adresse!" />
          <TextCenter>
            Straks efter køb vil du få tilsendt en mail hvor du finder et link med adgang til din
            E-bog.
            <br />
            Herfra kan du downloade den og gemme den på din computer, tablet eller mobil. Læs den
            direkte på skærmen, eller print den ud og sid med den i hånden, mens du drikker en god
            kop kaffe.
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
          <TitleCenter text="Stadig i tvivl om det er noget for dig og din hvalp? Her er 3 argumenter for hvorfor du kan få gavn af E-bogens indhold:" />
          <TextListArrow texts={LPstep15} />
        </Column>
      </Row>

      <ButtonOnline
        text="Jeg er klar til at få succesoplevelser med min hvalp!"
        onClick={() => window.open('https://ezme.io/c/x1S/kBbJ', '_blank')}
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
