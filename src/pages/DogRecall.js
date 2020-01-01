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
  StyledExternal
} from '../components';
import Responsive from '../components/layout/Responsive';
import DogMenu from '../components/menu/DogMenu';
import { RecallOne, RecallTwo, RecallThree, RecallFour, RecallFive, RecallSix } from '../assets';

const RecallProgram = [
  'Kontaktøvelser, som sikrer dig, at DU altid er interessant',
  'Råd til hverdagens motivation og forventninger hos din hund',
  'Stop-and-go, lær din hund at stoppe på signal, selvom den er på vej væk',
  'God impulskontrol så dagligdagens spændende sager sagtens kan ignoreres',
  'Belønningsteknikker der lærer dig at finde den helt rigtige "godbid" til din hund'
];

const DogRecall = () => (
  <Page>
    <Meta />
    <Banner text="Hundehold i Horsens">
      <BreadCrumps currentPage="Indkaldskursus" />
    </Banner>
    <Background>
    <Row marginTop={"25px"} marginBottom={"45px"}>
        <Column widthPercentage="20%">
          <Title text="Udbud af hundehold" showHorizontalRuler />
          <DogMenu/>
        </Column>
        <Column widthPercentage="75%">
          <Title text="Indkaldskursus i Horsens" showHorizontalRuler />
          <Text>
            Ønsker du at give din hund mere frihed på gåturene og være sikker på den kommer første gang du kalder, selv ved forstyrrelser,
            så er du kommet til rette sted!
          </Text>
          <Text>
            Indkaldsholdet henvender sig til alle hunde i alle aldre, der har brug for et stærkt og sikkert indkald.
            Du vil lære at skabe stor motivation i din hund ved at bruge effektive belønningsteknikker, så din hund får en høj forventning til det fantastiske indkald.
          </Text>
          <Text>
            Al træning foregår med <b><font color="#33CCCC">belønningsbaserede metoder</font></b>, hvor vi bruger klikker eller "dygtig" til at markere korrekt adfærd og belønner hunden med mad og leg.
            Hvis din hund laver fejl hjælper vi den ved at gøre opgaven nemmere og mere letforståelig. Alle bliver sat op til succes.
          </Text>
          <Text>
            <b>Træningsprogram for holdet</b><br />
            I løbet af vores 6 uger sammen vil vi komme igennem følgende:
          </Text>
          <TextList texts={RecallProgram} />
          <Text>
            Kurset er et intimtkursus <b><font color="#33CCCC">med max 3 deltagere</font></b>.
          </Text>
          <br />

          <Title text="Skema for kommende holdstart" showHorizontalRuler />
          <Title color="#33CCCC" text="Pris for deltagelse: 860 kr."/>
          <Text>
            Materialegebyr på 40 kr. betales første mødegang.
          </Text>
          <Table>
            <DogCourseSimple />
            <Tbody>
              <Tr>
                <Td>Indkald1</Td>
                <Td>Tirsdag</Td>
                <Td>Hal</Td>
                <Td><StyledExternal href="https://www.fof.dk/horsens-hedensted-vejle/Kursusoversigt/friluftsliv-jagt-hund-gronomstilling/Hundetraening/indkaldskursus-alle-aldre?id=202824">
                  {"Klik her"}
                  </StyledExternal></Td>
                <Td>16.30 - 17.15</Td>
                <Td>3. marts</Td>
                <Td>7. april</Td>
                <Td><font color="#D60E0E">3 pladser</font></Td>
              </Tr>
              <Tr>
                <Td>Indkald2</Td>
                <Td>Tirsdag</Td>
                <Td>Hal</Td>
                <Td><StyledExternal href="https://www.fof.dk/horsens-hedensted-vejle/Kursusoversigt/friluftsliv-jagt-hund-gronomstilling/Hundetraening/indkaldskursus-alle-aldre?id=202825">
                  {"Klik her"}
                  </StyledExternal></Td>
                  <Td>17.30 - 18.15</Td>
                <Td>3. marts</Td>
                <Td>7. april</Td>
                <Td><font color="#D60E0E">*Venteliste*</font></Td>
              </Tr>
            </Tbody>
          </Table>
          <br />
      
        <Title text="Billeder fra Indkaldskursus" showHorizontalRuler />
        <Row>
        <Column>
          <Image src={RecallOne}/>
        </Column>
        <Column>
          <Image src={RecallTwo}/>
        </Column>
        <Column>
          <Image src={RecallThree}/>
        </Column>
        </Row>
        <Row>
        <Column>
          <Image src={RecallFour}/>
        </Column>
        <Column>
          <Image src={RecallFive}/>
        </Column>
        <Column>
          <Image src={RecallSix}/>
        </Column>
        </Row>


        </Column>
      </Row>
    </Background>
  </Page>
);

export default withRouter(DogRecall);

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
