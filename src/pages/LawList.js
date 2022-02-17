import React from 'react';
import styled from 'styled-components';

import {
  OnlineLaw,
  Column,
  MetaLaw,
  TextCenter,
  Row,
  LandingpageHeadline,
  TitleCenter,
} from '../components';
import Responsive from '../components/layout/Responsive';
import '../components/table/TableCss.css';

const LawList = () => (
  <OnlineLaw>
    <MetaLaw />
    <LandingpageHeadline text="Handelsbetingelser for Svanes Onlinekurser ved Svanes Dyr" />
    <Background>
      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Virksomhedsoplysninger" showHorizontalRuler />
          <TextCenter>
            SvanesOnlinekurser administreres og ejes af Svanes Dyr v/Sabrina Svane
            <br />
            Svanes Dyr
            <br />
            Klydevej 15B
            <br />
            8740 Brædstrup
            <br />
            CVR 35903100
            <br />
            info@svanesdyr.dk <br />
            Herefter nævnt som virksomheden.
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Priser og betaling" showHorizontalRuler />
          <TextCenter>
            Alle beløb er i DKK: Danske kroner og er inkl. moms. Der tages forbehold for eventuelle
            fejl i de angivne priser. Desuden forbeholder virksomheden ret til at ændre i priserne
            uden forudgående samtykke.
          </TextCenter>
          <TextCenter>
            Virksomheden modtager betaling med MobilePay, Apple Pay, Dankort/VISA-Dankort, VISA,
            VISA Electron og Mastercard. Der er mulighed for at vælge mellem betaling af hele
            beløbet med det samme eller ratebetaling. Betaling vil blive trukket på din konto straks
            efter køb.
          </TextCenter>
          <TextCenter>
            Virksomheden bruger en godkendt betalingsserver, der krypterer alle dine kortoplysninger
            med SSL (Secure Socket Layer) protokol. Det betyder, at man ikke kan aflæse dine
            informationer.
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Levering af onlinekurser" showHorizontalRuler />
          <TextCenter>
            Levering af kurset sker straks efter køb. Nogle onlinekurser har drypvis levering, dvs.
            du har adgang til en andel af kurset fra start, og får løbende adgang til det resterende
            materiale.
          </TextCenter>
          <TextCenter>
            Du vil modtage en mail straks efter betaling, hvori du kan finde dine oplysninger der
            giver dig adgang til onlinekurset på en online portal. Alt du skal bruge er en
            internetforbindelse for at anvende kurset.
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Fortrydelsesret" showHorizontalRuler />
          <TextCenter>
            Som hovedregel har du fortrydelsesret i 14 dage efter købet, hvis du ikke føler kursets
            indhold matcher dig og din hund. Perioden regnes fra den dag du modtager adgang til
            kurset. Fortrydelsen skal anmeldes til virksomheden senest 14 dage efter købet. Derefter
            ydes der ingen returret. Tilbagebetaling er mulig, såfremt du kontakter os indenfor
            tidsfristen.
          </TextCenter>
          <TextCenter>
            Onlinekurset betragtes som en handelsvare. Det betyder du må kigge materialet igennem og
            se om kursets indhold matcher dig og din hund. Har du downloadet kursets materiale,
            herunder tekstfiler, lydfiler eller videofiler, betragtes onlinekurset som brugt,
            hvilket betyder, at du ved fortrydelse af købet kun får en del eller intet af
            købsbeløbet retur. For at modtage hele købsbeløbet retur må du altså gøre det samme, som
            man kan i en fysisk butik. Du må afprøve varen, men ikke tage den i egentlig brug.
          </TextCenter>
          <TextCenter>
            På enkeltstående kurser kan der gælde en anden frist for fortrydelsesret, dette vil da
            tydeligt fremgå på salgssiden for det enkelte onlinekursus.
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Købsbetingelser" showHorizontalRuler />
          <TextCenter>
            Alle rettigheder til onlinekurserne, herunder tekst- og lydfiler, videofiler, samt
            workshops og events tilhører Svanes Dyr (CVR 35903100). Alt materiale er beskyttet af
            copyright lovgivning, og må derfor ikke kopieres, deles, sælges, uddeles, plagieres
            eller derudover anvendes uden skriftlig tilladelse fra indehaver Sabrina Svane. Køber
            opnår udelukkende rettigheder til at anvende købet til personligt brug.
          </TextCenter>
          <TextCenter>
            De digitale produkter og materialer skal behandles fortroligt og må ikke udleveres eller
            videregives til tredjemand. Brud på dette medfører retsforfølgning.
          </TextCenter>
          <TextCenter>
            Alle onlinekurser købes og anvendes på eget ansvar og kan ikke erstatte eventuelle behov
            for konkret adfærdsbehandling og personlig rådgivning til problemadfærd. Alle kurser
            skal derfor opfattes som inspiration og anvendes herefter. Personer der oplever
            problemadfærd hos deres hund anbefales altid at konsultere en certificeret
            adfærdskonsulent direkte. Sabrina Svane og Svanes Dyr kan derfor ikke drages til ansvar
            for direkte eller indirekte følger, som produkterne måtte medføre.
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Persondatapolitik" showHorizontalRuler />
          <TextCenter>
            I forbindelse med din tilmelding til og køb af onlinekursus, der drives af virksomheden,
            vil dine almindelige personoplysninger opbevares. Disse oplysninger indeholder dit fulde
            navn, adresse, telefonnummer, mailadresse og andre oplysninger, som der er angivet i
            forbindelse med tilmelding og køb. Du kan til enhver tid bede mig om at slette disse
            oplysninger. Visse oplysninger gemmes i 5 år i henhold til dansk regnskabslovgivning.
            Alle data du angiver gemmes i en krypteret database.
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Kundeservice" showHorizontalRuler />
          <TextCenter>
            Ved spørgsmål eller klager kontakt:
            <br />
            Sabrina Svane <br />
            www.SvanesDyr.dk <br />
            info@svanesdyr.dk
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Dansk Lovgivning" showHorizontalRuler />
          <TextCenter>
            Der anvendes den danske lovgivning i forbindelse med online salg fra virksomheden.
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Ændringer" showHorizontalRuler />
          <TextCenter>Virksomheden kan ændre handelsbetingelser ensidigt.</TextCenter>
        </Column>
      </Row>
      <br />
    </Background>
  </OnlineLaw>
);

export default LawList;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
