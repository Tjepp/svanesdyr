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
  TextListArrow,
  LPHeadlinePuppy,
  ButtonOnline,
  DogOnlinePuppy,
  MetaOnlinePuppy,
} from '../components';
import TestimonialImage from '../components/testimonials/TestimonialImage';
import Responsive from '../components/layout/Responsive';
import { FrontNoOne, OnlineCoverPuppy, OnlinePuppyBook, TestiPupOne, TestiPupFour } from '../assets';
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
  'få din hvalp til at gøre hvad du siger uden skældud, frustration eller konflikt, så i kan opbygge gode rutiner fra start',
  'vide hvordan du får din hvalp til at bruge sit legetøj i stedet for dine sko',
  'få din hvalp til at stole på dig, uanset hvad',
  'lære din hvalp at finde ro af sig selv, hver dag og igen og igen',
  'få succes for jer begge på gåture, når din hvalp har ro og automatisk søger dig',
  'konkurrere med andre spændende hunde og mennesker på tur, fordi din hvalp synes DU er den fedeste i verden at hænge ud med!',
];

const LPstep7 = [
  'Vil skabe den bedste relation til din hvalp, så den synes du er FED at være sammen med, selv når der er legekammerater i nærheden',
  'Ønsker værktøjet til konfliktfri opdragelse, hvor du helt kan undgå skældud og stadig få succes med din hvalp hver dag og igen og igen',
  'Søger den bedste tilgang til miljøtræning og socialisering, uden at få stress over at i skal nå en lang tjekliste',
  'Ønsker konkrete redskaber til at give din hvalp masser af gåpåmod til at møde alt nyt med ophøjet ro',
  'Ønsker konkrete øvelser til at lære hvalpen at finde ro af sig selv, både hjemme og ude på tur',
  'Ønsker en livline til en erfaren, professionel adfærdsbehandler, som kan besvare alle dine brændende spørgsmål',
];

const LPstep8 = [
  'Flyt-Fokus strategien til konfliktfri opdragelse',
  'Formlen på miljøtræning uden stress',
  'Opskriften på at skabe en tillidsfuld hvalp med masser af gåpåmod',
  'Trin-for-trin guide med konkrete øvelser, der lærer din hvalp kontakt og ro på gåturene',
];

const LPstep15 = [
  'Fordi du får mere glæde og ro tilbage til hverdagen. Du kan nyde din hvalp, fremfor at blive frustreret over den.',
  'Fordi du får skabt et stærkere tillidsforhold og øget samarbejdsvillighed med din hvalp. Det kommer ikke kun til gavn på jeres gåture sammen, men også i al anden omgang i har med hinanden i hverdagen.',
  'Fordi dét du lærer kan bruges i mange sammenhænge, hvor du ønsker at din hvalp gør som du siger. Du lærer at se på din hvalps adfærd fra en anden vinkel, så du ved hvad du kan gøre for at skabe succes. Det vil gøre al jeres træning fremadrettet lettere og mere succesfuld.',
];

const LPstep0 = [
  'Hvordan du undgår konflikter med din hvalp',
  'Hvordan du træner gode vaner fra start',
  'Hvordan du får succes hver dag og igen og igen',
];

const OnlinePuppy = () => (
  <LandingpageOnline>
    <MetaOnlinePuppy />

    <Background>
      <Row>
        <Column widthPercentage="100%">
          <Image src={OnlineCoverPuppy} alt="Online hvalpekursus forside med glad border collie hvalp" priority />
          <br />
          <TitleCenter text="Til dig der ønsker en konfliktfri hverdag med fokus på at skabe en tillidsfuld hvalp, som synes du er det bedste i verden!" />
          <TextCenter>Dette 6 ugers forløb er til dig, der:</TextCenter>
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
        href="https://ezme.io/c/x1S/Lv6l"
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
          <LPHeadlinePuppy text="Når du deltager på dette forløb kan du:" />
          <TextList texts={LPstep5} />
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Udover alt dette får du også disse helt konkrete værktøjer:" />
          <TextListMark texts={LPstep8} />
        </Column>
      </Row>

      <Row>
        <TitleCenter
          color="#004aad"
          text="Dét har andre fået ud af at deltage på fysiske holdforløb hos mig:"
          showHorizontalRuler
        />
      </Row>
      {/*       <Row>
        <Column widthPercentage="80%">
          <TitleCenter text=" ”Vi er virkelig godt klædt på og meget mere selvsikre i forhold til hvilken retning for opdragelsen, der er rigtig for os og Loui” " />
          <FlexedRow>
            <Image src={ConsultPupTwo} width="200px" height="300px" />
            <TextContainer>
              <Text>
                Det tager tid at omvende dårlige vaner. Men det har allerede hjulpet rigtig meget.
                Særligt fordi jeg kigger meget efter “det skal have en funktion” adfærd. Alt andet
                reagere jeg på ved at distrahere og/eller putte. Det har en kæmpe effekt allerede.
              </Text>
              <Text>
                Vi havde en legeaftale med en anden hund, og i modsætning til før, vidste jeg nu,
                hvad jeg skulle gøre, da de kørte og han ikke kunne finde ro. En tyggestang til lige
                at falde ned på og så ro i huset. 👍🏻 Han har slet ikke bidt efter mig i dag.
              </Text>
              <Text>
                Vi er virkelig godt klædt på og meget mere selvsikre i forhold til hvilken retning
                for opdragelsen, der er rigtig for os og Loui. På bare 2 dage, har vi set en kæmpe
                forandring, fordi vi kommer den uønskede adfærd i forkøbet.
              </Text>
              <Text>
                Og vigtigst af alt så danner hele familien fælles front, fordi vi alle sidder med
                samme viden og kan se formålet med at gøre det hele på samme måde.
              </Text>
              <Text>Jane Lindby og Loui</Text>
            </TextContainer>
          </FlexedRow>
        </Column>
      </Row>
      <Row>
        <Column widthPercentage="80%">
          <TitleCenter text=" ”Vi har fået virkelig gode øvelser som vi kan bruge i hverdagen” " />
          <FlexedRow>
            <TestimonialImage src={TestiPupOne} alt="Billede fra kunde til udtalelse om online hvalpekursus" />
            <TextContainer>
              <Text>
                Vi vil anbefale alle der skal have hvalp at deltage på Sabrinas hold, ikke bare for
                at lærer øvelserne men at prøve at arbejde sammen med sin hund er en super følelse!
              </Text>
              <Text>
                Vi har fået bedre indsigt i hvordan en hund lærer så man kan bruge det på de
                udfordringer man har. Vi blev overrasket over hvor mange trin der skal til for at
                opbygge en øvelse og hvor mange godbidder der skal bruges, men vi har fået en hund
                som gerne vil lytte og lære, et godt samarbejde med ham og værktøjerer til at
                arbejde videre selv.
              </Text>
              <Text>Det har været en mega god oplevelse!</Text>
              <Text>Ellen, Thomas og Njord</Text>
            </TextContainer>
          </FlexedRow>
        </Column>
      </Row>
      <Row>
        <Column widthPercentage="80%">
          <TitleCenter text=" ”Massiv usikkerhed er ændret til positiv udvikling, da jeg har bedre forståelse for min hund og noget konstruktivt at arbejde videre med hjemme” " />
          <FlexedRow>
            <TestimonialImage src={TestiPupFour} alt="Billede fra kunde til udtalelse om online hvalpekursus" />
            <TextContainer>
              <Text>
                Jeg vidste intet om moderne hunde-opdragelse med den positive tilgang, men vidste
                noget fra pighalsbåndenes tid, hvor man var myndig og afstraffende i nuet. Det
                betyder at jeg har skullet udskifte hele min tankegang og det har holdet hjulpet
                enormt meget med, både fordi vi kunne spørge til råds om de udfordringer vi stod med
                og fordi jeg kunne se at den positive tilgang jo virker ;-)
              </Text>
              <Text>
                Allerførste gang vi brugte klikker og hunden skulle søge kontakt - det var en
                fantastisk aha oplevelse og første gang at jeg fik fornemmelse af gensidig
                kommunikation med hunden - og fik håb om at det måske nok skal gå godt med hund
                alligevel.
              </Text>
              <Text>Malene og Simba</Text>
            </TextContainer>
          </FlexedRow>
        </Column>
      </Row> */}

      <Row>
        <Column widthPercentage="100%">
          <DogOnlinePuppy></DogOnlinePuppy>
        </Column>
      </Row>

      <Row>
        <TitleCenter showHorizontalRuler />
      </Row>

      <Row>
        <Column widthPercentage="80%">
          <TitleCenter text="Undervisningen leveres af din erfarne Dyreadfærdskonsulent" />
          <FlexedRow>
            <Image src={FrontNoOne} width="300px" height="200px" alt="Dyreadfærdskonsulent Sabrina Svane med hund" />
            <TextContainer>
              <Text bold>Sabrina Svane</Text>
              <Text>
                Jeg er indehaver af Svanes Dyr og har haft hundredvis af hvalpe og deres ejere på
                succesfulde, intime holdforløb til at blive velsocialiserede, rolige snuder, med masser af
                gåpåmod til hverdagens udfordringer. Alle hvalpe er individuelle og derfor fortjener du som ejer individuel sparring.
              </Text>
              <Text>
                Udover holdforløb er jeg ofte på hvalpevisit hos nybagte hvalpeejere, hvor de samme
                spørgsmål ofte opstår omkring hvalpens opdragelse, socialisering og rutiner til
                hverdagen. Som ejer ved jeg du ønsker at gøre dit bedste for dit nyeste familiemedlem
                og undgå konflikter, få succes og knytte bånd. Derfor har jeg valgt at tilbyde dig dette forløb.
              </Text>
            </TextContainer>
          </FlexedRow>
        </Column>
      </Row>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <TitleCenter bold color="#872f35" text="Kom med til en skarp introduktionspris!" />
          <TitleCenter text="Din investering i at få en rolig og samarbejdsvillig hvalp - uden unoder, uro og konflikter:" />
          <TitleCenter color="#008037" text="Kun 1295,- kr. inkl. moms" />
          <TextCenter>En investering der kan spare dig frustration, tid og penge!</TextCenter>
          <TextCenter>
            På dette forløb får du konkrete værktøjer til at tackle alt fra hvalpebideri til ulvetimen om aftenen til at få ro og kontakt på gåturene 
            - problemer der ofte kræver et hjemmebesøg til flere tusinde kroner. Så
            slip frustrationerne og få overskud til smil, samvær og tid til at knytte bånd med din
            dejlige hvalp.
          </TextCenter>
          <TextCenter>
            Og hey - du kan vælge at betale hele beløbet på én gang eller dele betalingen op i 3 rater (ganske rente- og gebyrfrit)!
          </TextCenter>
        </Column>
      </Row>

      <ButtonOnline
        text="Ja tak! Lad mig komme med!"
        href="https://ezme.io/c/x1S/Lv6l"
      ></ButtonOnline>

      <Row>
        <Column widthPercentage="80%">
          <TextCenter italic>
            Finder du ud af efter den første uge på forløbet at det ikke var noget for dig og din hvalp alligevel, så kan du få pengene retur 
            <br />- no questions asked!
          </TextCenter>
        </Column>
      </Row>

      <br />
      <br />
      <Row>
        <Column widthPercentage="80%">
          <TitleCenter text="Når du har investeret i forløbet får du med det samme denne e-bog tilsendt til din mail!" />
          <FlexedRow>
          <Image src={OnlinePuppyBook} width="350px" height="300px" alt="E-bog om hvalpetræning med sider fra bogen vist" />
            <TextContainer>
              <Text bold>Metoden til konfliktfri opdragelse</Text>
              <Text>
                Hvor du får svaret på:
              </Text>
              <TextListMark texts={LPstep0} />
              <Text>
                Så du med det samme har konkrete teknikker til at skabe en samarbejdsvillig hvalp, inden vi starter sammen på forløbet den 1. februar!
                Et forløb hvor du kan se frem til endnu flere konkrete metoder til at få din hvalp til at opføre sig eksemplarisk - både ude og hjemme!
              </Text>
            </TextContainer>
          </FlexedRow>
        </Column>
      </Row>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <LPHeadlinePuppy text="Sådan foregår forløbet" />
          <br />
          <TitleCenter text="Lukket facebookgruppe, videoguides og LIVE spørgetimer med din underviser!" />
          <TextCenter>
            Straks efter køb vil du få tilsendt en mail med invitation til en lukket facebookgruppe.
            Herinde får du, sammen med de andre nybagte hvalpeejere, adgang til et stærkt fællesskab
            hvor vi hjælpes ad med at udvikle os, med indspark, støtte og ikke mindst fede dialoger
            om hvalpe og opdragelse.
          </TextCenter>
          <TextCenter bold>
            Da jeg går meget op i at hjælpe jer hver især, og skabe et intimt forum for alle
            deltagere, vil der være et begrænset antal pladser på forløbet.
          </TextCenter>
          <TextCenter>
            Gruppen åbner den 01.02.2023, hvor kursets forløb også vil starte.
          </TextCenter>
          <TextCenter>
            Kursets forløb består af flere lektioner med video undervisning, der er optaget på
            forhånd.
            <br /> Dertil er der PDF-filer i form af skriftlig guide, arbejdsbøger og tjeklister,
            som du kan se og læse når du vil, hvor du vil og alle de gange du vil!
          </TextCenter>
          <TextCenter>
            Du vil også få en direkte livline til din underviser, da jeg flere gange vil gå LIVE og
            svare på alle de spørgsmål du måtte have. <b>Jeg giver SVARGARANTI!</b> Det betyder jeg
            først lukker computeren når alle har fået svar på deres spørgsmål. Efter spørgetimerne
            vil videoerne ligge tilgængelig, så du altid kan gense svarene.
          </TextCenter>
          <TextCenter>
            Forløbet varer 6 uger og derefter vil facebookgruppen vil blive arkiveret - det betyder
            den vil blive lukket for kommentarer, men stadig have alt indholdt tilgængeligt til dig
            så du kan vende tilbage og gense det hele, liiige når du har lyst.
          </TextCenter>
        </Column>
      </Row>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <TitleCenter text="Stadig i tvivl om det er noget for dig og din hvalp? Her er 3 argumenter for hvorfor du kan få gavn af at deltage på forløbet:" />
          <TextListArrow texts={LPstep15} />
        </Column>
      </Row>

      <ButtonOnline
        text="Jeg er klar til at få succesoplevelser med min hvalp!"
        href="https://ezme.io/c/x1S/Lv6l"
      ></ButtonOnline>
      <br />
      <br />
    </Background>
  </LandingpageOnline>
);

export default OnlinePuppy;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;

// const ZeroMarginText = styled(TextContainer)`
// margin-left: 0px;
// `;
