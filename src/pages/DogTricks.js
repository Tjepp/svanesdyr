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
import { TricksOne, TricksTwo, PuppyOne } from '../assets';

const TricksProgram = [
  'Tid til egne ønsker til tricks og sjov med DIN hund',
  'Doggie-zen, som lærer din hund at ro, fokus og selvkontrol kan give pote',
  'Dog-Parkour, som er sjov og stimulerende, fysisk træning til hverdagsbrug',
  'Øvelser med kropskontrol, som styrker din hunds kropsbevidsthed og giver et boost til selvtilliden',
  'Targettræning der lærer din hund at søge ”mål” med snude eller pote, til sjove lege i hverdagen'
];

const DogTricks = () => (
  <Page>
    <Meta />
    <Banner text="Hundehold i Horsens">
      <BreadCrumps currentPage="Tricks og Motorik" />
    </Banner>
    <Background>
    <Row marginTop={"25px"} marginBottom={"45px"}>
        <Column widthPercentage="20%">
          <Title text="Udbud af hundehold" showHorizontalRuler />
          <DogMenu/>
        </Column>
        <Column widthPercentage="75%">
          <Title text="Tricks og Motorik i Horsens" showHorizontalRuler />
          <Text>
            Ønsker du en glad samarbejdspartner, som er initiativrig og synes træning med dig er FEDT,
            så er du kommet til rette sted!
          </Text>
          <Text>
            Tricks og Motorikholdet henvender sig til alle hunde i alle aldre.
            Du vil på dette hold lære forskellige øvelser der træner din hunds kropskontrol, initiativ og kreativitet.
            Jeg lægger vægt på at i skal have det sjovt sammen og fremfor alt samarbejde om nye opgaver!
          </Text>
          <Text>
            Al træning foregår med <b><font color="#33CCCC">belønningsbaserede metoder</font></b>, hvor vi bruger klikker eller "dygtig" til at markere korrekt adfærd og belønner hunden med mad og leg.
            Hvis din hund laver fejl hjælper vi den ved at gøre opgaven nemmere og mere letforståelig. Alle bliver sat op til succes.
          </Text>
          <Text>
            <b>Træningsprogram for holdet</b><br />
            I løbet af vores 6 uger sammen vil vi komme igennem følgende:
          </Text>
          <TextList texts={TricksProgram} />
          <Text>
            Kurset er et intimtkursus <b><font color="#33CCCC">med max 3 deltagere</font></b>.
          </Text>
          <br />

          <Title text="Skema for kommende holdstart" showHorizontalRuler />
          <Title color="#33CCCC" text="Din investering: 860 kr."/>
          <Text>
            Materialegebyr på 40 kr. betales første mødegang.
          </Text>
          <Table>
            <DogCourseSimple />
            <Tbody>
              <Tr>
                <Td>Tricks1</Td>
                <Td>Tirsdag</Td>
                <Td>Ude</Td>
                <Td><StyledExternal href="https://www.fof.dk/horsens-hedensted-vejle/Kursusoversigt/friluftsliv-jagt-hund-gronomstilling/Hundetraening/tricks-og-motorik-alle-hunde?id=200823">
                  {"Klik her"}
                  </StyledExternal></Td>
                  <Td>16.30 - 17.15</Td>
                <Td>5. maj</Td>
                <Td>16. juni</Td>
                <Td><font color="#D60E0E">3 pladser</font></Td>
              </Tr>
            </Tbody>
          </Table>
          <br />
      
        <Title text="Billeder fra Tricks og Motorik" showHorizontalRuler />
        <Row>
        <Column>
          <Image src={TricksOne}/>
        </Column>
        <Column>
          <Image src={TricksTwo}/>
        </Column>
        <Column>
          <Image src={PuppyOne}/>
        </Column>
        </Row>


        </Column>
      </Row>
    </Background>
  </Page>
);

export default withRouter(DogTricks);

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
