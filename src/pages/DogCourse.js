/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

import {
  Page,
  Banner,
  Column,
  MetaDogCourse,
  Title,
  Text,
  BreadCrumps,
  Row,
  StyledLink,
} from '../components';
import Responsive from '../components/layout/Responsive';
import '../components/table/TableCss.css';
import DogMenu from '../components/menu/DogMenu';

const DogCourse = () => (
  <Page>
    <MetaDogCourse />
    <Banner text="Hundehold i Nim, nær Horsens">
      <BreadCrumps currentPage="Hundehold" />
    </Banner>
    <Background>
      <Row marginTop="25px" marginBottom="45px">
        <Column widthPercentage="20%">
          <Title text="Udbud af hundehold" showHorizontalRuler />
          <DogMenu />
        </Column>
        <Column widthPercentage="75%">
          <Title text="Hundetræning i Nim, nær Horsens" showHorizontalRuler />
          <Text>
            Ønsker du en stærk relation mellem dig og din hund, gennem sjov, leg og succes, så er du
            kommet til rette sted! Træningen hos mig foregår på hundens præmisser hvor vi anvender{' '}
            <StyledLink to="/minemetoder"> belønningsbaserede træningsmetoder</StyledLink> fra de
            indlæringspsykologiske principper. Mit fokus er at skabe succes for dig og din hund, så
            i styrker jeres fælles samarbejde.
          </Text>
          <Text>
            <b>Små hold med tid til dig og din hund</b>
            <br />
            Jeg afholder intime hold med <b>max 5 hunde</b> på alle standardhold, og max 4 hunde på Reaktiv til Ro og Helt-Cool kurset,
            da jeg værdsætter tid til en individuel snak med dig omkring samarbejdet og træningen
            med din hund. Målet er, at uanset niveau og alder så skal alle deltagere have udbytte af
            timen. Træningen er familievenlig, så tag gerne børn og den bedre halvdel med til en
            hyggelig time.
          </Text>
          <Text>
            Socialiseringsholdet differentierer sig fra det normale holdsetup, da vi grundet holdets formål er op til 6 hunde på holdet.
          </Text>
          <Text>
            <b>Vi ses én gang om ugen</b>
            <br />
            Alle hold afholdes som hovedregel over 6 mødegange, hvor vi mødes til træning i <b>45-50 min. per mødegang</b>.<br />
            Hvalpeholdet har en ekstra lektion til gåtur i Bygholm Park, udover de 6 lektioner på banen.
            Specialkurserne Reaktiv til Ro og Helt-Cool har privat sparring inkluderet og har derfor også en ekstra mødegang inkluderet.
          </Text>
          <Text>Socialiseringsholdet og miljøholdet afholdes over 4 mødegange og varer 60 min. pr. lektion, grundet holdenes formål.</Text>
          <Text>
            Der tilsendes link til et online bibliotek, hvor du kan
            downloade skriftlige guides på kursets øvelser, så det er let at træne videre hjemme. Du
            vil blive introduceret til klikkertræning og konceptet med at bruge mad, leg og ros til
            hverdagens opdragelse. Det er ikke et krav du bruger klikker.
          </Text>
          <Text>
            <b>Træningsbane</b>
            <br />
            Jeg afholder træning på følgende adresse:
            Horsensvej 31, Nim, 8740 Brædstrup
          </Text>
          <Text>
            <b>Bemærk!</b>
            <br />
            Der kræves at hunden har basisvaccine og der er tegnet en hundeforsikring der dækker
            holddeltagelse, før vi mødes til første lektion.
          </Text>
          <br />
          <Title text="Kontrolleret leg og socialisering" showHorizontalRuler />
          <Text>
            Kontrolleret leg indebærer et mål om at alle får en god oplevelse med hjem, så der vil
            altid tages hensyn til den enkelte hund. Oftest startes legetiden ud med at to hunde
            lukkes sammen ad gangen, således de kan få lov til at se hinanden an. Dette gør det nemt
            at afbryde legen, hvis det bliver for meget for den ene hund, eller de har brug for en
            pause.
          </Text>
          <Text>
            Din hund har sin egen personlighed og sin egen præference for leg. Nogle kan godt lide
            at løbe og jage, andre elsker at bryde og være voldsom. Derfor sættes legetiden altid
            op, så vi kan se hvilke hunde der passer bedst sammen i legestil.
          </Text>
          <Text>
            Kontrolleret leg giver god mulighed for at tage hensyn til den enkelte hund, og samtidig
            får du indsigt i hvad der er passende leg mellem hundene og hvilke signaler der gives,
            når din eller en anden hund siger stop.
          </Text>
          <Text>
            Hvalpeholdene inkluderer tid til leg, og der er mulighed for leg og socialisering på
            alle andre holdtyper efter ønske.
          </Text>
        </Column>
      </Row>
    </Background>
  </Page>
);

export default DogCourse;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
