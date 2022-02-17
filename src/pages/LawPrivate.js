import React from 'react';
import styled from 'styled-components';

import {
  OnlineLaw,
  Column,
  MetaLawPrivate,
  TextCenter,
  Row,
  LandingpageHeadline,
  TitleCenter,
  StyledLink,
} from '../components';
import Responsive from '../components/layout/Responsive';
import '../components/table/TableCss.css';

const LawPrivate = () => (
  <OnlineLaw>
    <MetaLawPrivate />
    <LandingpageHeadline text="Privatlivspolitik " />
    <Background>
      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Dataansvarlig" showHorizontalRuler />
          <TextCenter>
            Svanes Dyr v/Sabrina Svane er dataansvarlig for behandlingen af de personoplysninger,
            som jeg behandler om mine kunder og samarbejdspartnere. Du finder mine
            kontaktoplysninger nedenfor.
            <br />
            <br />
            Svanes Dyr
            <br />
            Klydevej 15B
            <br />
            8740 Brædstrup
            <br />
            CVR 35903100
            <br />
            <br />
            Hvis du har spørgsmål til behandlingen af dine personoplysninger, så kan du kontakte mig
            via mail info@svanesdyr.dk <br />
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Behandlingsaktiviteter " showHorizontalRuler />
          <TextCenter>
            <b>Besøg på hjemmeside</b> <br />
            Når du besøger vores hjemmeside, så anvender vi cookies for at hjemmesiden kan fungere.
            Disse måler blot antal klik og besøgstidens varighed på hjemmesiden og samler ikke nogle
            personlige oplysninger ind om dig.
          </TextCenter>
          <TextCenter>
            <b>Kommunikation med kunder</b> <br />
            Når du har spørgsmål til min side, eller ønsker at høre mere om mine services, så kan du
            kontakte mig via:
            <br />
            <br />
            Min <StyledLink to="/kontakt"> Kontaktformular</StyledLink>
            <br />
            Tlf. 93 96 05 00
            <br />
            Mail info@svanesdyr.dk
          </TextCenter>
          <TextCenter>
            Herigennem vil jeg behandle dine personoplysninger, så jeg kan indgå i en dialog med dig
            fx svare på spørgsmål om mine ydelser. Jeg behandler kun den information, som du giver
            mig i forbindelse med vores kommunikation. Det vil typisk være følgende almindelige
            oplysninger: navn, email, telefonnummer.
          </TextCenter>
          <TextCenter>
            Hjemmel til at behandle disse personoplysninger er databeskyttelsesforordningens artikel
            6, stk. 1 litra f. Jeg sletter vores kommunikation med dig når det står klart om du
            ønsker mine ydelser eller ej.
          </TextCenter>
          <TextCenter>
            Skulle der opstå et behov for at opbevare dine personoplysninger i længere tid, fx i
            forbindelse med holdtilmelding eller hjemmebesøg så vil dette kunne være tilfældet.
          </TextCenter>
          <TextCenter>
            <b>Kunder</b> <br />
            Jeg har behov for at kommunikere med mine kunder, så jeg sikrer mig, at ydelsen leveres
            korrekt. Herigennem kan jeg behandle oplysninger om navn, adresse, ydelser, særlige
            aftaler og lignende. Hjemmel til at behandle disse personoplysningerer er
            databeskyttelsesforordningens artikel 6, stk. 1 litra b.
          </TextCenter>
          <TextCenter>
            <b>Bogføring</b> <br />
            Jeg skal gemme alle regnskabsbilag jf. bogføringsloven. Det betyder, at jeg gemmer
            fakturaer og lignende bilag til brug for regnskabsføring. Heraf kan der fremgå
            almindelige personoplysninger som navn, adresse, telefon nummer og ydelsesbeskrivelse.
            Hjemmel til at behandle personoplysninger til bogføringen er
            databeskyttelsesforordningens artikel 6, stk.1 litra.
          </TextCenter>
          <TextCenter>
            Hjemmel til at behandle personoplysninger til bogføringen er
            databeskyttelsesforordningens artikel 6, stk.1 litra. Jeg opbevarer disse oplysninger i
            minimum 5 år efter at indeværende regnskabsår er afsluttet.
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Databehandlere" showHorizontalRuler />
          <TextCenter>
            Få kan klare alt selv, og det samme gælder for mit vedkommende. Jeg har derfor
            samarbejdspartnere, samt benytter mig af leverandører, hvoraf nogle kan være
            databehandlere.
          </TextCenter>
          <TextCenter>
            Mine eksterne leverandører levere systemer til at organisere vores arbejde, services,
            rådgivning, IT-hosting og onlinesalg:
            <br />
            <b>Mailhosting:</b> One.com, tlf. 32 74 16 03
            <br />
            <b>Onlinekursus platform og betalingsservice:</b> EasyMe, mail support@easyme.dk
          </TextCenter>
          <TextCenter>
            Det er mit ansvar at sikre, at dine personoplysninger behandles ordentligt. Derfor
            stiller jeg høje krav til vores samarbejdspartnere, og vores partnere skal garantere, at
            dine personoplysninger er beskyttet. Jeg indgår derfor aftaler herom med virksomheder
            (databehandlere), der håndterer personoplysninger på mine vegne for at højne sikkerheden
            af dine personoplysninger.
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Videregivelse af personoplysninger" showHorizontalRuler />
          <TextCenter>Jeg videregiver ikke dine personoplysninger til tredjemand.</TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Tilbagetrækning af samtykke" showHorizontalRuler />
          <TextCenter>
            Når min behandling af dine personoplysninger er baseret på dit samtykke, så har du ret
            til at trække dit samtykke tilbage.
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Klage til Datatilsynet" showHorizontalRuler />
          <TextCenter>
            Du har ret til at indgive en klage til Datatilsynet, hvis du er utilfreds med den måde,
            jeg behandler dine personoplysninger på. Du finder Datatilsynets kontaktoplysninger på
            www.datatilsynet.dk. Jeg vil generelt opfordre dig til at læse mere om GDPR, så du er
            opdateret på reglerne.
          </TextCenter>
        </Column>
      </Row>
      <br />
    </Background>
  </OnlineLaw>
);

export default LawPrivate;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
