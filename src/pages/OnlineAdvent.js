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
  TextListArrow,
  TextListMark,
  ButtonOnline,
} from '../components';
import Responsive from '../components/layout/Responsive';
import {
  OnlineCoverCourses,
  OnlineRelax,
  OnlineStress,
  OnlineConfident,
} from '../assets';
import '../components/table/TableCss.css';

const Selvsikker = [
  'Hvordan du kan bruge konceptet fra Frivillig Håndtering til at hjælpe din hund i hverdagen',
  'Hvordan du øger din hunds gåpåmod og selvtillid med helt simple, konkrete øvelser ',
  'Hvordan du bedst hjælper din hund med at blive nysgerrig, fremfor usikker, i mødet med nyt',
];
const SelvsikkerVideo = [
  'Videoeksempler på Frivillig Håndtering konceptet implementeret i hverdagen',
  'Videoeksempler på konkrete øvelser du kan lege med for at øge hundens selvtillid',
];

const Stress = [
  'Hvad der sker i kroppen (og i hovedet) på din hund når den stresser',
  'Hvordan du hjælper din hund når den udviser tegn på stress',
  'Hvordan du bedst håndterer situationen hvis din hund ”kortslutter” og er udenfor pædagogisk rækkevidde',
  'Hvordan du giver de optimale forudsætninger for ro og dermed forebygger stress',
];
const StressXtra = [
  'Videoøvelse i at bruge legetøjet til at hjælpe hunden med at ”geare op” og ikke mindst ”geare ned”',
  'Videoguide på at lære hunden at finde ro, selvom der er noget der ”frister”',
  'Trin-for-trin videoguide i at lære din hund en stabil bliv i kurv – også selvom der sker noget omkring den',
];

const Calm = [
  'Din erfarne Dyreadfærdskonsulents 5 retningslinjer til succes med rolig adfærd',
  'Svaret på hvorfor din hund kan finde ro i visse situationer, men ikke andre',
  'Svaret på hvordan du lærer din hund at gå fra at være ”på” med træning til afslapning',
];
const CalmVideo = [
  'Trin-for-trin videoguide i at lære din hund en stabil bliv i kurv – også selvom der sker noget omkring den”',
];


const OnlineAdvent = () => (
  <LandingpageOnline>
    <Background>
      <Row>
        <Column widthPercentage="100%">
          <Image src={OnlineCoverCourses} />
          <br />
          <TitleCenter text="Onlinekurser fra Svanes Dyr" />
          <TextCenter>
          <Text>
            Her på siden finder du de forskellige webinars og minikurser der blev udbudt som adventskalender 2024 for Hundesprogsklubben!
            <br />
            Fik du ikke set et af webinarene, eller ønsker du blot at eje dit yndlingsafsnit til evig tid, så har du her chancen!
            <br />
            Se hvordan du investerer i dit yndlingsemne:
          </Text>
          <Text>
            <b>Sådan får du adgang til dit onlinekursus</b><br />
            Efter betaling får du straks tilsendt en mail, hvori du finder et personligt link til Sabrina Svanes online bibliotek på Onedrive.
            I dette bibliotek vil dit webinar eller minikursus ligge klar til afspilning med det samme.
            Du kan også vælge at downloade dit onlinekursus til din computer, tablet eller mobil - så du ikke behøver at finde linket i din mail hver gang, og kan se det lige når du har lyst.
          </Text>
          <Text>
            Ovenstående adgangsmetode er gældende for alle onlinekurser her på siden.
          </Text>
          <Text>
            <b>Din investering giver dig adgang til privat brug</b><br />
            Jeg skal gøre opmærksom på at adgang til onlinekurset er kun til personligt brug. Alle onlinekurser her på siden er under Copyright Sabrina Svane, Svanes Dyr. Det må derfor <b>ikke</b> kopieres, sælges, uddeles eller anvendes derudover uden skriftlig tilladelse fra Sabrina Svane.
          </Text>
          </TextCenter>
          <br />
        </Column>
      </Row>
      <br />
      <br />

      {/* RO */}
      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Lær hunden at finde ro til hverdag" showHorizontalRuler />
          <FlexedRow>
            <Image src={OnlineRelax} width="300px" height="200px" />
            <TextContainer>
            <Text>
                <b>Kræver din hund din opmærksomhed når du er optaget af andet?</b>
                <br />
                Bliver sofatid til mere uro end afslapning?
                <br />
                Ville du ønske din hund kunne finde ro sammen med dig når der sker ”ingenting”? 
              </Text>
              <Text>
                Så kig med her i minikurset hvor Dyreadfærdskonsulent Sabrina Svane giver dig metoden til at Lær hunden at finde ro til hverdag !
              </Text>
              <Text>___</Text>
              <Text>
                <b>I dette minikursus får du:</b>
                <TextListMark texts={Calm} />
              </Text>
              <Text>
                <b>Ikke mindst får du:</b>
                <TextListArrow texts={CalmVideo} />
                Din investering i at lære din hund at slappe af og være rolig, selvom det er ”kedeligt”; <b>119,- kr.</b>   
              </Text>
              <Text>___</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <ButtonOnline
            text="Giv mig succes med at få ro!"
            onClick={() => window.open('https://ezme.io/c/x1S/okM0', '_blank')}
          ></ButtonOnline>
        </Column>
      </Row>

      {/* STRESS */}
      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Stress forebyggelse og -lindring" showHorizontalRuler />
          <FlexedRow>
            <Image src={OnlineStress} width="300px" height="200px" />
            <TextContainer>
              <Text>
                <b>Hvordan ser det ud når din hund er stresset? </b>
                <br />
                Er du i tvivl om hvordan du kan hjælpe din hund med at geare ned og finde mere ro?
              </Text>
              <Text>
                Så fjern tvivlen og få svaret af Dyreadfærdskonsulent Sabrina Svane her i webinaret om Stress, forebyggelse og -lindring!
              </Text>
              <Text>___</Text>
              <Text>
                <b>I dette webinar får du svaret på:</b>
                <TextListMark texts={Stress} />
                Vi snakker om helt konkrete tiltag du kan foretage for at undgå stress til hverdag!
              </Text>
              <Text>   </Text>
              <Text>
                <b>Ikke mindst får du:</b>
                <TextListArrow texts={StressXtra} />
                Din investering i at hjælpe din hund til mere ro og mindre stress i hverdagen; <b>199,- kr.</b> 
              </Text>
              <Text>___</Text>
              </TextContainer>
          </FlexedRow>
          <br />
          <ButtonOnline
            text="Ja tak! Til en mere afslappet hund!"
            onClick={() => window.open('https://ezme.io/c/x1S/3feM', '_blank')}
          ></ButtonOnline>
        </Column>
      </Row>

      {/* SELVSIKKER */}
      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Sådan gør du den usikre hund mere selvsikker" showHorizontalRuler />
          <FlexedRow>
            <Image src={OnlineConfident} width="300px" height="200px" />
            <TextContainer>
              <Text>
                <b>Hvordan kan du helt lavpraktisk øve din usikre hund i at have mere gåpåmod og selvtillid?</b>
              </Text>
              <Text>
                Få svaret af Dyreadfærdskonsulent Sabrina Svane her i minikurset ”Sådan gør du den usikre hund mere selvsikker”!
              </Text>
              <Text>___</Text>
              <Text>
                <b>I dette minikursus får du svaret på:</b>
              <TextListMark texts={Selvsikker} />
              </Text>
              <Text>
                <b>Ikke mindst får du:</b>
                <TextListArrow texts={SelvsikkerVideo} />
                Din invstering i at hjælpe din usikre hund med at tage mødet med nyt med løftet pande; <b>149,- kr.</b> 
              </Text>
              <Text>___</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <ButtonOnline
            text="Jeg er klar på at give min hund mere selvtillid!"
            onClick={() => window.open('https://ezme.io/c/x1S/3fzd', '_blank')}
          ></ButtonOnline>
        </Column>
      </Row>

      <br />
      <br />
    </Background>
  </LandingpageOnline>
);

export default OnlineAdvent;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
