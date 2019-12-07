import React from 'react';
import styled from 'styled-components';
import { Table, Tbody, Tr, Td } from 'react-super-responsive-table';
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
  DogCourseTableHead,
  Row
} from '../components';
import Responsive from '../components/layout/Responsive';
import { puppyCourse, coolCourse, recall } from '../assets';
import '../components/table/TableCss.css';

const DogCourse = () => (
  <Page>
    <Meta />
    <Banner text="Hundehold i Horsens">
      <BreadCrumps currentPage="Hundehold" />
    </Banner>
    <Background>
      <Row marginTop={"25px"}>
        <Column widthPercentage="65%">
          <Title text="Hundetræning i Horsens" showHorizontalRuler />
          <Text>
            Jeg benytter mig af belønningsbaserede træningsmetoder fra de indlæringspsykologiske
            principper. Træningen foregår på hundens præmisser, hvor fokus er at sætte hunden op til
            succes igennem trinvis indlæring. Mit mål er altid at skabe en god relation mellem dig
            og din hund. Nøgleord for træningen er samarbejde, tillid og succes.
          </Text>
          <Text>
            Små hold med tid til dig og din hund! De mindre hold gør at jeg har tid til en
            individuel snak omkring samarbejdet og træningen med netop din hund. Målet er, at uanset
            niveau, alder eller størrelse så får alle deltagere udbytte af timen. Hele familien er
            velkommen til at deltage, så tag gerne børn og den bedre halvdel med til en hyggelig
            time.
          </Text>
          <Text>
            Vi ses én gang om ugen! Vi mødes hver uge i kursusets varighed, hvor der er afsat 60
            min. til gennemgang af dagens øvelser. For hvalpehold er der inkluderet tid til leg og
            socialisering i timen. I vil blive introduceret til klikkertræning. Der tilsendes
            desuden skriftlige guides på de gennemgåede øvelser, så det er let at træne videre
            hjemme.
          </Text>
          <Text color="#33CCCC" bold>
            Materialeudgifter på 40 kr.
          </Text>
          <Text>
            Skal betales 1. mødegang enten kontant eller på mobilepay. Beløbet dækker materialebrug
            under forløbet.
          </Text>
        </Column>
        <Column>
          <Title text="Praktisk info om hundehold" showHorizontalRuler />
          <Text>
            Jeg har indgået et samarbejde med FOF Horsens, derfor foregår tilmelding og betaling
            igennem dem.
          </Text>
          <Text color="#33CCCC" bold>
            Pris for deltagelse i Horsens:
          </Text>
          <Text>
            Hvalpehold: 755 kr.
            <br />
            Helt-Cool kursus: 895 kr
            <br />
            Indkaldskursus: 910 kr.
            <br />
            Uanset antal gange man deltager.
          </Text>
          <Text bold>Træningsbane: </Text>
          <Text>
            Træningen foregår på en indhegnet udebane på adressen: Sorthøjvej 40, 8700 Horsens.
          </Text>
          <Text bold>Bemærk! </Text>
          <Text>
            Det er påkrævet at hunden har basisvaccine og der er tegnet udvidet hundeforsikring før
            deltagelse.
          </Text>
        </Column>
      </Row>
      <Row>
        <Column widthPercentage="100%">
          <Title text="Skema for kommende holdstart - MAJ 2019" showHorizontalRuler />
          <Text color="#33CCCC" bold>
            Søndage
          </Text>
          <Table>
            <DogCourseTableHead />
            <Tbody>
              <Tr>
                <Td>Hvalp Fortsætter</Td>
                <Td>Kontakt mig</Td>
                <Td>08.00 - 08.50</Td>
                <Td>05. maj</Td>
                <Td>30. juni</Td>
                <Td>8 uger</Td>
                <Td>Pinse 9. juni</Td>
                <Td>*Venteliste*</Td>
              </Tr>
              <Tr>
                <Td>Hvalpehold</Td>
                <Td>
                  <a href="http://www.fof.dk/horsens-hedensted-vejle/Kursusoversigt/friluftsliv-jagt-hundetraening-sejlads-kaeledyr/Hundetraening/hvalpehold-36-mdr?id=190812">
                    Klik her
                  </a>
                </Td>
                <Td>09.00 - 10.00</Td>
                <Td>05. maj</Td>
                <Td>30. juni</Td>
                <Td>8 uger</Td>
                <Td>
                  <font color="#d60e0e">Pinse 9. juni</font>
                </Td>
                <Td>
                  <b>4 </b>
                  ledige pladser
                </Td>
              </Tr>
              <Tr>
                <Td>Helt-Cool kursus</Td>
                <Td>
                  <a href="http://www.fof.dk/horsens-hedensted-vejle/Kursusoversigt/friluftsliv-jagt-hundetraening-sejlads-kaeledyr/Hundetraening/heltcool-kursus-alle-aldre?id=190814">
                    Klik her
                  </a>
                </Td>
                <Td>10.15 - 11.15</Td>
                <Td>05. maj</Td>
                <Td>30. juni</Td>
                <Td>8 uger</Td>
                <Td>
                  <font color="#d60e0e">Pinse 9. juni</font>
                </Td>
                <Td>
                  <b>3 </b>
                  ledige pladser
                </Td>
              </Tr>
              <Tr>
                <Td>Fortsat Helt-Cool</Td>
                <Td>
                  <a href="/Hjem/Kontakt">Kontakt mig</a>
                </Td>
                <Td>11.30 - 12.30</Td>
                <Td>05. maj</Td>
                <Td>30. juni</Td>
                <Td>8 uger</Td>
                <Td>
                  <font color="#d60e0e">Pinse 9. juni</font>
                </Td>
                <Td>
                  <b>3 </b>
                  ledige pladser
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Column>
      </Row>
      <Row>
        <Title text="Udbud af hundehold i Horsens" showHorizontalRuler/>
      </Row>
      <Row marginBottom={"25px"}>
        <Column>
          <Image src={puppyCourse} />
          <Title text="Hvalpehold (3-6 mdr.)" smallTitle />
          <Text bold text="Max 6 deltagere" />
          <Text>
            Jeg benytter mig af belønningsbaserede træningsmetoder fra de indlæringspsykologiske
            principper. Jeg vægter gensidig samarbejde og glæde højt og jeg tager hensyn til den
            enkelte i træningen.
          </Text>
        </Column>
        <Column>
          <Image src={coolCourse} />
          <Title text="Helt-cool kursus (alle aldre)" smallTitle />
          <Text bold> Max 5 deltagere </Text>
          <Text>
            Jeg benytter mig af belønningsbaserede træningsmetoder fra de indlæringspsykologiske
            principper. Jeg vægter gensidig samarbejde og glæde højt og jeg tager hensyn til den
            enkelte i træningen.
          </Text>
        </Column>
        <Column>
          <Image src={recall} />
          <Title text="Indkaldskursus (alle aldre)" smallTitle />
          <Text bold>Max 4 deltagere</Text>
          <Text>
            Ønsker du et indkald med fart og glæde? Hvor hunden vælger dig fremfor alt andet? Så er
            dette kursus til jer! Vi vil have fokus på motivation, belønningsteknikker, kontakt,
            stop-signal og forventningsopbygning.
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
