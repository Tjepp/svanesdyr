import React from 'react';
import styled from 'styled-components';

import {
  Page,
  Banner,
  Column,
  Meta,
  Title,
  TitleColor,
  Text,
  Image,
  BreadCrumps,
  TextList,
  Row,
  StyledLink,
  Prices,
} from '../components';
import Responsive from '../components/layout/Responsive';
import { dogOne, dogTwo, dogThree } from '../assets';
import '../components/table/TableCss.css';

const privateHour = [
  'Hunden kommer ikke når man kalder',
  'Hunden trækker i snoren',
  'Hunden stjæler ting/mad fra bordet',
  'Hunden hopper op ad gæster',
  'Hunden napper i bukseben eller lignende',
];

const consultation = [
  'Hunden reagerer aggressivt på andre hunde',
  'Hunden virker stresset og er svær at få ro på',
  'Hunden hyler/gør/ødelægger ting når den er alene',
  'Hunden knurrer når den har ben eller mad',
  'Hunden er bange for fyrværkeri/torden/andre lyde',
  'Hunden gør hele tiden ude i haven',
  'Hunden er urenlig',
];

const Colleagues = [
  'HORSENS: Maja Bruus, Horsens Hundecenter, www.hundecoach.dk',
  'SILKEBORG: Christine Løwe, Løwe & Hund, www.løweoghund.dk',
  'GIVSKUD: Lone Enghave, Enghave & Hund, www.enghaveoghund.dk',
  'HERNING: Jan Vestergaard, Egely Hunde, www.egelyhunde.dk',
  'ÅRHUS: Camilla Bruhn, Dyrecoach, www.dyrecoach.dk',
];

// const puppyVisitTexts = [
//   'Hvalpens sprog og fysiske udvikling',
//   'Optimal aktivering i hverdagen',
//   'Renlighed, alene hjemme og hvalpebideri',
//   'Miljøtræning og socialisering'
// ];

const Dog = () => (
  <Page>
    <Meta />
    <Banner text="Hundetræning Midtjylland">
      <BreadCrumps currentPage="Hund" />
    </Banner>
    <Background>
      <Row marginTop="25px">
        <Column widthPercentage="65%">
          <Title text="Konsultation ved hundeadfærdsbehandler" showHorizontalRuler />
          <Text>
            Står du med en hund, som har dårlige vaner der er svære at bryde, såsom at trække i
            snoren eller stjæle mad fra bordet, eller oplever du aggressiv eller ængstelig adfærd,
            som at gø af andre hunde, så er der hjælp at hente. Mange adfærdsproblemer kan behandles
            og ændres gennem belønningsbaseret træning og forståelse for hundens adfærd.
          </Text>
          <Text>
            Oplever du problemadfærd hos din hund, så husk på at din hund ikke prøver på at gøre
            livet surt for dig. Den har det selv svært, enten ved at forstå hvad du forventer fra
            den eller ved at kontrollere sine følelser når den bliver smidt i en presset, intens
            situation. Uanset hvad du oplever kan du hjælpe din hund, så i begge får en mere rolig
            og harmonisk hverdag sammen.
          </Text>
          <Text>
            Du er allerede på rette vej når du læser denne linie! For det betyder at du er på udkig
            efter redskaberne til at få hverdagen til at fungere igen. Det er både din hund og jeg
            taknemmelig for. Ønsker du at høre mere om hvad du kan forvente at få af hjælp så
            <StyledLink to="/kontakt"> kontakt mig</StyledLink> endelig.
          </Text>
          <br />
          <Title color="#872f35" text="Grundet travlhed kan jeg desværre ikke tage nye kunder ind!" />
          <Text>
            Derfor kan jeg desværre ikke tilbyde rådgivning og hjemmebesøg til problemadfærd før januar 2024 igen.
          </Text>
          <Text>
            I stedet vil jeg anbefale at tage kontakt til en af mine dygtige kollegaer, som har samme belønningsbaseret tilgang som jeg:
          </Text>
          <TextList texts={Colleagues} />
        </Column>
        <Column>
          <Title text="Priser for hundetræning" showHorizontalRuler />
          <Prices />
        </Column>
      </Row>
      <Row>
        <Title text="Udbud af hundetræning i Midtjylland" showHorizontalRuler />
      </Row>
      <Row marginBottom="25px">
        <Column>
          <Image src={dogTwo} />
          <TitleColor text="Konsultation ved problemadfærd" smallTitle />
          <Text>
            En konsultation varer op til 2 timer hjemme hos jer. Her vil vi snakke adfærdsproblemet
            igennem, så jeg kan foretage en grundig analyse. Derefter gennemgår vi de tiltag der
            skal til, for at skabe en mere harmonisk hverdag for jer begge. Tiltagene består af
            øvelser og enkle hverdagsrutiner der skal ændres, for at opnå det ønskede resultat.
          </Text>
          <Text bold>Eksempler på problemadfærd:</Text>
          <TextList texts={consultation} />
          <Text>
            Efter mit besøg snakker vi løbende sammen om jeres fremskridt og evt. yderligere tiltag.
            Der er fri opfølgning på mail og telefon, hvis der opstår spørgsmål efter mit besøg.
          </Text>
        </Column>
        <Column>
          <Image src={dogThree} />
          <TitleColor text="Hvalpevisit" smallTitle />
          <Text>
            Har du netop fået hvalp og ønsker at få den bedste start på jeres fremtidige liv sammen,
            kan du bestille et hvalpevisit. Et hvalpevisit varer op til 1½ time hjemme hos jer og
            giver jer konkrete tiltag til at få en harmonisk hverdag. Du vil blive introduceret til
            konceptet med at bruge mad, leg og ros til hverdagens opdragelse.
          </Text>
          <Text>
            <StyledLink to="/hvalpevisit"> Læs mere her </StyledLink>
          </Text>
          {/* <Text bold>Vi gennemgår følgende ved hvalpevisit:</Text>
          <TextList texts={puppyVisitTexts} /> */}
        </Column>
        <Column>
          <Image src={dogOne} />
          <TitleColor text="Privattime" smallTitle />
          <Text>
            En privattime sikrer dig en skræddersyet plan tilpasset til dig og din hund. Du vil lære
            at bruge mad, leg og ros til at skabe den lydige hund du ønsker dig.
          </Text>
          <Text bold>Eksempler på træning til en privattime:</Text>
          <TextList texts={privateHour} />
        </Column>
      </Row>
    </Background>
  </Page>
);

export default Dog;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
