import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import {
  Page,
  Banner,
  Column,
  Meta,
  Title,
  Text,
  Image,
  BreadCrumps,
  TextList
} from '../components';
import Responsive from '../components/Responsive';
import { puppyCourse, coolCourse, recall } from '../assets';
import '../components/TableCss.css';

const privateHour = [
  'Hunden kommer ikke når man kalder.',
  'Hunden trækker i snoren.',
  'Hunden stjæler ting/mad fra bordet.',
  'Hunden hilser uhensigtsmæssigt på gæster.',
  'Lydighed med fx fri ved fod, plads, apport mv.',
  'Gængse træningsøvelser som sit, dæk, kontakt mv.'
];

const consultation = [
  'Hunden er generelt svær at få ro på.',
  'Hunden gør hele tiden.',
  'Hunden hyler/gør/ødelægger ting når den er alene.',
  'Hunden knurrer af dig, andre mennesker eller dyr.',
  'Hunden er bange for lyde.',
  'Hunden er urenlig.'
];

const puppyVisitTexts = [
  'Hvalpens sprog og fysiske udvikling.',
  'Optimal aktivering i hverdagen.',
  'Renlighed, alene hjemme og hvalpebideri.',
  'Miljøtræning og socialisering.'
];

const Dog = () => (
  <Page>
    <Meta />
    <Banner text="Hundetræning Midtjylland">
      <BreadCrumps currentPage="Hund" />
    </Banner>
    <Background>
      <Row>
        <Column widthPercentage="62%">
          <Title text="Konsultation ved hundeadfærdsbehandler" />
          <Text
            text="Belønningsbaseret hundetræning er til gavn for alle hunde, uanset alder og race, og styrker relationen mellem hund og ejer. 
            Træning med din hund byder på kvalitetstid hvor samarbejde, tillid og succes styrkes, 
            hvilket skaber en hund i balance med sig selv og sine omgivelser. 
            Mange adfærdsproblemer, som angst og aggression, kan forebygges igennem belønningsbaseret træning og forståelse for hundens adfærd. 
            Ønsker du vejledning i positiv, effektiv hundeopdragelse til hverdagen eller har du brug for gode råd til træning af hunden, 
            så kan du <a href='/kontakt'>bestille en privattime</a> ved at kontakte Sabrina Svane eller tilmelde dig et <a href='/hundehold'>hundehold</a>."
          />
          <Text
            text="Nogle hunde udvikler problemadfærd, som kan skabe utryghed og stress i hverdagen, både for hund og for ejer. 
            Det er individuelt hvad der opfattes som et problem hos den enkelte ejer, 
            men uanset hvad du har af ønsker for din hund og jeres fælles hverdag, 
            så kan du få hjælp til dette, ved at bestille en konsultation hos Sabrina Svane."
          />
          <Text
            text="Kontakt mig gerne og hør nærmere om din problemstilling kræver en privattime eller en konsultation."
            color="#33CCCC"
            bold
          />
        </Column>
        <Column>
          <Title text="Priser for hundetræning" />
          <Text text="Alle priser er inkl. moms" color="#33CCCC" />
          <Text text="Timepris" bold />
          <Text text="Hverdage man-fre før kl. 18.00: 600,- kr/time." />
          <Text text="Hverdage man-fre efter kl. 18.00: 700,- kr/time." />
          <Text text="Lørdage, samt søndage og helligdage: Lukket" />
          <Text text="Prisen inkluderer" bold />
          <Text text="Fri opfølgning på telefon eller mail." />
          <Text text="Skriftlig guide på gennemgåede tiltag tilsendes." />
          <Text text="Kørsel" bold />
          <Text text="Efter statens takster 3,56 kr/km begge veje." />
        </Column>
      </Row>
      <Row>
        <Title text="Udbud af hundetræning i Midtjylland" />
      </Row>
      <Row>
        <Column>
          <Image src={puppyCourse} />
          <Title text="Privattime" />
          <Text text="En privattime sikrer dig en skræddersyet plan tilpasset til dig og din hund." />
          <Text bold text="Eksempler på træning til en privattime:" />
          <TextList texts={privateHour} />
        </Column>
        <Column>
          <Image src={coolCourse} />
          <Title text="Konsultation ved problemadfærd" />
          <Text
            text="En konsultation varer op til 2 timer hjemme hos jer. 
          Her vil vi snakke adfærdsproblemet igennem, så jeg kan foretage en grundig analyse. 
          Derefter gennemgår vi de tiltag der skal til, for at skabe en mere harmonisk hverdag for jer begge. 
          Tiltagene består af øvelser og enkle hverdagsrutiner der skal ændres, for at opnå det ønskede resultat."
          />
          <Text text="Eksempler på problemadfærd:" bold />
          <TextList texts={consultation} />
          <Text text="Praktisk information:" bold />
          <Text text="Efter mit besøg snakker vi løbende sammen om jeres fremskridt og evt. yderligere tiltag." />
        </Column>
        <Column>
          <Image src={recall} />
          <Title text="Hvalpevisit" />
          <Text
            text="Har du netop fået hvalp og ønsker at få den bedste start på jeres fremtidige liv sammen, kan du bestille et hvalpevisit.
             Et hvalpevisit varer op til 1½ time hjemme hos jer og giver jer konkrete tiltag til at få en harmonisk hverdag."
          />
          <Text bold text="Vi gennemgår følgende ved hvalpevisit:" />
          <TextList texts={puppyVisitTexts} />
        </Column>
      </Row>
    </Background>
  </Page>
);

export default withRouter(Dog);

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
  padding: 15px;
  `}
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  justify-content: space-between;
  align-self: center;
  ${Responsive.media.tablet`
    flex-direction: column;
    align-items: center;
  `}
`;
