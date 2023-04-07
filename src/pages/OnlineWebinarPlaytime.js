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
  LPHeadlineWebinar,
  ButtonOnline,
} from '../components';
import Responsive from '../components/layout/Responsive';
import { OnlineCoverDogPlay, FrontNoOne } from '../assets';
import '../components/table/TableCss.css';

const LPstep5 = [
  'aflæser hundens dæmpende og afstandssøgende signaler, så du lettere kan se hvad der er leg og alvor',
  'spotter forskellen på en venlig hund og en nervøs hund',
  'skelner mellem hundenes individuelle legestile og præferencer',
  'udøver kontrolleret leg, så ingen hunde føler sig trynet eller truet',
  'kan afbryde legen og teste om hundene gider at lege videre med hinanden',
  'kan lave kontrollerede introduktionsmøder og spotte vennerne på afstand',
];

const LPstep8 = [
  'Hundens 4 spilleregler, der sikrer legen stadig er god og ikke en træls oplevelse',
  'Samtykketesten du kan bruge når legen er vild og du vil teste om alt stadig er ok mellem hundene',
  '3 metoder til at udøve kontrollerede introduktionsmøder mellem hundene',
];

const OnlineWebinarPlaytime = () => (
  <LandingpageOnline>
    <Background>
      <Row>
        <Column widthPercentage="100%">
          <Image src={OnlineCoverDogPlay} />
          <br />
          <TitleCenter
            text="Et online webinar til dig der ønsket en grundig viden om hvornår leg er godt og hvornår det skal stoppes"
          />
          <TextCenter>
            Hvornår er hundeleg "rigtig" og "forkert"?
          </TextCenter>
          <TextCenter>
            Bliver du hurtig i tvivl om alt er ok når to eller flere hunde leger med hinanden?
          </TextCenter>
          <TextCenter>
            Ved du hvordan god og jævnbyrdig leg ser ud mellem to hunde?
          </TextCenter>
          <TextCenter>
            Få svar på hvad du skal kigge efter, når Dyreadfærdskonsulent Sabrina Svane går LIVE og fortæller, hvordan du sikrer dig at begge parter i legen stadig synes det er sjovt.
          </TextCenter>
        </Column>
      </Row>

      <ButtonOnline
        text="Jeg er klar! Tag mig til tilmeldingssiden"
        onClick={() => window.open('https://ezme.io/c/x1S/WXGr', '_blank')}
      ></ButtonOnline>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <TitleCenter text="Det er nemlig en myte at hundene skal kunne klare sig selv, når det kommer til at sætte grænser overfor andre hunde." />
          <TextCenter>
            Hvis du overlader hundene til sig selv, så opstår der meget ofte en situation hvor grænserne ikke respekteres. 
            Der bliver simpelthen ikke lyttet. 
            Når din hund ikke føler sig lyttet til vil den begynde at råbe højere. Adfærden eskalerer. 
            I sidste ende kan du stå med en hund der udviser angst eller aggression, pga. de dårlige oplevelser med andre hunde.
          </TextCenter>
          <TextCenter>
            At overlade hundene til selv at finde ud af det, svarer til at overlade børnene i skolegården til sig selv. 
            Hvilket enhver forælder vil finde uacceptabelt. 
            Der skal være en voksen, ansvarlig til stede, som kan afbryde når nok er nok og sørge for alle har en god stund sammen.
          </TextCenter>
          <TextCenter>
            Det er her du som ansvarlig hundeejer kommer ind i billedet.
          </TextCenter>
        </Column>
      </Row>


      <Row>
        <Column widthPercentage="100%">
          <LPHeadlineWebinar text="På webinaret vil du lære hvordan du;" />
          <TextList texts={LPstep5} />
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Udover alt dette, kan du forvente at få helt konkrete værktøjer med fra webinaret:" />
          <TextListMark texts={LPstep8} />
          <TextCenter>
            og ikke mindst mulighed for at få svar på nogle af dine brændende spørgsmål, da der afsættes ½ time til spørgsmål.
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <TitleCenter showHorizontalRuler />
      </Row>

      <Row>
        <Column widthPercentage="80%">
          <TitleCenter text="Undervisningen leveres af din erfarne Dyreadfærdskonsulent" />
          <FlexedRow>
            <Image src={FrontNoOne} width="300px" height="200px" />
            <TextContainer>
              <Text bold>Sabrina Svane</Text>
              <Text>
                Jeg er indehaver af Svanes Dyr, hvor jeg arbejder fuldtid som adfærdskonsulent, afholder kursusforløb og holdtræning for hunde i alle aldre 
                og inviteres jævnligt ud til at holde foredrag om hunde, især med fokus på hundens sprog. 
              </Text>
              <Text>
                Jeg driver Hundesprogsklubben på Facebook, da min største passion er at formidle min viden om hundens signaler og kropssprog ud til andre passionerede hundeejere. 
                Udover at gøre dette online, afholder jeg også socialiseringshold og legestuer, med kontrolleret leg i fokus, hvor ejerne udelukkende lære at aflæse deres hunde. 
                Så du kan roligt kalde mig fuldblodsnørd i hundesprog og signalforståelse.
              </Text>
            </TextContainer>
          </FlexedRow>
        </Column>
      </Row>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <TitleCenter text="Din investering i at kunne kontrollere hundenes leg og sikre alle får en god oplevelse" />
          <TitleCenter color="#008037" text="Kun 199 kr. inkl. moms" />
          <TextCenter>
            Hvilket er billigere end at købe en bog om adfærd, som kan give en overflod af information uden at du får konkrete værktøjer til netop hundenes leg og interaktion med hinanden.
          </TextCenter>
        </Column>
      </Row>

      <ButtonOnline
        text="Jeg er klar til at få succes med kontrolleret leg!"
        onClick={() => window.open('https://ezme.io/c/x1S/WXGr', '_blank')}
      ></ButtonOnline>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <TextCenter italic>
            Bemærk at din tilmelding er bindende og beløb refunderes ikke
          </TextCenter>
        </Column>
      </Row>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <LPHeadlineWebinar text="Sådan foregår kurset" />
          <br />
          <br />
          <TitleCenter text="LIVE webinar i lukket facebookgruppe og 30 dages adgang" />
          <TextCenter>
            Straks efter køb vil du få tilsendt en mail med invitation til en lukket facebookgruppe.<br />
            Herinde bliver du, sammen med de andre deltagere, lukket ind i gruppen senest dagen før webinaret afholdes.<br />
            Inde i gruppen vil du finde slides til webinarets fremvisning. 
            Der vil både være slides med mulighed for at tage notater på undervejs i webinaret, og slides i fuld format.
            Begge dele kan du downloade og printe ud efter ønske. Disse slides har du til evigt eje efter download.
          </TextCenter>
          <TextCenter bold>
            Webinaret afholdes torsdag den 20. april 2023 fra kl. 19.00 - 21.00.
          </TextCenter>
          <TextCenter>
            Jeg vil gå LIVE inde i gruppen til starttidspunktet, hvor du får en notifikation fra Facebook om at nu er vi i gang.<br />
            Der er afsat 1,5 time til gennemgang af aftenens materiale, hvor der vil være billeder og videoer undervejs så du fik et godt indblik i hundenes kommunikation.<br />
            Undervejs vil der være 10 minutters pause til at hente forfriskninger.<br />
            Vi slutter aftenen af med ½ time afsat til spørgsmål, som du kan stille direkte i kommentarsporet.
          </TextCenter>
          <TextCenter>
            Kan du ikke være med på selve aftenen?<br />
            Fortvivl ikke!<br />
            Webinaret optages og bliver liggende inde i faceboogruppen i 30 dage.
          </TextCenter>
          <TextCenter bold>
            Du har adgang til frit at se eller gense webinaret frem til og med den 20. maj 2023.
          </TextCenter>
          <TextCenter>
            Facebookgruppen vil efter denne dato blive slettet og adgang til webinaret forsvinder.
          </TextCenter>
        </Column>
      </Row>
      <br />

      <ButtonOnline
        text="Ja tak! Jeg skal med!"
        onClick={() => window.open('https://ezme.io/c/x1S/WXGr', '_blank')}
      ></ButtonOnline>
      <br />
      <br />
    </Background>
  </LandingpageOnline>
);

export default OnlineWebinarPlaytime;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
