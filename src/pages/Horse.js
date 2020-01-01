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
import { horseOne, horseTwo, horseThree } from '../assets';
import '../components/table/TableCss.css';

const privateHour = [
  'Hesten skal lære at stå roligt i spildtov.',
  'Hesten skal miljøtrænes med biler, lyde mv.',
  'Hesten skal lære at følge pænt med i trækketorv.',
  'Hesten virker døv overfor signaler der gives.',
  'Mental stimulering ved nødsaget ro ved fx skade.'
];

const consultation = [
  'Hesten er svær at få i trailer.',
  'Hesten er bange for lyde.',
  'Hesten sparker, bider eller stejler.',
  'Hesten vil stikke af når den er i træktorv.',
  'Hesten udviser vævning eller krybbebideri.',
  'Hesten kan ikke være alene i stalden.'
];

const Horse = () => (
  <Page>
    <Meta />
    <Banner text="Hestetræning Midtjylland">
      <BreadCrumps currentPage="Hest" />
    </Banner>
    <Background>
      <Row marginTop={"25px"}>
        <Column widthPercentage="65%">
          <Title text="Konsultation ved hesteadfærdsterapeut" showHorizontalRuler />
          <Text>
            Belønningsbaseret hestetræning er til gavn for alle heste, uanset alder og race, og
            styrker relationen mellem hest og ejer. Træning med din hest byder på kvalitetstid hvor
            samarbejde, tillid og succes styrkes, hvilket skaber en hest i balance med sig selv og
            sine omgivelser. Mange adfærdsproblemer, som angst og aggression, kan forebygges igennem
            belønningsbaseret træning og forståelse for hestens adfærd.
          </Text>
          <Text>
            Ønsker du vejledning i positiv, effektiv træning eller ønsker du gode råd og hjælp til
            en afslappet og rolig tilridning af din unghest, så kan du
            <StyledLink to="/kontakt"> bestille en privattime. </StyledLink>
          </Text>
          <Text>
            Nogle heste udvikler problemadfærd, som kan skabe utryghed og stress i hverdagen, både
            for hest og for ejer. Det er individuelt hvad der opfattes som et problem hos den
            enkelte ejer, men uanset hvad du har af ønsker for din hest og jeres fælles hverdag, så
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
          <Title text="Priser for hestetræning" showHorizontalRuler />
          <Prices />
        </Column>
      </Row>
      <Row>
        <Title text="Udbud af hestetræning i Midtjylland" showHorizontalRuler />
      </Row>
      <Row marginBottom={"25px"}>
        <Column>
          <Image src={horseTwo} />
          <Title text="Privattime" smallTitle />
          <Text>En privattime sikrer dig en skræddersyet plan tilpasset til dig og din hest.</Text>
          <Text bold>
            Eksempler på træning til en privattime:
          </Text>
          <TextList texts={privateHour} />
        </Column>
        <Column>
          <Image src={horseThree} />
          <Title text="Konsultation ved problemadfærd" smallTitle />
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
          </Text>
        </Column>
        <Column>
          <Image src={horseOne} />
          <Title text="Tilridning" smallTitle />
          <Text>
            Jeg tilbyder gode råd og vejledning til en afslappet og succesfuld tilridning af din
            hest. Heste er fra naturens side flugtdyr og er tilbøjelig til at flygte ved stress og
            modgang. Derfor arbejder vi med belønningsbaserede træningsmetoder, hvor vi med gradvis
            tilvænning skaber en stabil og rolig partner. Med forståelse for hestens natur,
            indlæringsevner og sind kan du skabe et tillidsfuldt samarbejde til jeres fælles
            fremtid.
          </Text>
        </Column>
      </Row>
    </Background>
  </Page>
);

export default withRouter(Horse);

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
