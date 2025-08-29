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
  ButtonOnline,
} from '../components';
import Responsive from '../components/layout/Responsive';
import { catFour, catTwo, catThree } from '../assets';
import '../components/table/TableCss.css';

const privateHour = [
  'Lære katten at være tryg i transportkasse',
  'Gøre katten tryg ved negleklip, tandtjek mv.',
  'Gøre katten tryg ved dyrlægebesøg',
  'Gøre katten tryg ved at køre i bil',
  'Lære katten at gå i snor',
  'Gode råd til optimal aktivering i hverdagen',
  'Ny kat eller hund skal introduceres',
];

const consultation = [
  'Katten kradser på forbudte overflader',
  'Katten plager/miaver hele tiden',
  'Katten er urenlig',
  'Katten flygter ved besøg fra gæster',
  'Katten bider og kradser mennesker',
  'Flere katte i husstanden kan ikke enes',
  'Hund og kat i husstanden kan ikke enes',
];

const Cat = () => (
  <Page>
    <Meta />
    <Banner text="Kattetræning Midtjylland">
      <BreadCrumps currentPage="Kat" />
    </Banner>
    <Background>
      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <Title text="Konsultation ved katteadfærdsspecialist" showHorizontalRuler />
          <Text>
            Katte bliver desværre overset når det kommer til behandling af problemadfærd. Men
            ligesom med hunde, så er det muligt at ændre din kats adfærd, hvis du oplever en
            uhensigtsmæssig opførsel i hverdagen. Uanset om din kat virker aggressiv, bange eller
            ikke vil bruge kattebakken regelmæssigt, så er der hjælp at hente.
          </Text>
          <Text>
            Træning sammen med din kat giver jer mulighed for at knytte bånd på en helt ny måde, og
            ikke mindst dig muligheden for at hjælpe din kat. Du kan gøre din kat tryg ved
            situationer den førhen er blevet sur over eller ked af, og dårlige vaner kan brydes og
            erstattes med nye, bedre vaner. Træning med dig bidrager nemlig til en velstimuleret,
            veltilpas kat, som bliver mindre tilbøjelig til at finde på narrestreger. Når din kat
            får lov at bruge hovedet og løse opgaver, får den en indre følelse af velbehag og
            tilfredshed. Denne lykkefølelse vil gøre at træningen og samværet med dig bliver din
            kats første prioritet!
          </Text>
          <Text>
            Ønsker du mere viden omkring træning af katte og positiv, effektiv hverdagsopdragelse,
            kan du
            <StyledLink to="/kontakt"> bestille en konsultation </StyledLink>
            hos Sabrina Svane.
          </Text>
          {/* <TitleColor text="Jeg afholder i øjeblikket ferie og kan først tilbyde konsultation igen fra September." /> */}
        </Column>
      </Row>
      <Row>
        <Title text="Udbud af kattetræning i Midtjylland" showHorizontalRuler />
      </Row>
      <Row marginBottom="25px">
      <Column>
          <Image src={catFour} />
          <TitleColor text="E-bog til katteejeren: 3 simple trin, der holder kløerne af møblerne" smallTitle />
          <Text>
            En E-bog til dig der ønsker en konfliktfri hverdag med en kat der elsker sit kradsetræ, så du kan unndgå flere ødelagte sofahjørner!
          </Text>
          <ButtonOnline text="Læs mere her" onClick={() => window.open('https://www.svanesdyr.dk/kattekradsekursus', '_blank')}></ButtonOnline>
          <br />
        </Column>
        <Column>
          <Image src={catTwo} />
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
          <Image src={catThree} />
          <TitleColor text="Privattime" smallTitle />
          <Text>
            En privattime er til dig der ønsker at skabe en tryg hverdag for din kat og forebygge
            problemadfærd. Du vil blive introduceret til konceptet med at bruge mad, leg og ros til
            hverdagens opdragelse.
          </Text>
          <Text bold> Eksempler på træning til en privattime: </Text>
          <TextList texts={privateHour} />
        </Column>
      </Row>
    </Background>
  </Page>
);

export default Cat;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
