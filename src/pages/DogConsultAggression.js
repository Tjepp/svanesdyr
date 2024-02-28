import React from 'react';
import styled from 'styled-components';

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
  LandingpageCallMe,
} from '../components';
import Responsive from '../components/layout/Responsive';
import { ConsultAggOne, ConsultAggTwo, sabrinaNew } from '../assets';
import '../components/table/TableCss.css';

const ConsultAgg3 = [
  'Du er træt af din hund skal kommentere alle i møder?',
  'Du er frustreret over din hund ikke lytter til dig når andre er nær?',
  'Du længes efter at kunne nyde gåturen uden stress og uro?',
  'Du ved ikke helt hvordan du skal få bugt med din hunds dårlige opførsel?',
];

const ConsultAggHour = [
  'At forstå din hunds adfærd og årsagen til at den opfører sig som den gør',
  'At sætte rammer for gåturen, så du helt undgår dårlig opførsel - også langt ude i fremtiden',
  'At få din hund til at gøre det du beder om',
  'At kunne få ro på din hund og dermed mere overskud til jer begge på gåturene',
];

const ConsultAggForYou = [
  'aflæser din hunds tegn på stress, så du lettere kan se hvornår den føler sig presset',
  'undgår at din hund kortslutter, og fortsat kan lytte efter hvad du siger',
  'sætter din hund op til succes, så i kan få flere og flere dejlige gåture sammen',
  'tackler mødet med andre hunde i ro og mag',
];

const ConsultAggDoubts = [
  'DERFOR #1 For kun et par timer af din tid og få tusinde kroner kommer du til både at forstå og bruge de enkle metoder, der skal til for at skabe den rolige gåtur DU ønsker sammen med din hund - og det virker ikke kun nu og her, men resten af din hunds levetid!',
  'DERFOR #2 Du får trin-for-trin vejledende hjælp til lige det du ønsker af en professionel uddannet adfærdskonsulent, så du sparer timevis af din tid på at google dig frem til (knap så) gode råd, som alligevel ikke helt har den ønskede effekt..',
  'DERFOR #3 Din investering strækker sig udover konsultationen i hjemmet! Da jeg går meget op i at du får vedvarende succes med din hund, får du fri opfølgning på telefon og mail i 6 mdr. efter mit besøg, så du kan få et kompetent og fagligt svar på alle dine spørgsmål, der måtte dukke op!',
];

const DogConsultAggression = () => (
  <Landingpage>
    <MetaConsultPuppy />
    <LandingpageHeadline text="Adfærdskonsultation med certificeret Dyreadfærdskonsulent" />
    <Background>
      <Row>
        <Column widthPercentage="100%">
          <TitleCenter
            text="Til dig der ønsket en afslappet hund, der kan nyde gåturen sammen med dig - selv i mødet med andre"
            showHorizontalRuler
          />
          <TextCenter>
            Oplever du din hund "kortslutter" på gåtur i mødet med andre hunde og er ikke til at komme i kontakt med?
            <br />
            Bliver gåturen sammen hurtigt mere frustrerende end givende?
            <br />
            Ville du ønske du havde konkrete redskaber til at få din hund til at finde ro i mødet med andre?
          </TextCenter>
          <TextCenter>
            Så bestil en tid til en adfærdskonsultation, hvor du får de redskaber du skal bruge for at skabe
            en lydig, kontaktsøgende hund, som kan finde ro i mødet med andre hunde og dermed gør jeres
            gåture sammen mere overskuelig og hyggelig.
          </TextCenter>
          <LandingpageCallMe />
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="80%">
          <TitleCenter text="Du får professionel rådgivning og en skræddersyet handlingsplan til dig og din hund" />
          <FlexedRow>
            <Image src={sabrinaNew} width="225px" height="300px" />
            <TextContainer>
            <Text>
                Jeg hedder Sabrina Svane og har specialiseret mig i at hjælpe aggressive, udfarende hunde uanset årsag.
                Udover at tilbyde adfærdsbehandling i hjemmet, afholder jeg også flere gange årligt mit populære Helt-Cool forløb
                som har skabt succes for hundredvis af hunde og deres ejere, med at få mere ro på gåturen.
              </Text>
              <Text>
                Jeg har gennem tiden haft mange forskellige racer mellem hænderne, og
                møder altid hunden hvor den er, da hver hund har deres egen personlighed og erfaring at tage
                hensyn til. For selvom hunden ser aggressiv ud, er det meget sjældent at årsagen er aggression, men derimod
                dårlige oplevelser, mistillid til andre, ren usikkerhed eller angst, som skal arbejdes med.
              </Text>
              <Text>
                Du får altså besøg af en uddannet Dyreadfærdskonsulent, der har reel, praktisk
                erfaring med at hjælpe hunde og deres ejere med at skabe mere harmoniske gåture, og kan hurtigt sætte dig ind i hvad der
                virker og ikke virker, når hunden skal have succes med at finde ro i mødet med andre.
              </Text>
            </TextContainer>
          </FlexedRow>
        </Column>
      </Row>
      <ContactPopUp text="Smid en mail og få tid til et besøg" />

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <TitleCenter text="Kan du nikke genkendende til bare ét af følgende udsagn;" />
          <TextListArrow texts={ConsultAgg3} />
        </Column>
      </Row>

      <Row marginBottom="25px">
        <Column widthPercentage="100%">
          <TitleCenter
            color="#1cb8b8"
            text="Så har jeg både en god og en dårlig nyhed til dig.."
          />
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
            enkelte, afgørende metoder du får til en adfærdskonsultation, kan du undgå frustration og
            stress for jer begge og lykkedes med at holde din hunds lytteklapper ude, så i kan få
            den rolige gåtur du drømmer om!
          </TextCenter>

          <br />
          <ContactPopUp text="Book tid til en konsultation og få metoderne til succes" />
        </Column>
      </Row>

      <Row>
        <TitleCenter text="Dét har andre fået ud af et besøg fra mig:" showHorizontalRuler />
      </Row>

      <Row>
        <Column widthPercentage="80%">
          <TitleCenter text=" ”Vi har fået et nyt syn på en problemstilling, hvor vi tidligere var kørt fast, og en ny tro på tingene” " />
          <FlexedRow>
            <Image src={ConsultAggOne} width="300px" height="200px" />
            <TextContainer>
              <Text>
                Som studerende var den eneste lille overvejelse på økonomien, men der var intet at snakke om.
                Det var en rigtig god pris for alt det, man får med i bagagen!
                Vi har fået en meget mere selvsikker hund, der nu tør udføre opgaver, hvor han før var usikker.
                Han hviler meget mere i sig selv og stoler på, at vi tager de rigtige beslutninger, så han ikke selv behøver reagere, for der er styr på det hele.
              </Text>
              <Text>
                Vi har fået en meget større indsigt i vores eget kropssprog omkring Freddie, men også lillebror Elton, fordi det er helt tydeligt, at de reagerer meget på det.
                Selvom vi altid har vist, det var en faktor, var det fedt, at du kunne hjælpe os mere konkret med, hvordan vi kan arbejde med det, så Freddie får de bedste forudsætninger i hans videre træning! 
              </Text>
              <Text>Det var dejligt, konstruktivt, inspirerende og rigtig hyggeligt at have dig på besøg!</Text>
              <Text>Nicklas og Anna</Text>
            </TextContainer>
          </FlexedRow>
        </Column>
      </Row>
      <Row>
        <Column widthPercentage="80%">
          <TitleCenter text=" Opfølgende samtale 3 måneder efter konsultationen hos Freddie; " />
          <FlexedRow>
            <Image src={ConsultAggTwo} width="200px" height="300px" />
            <TextContainer>
              <Text>
                Du har hjulpet os rigtig godt med Freddie især, og hans selvtillid! 
             </Text>
              <Text>
                Ville lige dele en fed succeshistorie fra morgenturen.
                <br />
                Vi mødte først en sort labrador direkte mod os, skiftede side og da de er lige over for hinanden gør den af Freddie - 
                Freddie stopper blot op og kigger, og kommer derefter selv mod mig for kontakt og vi går videre i afslappet tempo.
                Kort derefter ser vi en lille hvid hund, som normalt er hans svaghed. 
                Med det samme den får øje på Freddie, gør den intenst og ejeren har svært ved at få kontakt. 
                Freddie kigger igen på hunden og overvejer hvad han skal gøre, søger selv mig og går roligt med videre. 
                I begge tilfælde var vi altså på modsatte fortov, men i tilfælde hvor Freddie før uden tøven var gået i selvsving når de gøede ad ham. 
              </Text>
              <Text>Oveni hatten regnede og blæste det, ikke lige noget for ham - så han var endda ekstra udfordret.</Text>
              <Text>Vi er SÅ glade for at se hans udvikling, og mærke effekten af din træning!</Text>
              <Text>Nicklas og Anna</Text>
            </TextContainer>
          </FlexedRow>
        </Column>
      </Row>

      <Row>
        <TitleCenter text="" showHorizontalRuler />
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter color="#1cb8b8" text="En konsultation er altså til dig der vil lære hvordan du:" />
          <TextList texts={ConsultAggForYou} />
          <TextCenter>
            og selvfølgelig får du helt konkrete værktøjer du hurtigt og let kan tage i brug til hverdagens gåture!
          </TextCenter>
          <LandingpageCallMe />
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Jeg kan med glæde fortælle dig, at efter en konsultation på max 2 timer, vil du være i stand til:" />
          <TextListMark texts={ConsultAggHour} />
          <TextCenter>
            Det tager kun et par timer af din tid at sikre dig mere overskuelige gåture og en
            mere rolig hverdag!
          </TextCenter>
        </Column>
      </Row>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <TitleCenter text="Din investering i din helt egen garanti for mindre stressfyldte og langt mere afslappede gåture med din hund, er:" />
          <TitleCenter bold color="#1cb8b8" text="Kun 950 kr. pr. time + kørsel" />
          <TextCenter>
            Det svarer nogenlunde til prisen på et hundehold, som kan give en overflod af øvelser og
            information uden at du får konkrete værktøjer til lige dét du søger hjælp til.
          </TextCenter>
          <br />
          <ContactPopUp text="Send en mail og få en tid til et værdifuldt besøg" />
        </Column>
      </Row>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <TitleCenter
            color="#1cb8b8"
            text="Sådan foregår en konsultation til dig og din hund:"
          />
          <TextCenter>
            En adfærdskonsultation foregår i hjemmet hos dig og din hund og gerne med familien samlet til
            deltagelse.
          </TextCenter>
          <TextCenter>
            Du skal forvente at bruge mellem 1,5 - 2 timer på besøget, hvor du får mulighed for at stille alle
            de spørgsmål du har brug for at få besvaret. Jeg vil også stille spørgsmål ind til jeres
            hverdag sammen, for at blive klogere på jeres indbyrdes forhold, hundens hverdag og
            problemstillinger i oplever.
          </TextCenter>
          <TextCenter>
            Jeg gennemgår forskellige øvelser, der vil styrke dig og din hunds samarbejde og øge
            tilliden imellem jer. Øvelserne vil jeg først vise med hunden, så du ser det i aktion,
            og bagefter lader jeg dig om at udføre dem. Derefter går vi udenfor og kigger på en hund jeg medbringer.
            Her giver jeg dig redskaberne til hvordan du fremadrettet tackler mødet med en anden hund,
            så du bibeholder kontakten til din egen hund og kan fortsætte turen i ro og mag.
          </TextCenter>
          <TextCenter>
            Efter mit besøg har du mulighed for at ringe og skrive ved spørgsmål. Jeg vil også selv følge
            op via mail flere gange efter mit besøg.
          </TextCenter>
        </Column>
      </Row>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <TitleCenter text="Stadig i tvivl om du skal bestille tid? Her er 3 argumenter for hvorfor du kan få gavn af en adfærdskonsultation:" />
          <TextListArrow texts={ConsultAggDoubts} />
        </Column>
      </Row>
    </Background>
  </Landingpage>
);

export default DogConsultAggression;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
