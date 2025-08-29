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
  ContactPopUp,
} from '../components';
import Responsive from '../components/layout/Responsive';
import { dogOne, dogTwo, dogThree } from '../assets';
import '../components/table/TableCss.css';

const Colleagues = [
   'HORSENS: Maja Bruus, Horsens Hundecenter, www.hundecoach.dk',
   'SILKEBORG: Christine Løwe, Løwe & Hund, www.løweoghund.dk',
   'GIVSKUD: Lone Enghave, Enghave & Hund, www.enghaveoghund.dk',
   'HERNING: Jan Vestergaard, Egely Hunde, www.egelyhunde.dk',
   'ÅRHUS: Camilla Bruhn, Dyrecoach, www.dyrecoach.dk',
 ];

 const stress = [
  'Hunden virker generelt rastløs / hvileløs',
  'Hunden hviler ikke når i slapper af',
  'Hunden har "travlt" på gåtur, trækker i snoren og kan være ukontaktbar',
  'Hunden trækker eller gør for at hilse på andre',
  'Hunden er svær at få i ro ved gæster',
  'Hunden "kortslutter" til tider, fræser rundt, napper og er svær at stoppe igen',
];

const aggression = [
  'Hunden reagerer på andre hunde på gåtur',
  'Hunden gør af gæster, værre hvis de vil hilse',
  'Hunden knurrer eller snapper ved berøring',
  'Hunden knurrer og forsvarer mad eller andre ting',
  'Hunden er efter den anden hund i husstanden',
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
        <Column widthPercentage="100%">
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
            den eller ved at kontrollere sine følelser når den bliver smidt i en presset
            situation. Uanset hvad du oplever kan du hjælpe din hund, så i begge får en mere rolig
            og harmonisk hverdag sammen.
          </Text>
          <Text>
            Du er allerede på rette vej når du læser denne linie! For det betyder at du er på udkig
            efter redskaberne til at få hverdagen til at fungere igen. Det er både din hund og jeg
            taknemmelig for!
          </Text>
          <Title text="Jeg specialiserer mig i hvalpe, stressrelateret problemadfærd og aggression - læs meget mere om dette længere nede på siden." />
          <br />
          <Title color="#872f35" text="Står du med en anden problemstilling end mit speciale, henviser jeg til mine kollegaer!" smallTitle />
          <Text>
            Jeg tilbyder desværre ikke rådgivning og hjemmebesøg til andet end mine specialeområder, så står du med hund der har fx alene-hjemme problemer eller lydangst
            henviser jeg til mine dygtige, belønningsbaserede kollegaer:
          </Text>
          {/* <Title color="#872f35" text="Svanes Dyr holder midlertidigt lukket for nye kunder!" />
          <Text>
            Derfor kan jeg desværre ikke tilbyde rådgivning og hjemmebesøg til problemadfærd i øjeblikket. Jeg annoncerer her på siden når jeg har åbent for tilgang igen.
          </Text>
          <Text>
            I stedet vil jeg anbefale at tage kontakt til en af mine dygtige kollegaer, som har samme belønningsbaseret tilgang som jeg:
          </Text> */}
          <TextList texts={Colleagues} />
          <Text>
            Læs mere om de problemstillinger jeg kan hjælpe med længere ned på siden, og er du det mindste i tvivl om din hunds udfordring hører under mit speciale, er du selvfølgelig altid velkommen til
            <StyledLink to="/kontakt"> at kontakte mig</StyledLink> for at høre nærmere.
          </Text>
          {/* <TitleColor text="Jeg afholder i øjeblikket ferie og kan først tilbyde konsultation igen fra September." /> */}
        </Column>
      </Row>
      <Row>
        <Title text="Udbud af hundetræning i Midtjylland" showHorizontalRuler />
      </Row>
      <Row marginBottom="25px">
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
          <Image src={dogTwo} />
          <TitleColor text="Stressrelateret problemadfærd" smallTitle />
          <Text>
            Føler du din hund har ADHD eller omtales den som værende lidt af et "damp"-barn, så er der hjælp at hente 
            for der findes konkrete tiltag, der kan lære din hund at finde ro i hverdagen og hvile mere i sig selv.
          </Text>
          <Text>
            <b>Eksempler på stressrelateret problemadfærd:</b>
          <TextList texts={stress} />
          </Text>
          <Text>
            Ønsker du professionel rådgivning og en skræddersyet handlingsplan til at få mere ro på din hund, så er det mit speciale.
          </Text>
          <ContactPopUp text="Send mig en mail og hør mere" />
          <br />
          {/* <Text>
            Oplever du til tider din hund "kortslutter", bliver ulydig og ukontrollerbar, så 
            <StyledLink to="/hvalpevisit"> Læs mere her</StyledLink>
          </Text> */}
        </Column>
        <Column>
          <Image src={dogOne} />
          <TitleColor text="Aggression og udfarende adfærd" smallTitle />
          <Text>
            Oplever du din hund knurrer, gør eller farer ud overfor dig, andre mennesker eller hunde, så er din hund nødvendigvis ikke aggressiv.
            For selvom hunden lyder og ser aggressiv ud, er det meget sjældent at årsagen er aggression, men derimod dårlige oplevelser, mistillid til andre, ren usikkerhed eller angst, som skal arbejdes med.
          </Text>
          <Text>
            <b>Eksempler på aggressiv og udfarende adfærd:</b>
            <TextList texts={aggression} />
          </Text>
          <Text>
            Uanset hvad du oplever hos din hund af uhensigtmæssig aggressionslignende opførsel, så står jeg til rådighed.
          </Text>
          <ContactPopUp text="Send mig en mail og hør mere" />
          <br />
          <Text>
            Ønsker du specifikt hjælp til udfarende adfærd på gåtur i mødet med andre hunde, så <StyledLink to="/aggression"> Læs mere her</StyledLink>
          </Text>
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
