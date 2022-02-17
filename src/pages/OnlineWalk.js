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
import { FrontNoOne, OnlineCoverWalk } from '../assets';
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
  'Fordi du får mere glæde, ro og overskud tilbage til jeres gåture. Du kan nyde dem, fremfor at frygte dem.',
  'Fordi det du lærer kan bruges i alle andre sammenhænge, hvor du ønsker at ændre din hunds adfærd. Du lærer at se din hunds adfærd fra en anden vinkel, så du ved hvad du kan gøre for at skabe succes. Det vil gøre al jeres træning fremadrettet lettere og mere succesfuld.',
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
        onClick={() => window.open('https://ezme.io/c/x1S/zPtg', '_blank')}
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

      {/* <Row>
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
      </Row> */}

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
        <Column widthPercentage="100%">
          <TitleCenter text="Udover alt dette, kan du forvente at få helt konkrete værktøjer med fra kurset:" />
          <TextListMark texts={LPstep8} />
        </Column>
      </Row>

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
          <TitleCenter bold color="#872f35" text="Kun 1.495 kr. inkl. moms" />
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
            indenfor de første 14 dage. Jeg ønsker dig succes og fuld tilfredshed!
          </TextCenter>
        </Column>
      </Row>

      <ButtonOnline
        text="Ja tak! Jeg vil gerne have adgang til onlinekurset nu"
        onClick={() => window.open('https://ezme.io/c/x1S/zPtg', '_blank')}
      ></ButtonOnline>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <TextCenter>Der lukkes for salget til midnat den 03.03.2022</TextCenter>
        </Column>
      </Row>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <LPHeadlineWalk text="Sådan foregår kurset" />
          <br />
          <br />
          <TextCenter>
            Du får tilsendt en mail straks efter køb, der giver dig adgang til en online side, hvor
            kursets lektioner ligger klar til dig. Kursets første lektion får du adgang til straks
            efter køb. De resterende lektioner kommer 7 dage efter, så du kan nå at få succes med
            første uges materiale inden du skal arbejde videre.
          </TextCenter>
          <TextCenter>
            Alle lektioner har video undervisning, der er optaget på forhånd. Intet er Live.
            <br /> Dertil er der PDF-filer i form af skriftlig guide, arbejdsbøger og tjeklister,
            som du kan se og læse når du vil, hvor du vil og alle de gange du vil!
          </TextCenter>
          <TextCenter>
            Der er ingen udløbsdato på dit kursus, så du kan altid vende tilbage og gense det hele,
            liiige når du har lyst!
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
        onClick={() => window.open('https://ezme.io/c/x1S/zPtg', '_blank')}
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
