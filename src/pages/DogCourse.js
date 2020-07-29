/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
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
  Image
} from '../components';
import Responsive from '../components/layout/Responsive';
import '../components/table/TableCss.css';
import DogMenu from '../components/menu/DogMenu';
import { PlayOne, PlayTwo, PlayThree, PlayFour, PlayFive, PlaySix } from '../assets';

const DogCourse = () => (
  <Page>
    <MetaDogCourse />
    <Banner text="Hundehold i Horsens">
      <BreadCrumps currentPage="Hundehold" />
    </Banner>
    <Background>
    <Row marginTop={"25px"} marginBottom={"45px"}>
        <Column widthPercentage="20%">
          <Title text="Udbud af hundehold" showHorizontalRuler />
          <DogMenu/>
        </Column>
        <Column widthPercentage="75%">
          <Title text="Hundetræning i Horsens" showHorizontalRuler />
          <Text>
          Ønsker du en stærk relation mellem dig og din hund, gennem sjov, leg og succes, så er du kommet til rette sted!
          Træningen hos mig foregår på hundens præmisser hvor vi anvender <StyledLink to="/minemetoder"> belønningsbaserede træningsmetoder</StyledLink> fra de indlæringspsykologiske principper.
          Mit fokus er at skabe succes for dig og din hund, så i styrker jeres fælles samarbejde.
          </Text>
          <Text>
            Nøgleord for træningen er derfor <StyledLink to="/minemetoder"> samarbejde, tillid og succes</StyledLink>.
          </Text>
          <Text>
            <b>Små hold med tid til dig og din hund</b><br />
            Jeg afholder intime hold med <b>max 4 hunde</b>, da jeg værdsætter tid til en individuel snak med dig omkring samarbejdet og træningen med din hund.
            Målet er, at uanset niveau og alder så skal alle deltagere have udbytte af timen.
            Træningen er familievenlig, så tag gerne børn og den bedre halvdel med til en hyggelig time.
          </Text>
          <Text>
            <b>Vi ses én gang om ugen</b><br />
            Hvert hold varer 7 uger, hvor vi mødes til træning i <b>45 min. per uge</b>.
            Der tilsendes skriftlige guides på kursets øvelser, så det er let at træne videre hjemme.
            Du vil blive introduceret til klikkertræning og konceptet med at bruge mad, leg og ros til hverdagens opdragelse.
          </Text>
          <Text>
            <b>Træningsbane</b><br />
            Jeg afholder træning udenfor uanset årstiden og holder til på følgende adresse:<br />
            <u>Ude</u>bane: Sorthøjvej 40, 8700 Horsens<br />
          </Text>
          <Text>
            <b>Bemærk!</b><br />
            Der kræves at hunden har basisvaccine og der er tegnet en hundeforsikring der dækker holddeltagelse, før vi mødes til første lektion.
          </Text>
          <br />
          <Title text="Kontrolleret leg og socialisering" showHorizontalRuler />
          <Text>
            Kontrolleret leg indebærer et mål om at alle får en god oplevelse med hjem, så der vil altid tages hensyn til den enkelte hund.
            Oftest startes legetiden ud med at to hunde lukkes sammen ad gangen, således de kan få lov til at se hinanden an.
            Dette gør det nemt at afbryde legen, hvis det bliver for meget for den ene hund, eller de har brug for en pause.
          </Text>
          <Text>
            Din hund har sin egen personlighed og sin egen præference for leg. Nogle kan godt lide at løbe og jage, andre elsker at bryde og være voldsom.
            Derfor sættes legetiden altid op, så vi kan se hvilke hunde der passer bedst sammen i legestil.
          </Text>
          <Text>
            Kontrolleret leg giver god mulighed for at tage hensyn til den enkelte hund, og samtidig får du indsigt i hvad der er passende leg mellem hundene og hvilke
            signaler der gives, når din eller en anden hund siger stop.
          </Text>
          <Text>
            Hvalpeholdene inkluderer tid til leg, og der er mulighed for leg og socialisering på alle andre holdtyper efter ønske.
          </Text>
          <br />
          <Title text="Billeder fra leg på holdene" showHorizontalRuler />
        <Row>
        <Column>
          <Image src={PlayOne}/>
        </Column>
        <Column>
          <Image src={PlayTwo}/>
        </Column>
        <Column>
          <Image src={PlayThree}/>
        </Column>
        </Row>
        <Row>
        <Column>
          <Image src={PlayFour}/>
        </Column>
        <Column>
          <Image src={PlayFive}/>
        </Column>
        <Column>
          <Image src={PlaySix}/>
        </Column>
        </Row>

        </Column>
      </Row>
    </Background>
  </Page>
);

export default withRouter(DogCourse);

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
