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
  Row
} from '../components';
import Responsive from '../components/layout/Responsive';
import '../components/table/TableCss.css';
import DogMenu from '../components/menu/DogMenu';


const DogCourse = () => (
  <Page>
    <Meta />
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
          Træningen hos mig foregår på hundens præmisser hvor vi anvender <b>belønningsbaserede træningsmetoder</b> fra de indlæringspsykologiske principper.
          Mit fokus er at skabe succes for dig og din hund, så i styrker jeres fælles samarbejde.
          </Text>
          <Text>
            Nøgleord for træningen er derfor <b><font color="#33CCCC">samarbejde, tillid og succes</font></b>.
          </Text>
          <Text>
            <b>Små hold med tid til dig og din hund</b><br />
            Jeg afholder intime hold med <b><font color="#33CCCC">max 4 hunde</font></b>, da jeg værdsætter tid til en individuel snak med dig omkring samarbejdet og træningen med din hund.
            Målet er, at uanset niveau og alder så skal alle deltagere have udbytte af timen.
            Træningen er familievenlig, så tag gerne børn og den bedre halvdel med til en hyggelig time.
          </Text>
          <Text>
            <b>Vi ses én gang om ugen</b><br />
            Hvert hold varer 6 - 7 uger, hvor vi mødes til træning i <b>45 min. per uge</b>.
            Der tilsendes skriftlige guides på kursets øvelser, så det er let at træne videre hjemme.
            Du vil blive introduceret til klikkertræning og konceptet med at bruge mad, leg og ros til hverdagens opdragelse.
          </Text>
          <Text>
          <b>Kontrolleret leg og socialisering</b><br />
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
          <Text>
            <b>Træningsbaner</b><br />
            Jeg afholder træning inde eller ude alt efter årstiden og holder til på følgende adresser:<br />
            <u>Ude</u>bane: Sorthøjvej 40, 8700 Horsens<br />
            <u>Hal</u> (inde): Bjerrevej 300, 8783 Hornsyld
          </Text>
          <Text>
            <b>Bemærk!</b><br />
            Det er påkrævet at hunden har basisvaccine og der er tegnet udvidet hundeforsikring før
            deltagelse.
          </Text>
          <br />
          
          <Title text="Pris for deltagelse" showHorizontalRuler />
          <Text>  
            Jeg har indgået et samarbejde med FOF Horsens, derfor foregår tilmelding og betaling oftest igennem dem.
          </Text>
          <Text>
            Hvalpehold: 965 kr. <i>inkl. teoriaften</i><br />
            Helt-Cool kursus: 965 kr. <i>inkl. teoriaften</i><br />
            Alle andre holdtyper: 860 kr.<br />
          </Text>
          <Text>
            Uanset antal gange man deltager.<br />
            <b><font color="#33CCCC">Bemærk: Max 4 hunde pr. hold.</font></b>
          </Text>
          <Text><b>Materialegebyr på 40 kr.</b><br />
            Alle holdpriser tillægges materialegebyr. Beløbet dækker materialebrug og halleje under forløbet.
          </Text>
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
