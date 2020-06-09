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
  // Image,
  DogCourseSummer,
  StyledLink,
  StyledExternal,
  TextList
} from '../components';
import Responsive from '../components/layout/Responsive';
import DogMenu from '../components/menu/DogMenu';
// import { PuppyOne, PuppyTwo, PuppyThree, PuppyFour, PuppyFive, PuppySix } from '../assets';

const SummerInfo = [
  'Afholdes i sommerferiens uge 29 og 30',
  'Plads til max 6 snuder pr. hold',
  '3 dages træning i alt: Starter onsdag og slutter fredag i den respektive uge',
  'Lørdag formiddag er der fælles afslutning for alle med hyggetimen',
  'Der serveres kaffe og te hver dag'
];

const SummerProgram = [
  'Hvalpestue: Med fokus på socialisering, miljøtræning og ro omkring andre',
  'Hverdagssjov: Hjernegymnastik til hverdagen med targettræning, motoriklege og tricks',
  'Rolige gåture uden trækkeri: Lær kontaktlege der giver dig fornøjelige gåture uden trækken i snoren',
  'Det sorte bælte i selvkontrol: Til hunden der skal mestrer ro omkring spændende fristelser',  
  'Nose Work: Sjov og stimulerende aktiviteter hvor hunden skal bruge sin næse', 
  'Hyggetimen: Leg, gåture og hygge i samlet flok'
  
];

const DogSummer = () => (
  <Page>
    <Meta />
    <Banner text="Hundehold i Horsens">
      <BreadCrumps currentPage="Sommerferiesjov" />
    </Banner>
    <Background>
    <Row marginTop={"25px"} marginBottom={"45px"}>
        <Column widthPercentage="20%">
          <Title text="Udbud af hundehold" showHorizontalRuler />
          <DogMenu/>
        </Column>
        <Column widthPercentage="75%">
          <Title text="Sommerferiesjov med hund i Horsens" showHorizontalRuler />
          <Text>
            Sommerferie sammen med hunden?<br />
            Tid til ekstra sjov og gode stunder med din bedste ven - hvor hele familien kan være med?
          </Text>
          <Text>
            Så kom med til årets <b><font color="#33CCCC">Sommerferiesjov med hunden</font></b> i sommerferieugerne 29 og 30!
          </Text>
          <Text>
            <b>Praktisk info om Sommerferiesjov</b><br />
            Træningen er familievenlig, så tag gerne børn og den bedre halvdel med til nogle hyggelige sommerdage.<br />
            Lidt info om hvert enkelt hold:
          </Text>
          <TextList texts={SummerInfo} />
          <Text>
            <b>Træningsprincipper til Sommerferiesjov</b><br />
            Al træning foregår med belønningsbaserede metoder,
            hvor vi bruger klikker eller "dygtig" til at markere korrekt adfærd og belønner hunden med mad og leg.
            Nøgleord for træningen er samarbejde, tillid og succes.
          </Text>
          <Text>
            <b>Sommerferiesjov holdinformation</b><br />
            Følgende sommersjove hundehold er planlagt:
          </Text>
          <TextList texts={SummerProgram} />
          <Text>
            Tilmelding foregår igennem facebook-begivenheden, som du kan finde link til under det enkelte holds faktaboks forneden.
            Har du ikke en facebookprofil kan du til gengæld <StyledLink to="/kontakt">kontakte mig</StyledLink> for at reservere en plads.
          </Text>
          <br />

          <Title text="Skema for uge 30" showHorizontalRuler />
          <Title color="#33CCCC" text="Din investering pr. hold: 625 kr."/>
          <Text>
            Følgende hold starter <b>onsdag den 22. juli</b> og varer tre dage til og med fredag den 24. juli.<br />
            Lørdag den 25. juli mødes vi fra kl. 10.00 - 12.00 til fælles hyggetime.
          </Text>
          <Table>
            <DogCourseSummer />
            <Tbody>
              <Tr>
                <Td>Nose Work Begynder</Td>
                <Td>09.30 - 11.00</Td>
                <Td>6 pladser</Td>
                <Td><font color="#D60E0E">4 ledige</font></Td>
                <Td>
                  <StyledExternal href="https://www.facebook.com/events/253142612415825/">
                  {"Facebook-begivenhed"}
                  </StyledExternal>
                  </Td>
              </Tr>
              <Tr>
                <Td>Nose Work letøvet / øvet</Td>
                <Td>11.30 - 13.00</Td>
                <Td>6 pladser</Td>
                <Td><font color="#D60E0E">6 ledige</font></Td>
                <Td>
                  <StyledExternal href="https://www.facebook.com/events/1976440025826246/">
                  {"Facebook-begivenhed"}
                  </StyledExternal>
                  </Td>
              </Tr>
              <Tr>
                <Td>Hvalpestue små racer</Td>
                <Td>17.30 - 19.00</Td>
                <Td>6 pladser</Td>
                <Td><font color="#D60E0E">6 ledige</font></Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
              </Tr>
              <Tr>
                <Td>Hvalpestue store racer</Td>
                <Td>19.05 - 20.35</Td>
                <Td>6 pladser</Td>
                <Td><font color="#D60E0E">6 ledige</font></Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
              </Tr>
            </Tbody>
          </Table>
          <br />
      
        {/* <Title text="Billeder fra sommerhold Horsens" showHorizontalRuler />
        <Row>
        <Column>
          <Image src={PuppyOne}/>
        </Column>
        <Column>
          <Image src={PuppyTwo}/>
        </Column>
        <Column>
          <Image src={PuppyThree}/>
        </Column>
        </Row>
        <Row>
        <Column>
          <Image src={PuppyFour}/>
        </Column>
        <Column>
          <Image src={PuppyFive}/>
        </Column>
        <Column>
          <Image src={PuppySix}/>
        </Column>
        </Row> */}


        </Column>
      </Row>
    </Background>
  </Page>
);

export default withRouter(DogSummer);

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
