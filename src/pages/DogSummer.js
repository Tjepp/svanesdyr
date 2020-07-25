/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
// import { Table, Tbody, Tr, Td } from 'react-super-responsive-table';
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
  // DogCourseSummer,
  StyledLink,
  // StyledExternal,
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
  'Vi mødes 1,5 time hver dag, med hhv. 60 min. træning og 30 min. leg og hygge',
  'Lørdag formiddag er der fælles afslutning for alle med hyggetimen',
  'Der serveres kaffe og te hver dag',
  'Der er god tid til en ekstra sludder og hygge med holdkammeraterne'
];

const SummerProgram = [
  'Nose Work: Sjov og stimulerende aktiviteter hvor hunden skal bruge sin næse', 
  'Hvalpelegestue: Med fokus på socialisering, miljøtræning og ro omkring andre',
  'Rolige gåture: Lær kontaktlege der giver dig fornøjelige gåture uden trækken i snoren',
  'Barn & Hund: Sjove lege og øvelser, som styrker barn og hunds fælles bånd',
  'Tricks & Leg: Hygge med kropskontrol, tricks og masser af god leg med andre hunde',
  'Sorte bælte i selvkontrol: Til hunden der skal mestrer ro omkring spændende fristelser'
  
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

          <Title text="Udbud af sommerkurser" showHorizontalRuler />
          <TitleColor text="Din investering pr. hold: 625 kr."/>
          <Text>
            Nye hold planlægges til sommeren 2021 og annonceres maj 2021
          </Text>
          {/* <Table>
            <DogCourseSummer />
            <Tbody>
              <Tr>
                <Td>Nose Work Begynder</Td>
                <Td>09.30 - 11.00</Td>
                <Td>6 pladser</Td>
                <Td><font color="#D60E0E">*Venteliste*</font></Td>
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
                <Td><font color="#D60E0E">2 ledige</font></Td>
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
                <Td><font color="#D60E0E">1 ledig</font></Td>
                <Td>
                  <StyledExternal href="https://www.facebook.com/events/1276822452669753/">
                  {"Facebook-tilmelding"}
                  </StyledExternal>
                </Td>
              </Tr>
            </Tbody>
          </Table> */}
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
