import React from 'react';
import styled from 'styled-components';

import {
  LandingpageOnline,
  Column,
  MetaOnlineWalk,
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
  LPHeadlineWalk,
  ButtonOnline,
} from '../components';
import Responsive from '../components/layout/Responsive';
import { FrontNoOne, OnlineCoverWalk, TestiOnlineWalkOne } from '../assets';
import '../components/table/TableCss.css';

const LPstep3 = [
  'Du er træt af din hund skal kommentere alle i møder?',
  'Du er frustreret over din hund ikke lytter til dig når andre er nær?',
  'Du længes efter at kunne nyde gåturen uden stress og uro?',
  'Du ved ikke helt hvordan du skal få bugt med din hunds dårlige opførsel?',
];

const LPstep5 = [
  'skaber et solidt fundament af ønsket adfærd, som du kan tage i brug på gåturen sammen med din hund',
  'aflæser din hund, så du ikke er i tvivl når den fortæller dig den føler sig presset og utryg',
  'skaber succes for din hund og undgår negative reaktioner - selv når andre hunde er nær',
  'lærer din hund at kontakt og ro altid kan betale sig, uanset hvor i er og hvem i møder',
];

const LPstep7 = [
  'Har en hund der ikke er glad for andre hunde, og ønsker at gøre den tryg så den stopper med at reagere',
  'Oplever "gode" og "dårlige" dage med gåturene, og ønsker at få bugt med de dårlige dage',
  'Helt klart også til dig, med den (lidt for) hilseglade hund, som tror alle er til for den!',
];

const LPstep8 = [
  'Trin-for-trin guide med konkrete øvelser, der lærer din hund at kontakt og ro kan betale sig!',
  'Arbejdsbøger og tjeklister til let implementering i din hverdag af dét vi gennemgår',
  'Formlen til at analysere din hunds reaktioner, så du ved hvorfor det sker og hvordan du ændrer det',
  'Fotoalbumsprincippet, der giver dig indsigt i din hunds hukommelse, så i fremadrettet kan få succes uanset hvad!',
];

const LPstep15 = [
  'Fordi du får skabt et stærkere tillidsforhold og øget samarbejdsvillighed med din hund. Det kommer ikke kun til gavn på jeres gåture sammen, men også i al anden omgang i har med hinanden i hverdagen.',
  'Fordi du får mere glæde og ro tilbage til jeres gåture. Du kan nyde dem, fremfor at frygte dem.',
  'Fordi dét du lærer kan bruges i alle andre sammenhænge, hvor du ønsker at ændre din hunds adfærd. Du lærer at se din hunds adfærd fra en anden vinkel, så du ved hvad du kan gøre for at skabe succes. Det vil gøre al jeres træning fremadrettet lettere og mere succesfuld.',
];

const OnlineWalk = () => (
  <LandingpageOnline>
    <MetaOnlineWalk />

    <Background>
      <Row>
        <Column widthPercentage="100%">
          <Image src={OnlineCoverWalk} />
          <br />
          <TitleCenter
            text="Til dig der ønsker en afslappet og kontaktsøgende hund, der kan nyde gåturen sammen med
            dig - selv når andre hunde er nær"
          />
          <TextCenter>Onlinekurset er til dig, der:</TextCenter>
          <TextListMark texts={LPstep7} />
          <TextCenter>
            Uanset om du har en hilseglad vovse eller en sensitiv snude, så kan du her få
            redskaberne til at skabe mere ro på jeres daglige gåture.
          </TextCenter>
        </Column>
      </Row>

      <ButtonOnline
        text="Jeg er klar på at få gåturen jeg drømmer om!"
        onClick={() => window.open('https://ezme.io/c/x1S/z16r', '_blank')}
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
            enkelte, afgørende strategier og metoder du får på kurset, kan du undgå frustration og
            stress for jer begge og lykkedes med at holde din hunds lytteklapper ude, så i kan få
            den rolige gåtur du drømmer om!
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <LPHeadlineWalk text="På onlinekurset vil du lære hvordan du;" />
          <TextList texts={LPstep5} />
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Udover alt dette, kan du forvente at få helt konkrete værktøjer med fra kurset:" />
          <TextListMark texts={LPstep8} />
          <TextCenter>
            og ikke mindst mulighed for at få svar på nogle af dine brændende spørgsmål, da du får
            adgang til to LIVE spørgetimer med din underviser.
          </TextCenter>
        </Column>
      </Row>

      <Row>
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
        <Column widthPercentage="80%">
          <TitleCenter text=" ”Min store succesoplevelse var ved synet af en ”farlig” hund 50 meter fremme reagerede Marley med at sætte sig ned foran mig og kigge op på mig. Han fik masser af godbidder mens hunden passerede. Masser af ros. Og jeg var stolt som en pave!” " />
          <FlexedRow>
            {/* <Image src={ConsultPupOne} width="200px" height="300px" /> */}
            <TextContainer>
              <Text>
                Jeg har tidligere oplevet store problemer med at overføre lærte teknikker fra
                indenfor i lejligheden til udenfor. Det har været svært at få min hund til at tage
                imod godbidder udenfor, han havde det med at miste kontakten til mig så snart vi
                forlod lejligheden. Han sætter snuden i jorden og forsvinder ud af kontakten. Jeg
                var bekymret for om det kunne lykkedes mig at træne udenfor.
              </Text>
              <Text>
                Med den viden jeg fik i materialet, gav det mig en bedre forståelse for hvordan jeg
                kunne bryde øvelserne ned. Især efter lektionen om foto-albums hukommelsen gik det
                op for mig hvorfor der var et problem med at overføre læringen. Jeg forstod hvor
                svært det måtte være for min hund og fik øvelserne brudt ned i mindre bidder som min
                hund kunne have succes med. Ikke mindst den personlige hjælp jeg fik af dig med svar
                på spørgsmål var spot-on og en stor hjælp. Nu er Marley meget bedre i kontakt med
                mig på gåturen!
              </Text>
              <Text>
                I dag forstår jeg bedre de udfordringer jeg har haft og kan blive ved med at arbejde
                med dem, også på andre områder end at undgå konflikter med andre hunde på gåturen.
                Jeg har fået mere mod på træningen helt generelt. Det er vildt dejligt og meget
                tilfredsstillende!
              </Text>
              <Text>- Katrine Nørgaard og Marley</Text>
            </TextContainer>
          </FlexedRow>
        </Column>
      </Row>
      <Row>
        <TitleCenter showHorizontalRuler />
      </Row>

      {/* <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Kurset er helt præcist til dig, der:" />
          <TextListMark texts={LPstep7} />
          <TextCenter>
            Uanset om du har en hilseglad vovse eller en sensitiv snude, så kan du få redskaberne
            til at skabe mere ro på jeres daglige gåture.
          </TextCenter>
        </Column>
      </Row> */}

      <Row>
        <Column widthPercentage="80%">
          <TitleCenter text="Undervisningen leveres af din erfarne Dyreadfærdskonsulent" />
          <FlexedRow>
            <Image src={FrontNoOne} width="300px" height="200px" />
            <TextContainer>
              <Text bold>Sabrina Svane</Text>
              <Text>
                Jeg er indehaver af Svanes Dyr, hvor jeg flere gange årligt har hunde og deres ejere
                på succesfulde forløb til at blive Helt-Cool og finde roen nær andre hunde og
                mennesker.
              </Text>
              <Text>
                Udover at hjælpe andre med at få succes i hverdagen, har jeg også arbejdet med min
                egen dejlige Corgi herre, som er meget sensitiv og hurtig udadreagerende. Han har
                givet mig masser af praktisk erfaring med at skabe succes, uanset hvor vi går, hvem
                vi møder og hvad tid på dagen det er. Det er denne erfaring og min ekspertviden om
                adfærd jeg ønsker at give dig med i dette kursus.
              </Text>
            </TextContainer>
          </FlexedRow>
        </Column>
      </Row>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <TitleCenter text="Din investering i mindre stressfyldte og langt mere afslappede gåture med din hund, er:" />
          <TitleCenter bold color="#008037" text="Kun 1.495 kr. inkl. moms" />
          <TextCenter>
            Det svarer nogenlunde til prisen på et luksuriøst spaophold, som du ikke længere
            behøver, når du i stedet kan lade op i selskab med din hund, på jeres rolige gåture
            sammen.
            <br />
            Eller til prisen på et par robuste bøger om adfærd, som kan give en overflod af
            information uden at du får konkrete værktøjer til lige dét du søger hjælp til
          </TextCenter>
          <TextCenter>
            Føler du ikke at kursets indhold passer dig og din hund, så kan du få pengene retur
            indenfor de første 7 dage efter kursets start den 11.03.2022.
          </TextCenter>
        </Column>
      </Row>

      <ButtonOnline
        text="Ja tak! Jeg vil gerne have adgang til onlinekurset nu"
        onClick={() => window.open('https://ezme.io/c/x1S/z16r', '_blank')}
      ></ButtonOnline>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <TextCenter>Der lukkes for salget den 10.03.2022 kl. 18.00</TextCenter>
        </Column>
      </Row>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <LPHeadlineWalk text="Sådan foregår kurset" />
          <br />
          <br />
          <TitleCenter text="Lukket facebookgruppe, videoguides og LIVE spørgetimer med din underviser!" />
          <TextCenter>
            Straks efter køb vil du få tilsendt en mail med invitation til en lukket facebookgruppe.
            Herinde får du, sammen med de andre deltagere, adgang til et stærkt fællesskab hvor vi
            hjælpes ad med at udvikle os, med indspark, støtte og ikke mindst fede dialoger om hunde
            og adfærd.
          </TextCenter>
          <TextCenter>
            Gruppen åbner den 11.03.2022, hvor kursets forløb også vil starte.
          </TextCenter>
          <TextCenter>
            Kursets forløb består af flere lektioner med video undervisning, der er optaget på
            forhånd.
            <br /> Dertil er der PDF-filer i form af skriftlig guide, arbejdsbøger og tjeklister,
            som du kan se og læse når du vil, hvor du vil og alle de gange du vil!
          </TextCenter>
          <TextCenter>
            Du vil også få en direkte livline til din underviser, da jeg to gange vil gå LIVE og
            svare på alle de spørgsmål du måtte have. Efter spørgetimerne vil videoerne ligge
            tilgængelig, så du altid kan gense svarene.
          </TextCenter>
          <TextCenter>LIVE spørgetimerne vil foregå den 17.03.2022 og den 31.03.2022.</TextCenter>
          <TextCenter>
            Gruppen vil blive arkiveret fra den 11.04.2022 - det betyder den vil blive lukket for
            kommentarer, men stadig have alt indholdt tilgængeligt til dig så du kan vende tilbage
            og gense det hele, liiige når du har lyst.
          </TextCenter>
        </Column>
      </Row>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <TitleCenter text="Stadig i tvivl om det er noget for dig og din hund? Her er 3 argumenter for hvorfor du kan få gavn af kursets materiale:" />
          <TextListArrow texts={LPstep15} />
        </Column>
      </Row>

      <ButtonOnline
        text="Jeg er klar til at få succesoplevelser med min hund!"
        onClick={() => window.open('https://ezme.io/c/x1S/z16r', '_blank')}
      ></ButtonOnline>
      <br />
      <br />
    </Background>
  </LandingpageOnline>
);

export default OnlineWalk;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
