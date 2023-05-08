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
  MetaOnlineWebinarCool,
  TextListArrow,
} from '../components';
import Responsive from '../components/layout/Responsive';
import { OnlineCoverCool, FrontNoOne } from '../assets';
import '../components/table/TableCss.css';

const LPstep3 = [
  'Du er træt af din hund skal kommentere alle i møder?',
  'Du er frustreret over din hund ikke lytter til dig når andre er nær?',
  'Du længes efter at kunne nyde gåturen uden stress og uro?',
  'Du ved ikke helt hvordan du skal få bugt med din hunds dårlige opførsel?',
];

const LPstep5 = [
  'aflæser din hunds tegn på stress, så du lettere kan se hvornår den føler sig presset',
  'undgår at din hund kortslutter, og fortsat kan lytte efter hvad du siger',
  'sætter din hund op til succes, så i kan få flere og flere dejlige gåture sammen',
  'tackler mødet med andre hunde i ro og mag',
];

const LPstep8 = [
  'Konkret øvelse i kan træne hjemme, som styrker din hunds kontak til dig i mødet med andre',
  '3 simple metoder til at indlære ro i mødet med andre hunde',
  'Fotoalbumsprincippet, der giver dig indsigt i din hunds hukommelse, så i fremadrettet kan få succes uanset hvad!',
];

const OnlineWebinarCool = () => (
  <LandingpageOnline>
    <MetaOnlineWebinarCool />
    <Background>
      <Row>
        <Column widthPercentage="100%">
          <Image src={OnlineCoverCool} />
          <br />
          <TitleCenter
            text="Et online webinar til dig der ønsket en afslappet hund, der kan nyde gåturen sammen med dig"
          />
          <TextCenter>
            Oplever du din hund "kortslutter" på gåtur i mødet med andre hunde og er ikke til at komme i kontakt med?
          </TextCenter>
          <TextCenter>
            Bliver gåturen sammen hurtigt mere frustrerende end givende?
          </TextCenter>
          <TextCenter>
            Ville du ønske du havde konkrete redskaber til at få din hund til at finde ro i mødet med andre?
          </TextCenter>
          <TextCenter>
            Få svar på hvad du konkret kan gøre, når Dyreadfærdskonsulent Sabrina Svane går LIVE og giver dig opskriften på at skabe ro for din hund i mødet med andre hunde.
          </TextCenter>
        </Column>
      </Row>

      <ButtonOnline
        text="Jeg er klar! Tag mig til tilmeldingssiden"
        onClick={() => window.open('https://ezme.io/c/x1S/W37O', '_blank')}
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
            enkelte, afgørende metoder du får på webinaret, kan du undgå frustration og
            stress for jer begge og lykkedes med at holde din hunds lytteklapper ude, så i kan få
            den rolige gåtur du drømmer om!
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
                Jeg er indehaver af Svanes Dyr, hvor jeg flere gange årligt afholder mit populære Helt-Cool forløb
                som har skabt succes for hundredvis af hunde og deres ejere, med at få mere ro på gåturen.
              </Text>
              <Text>
                Uanset om det har været den overivrige, hilseglade vovse eller den sensitive, udadreagerede snude,
                så har jeg fulgt en fast opskrift på at skabe et solidt fundament af kontakt og ro i mødet med andre.                
                Det er denne opskrift og min ekspertviden om
                adfærd jeg ønsker at give dig med i dette webinar.
              </Text>
            </TextContainer>
          </FlexedRow>
        </Column>
      </Row>

      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <TitleCenter text="Lige nu kan du komme med til en introduktionspris på " />
          <TitleCenter color="#008037" text="Kun 149 kr. inkl. moms" />
          <TextCenter>
            En billig investering i at få mindre stressfyldte og mere afslappede gåture med din hund.
          </TextCenter>
        </Column>
      </Row>

      <ButtonOnline
        text="Jeg er klar på at få mere ro på gåturen!"
        onClick={() => window.open('https://ezme.io/c/x1S/W37O', '_blank')}
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
          <LPHeadlineWebinar text="Sådan foregår webinaret" />
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
            Webinaret afholdes onsdag den 24. maj 2023 fra kl. 19.00 - 21.00.
          </TextCenter>
          <TextCenter>
            Jeg vil gå LIVE inde i gruppen til starttidspunktet, hvor du får en notifikation fra Facebook om at nu er vi i gang.<br />
            Der er afsat 1,5 time til gennemgang af aftenens materiale, hvor der vil være billeder og videoer undervejs så du får et godt indblik i metoderne du skal hjem og praktisere.<br />
            Undervejs vil der være 10 minutters pause til at hente forfriskninger.<br />
            Vi slutter aftenen af med ½ time afsat til spørgsmål, som du kan stille direkte i kommentarsporet.
          </TextCenter>
          <TextCenter>
            Kan du ikke være med på selve aftenen?<br />
            Fortvivl ikke!<br />
            Webinaret optages og bliver liggende inde i facebookgruppen i 30 dage.
          </TextCenter>
          <TextCenter bold>
            Du har adgang til frit at se eller gense webinaret frem til og med den 24. juni 2023.
          </TextCenter>
          <TextCenter>
            Facebookgruppen vil efter denne dato blive slettet og adgang til webinaret forsvinder.
          </TextCenter>
        </Column>
      </Row>
      <br />

      <ButtonOnline
        text="Ja tak! Jeg skal med!"
        onClick={() => window.open('https://ezme.io/c/x1S/W37O', '_blank')}
      ></ButtonOnline>
      <br />
      <br />
    </Background>
  </LandingpageOnline>
);

export default OnlineWebinarCool;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
