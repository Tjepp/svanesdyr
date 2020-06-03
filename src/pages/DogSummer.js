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
  TextList
} from '../components';
import Responsive from '../components/layout/Responsive';
import DogMenu from '../components/menu/DogMenu';
// import { PuppyOne, PuppyTwo, PuppyThree, PuppyFour, PuppyFive, PuppySix } from '../assets';

const SummerProgram = [
  'Hvalpestue: Med fokus på socialisering, miljøtræning og ro omkring andre',
  'Hverdagssjov: Hjernegymnastik til hverdagen med targettræning, motoriklege og tricks',
  'Rolige gåture uden trækkeri: Lær kontaktlege der giver dig fornøjelige gåture uden trækken i snoren',
  'Det sorte bælte i selvkontrol: Til hunden der skal mestrer ro omkring spændende fristelser',  
  'Hyggetimen: Leg, gåture og hygge i samlet flok'
  
];

const DogSummer = () => (
  <Page>
    <Meta />
    <Banner text="Hundehold i Horsens">
      <BreadCrumps currentPage="Sommer-Hund" />
    </Banner>
    <Background>
    <Row marginTop={"25px"} marginBottom={"45px"}>
        <Column widthPercentage="20%">
          <Title text="Udbud af hundehold" showHorizontalRuler />
          <DogMenu/>
        </Column>
        <Column widthPercentage="75%">
          <Title text="Sommer-Hund i Horsens" showHorizontalRuler />
          <Text>
            Sommerferie sammen med hunden?<br />
            Tid til ekstra sjov og gode stunder med din bedste ven - hvor hele familien kan være med?
          </Text>
          <Text>
            Så kom med til årets <b><font color="#33CCCC">Trænings-Bootcamp</font></b> i sommerferien!
          </Text>
          <Text>
            <b>Praktisk info om Sommer-Hund</b><br />
            Trænings-bootcampen afholdes i sommerferiens uge 29 og 30.<br />
            Hvert holds træningstimer starter om onsdagen og slutter om fredagen i den respektive uge. Dvs. <b><font color="#33CCCC">3 dages</font></b> træning i alt.<br />
            Lørdag formiddag er der fælles afslutning for ugen med hyggetimen, hvor alle deltagere fra alle hold er velkomne til leg og hygge.<br />
            Træningen er familievenlig, så tag gerne børn og den bedre halvdel med til nogle hyggelige sommerdage.
          </Text>
          <Text>
            <b>Træningsprincipper til Sommer-Hund</b><br />
            Al træning foregår med belønningsbaserede metoder,
            hvor vi bruger klikker eller "dygtig" til at markere korrekt adfærd og belønner hunden med mad og leg.
            Nøgleord for træningen er samarbejde, tillid og succes.
          </Text>
          <Text>
            <b>Sommer-Hund holdinformation</b><br />
            Hvert hold tilbydes i to omgange fra onsdag - fredag i både uge 29 og 30.
            Følgende sommersjov er planlagt:
          </Text>
          <TextList texts={SummerProgram} />
          {/* <Text>
            Tilmelding foregår igennem facebook-begivenheden, som du kan finde link til under det enkelte holds faktaboks forneden.
            Har du ikke en facebookprofil kan du til gengæld <StyledLink to="/kontakt">kontakte mig</StyledLink> for at reservere en plads.
          </Text> */}
          <br />

          <Title text="Skema for uge 29" showHorizontalRuler />
          <Title color="#33CCCC" text="Din investering pr. hold: 450 kr."/>
          <Text>
            Følgende hold starter <b>onsdag den 15. juli</b> og varer tre dage til og med fredag den 17. juli.<br />
            Lørdag den 18. juli mødes vi fra kl. 10.00 - 11.30 til fælles hyggetime.
          </Text>
          <Table>
            <DogCourseSummer />
            <Tbody>
              <Tr>
                <Td>Hvalpestue små racer</Td>
                <Td>08.30 - 09.30</Td>
                <Td>6 pladser</Td>
                <Td><font color="#D60E0E">6 ledige</font></Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
              </Tr>
              <Tr>
                <Td>Hvalpestue store racer</Td>
                <Td>09.45 - 10.45</Td>
                <Td>6 pladser</Td>
                <Td><font color="#D60E0E">6 ledige</font></Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
              </Tr>
              <Tr>
                <Td>Hverdagssjov</Td>
                <Td>11.00 - 12.00</Td>
                <Td>5 pladser</Td>
                <Td><font color="#D60E0E">5 ledige</font></Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
              </Tr>
              <Tr>
                <Td>Rolige gåture uden trækkeri</Td>
                <Td>17.30 - 18.30</Td>
                <Td>5 pladser</Td>
                <Td><font color="#D60E0E">5 ledige</font></Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
              </Tr>
              <Tr>
                <Td>Det sorte bælte i selvkontrol</Td>
                <Td>18.45 - 19.45</Td>
                <Td>5 pladser</Td>
                <Td><font color="#D60E0E">5 ledige</font></Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
              </Tr>
            </Tbody>
          </Table>
          <br />

          <Title text="Skema for uge 30" showHorizontalRuler />
          <Title color="#33CCCC" text="Din investering pr. hold: 450 kr."/>
          <Text>
            Følgende hold starter <b>onsdag den 22. juli</b> og varer tre dage til og med fredag den 24. juli.<br />
            Lørdag den 25. juli mødes vi fra kl. 10.00 - 11.30 til fælles hyggetime.
          </Text>
          <Table>
            <DogCourseSummer />
            <Tbody>
              <Tr>
                <Td>Hvalpestue små racer</Td>
                <Td>08.30 - 09.30</Td>
                <Td>6 pladser</Td>
                <Td><font color="#D60E0E">6 ledige</font></Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
              </Tr>
              <Tr>
                <Td>Hvalpestue store racer</Td>
                <Td>09.45 - 10.45</Td>
                <Td>6 pladser</Td>
                <Td><font color="#D60E0E">6 ledige</font></Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
              </Tr>
              <Tr>
                <Td>Hverdagssjov</Td>
                <Td>11.00 - 12.00</Td>
                <Td>5 pladser</Td>
                <Td><font color="#D60E0E">5 ledige</font></Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
              </Tr>
              <Tr>
                <Td>Rolige gåture uden trækkeri</Td>
                <Td>17.30 - 18.30</Td>
                <Td>5 pladser</Td>
                <Td><font color="#D60E0E">5 ledige</font></Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
              </Tr>
              <Tr>
                <Td>Det sorte bælte i selvkontrol</Td>
                <Td>18.45 - 19.45</Td>
                <Td>5 pladser</Td>
                <Td><font color="#D60E0E">5 ledige</font></Td>
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
