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
  TextList,
  Row,
  StyledLink,
  Prices
} from '../components';
import Responsive from '../components/layout/Responsive';
import { dogOne, dogTwo, dogThree } from '../assets';
import '../components/table/TableCss.css';

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
      <Row marginTop={"25px"}>
        <Column widthPercentage="65%">
          <Title text="Konsultation ved hundeadfærdsbehandler" showHorizontalRuler />
          <Text>
            Belønningsbaseret hundetræning er til gavn for alle hunde, uanset alder og race, og
            styrker relationen mellem hund og ejer. Træning med din hund byder på kvalitetstid hvor
            samarbejde, tillid og succes styrkes, hvilket skaber en hund i balance med sig selv og
            sine omgivelser. Mange adfærdsproblemer, som angst og aggression, kan forebygges igennem
            belønningsbaseret træning og forståelse for hundens adfærd.<br />
            Ønsker du vejledning i
            positiv, effektiv hundeopdragelse til hverdagen eller har du brug for gode råd til
            træning af hunden, så kan du
            <StyledLink to="/kontakt"> bestille en privattime </StyledLink>
            ved at kontakte Sabrina Svane eller tilmelde dig et
            <StyledLink to="/hundehold"> hundehold</StyledLink>.
          </Text>
          <Text>
            Nogle hunde udvikler problemadfærd, som kan skabe utryghed og stress i hverdagen, både
            for hund og for ejer. Det er individuelt hvad der opfattes som et problem hos den
            enkelte ejer, men uanset hvad du har af ønsker for din hund og jeres fælles hverdag, så
            kan du få hjælp til dette, ved at
            <StyledLink to="/kontakt"> bestille en konsultation </StyledLink>
            hos Sabrina Svane.
          </Text>
          <Text color="#33CCCC" bold>
            Kontakt mig gerne og hør nærmere om din problemstilling kræver en privattime eller en
            konsultation.
          </Text>
        </Column>
        <Column>
          <Title text="Priser for hundetræning" showHorizontalRuler />
          <Prices />
        </Column>
      </Row>
      <Row>
        <Title text="Udbud af hundetræning i Midtjylland" showHorizontalRuler />
      </Row>
      <Row marginBottom={"25px"}>
        <Column>
          <Image src={dogOne} />
          <Title text="Privattime" smallTitle />
          <Text>En privattime sikrer dig en skræddersyet plan tilpasset til dig og din hund.</Text>
          <Text bold>
            Eksempler på træning til en privattime:
          </Text>
          <TextList texts={privateHour} />
        </Column>
        <Column>
          <Image src={dogTwo} />
          <Title text="Konsultation ved problemadfærd" smallTitle />
          <Text>
            En konsultation varer op til 2 timer hjemme hos jer. Her vil vi snakke adfærdsproblemet
            igennem, så jeg kan foretage en grundig analyse. Derefter gennemgår vi de tiltag der
            skal til, for at skabe en mere harmonisk hverdag for jer begge. Tiltagene består af
            øvelser og enkle hverdagsrutiner der skal ændres, for at opnå det ønskede resultat.
          </Text>
          <Text bold>Eksempler på problemadfærd:</Text>
          <TextList texts={consultation} />
          <Text bold>Praktisk information:</Text>
          <Text>
            Efter mit besøg snakker vi løbende sammen om jeres fremskridt og evt. yderligere tiltag.
          </Text>
        </Column>
        <Column>
          <Image src={dogThree} />
          <Title text="Hvalpevisit" smallTitle />
          <Text>
            Har du netop fået hvalp og ønsker at få den bedste start på jeres fremtidige liv sammen,
            kan du bestille et hvalpevisit. Et hvalpevisit varer op til 1½ time hjemme hos jer og
            giver jer konkrete tiltag til at få en harmonisk hverdag.
          </Text>
          <Text bold>Vi gennemgår følgende ved hvalpevisit:</Text>
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
