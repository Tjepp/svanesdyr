/* eslint-disable react/no-unescaped-entities */
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
  BreadCrumps,
  Row,
  StyledB,
  StyledExternal
} from '../components';
import Responsive from '../components/layout/Responsive';
import '../components/table/TableCss.css';
import OnlineMenu from '../components/menu/OnlineMenu';

const OnlineConditions = () => (
  <Page>
    <Meta />
    <Banner text="Onlinekurser ved Svanes Dyr">
      <BreadCrumps currentPage="Handelsbetingelser" />
    </Banner>
    <Background>
    <Row marginTop={"25px"} marginBottom={"45px"}>
        <Column widthPercentage="20%">
          <Title text="Menu onlinekurser" showHorizontalRuler />
          <OnlineMenu/>
        </Column>
        <Column widthPercentage="75%">
          <Title text="Handelsbetingelser ved køb af onlinekursus" showHorizontalRuler />
          <Text bold>Virksomhedsoplysninger</Text>
          <Text>
            <StyledB href="https://www.dittraeningsunivers.dk/"> Dit TræningsUnivers </StyledB>
            administreres og ejes af Svanes Dyr og Dyrecoach
          </Text>
          <Text>
            Svanes Dyr<br />
            8740 Brædstrup<br />
            CVR 35903100<br />
          </Text>
          <Text>
            Dyrecoach<br />           
            8530 Hjortshøj<br />
            CVR 36230541<br />
          </Text>
          <Text>
            Herefter nævnt som virksomhedsparterne.
          </Text>
          <br />
          <Text bold>Priser og betaling</Text>
          <Text>
            Alle beløb er i DKK: Danske kroner og er inkl. moms. Der tages forbehold for eventuelle fejl i vores angivne priser.
            Desuden forbeholder vi os ret til at ændre i priserne uden forudgående samtykke.
          </Text>
          <Text>
            Dit Træningsunivers modtager betaling med VISA-Dankort, VISA, VISA Electron og Mastercard. Betaling vil blive trukket på din konto straks efter køb.
          </Text>
          <Text>
            Når du handler hos Dit Træningsunivers behandles kortoplysningerne af Stripe, som er en sikker elektronisk betalingsløsning.
            Alle kortoplysninger håndteres i overensstemmelse med kortorganisationernes regler.
          </Text>
          <br />
          <Text bold>Levering</Text>
          <Text>
            Levering af produktet sker umiddelbart efter køb.<br />
            Visse onlinekurser afholdes som et forløb og enkelte moduler vil derfor frigives over den angivne tid for det enkelte kursus.
          </Text>
          <br />
          <Text bold>Nyhedsbrev</Text>
          <Text>
            Ved køb af et onlinekursus vil du blive tilbudt at tilmelde dig vores nyhedsbreve fra Dit TræningsUnivers.
            Vi kan heller ikke lide spam, så du kan selvfølgelig altid afmelde dig igen.
            Såfremt du ikke ønsker at modtage nyhedsbreve beder vi dig venligst henvende dig skriftligt på <StyledExternal href="mailto:info@svanesdyr.dk"> info@svanesdyr.dk</StyledExternal>.
          </Text>
          <br />
          <Text bold>Fortrydelsesret</Text>
          <Text>
            På enkeltstående onlinekurser ydes der ingen returret.
          </Text>
          <Text>
            På onlinekurser der forløber over tid ydes der returret indtil kurset er 25 % inde i forløbet (fx til og med 2 uger inde i et 8 ugers forløb),
            derefter ydes der ingen returret. Tilbagebetaling er mulig, såfremt du kontakter os indenfor tidsfristen.
          </Text>
          <br />
          <Text bold>Købsbetingelser</Text>
          <Text>
            Alle rettigheder til onlinekurserne, tekst- og lydfiler, videofiler, samt workshops og events tilhører ligeligt Svanes Dyr (CVR 35903100) og Dyrecoach (CVR 36230541).
            Alt materiale er beskyttet af copyright lovgivning, og må derfor ikke deles, kopieres eller plagieres.
            Køber opnår udelukkende rettigheder til at anvende købet til privat brug.
            Digitale produkter og materialer skal behandles fortroligt og må ikke udleveres eller videregives til tredjemand.
            Brud på dette medfører retsforfølgning.
          </Text>
          <Text>
            Alle onlinekurser købes og anvendes på eget ansvar og kan ikke erstatte eventuelle behov for konkret adfærdsbehandling og personlig rådgivning til problemadfærd.
            Alle kurser skal derfor opfattes som inspiration og anvendes herefter.
            Personer der oplever problemadfærd hos deres kæledyr anbefales altid at konsultere en certificeret adfærdskonsulent direkte.
            Camilla Bruhn og Dyrecoach, samt Sabrina Svane og Svanes Dyr kan derfor ikke drages til ansvar for direkte eller indirekte følger, som produkterne måtte medføre.
          </Text>
          <br />
          <Text bold>Databehandling</Text>
          <Text>
            Dit TræningsUnivers behandler personoplysninger i overensstemmelse med persondataloven.
            I forbindelse med dit køb af onlinekursus og tilmelding til nyhedsbrev, der administreres af virksomhedsparterne, vil dine almindelige personoplysninger opbevares.
            Disse oplysninger omfatter dit fulde navn, adresse, telefonnummer, mailadresse og eventuelle andre oplysninger, som der er angivet i forbindelse med køb og tilmelding.
            Oplysninger, som kan knyttes til dig som person, vil aldrig blive tilgængelige for andre virksomheder eller kunne kobles til andre eksterne registre.
            Alle data angivet gemmes i en krypteret database.
            Du kan til enhver tid bede virksomhedsparterne om at slette disse oplysninger.
          </Text>
          <br />
          <Text bold>Kontakt</Text>
          <Text>
            Ved spørgsmål kontakt:
            Sabrina Svane på 
            <StyledExternal href="mailto:info@svanesdyr.dk"> info@svanesdyr.dk</StyledExternal> eller 
            Camilla Bruhn på 
            <StyledExternal href="mailto:info@dyrecoach.dk"> info@dyrecoach.dk</StyledExternal>.
          </Text>
          <br />
          <Text bold>Lov</Text>
          <Text>
            Der anvendes den danske lovgivning i forbindelse med salg i webshoppen på <StyledB href="https://www.dittraeningsunivers.dk/"> Dit TræningsUnivers</StyledB>.
          </Text>
          <br />
          <Text bold>Ændringer</Text>
          <Text>
            Virksomhedsparterne kan ændre handelsbetingelser ensidigt.
          </Text>
        </Column>
      </Row>
    </Background>
  </Page>
);

export default withRouter(OnlineConditions);

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
