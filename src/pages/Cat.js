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
import { catOne, catTwo, catThree } from '../assets';
import '../components/table/TableCss.css';

const privateHour = [
  'Lære katten at være tryg i transportkasse.',
  'Gøre katten tryg ved negleklip, tandtjek mv.',
  'Gøre katten tryg ved dyrlægebesøg.',
  'Gøre katten tryg ved at køre i bil.',
  'Lære katten at gå i snor.',
  'Gode råd til optimal aktivering i hverdagen.'
];

const consultation = [
  'Katten kradser på forbudte overflader.',
  'Katten plager/miaver hele tiden.',
  'Katten er urenlig.',
  'Katten flygter ved besøg fra gæster.',
  'Katten bider og kradser mennesker.',
  'Flere katte i husstanden kan ikke enes.'
];

const Cat = () => (
  <Page>
    <Meta />
    <Banner text="Kattetræning Midtjylland">
      <BreadCrumps currentPage="Kat" />
    </Banner>
    <Background>
    <Row marginTop={"25px"}>
        <Column widthPercentage="65%">
          <Title text="Konsultation ved katteadfærdsspecialist" showHorizontalRuler />
          <Text>
            Katte er et af de få dyr, som frigiver endorfiner i kroppen ved problemløsning. Dvs. de
            opnår en indre følelse af velbehag og tilfredshed, når de får lov at bruge hovedet og
            løse opgaver. Uanset om det er i træningen sammen med deres ejer eller igennem
            aktivering med deres daglige foder. Derfor kan træning med katten og/eller optimal
            foderaktivering bidrage til en velstimuleret, veltilpas kat, som bliver mindre
            tilbøjelig til at finde på narrestreger. Søger du mere viden omkring træning af katte og
            positiv, effektiv hverdagsopdragelse,
            <StyledLink to="/kontakt"> bestille en privattime. </StyledLink>
          </Text>
          <Text>
            Mange katte bliver desværre overset når det kommer til behandling af problemadfærd. Men
            ligesom med alle andre kæledyr, så er det muligt at ændre sin kat adfærd, hvis man
            oplever en uhensigtsmæssig opførsel i hverdagen. Ønsker du råd og vejledning til
            problemadfærd,
            <StyledLink to="/kontakt"> bestille en konsultation. </StyledLink>
          </Text>
          <Text color="#33CCCC" bold>
            Kontakt mig gerne og hør nærmere om din problemstilling kræver en privattime eller en
            konsultation.
          </Text>
        </Column>
        <Column>
          <Title text="Priser for kattetræning" showHorizontalRuler />
          <Prices />
        </Column>
      </Row>
      <Row>
        <Title text="Udbud af hestetræning i Midtjylland" showHorizontalRuler />
      </Row>
      <Row marginBottom={"25px"}>
        <Column>
          <Image src={catOne} />
          <Title text="Privattime" smallTitle />
          <Text>
            En privattime er til dig der ønsker at skabe en tryg hverdag for din kat og forebygge
            problemadfærd.
          </Text>
          <Text bold> Eksempler på træning til en privattime: </Text>
          <TextList texts={privateHour} />
        </Column>
        <Column>
          <Image src={catTwo} />
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
          <Image src={catThree} />
          <Title text="Klikkertræning af katte" smallTitle />
          <Text>
            Klikkertræning er et effektivt kommunikationsmiddel til din kat om hvad du ønsker af den
            og hvornår. Udover at du kan lære din kat en masse nyt, så styrker træningen båndet
            mellem jer og giver dig en velstimuleret kat i hverdagen. En veltilpas kat er mindre
            tilbøjelig til at finde på narrestreger. Ønsker du at vide mere omkring effektiv træning
            af din kat, kan du kontakte Sabrina Svane og bestille en privattime til gennemgang af
            klikkertræning.
          </Text>
        </Column>
      </Row>
    </Background>
  </Page>
);

export default withRouter(Cat);

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
