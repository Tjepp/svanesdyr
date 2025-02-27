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
  MetaOnlinePuppyBeany,
} from '../components';
import Responsive from '../components/layout/Responsive';
import { FrontNoOne, OnlineCoverBeany, OnlinePupOne } from '../assets';
import '../components/table/TableCss.css';

const LPstep3 = [
  'Introducerer hvalpen til de to eskisterende hunde i husstanden - en teenager og en senior',
  'Introducerer hvalpen til katten i huset',
  'Håndterer min seniors ressourceforsvar når der kommer et nyt medlem - med fokus på at skabe tillid og undgå udfald',
  'Udvikler gode rutiner fra start, så hvalpen lærer at finde ro af sig selv',
  'Får succes med renlighed, stopper hvalpebideriet, starter alene-hjemme træningen og tager fat på miljøtræning',
];

const LPstep4 = [
  'At lære hvalpen at gå pænt i snor',
  'At lære hvalpen at spytte ting ud på signal - og ikke samle alt op i munden',
  'At lære hvalpen roligt at hilse på mennesker og hunde',
  'At lære hvalpen at respektere et ord som "nej"',
  'At lære hvalpen det er FEDT at komme når jeg kalder',
];

const LPstep5 = [
  'Får din hvalp til at gøre hvad du siger uden skældud, frustration eller konflikt, så i kan opbygge gode rutiner fra start',
  'Får din hvalp til at bruge sit legetøj i stedet for dine sko',
  'Får din hvalp til at stole på dig, uanset hvad',
  'Lærer din hvalp at finde ro af sig selv, hver dag og igen og igen',
  'Får succes for jer begge på gåture, når din hvalp har ro og automatisk søger dig',
  'Konkurrerer med andre spændende hunde og mennesker på tur, fordi din hvalp synes DU er den fedeste i verden at hænge ud med!',
];

const LPstep7 = [
  'Ønsker at følge med i hvordan en erfaren, professionel adfærdsbehandler tackler de første uger med en ny hvalp i hjemmet',
  'Vil skabe den bedste relation til din hvalp, så den synes du er FED at være sammen med, selv når der er legekammerater i nærheden',
  'Ønsker værktøjet til konfliktfri opdragelse, hvor du helt kan undgå skældud og stadig få succes med din hvalp hver dag og igen og igen',
  'Søger den bedste tilgang til miljøtræning og socialisering, uden at få stress over at i skal nå en lang tjekliste',
  'Ønsker konkrete redskaber til at give din hvalp masser af gåpåmod til at møde alt nyt med ophøjet ro',
  'Ønsker konkrete øvelser til at lære hvalpen at finde ro af sig selv, både hjemme og ude på tur',
];

const LPstep8 = [
  'Flyt-Fokus strategien til konfliktfri opdragelse',
  'Formlen på miljøtræning uden stress',
  'Opskriften på at skabe en tillidsfuld hvalp med masser af gåpåmod',
  'Konkrete øvelser, der lærer din hvalp kontakt og ro på gåturene',
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
  'Hvordan du får ro på i hjemmet',
  'Hvordan du tackler miljøtræningen - uden stress',
];

const OnlinePuppyBeany = () => (
  <LandingpageOnline>
    <MetaOnlinePuppyBeany />

    <Background>
      <Row>
        <Column widthPercentage="100%">
          <Image src={OnlineCoverBeany} />
          <br />
          <TitleCenter text="Til dig der ønsker en konfliktfri hverdag med fokus på at skabe en tillidsfuld hvalp, som synes du er det bedste i verden!" />
          <TextCenter>Dette 8 ugers forløb er til dig, der:</TextCenter>
          <TextListMark texts={LPstep7} />
          <TextCenter>
            Uanset om du lige har fået din hvalp hjem, om din hvalp allerede er nogle uger gammel
            eller du stadig <i>spændt</i> venter på dagen dit nye familiemedlem lander, så får du
            her opskriften på at skabe den rolige familiehund du drømmer om.
          </TextCenter>
        </Column>
      </Row>

      <ButtonOnline
        text="Ja tak! Jeg er klar på at få en tillidsfuld og rolig hvalp"
        onClick={() => window.open('https://ezme.io/c/x1S/Lv6l', '_blank')}
      ></ButtonOnline>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <TitleCenter text="Kig mig over skulderen og se hvad jeg prioriterer med ny hvalp i huset!" />
          <TextCenter>
            Kom med, hvis du vil se hvordan jeg:
          </TextCenter>
          <TextListArrow texts={LPstep3} />
        </Column>
      </Row>

      <Row marginBottom="25px">
        <Column widthPercentage="100%">
          <TitleCenter text="Ikke mindst vil jeg vise dig helt konkrete øvelser til:" />
          <TextListArrow texts={LPstep4} />
          <TextCenter>
            Du får konkrete øvelser til at få en rolig hvalp, der stoler på dig.
            <br />
            Du får konkrete teknikker der lærer din hvalp at det er fedt at lytte til dig og respektere dine husregler. Uden konflikter.
          </TextCenter>
          <TextCenter>
            Sikke et drømmescenarie, ik?
            <br />
            Hvor i kan nyde hinandens selskab og knytte bånd, fremfor at diskutere og
            blive frustrerede!
            <br />
            Et scenarie du sagtens kan få til at blive til virkelighed i dag.. og igen i morgen.. og
            dagen efter.. og dagen efter igen.. og sådan kan du fortsætte - resten af hvalpens
            levetid!
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <LPHeadlinePuppy text="Når du deltager på dette forløb viser jeg dig hvordan du:" />
          <TextList texts={LPstep5} />
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Udover alt dette vil jeg også vise dig brugen af disse helt konkrete værktøjer:" />
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
            <Image src={TestiPupOne} width="200px" height="300px" />
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
            <Image src={TestiPupFour} width="200px" height="300px" />
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
          <TitleCenter text="På hvalpeforløbet følger du din erfarne Dyreadfærdskonsulent" />
          <FlexedRow>
            <Image src={FrontNoOne} width="300px" height="200px" />
            <TextContainer>
              <Text bold>Sabrina Svane</Text>
              <Text>
                Jeg er indehaver af Svanes Dyr og har haft hundredvis af hvalpe og deres ejere på
                succesfulde, intime holdforløb til at blive velsocialiserede, rolige snuder, med masser af
                gåpåmod til hverdagens udfordringer. 
              </Text>
              <Text>
                Udover holdforløb er jeg ofte på hvalpevisit hos nybagte hvalpeejere, hvor de samme
                spørgsmål ofte opstår omkring hvalpens opdragelse, socialisering og rutiner til
                hverdagen. Som ejer ved jeg du ønsker at gøre dit bedste for dit nyeste familiemedlem
                og undgå konflikter, få succes og knytte bånd.
                Derfor har jeg valgt at tilbyde dig dette forløb, hvor du kan følge med når jeg selv får hvalp i huset, og se hvordan jeg sætter os op til succes til hverdag.
              </Text>
            </TextContainer>
          </FlexedRow>
        </Column>
      </Row>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <TitleCenter text="Din investering i at se hvordan jeg skaber en rolig og samarbejdsvillig hvalp - uden unoder, uro og konflikter:" />
          <TitleCenter color="#008037" text="Kun 1395,- kr. inkl. moms" />
          <TextCenter>En investering der kan spare dig frustration, tid og penge!</TextCenter>
          <TextCenter>
            På dette forløb får du konkrete værktøjer til at tackle alt fra hvalpebideri til ulvetimen om aftenen til at få ro og kontakt på gåturene 
            - problemer der ofte kræver et hjemmebesøg til flere tusinde kroner. Så
            slip frustrationerne og få overskud til smil, samvær og tid til at knytte bånd med din
            dejlige hvalp.
          </TextCenter>
          <TextCenter>
            Og hey - du kan vælge at betale hele beløbet på én gang eller dele betalingen op i 2 rater (ganske rente- og gebyrfrit)!
          </TextCenter>
        </Column>
      </Row>

      <ButtonOnline
        text="Ja tak! Lad mig komme med!"
        onClick={() => window.open('https://ezme.io/c/x1S/Lv6l', '_blank')}
      ></ButtonOnline>

      <br />
      <br />
      <Row>
        <Column widthPercentage="80%">
          <TitleCenter text="BONUS: Når du har investeret i forløbet får du straks min populære E-bog tilsendt til din mail!" />
          <FlexedRow>
          <Image src={OnlinePupOne} width="250px" height="350px" />
            <TextContainer>
              <Text bold>E-Bogen: Adfærdsbehandlerens 5 vigtigste råd til træning af din hvalp - opskriften på at få den rolige familiehund du drømmer om</Text>
              <Text color="#872f35" bold>Værdi: 349,- kr!</Text>
              <Text>
                Hvor du får svaret på:
                <TextListMark texts={LPstep0} />
                Så du straks får konkrete teknikker til at skabe en samarbejdsvillig hvalp, inden vi starter forløbet den 10. marts!
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
          <TitleCenter text="Lukket facebookgruppe hvor du kan følge Sabrina Svane og lille Beany!" />
          <TextCenter>
            Straks efter køb vil du få tilsendt en mail med invitation til en lukket facebookgruppe.
            Herinde får du, sammen med de andre hvalpeejere, adgang til at følge mig og min hverdag med den nye hvalp.
          </TextCenter>
          <TextCenter>
            Kursets forløb består af videoer og opslag jeg løbende lægger op i gruppen, med de daglige tiltag jeg prioriterer med en ny hvalp i hjemmet.
          </TextCenter>
          <TextCenter>
            Som ugerne går vil gruppen derfor blive et større online bibliotek, med masser af gode råd og træningsvideoer du kan tage i brug med din egen hvalp.
            Et online bibliotek som du kan tilgå igen og igen, lige når du har lyst - både under forløbet og efter afslutning. Med din nuværende hvalp og den næste igen!
          </TextCenter>
          <TextCenter>
            Gruppen åbner den 10.03.2025.
            <br />
            Lille Beany hentes hjem den 11.03.2025 hvor forløbet for alvor skydes i gang.
          </TextCenter>
          <TextCenter>
            Jeg vil gøre opmærksom på, at det primære mål med forløbet er at du kigger mig over skulderen de første 8 uger af Beanys tid hos os, og får en
            masse input til hverdagens opdragelse og træning. Jeg vil forklare min teknikker og give dig en god indsigt i belønningsbaseret træning, uden brug af hårdhændede metoder. 
          </TextCenter>
          <TextCenter>
            Jeg tilbyder <b>ikke</b> individuel rådgivning på dette forløb. Spørgsmål til din egen hvalp og individuelle problemstillinger er derfor ikke mulig under forløbet.
            Spørgsmål til mine metoder og tilgang til hvalpen er selvfølgelig velkommen - vi følges ad for at blive klogere.
          </TextCenter>
          <TextCenter>
            Forløbet varer 8 uger og derefter vil facebookgruppen vil blive arkiveret - det betyder
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
        onClick={() => window.open('https://ezme.io/c/x1S/Lv6l', '_blank')}
      ></ButtonOnline>
      <br />
      <br />
    </Background>
  </LandingpageOnline>
);

export default OnlinePuppyBeany;

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
