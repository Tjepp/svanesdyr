import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import {
  Landingpage,
  Column,
  MetaConsultPuppy,
  TitleCenter,
  Text,
  TextCenter,
  TextContainer,
  Image,
  Row,
  FlexedRow,
  LandingpageHeadline,
  TextList,
  TextListMark,
  TextListArrow,
  ContactPopUp,
  LandingpageCallMe
} from '../components';
import Responsive from '../components/layout/Responsive';
import { ConsultPupOne, ConsultPupTwo, ConsultPupThree } from '../assets';
import '../components/table/TableCss.css';

const ConsultPupAnnoyance = [
  'Du nyder at koble fra på sofaen om aftenen, men i stedet for afslapning og mig-tid, er det blevet til en kamp med hvalpen om ikke at gø ad dig, nappe eller være ustyrlig',
  'Du eller dine børn kan ikke gå rundt i huset uden at have en krævende hvalp siddende i buksebenet af og til',
  'Du forsøger at fortælle din hvalp hvad den må og ikke må, men i stedet for at stoppe når du beder om det, så er det som om det bliver værre',
];

const ConsultPupHour = [
  'At forstå din hvalps adfærd og årsagen til at den opfører sig som den gør',
  'At sætte rammer for hverdagen, så du helt undgår dårlig opførsel - også langt ude i fremtiden',
  'At få din hvalp til at gøre det du beder om',
  'At kunne få ro på din hvalp og dermed mere overskud til jer begge i hverdagen',
];

const ConsultPupForYou = [
  'dig, der ønsker at hjælpe din hvalp med at få mere ro på i hverdagen',
  'dig, der vil slippe for huller i huden efter knivskarpe hvalpetænder',
  'dig, der er førstegangs-hundeejer og savner konkrete værktøjer til hverdagens opdragelse',
  'eller dig, der allerede har god succes med din hvalp, men kunne tænke dig endnu flere input!',
];

const ConsultPupDoubts = [
  'DERFOR #1 For kun halvanden time af din tid og få tusinde kroner kommer du til både at forstå og bruge de enkle metoder, der skal til for at skabe den hverdag DU ønsker sammen med din hvalp - og det virker ikke kun nu og her, men resten af din hvalps OG din næste hvalps levetid!',
  'DERFOR #2 Du får trin-for-trin vejledende hjælp til lige det du ønsker af en professionel uddannet hundetræner, så du sparer timevis af din tid på at google dig frem til (knap så) gode råd, som alligevel ikke helt har den ønskede effekt..',
  'DERFOR #3 Din investering strækker sig udover den halvanden time i hjemmet! Da jeg går meget op i at du får vedvarende succes med din hvalp, får du fri opfølgning på telefon og mail efter mit besøg, så du kan få et kompetent og fagligt svar på alle de spørgsmål, du ikke nåede at stille under besøget!',
];

const DogConsultPuppy = () => (
  <Landingpage>
    <MetaConsultPuppy />
    <LandingpageHeadline text="Hvalpevisit af hundeadfærdsbehandler" />
    <Background>
      <Row>
        <Column widthPercentage="100%">
          <TitleCenter
            text="Få en rolig og lydig hund med redskaberne til nem og positiv opdragelse"
            showHorizontalRuler
          />
          <TextCenter>
            Har du en hvalp der ynder at sætte sine sylespidse tænder i dig?
            <br />
            Ødelægger den ting i hjemmet?
            <br />
            Måske opfører den sig til tider ustyrligt og lytter ikke til dig?
            <br />
            Eller ønsker du blot at få god vejledning fra start med den lille ny, så du helt undgår
            problemer som dette?
          </TextCenter>
          <TextCenter>
            Så bestil en tid til et hvalpevisit, hvor du får de redskaber du skal bruge for at skabe
            en lydig, kontaktsøgende hund, som let kan finde ro af sig selv og dermed gør jeres
            hverdag sammen mere overskuelig og hyggelig.
          </TextCenter>
          <LandingpageCallMe />
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="80%">
        <TitleCenter text="Du får professionel rådgivning og en skræddersyet handlingsplan til dig og din hvalp" />
          <FlexedRow>
            <Image src={ConsultPupThree} width="200px" height="200px" />
            <TextContainer>
              <Text>
                Jeg hedder Sabrina Svane har siden 2012 haft ugentlige hvalpehold og hundredvis af hvalpeejere under vingerne,
                både på træningsbanen i Horsens og i hjemmet ved privatbesøg. Jeg har gennem tiden haft mange forskellige racer mellem hænderne,
                og møder altid hvalpene hvor de er, da hver hvalp har deres egen personlighed at tage hensyn til.
              </Text>
              <Text>
                Du får altså besøg af en uddannet Hundeadfærdskonsulent, der har reel, praktisk erfaring med at
                hjælpe hvalpe godt fra start og kan hurtigt sætte dig ind i hvad der virker og ikke virker, når hvalpen skal lære nyt.
              </Text>
            </TextContainer>
          </FlexedRow>
        </Column>
      </Row>
      <ContactPopUp text="Smid en mail og få tid til et besøg" />
      
      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <TitleCenter text="Genkender du bare én af følgende oplevelser:" />
          <TextListArrow texts={ConsultPupAnnoyance} />
        </Column>
      </Row>

      <Row marginBottom="25px">
        <Column widthPercentage="100%">
          <TitleCenter
            color="#1cb8b8"
            text="Hvis du kan nikke genkendende til bare ét af disse udsagn, så har jeg både en god og en dårlig nyhed til dig"
          />
          <TextCenter>
            Den dårlige nyhed er, at dårlig opførsel fra hvalpen skyldes manglende klarhed om ønsker
            fra dig og mangel på faste rutiner - og altså ikke en indre trodsighed eller stædighed
            hos hvalpen.
            <br />
            Det er desværre et smertefuldt faktum, at mange hvalpe får dårlige vaner, fordi de ikke
            bliver ordentligt vejledt fra start og hjulpet til hverdag.
          </TextCenter>
          <TextCenter>
            Den gode nyhed er, at
            <b> DU </b>
            kan lære at blive klar og tydelig overfor din hvalp, hvor du viser hvad du forventer af
            den på en god og rolig måde, så du kan få den lydige og dejlige hund du <b>ved</b> du har!
          </TextCenter>
          <TextCenter>
            Til et hvalpevisit får du metoderne til hvordan du kan sætte faste rammer og rutiner for
            din hvalp, gennem leg, ros og en
            <i> hulens masse godbidder</i>, så du helt kan undgå de førnævnte (meget) irriterende
            situationer.
          </TextCenter>

          <br />
          <ContactPopUp text="Book et hvalpevisit og få metoderne til succes" />
        </Column>
      </Row>

      <Row>
        <TitleCenter text="Dét har andre fået ud af et besøg fra mig:" showHorizontalRuler />
      </Row>

      <Row>
        <Column widthPercentage="80%">
          <TitleCenter text=" ”Vi troede ikke et hvalpevisit ville være pengene værd. Vi tog fejl.” " />
          <FlexedRow>
            <Image src={ConsultPupOne} width="200px" height="300px" />
            <TextContainer>
              <Text>
                Dit besøg har givet os mere ro og selvtillid. Vi er som førstegangsejere meget mere
                selvsikre og rolige i vores rolle som hundeejere, og det er rart. Derudover har det
                været rart bare at kunne spørge løs og fjerne nogle af de bekymringer man kan have
                som førstegangs hundeejere.
              </Text>
              <Text>
                Vi har fået en meget bedre forståelse af vores hund, hans race, personlighed og
                hvorfor han gør som han gør. Og derved også hvordan vi samarbejder med ham.
              </Text>
              <Text>Det giver ro i maven at vide man er på rette vej.</Text>
              <Text>Mvh Sheila og Daniel</Text>
            </TextContainer>
          </FlexedRow>
        </Column>
      </Row>
      <Row>
        <Column widthPercentage="80%">
          <TitleCenter text=" ”Vores hvalp har lært at slappe af på signal” " />
          <FlexedRow>
            <Image src={ConsultPupTwo} width="200px" height="300px" />
            <TextContainer>
              <Text>
                Den største forandring for os var at få større viden omkring ro / søvns vigtighed
                for en hvalp. Det var noget af en aha-oplevelse at lære hvalpens behov for at ”øve”
                sig i ro, da man ellers får et ”damp barn”.
              </Text>
              <Text>
                Vi har set hvor lærenem han er og har lært at bruge et ”slap-af”-tæppe. Han søger i
                dag selv tæppet når han ved det er slap-af tid.
              </Text>
              <Text>Freja og Polle</Text>
            </TextContainer>
          </FlexedRow>
        </Column>
      </Row>

      <Row>
        <TitleCenter text="" showHorizontalRuler />
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter color="#1cb8b8" text="Et hvalpevisit er altså til:" />
          <TextList texts={ConsultPupForYou} />
          <TextCenter>
            og selvfølgelig dig, der ønsker at få svar på alle dine spørgsmål du måtte have omkring
            hvalpebideri, miljøtræning, socialisering, alene hjemme træning, renlighed og hvad du
            ellers går og tænker på!
          </TextCenter>
          <LandingpageCallMe />
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Jeg kan med glæde fortælle dig, at efter et hvalpevisit på 1,5 time, vil du være i stand til:" />
          <TextListMark texts={ConsultPupHour} />
          <TextCenter>
            Det tager kun halvanden time af din tid at sikre dig en mere overskuelig hverdag og en
            mere rolig, fælles fremtid!
          </TextCenter>
        </Column>
      </Row>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <TitleCenter text="Din investering i din helt egen garanti for en mindre stressfyldt og langt mere afslappet hverdag med din hvalp, er:" />
          <TitleCenter bold color="#1cb8b8" text="Kun 1.050 kr. + kørsel" />
          <TextCenter>
            Det svarer nogenlunde til prisen på et par robuste hvalpebøger, som kan give en overflod af information uden at du får konkrete værktøjer til lige dét du søger hjælp til.
          </TextCenter>
          <br />
          <ContactPopUp text="Send en mail og få en tid til et værdifuldt besøg" />
        </Column>
      </Row>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <TitleCenter color="#1cb8b8" text="Du får svar indenfor 24 timer om tid til et hvalpevisit" />
          <TextCenter>
            Et hvalpevisit foregår i hjemmet hos dig og din hvalp og gerne med familien samlet til deltagelse.
          </TextCenter>
          <TextCenter>
            Du skal forvente at bruge 1,5 time på besøget, hvor du får mulighed for at stille alle de spørgsmål du har brug for at få besvaret.
            Jeg vil også stille spørgsmål ind til jeres hverdag sammen, for at blive klogere på jeres indbyrdes forhold og eventuelle problemstillinger i oplever.
          </TextCenter>
          <TextCenter>
            Jeg gennemgår forskellige øvelser, der vil styrke dig og din hvalps samarbejde og øge tilliden imellem jer.
            Øvelserne vil jeg først vise med hvalpen, så du ser det i aktion, og bagefter lader jeg dig om at udføre dem.
            Du får også redskaberne til hvordan du får hverdagens rutiner til at køre som smurt, med en lille hvalp i hjemmet.
          </TextCenter>
          <TextCenter>
            Efter mit besøg har du mulighed for at ringe og skrive ved spørgsmål. Jeg vil også følge op via mail et par uger efter mit besøg.
          </TextCenter>
        </Column>
      </Row>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <TitleCenter text="Stadig i tvivl om du skal bestille tid? Her er 3 argumenter for hvorfor du kan få gavn af et hvalpevisit:" />
          <TextListArrow texts={ConsultPupDoubts} />
        </Column>
      </Row>

    </Background>
  </Landingpage>
);

export default withRouter(DogConsultPuppy);

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
