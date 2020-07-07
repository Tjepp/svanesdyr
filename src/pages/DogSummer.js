/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import { Table, Tbody, Tr, Td } from 'react-super-responsive-table';
import { withRouter } from 'react-router-dom';
import {
  Page,
  Banner,
  Column,
  MetaDogSummer,
  Title,
  TitleColor,
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
  'Afholdes i sommerferiens uge 30 og 31',
  'Plads til max 6 snuder pr. hold',
  'Foregår på Sorthøjvej 40, 8700 Horsens',
  '3 dages træning i alt: Starter onsdag og slutter fredag i den respektive uge',
  'Lørdag formiddag er der fælles afslutning for alle med hyggetimen',
  'Der serveres kaffe og te hver dag',
  'God tid til en ekstra sludder og hygge med holdkammeraterne'
];

const SummerProgram = [
  'Nose Work: Sjov og stimulerende aktiviteter hvor hunden skal bruge sin næse', 
  'Hvalpelegestue: Med fokus på socialisering, miljøtræning og ro omkring andre',
  'Rolige gåture uden trækkeri: Lær kontaktlege der giver dig fornøjelige gåture uden trækken i snoren',
  'Doggie-Zen Master: Til hunden der skal mestrer ro omkring spændende fristelser',  
  'Hyggetimen: Leg, gåture og hygge i samlet flok'
  
];

const DogSummer = () => (
  <Page>
    <MetaDogSummer />
    <Banner text="Hundehold i Horsens">
      <BreadCrumps currentPage="Sommerferietræning" />
    </Banner>
    <Background>
    <Row marginTop={"25px"} marginBottom={"45px"}>
        <Column widthPercentage="20%">
          <Title text="Udbud af hundehold" showHorizontalRuler />
          <DogMenu/>
        </Column>
        <Column widthPercentage="75%">
          <Title text="Hundens Sommerferietræning Horsens" showHorizontalRuler />
          <Text>
            Sommerferie sammen med hunden?<br />
            Tid til ekstra sjov og gode stunder med din bedste ven - hvor hele familien kan være med?
          </Text>
          <Text>
            Så kom med til årets <b>Sommerferietræning med hunden</b> i sommerferieugerne 30 og 31!<br />
            Træningen er familievenlig, så tag gerne børn og den bedre halvdel med til nogle hyggelige sommerdage.
          </Text>
          <Text>
            Lidt info om hvert enkelt hold:
          </Text>
          <TextList texts={SummerInfo} />
          <Text>
            <b>Sommerferietræning holdinformation</b><br />
            Følgende sommersjove hundehold er planlagt:
          </Text>
          <TextList texts={SummerProgram} />
          <Text>
            <b>Mere info og tilmelding</b><br />
            Du kan læse mere om det enkelte hold på deres facebook-begivenhed, som du finder link til under det enkelte holds faktaboks nederst på siden.
            Tilmelding foregår også via begivenheden på facebook.
            Har du ikke en facebookprofil kan du til gengæld <StyledLink to="/kontakt">kontakte mig</StyledLink> for at reservere en plads.
          </Text>
          <br />

          <Title text="Skema for uge 30" showHorizontalRuler />
          <TitleColor text="Din investering pr. hold: 625 kr."/>
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
                <Td><font color="#D60E0E">3 ledige</font></Td>
                <Td>
                  <StyledExternal href="https://www.facebook.com/events/253142612415825/">
                  {"Facebook-tilmelding"}
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
                  {"Facebook-tilmelding"}
                  </StyledExternal>
                </Td>
              </Tr>
              <Tr>
                <Td>Hvalpelegestue</Td>
                <Td>17.00 - 18.30</Td>
                <Td>6 pladser</Td>
                <Td><font color="#D60E0E">4 ledige</font></Td>
                <Td>
                  <StyledExternal href="https://www.facebook.com/events/1276822452669753/">
                  {"Facebook-tilmelding"}
                  </StyledExternal>
                </Td>
              </Tr>
              <Tr>
                <Td>Rolige gåture</Td>
                <Td>18.45 - 20.15</Td>
                <Td>6 pladser</Td>
                <Td><font color="#D60E0E">6 ledige</font></Td>
                <Td>
                  <StyledExternal href="https://www.facebook.com/events/606308353653979/">
                  {"Facebook-tilmelding"}
                  </StyledExternal>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <br />
          <Title text="Skema for uge 31" showHorizontalRuler />
          <TitleColor text="Din investering pr. hold: 625 kr."/>
          <Text>
            Følgende hold starter <b>onsdag den 29. juli</b> og varer tre dage til og med fredag den 31. juli.<br />
            Lørdag den 1. august mødes vi fra kl. 10.00 - 12.00 til fælles hyggetime.
          </Text>
          <Table>
            <DogCourseSummer />
            <Tbody>
              <Tr>
                <Td>Rolige gåture</Td>
                <Td>17.00 - 18.30</Td>
                <Td>6 pladser</Td>
                <Td><font color="#D60E0E">6 ledige</font></Td>
                <Td>
                  <StyledExternal href="https://www.facebook.com/events/272411560857298/">
                  {"Facebook-tilmelding"}
                  </StyledExternal>
                </Td>
              </Tr>
              <Tr>
                <Td>Doggie-Zen Master</Td>
                <Td>18.45 - 20.15</Td>
                <Td>6 pladser</Td>
                <Td><font color="#D60E0E">6 ledige</font></Td>
                <Td>
                  <StyledExternal href="https://www.facebook.com/events/909248736261221/">
                  {"Facebook-tilmelding"}
                  </StyledExternal>
                </Td>
              </Tr>
            </Tbody>
          </Table>

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
