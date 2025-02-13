import React from 'react';
import styled from 'styled-components';

import {
  LandingpageOnline,
  Column,
  MetaOnlineEbookCatScratch,
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
  catOne,
  OnlineCoverCatScratch,
  OnlineCatsOne,
  OnlineCatsTwo,
  OnlineCatsThree,
} from '../assets';
import '../components/table/TableCss.css';

const LPstep3 = [
  'Du sætter dig på sofaen, for at lade op efter dagens opgaver',
  'Din kat kommer hen mod dig og sætter kløerne i sofahjørnet',
  'Du beder den om at lade være, og prøver at puffe katten væk',
  'Katten dasker til dig med en klo, så din hånd svier',
  'Du råber højt op og katten skynder sig væk fra dig',
  'Du sætter dig igen på sofaen, udmattet og frustreret over konflikten skulle opstå',
];

const LPstep4 = [
  'Du sætter dig på sofaen, for at lade op efter dagens opgaver',
  'Din kat kommer ind i rummet og sætter kløerne i sit kradsetræ',
  'Derefter opsøger den dig på sofaen og hopper op til dig',
  'I nusser og hygger og lader op sammen',
];

const LPstep5 = [
  'få indsigt i din kats kradsepræferencer, så du kan finde den helt rigtige kradseoverflade til din kat',
  'opbygge gode rutiner fra start med kradsetræet, hvor din kat overholder dine regler, så du slipper for at skælde ud',
  'vide hvordan du får din kat til at foretrække sit kradsetræ i stedet for sofahjørnet eller sengekanten',
  'få succes igen og igen med at din kat vælger sit kradsetræ, blot via ros og gode tiltag',
];

const LPstep7 = [
  'Ønsker værktøjet til konfliktfri opdragelse, hvor du helt kan undgå skældud og stadig få succes med at din kat vælger sit kradsetræ',
  'Ønsker konkrete redskaber til at få katten til at bruge sit kradsetræ, fremfor andre møbler',
  'Søger den bedste tilgang til at hjælpe katten med fortsat at bruge sit kradsetræ, selvom i flytter rundt',
  'Ønsker et konkret værktøj til at få nye møbler kradsefrit ind i hjemmet',
];

const LPstep8 = [
  'Flyt-Fokus strategien til konfliktfri opdragelse',
  'Fotoalbumsprincippet der lærer dig hvordan du altid får succes med at katten vælger sit kradsetræ, selv når nye møbler kommer hjem',
];

const LPstep15 = [
  'Fordi du får mere glæde og ro tilbage til hverdagen. Du kan nyde samværet med din kat, fremfor at blive frustreret over den.',
  'Fordi du VED hvordan du får din kat til at vælge sit kradsetræ, uden konflikt. Med ros og gode tiltag. Det skaber et stærkt tillidsforhold og øget samarbejdsvillighed med din kat.',
  'Fordi dét du lærer kan bruges i mange sammenhænge, hvor du ønsker at din kat gør som du siger. Du lærer at se på din kats adfærd fra en anden vinkel, så du ved hvad du kan gøre for at skabe succes. Det vil gøre jeres hverdag fremadrettet lettere og mere succesfuld.',
];

const OnlineEbookCatScratch = () => (
  <LandingpageOnline>
    <MetaOnlineEbookCatScratch />

    <Background>
      <Row>
        <Column widthPercentage="100%">
          <Image src={OnlineCoverCatScratch} />
          <br />
          <TitleCenter text="Til dig der ønsker en konfliktfri hverdag med fokus på at undgå ødelagte sofahjørner og få en kat der elsker sit kradsetræ!" />
          <TextCenter>Denne bog er til dig, der:</TextCenter>
          <TextListMark texts={LPstep7} />
          <TextCenter>
            Uanset om du lige har fået din første kat, eller du allerede er en garvet katteejer, så får du
            her opskriften på at holde kløerme af møblerne og få katten til at elske at bruge sit kradsetræ - via 3 simple trin.
          </TextCenter>
        </Column>
      </Row>

      <ButtonOnline
        text="Ja tak! Jeg er klar på at få kradsefri møbler!"
        onClick={() => window.open('https://ezme.io/c/x1S/38gA', '_blank')}
      ></ButtonOnline>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <TitleCenter text="Forestil dig det her;" />
          <TextListArrow texts={LPstep3} />
          <TextCenter>
            Findes der en bedre måde at bruge din sofatid på? <br />
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
            Hvor dig og din kat kan nyde hinandens selskab og knytte bånd, fremfor at diskutere og
            blive frustrerede!
          </TextCenter>
          <TextCenter>
            Et scenarie du sagtens kan få til at blive til virkelighed i dag.. og igen i morgen.. og
            dagen efter.. og dagen efter igen.. og sådan kan du fortsætte - resten af kattens levetid!
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <LPHeadlinePuppy text="Med denne bog i hånden kan du:" />
          <TextList texts={LPstep5} />
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Udover alt dette får du også disse helt konkrete værktøjer:" />
          <TextListMark texts={LPstep8} />
          <TextCenter>Fordelt over 3 letlæselige og appetitlige kapitler:</TextCenter>
          <FlexedRow>
            <Image src={OnlineCatsOne} width="300px" height="400px" />
            <br />
            <Image src={OnlineCatsTwo} width="300px" height="400px" />
            <br />
            <Image src={OnlineCatsThree} width="300px" height="400px" />
          </FlexedRow>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="80%">
          <TitleCenter text="E-bogen leveres af din erfarne Dyreadfærdskonsulent" />
          <FlexedRow>
            <Image src={catOne} width="300px" height="200px" />
            <TextContainer>
              <Text bold>Sabrina Svane</Text>
              <Text>
                Jeg er indehaver af Svanes Dyr og er jævnligt på besøg hos katteejere, hvor de samme
                spørgsmål ofte opstår omkring kattens uhensigtsmæssige opførsel. Herunder at kradse i ting, der helst ikke skal kradses i.
              </Text>
              <Text>
                Alle katteejere ønsker at gøre sit bedste for deres kat og undgå konflikter, men samtidig også skåne deres møbler og gardiner, og spare nogle kroner og øre. 
                Det er herfra inspirationen til bogen er opstået.
              </Text>
            </TextContainer>
          </FlexedRow>
        </Column>
      </Row>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <TitleCenter text="Din investering i at få din kat til at elske sit kradsetræ og holde kløerne fra møblerne" />
          <TitleCenter color="#008037" text="Kun 149,- kr. inkl. moms" />
          <TextCenter>
            En investering der kan spare dig frustration, tid og penge!
            <br />
            Bogen giver dig konkrete værktøjer til at få succes med at få din kat til aktivt at vælge sit kradsetræ, fremfor at sætte kløerne i andet i hjemmet.
          </TextCenter>
          <TextCenter>
            Du sparer altså flere hundrede kroner, når du med bogen i hånden kan undgå flere ødelagte sofahjørner og få succes med at hjælpe din kat!
          </TextCenter>
        </Column>
      </Row>

      <ButtonOnline
        text="Ja tak! Lad mig fluks få bogen i min indbakke!"
        onClick={() => window.open('https://ezme.io/c/x1S/38gA', '_blank')}
      ></ButtonOnline>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <LPHeadlinePuppy text="Sådan får du adgang til din investering" />
          <br />
          <br />
          <TitleCenter text="PDF-format leveret direkte til din mail adresse!" />
          <TextCenter>
            Straks efter betaling får du din e-bog tilsendt på mail, som er en skriftlig guide på 3 kapitler i PDF format.
            <br />
            3 kapitler der giver dig de 3 simple trin til at holde kløerne af møblerne!
          </TextCenter>
          <TextCenter>
            Via filen i din mail kan du downloade bogen og gemme den på din computer, tablet eller mobil.
            Læs den direkte på skærmen, eller print den ud og sid med den i hånden, mens du drikker
            en god kop kaffe.
          </TextCenter>
          <TextCenter>
            Bogen er din til evigt eje og brug! Læs den lige når det passer dig - om det bliver
            hjemme i sofaen eller på busturen til arbejde. Find den frem når du har behov for at
            genopfriske metoderne eller når du engang i fremtiden får ny kat eller nye møbler i hjemmet igen!
          </TextCenter>
        </Column>
      </Row>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <TitleCenter text="Stadig i tvivl om det er noget for dig og din kat? Her er 3 argumenter for hvorfor du kan få gavn af bogens indhold:" />
          <TextListArrow texts={LPstep15} />
        </Column>
      </Row>

      <ButtonOnline
        text="Jeg er klar til at få succes med min kats kradsevaner!"
        onClick={() => window.open('https://ezme.io/c/x1S/38gA', '_blank')}
      ></ButtonOnline>
      <br />
      <br />
    </Background>
  </LandingpageOnline>
);

export default OnlineEbookCatScratch;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
