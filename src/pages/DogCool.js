/* eslint-disable react/no-unescaped-entities */
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
  BreadCrumps,
  Row,
  DogCourseSimple,
  TextList,
  Image,
  StyledLink,
  // StyledExternal
} from '../components';
import Responsive from '../components/layout/Responsive';
import DogMenu from '../components/menu/DogMenu';
import { CoolOne, CoolTwo, CoolThree, CoolFour, CoolFive, CoolSix } from '../assets';

const CoolProgram = [
  'Fornøjelige gåture, uden at trække i snoren',
  'Hilse pænt / ikke hoppe op af mennesker',
  'Positiv indlæring af et stop ord som "nej"',
  'Indlæring af at gå i kurven / falde til ro på signal',
  'Pauseknappen, så hunden kan falde til ro, når du er i ro',
  'Træning af rolige gåture omkring andre hunde og mennesker',
  'God impulskontrol så dagligdagens små glæder bliver lettere med en hund, der har lært at have ro'

];

const DogCool = () => (
  <Page>
    <Meta />
    <Banner text="Hundehold i Horsens">
      <BreadCrumps currentPage="Helt-Cool" />
    </Banner>
    <Background>
    <Row marginTop={"25px"} marginBottom={"45px"}>
        <Column widthPercentage="20%">
          <Title text="Udbud af hundehold" showHorizontalRuler />
          <DogMenu/>
        </Column>
        <Column widthPercentage="75%">
          <Title text="Helt-Cool kursus i Horsens" showHorizontalRuler />
          <Text>
            Ønsker du at få en mere afslappet hverdag, med en hund der selv kan finde ro, som kan gå pænt i snor uden at hive armen af dig og hilse pænt, uden at hoppe op -
            så er du kommet til rette sted!
          </Text>
          <Text>
            Helt-Cool kurset henvender sig til alle hunde i alle aldre, som har tendens til at stresse.
            Mit fokus med dette kursus er at give dig redskaberne til at skabe en afbalanceret og rolig hund, gennem forskellige øvelser,
            der også vil styrke jeres fælles samarbejde.
          </Text>
          <Text>
            Al træning foregår med <b><font color="#33CCCC">belønningsbaserede metoder</font></b>, hvor vi bruger klikker eller "dygtig" til at markere korrekt adfærd og belønner hunden med mad og leg.
            Hvis din hund laver fejl hjælper vi den ved at gøre opgaven nemmere og mere letforståelig. Alle bliver sat op til succes.
          </Text>
          <Text>
            <b>Passer kurset til din hund?</b><br />
            Føler du din hund er lidt af et "damp"-barn eller bliver ustyrligt glad ved mødet med andre, så er dette hold det rette for jer!
            Kurset henvender sig <b>ikke</b> til hunde der er bange for andre hunde eller reagerer aggressivt ved synet af andre.
            Står du med denne problemstilling anbefaler jeg at
            <StyledLink to="/kontakt"> booke tid </StyledLink>
            til en
            <StyledLink to="/hundetraening"> konsultation</StyledLink>,
            hvor du kan få personlig vejledning og redskaber til at hjælpe din hund.
            <StyledLink to="/kontakt"> Kontakt mig </StyledLink> endelig hvis du er i tvivl.
          </Text>
          {/* <Text>
            <b>Teoriaften uden hund</b><br />
            Der afholdes 1,5 times teoriaften i løbet af kurset, hvor vi vil snakke om løsning til almindelige problemstillinger med hundene,
            såsom at gå pænt i snor, ikke hoppe op og falde til ro i hjemmet.
            Du vil også få indsigt i hvad stress gør ved din hund og belønningskonceptet med at bruge mad, leg og ros til hverdagens opdragelse.
          </Text> */}
          <Text>
            <b>Træningsprogram for holdet</b><br />
            I løbet af vores 7 uger sammen vil vi komme igennem følgende:
          </Text>
          <TextList texts={CoolProgram} />
          <br />

          <Title text="Skema for kommende holdstart" showHorizontalRuler />
          <Title color="#33CCCC" text="Pris for deltagelse: 900 kr."/>
          {/* <Text>
            Materialegebyr på 40 kr. betales første mødegang.
          </Text> */}
          <Table>
            <DogCourseSimple />
            <Tbody>
              <Tr>
                <Td>Cool C</Td>
                <Td>Søndag</Td>
                <Td>Ude</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>10.00 - 10.45</Td>
                <Td>17. maj</Td>
                <Td>28. juni</Td>
                <Td><font color="#D60E0E">2 pladser</font></Td>
              </Tr>
              <Tr>
                <Td>Cool D</Td>
                <Td>Tirsdag</Td>
                <Td>Ude</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>18.30 - 19.15</Td>
                <Td>19. maj</Td>
                <Td>30. juni</Td>
                <Td><font color="#D60E0E">1 plads</font></Td>
              </Tr>
              {/* <Tr>
                <Td>Cool4</Td>
                <Td>Tirsdag</Td>
                <Td>Ude</Td>
                <Td><StyledExternal href="https://www.fof.dk/horsens-hedensted-vejle/Kursusoversigt/friluftsliv-jagt-hund-gronomstilling/Hundetraening/heltcool-kursus-alle-aldre?id=200822">
                  {"Klik her"}
                  </StyledExternal></Td>
                <Td>19.30 - 20.15</Td>
                <Td>5. maj</Td>
                <Td>23. juni</Td>
                <Td>Ons 13. maj</Td>
                <Td>2. juni </Td>
                <Td><font color="#D60E0E">2 pladser</font></Td>
              </Tr> */}
            </Tbody>
          </Table>


          <Title text="Fortat Helt-Cool" showHorizontalRuler />
          {/* <Title color="#33CCCC" text="Pris for deltagelse: 900 kr."/> */}
          <Text>
            Ved efterspørgsel udbydes der fortsætterhold for kursister, som har deltaget på tidligere cool-hold.<br />
            Programmets primære fokus er at give din hund det sorte bælte i god impulskontrol! Hvor de rolige gåture praktiseres i stor stil.
          </Text>
          {/* <Table>
            <DogCourseTableHead />
            <Tbody>
              <Tr>
                <Td>Fortat Helt-Cool</Td>
                <Td>Søndag</Td>
                <Td>Hal</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>13.00 - 13.45</Td>
                <Td>1. marts</Td>
                <Td>19. april</Td>
                <Td>12. april</Td>
                <Td><font color="#D60E0E">3 pladser</font></Td>
              </Tr>
            </Tbody>
          </Table> */}
          <br />

        <Title text="Billeder fra Helt-Cool kursus" showHorizontalRuler />
        <Row>
        <Column>
          <Image src={CoolOne}/>
        </Column>
        <Column>
          <Image src={CoolTwo}/>
        </Column>
        <Column>
          <Image src={CoolThree}/>
        </Column>
        </Row>
        <Row>
        <Column>
          <Image src={CoolFour}/>
        </Column>
        <Column>
          <Image src={CoolFive}/>
        </Column>
        <Column>
          <Image src={CoolSix}/>
        </Column>
        </Row>


        </Column>
      </Row>
    </Background>
  </Page>
);

export default withRouter(DogCool);

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
