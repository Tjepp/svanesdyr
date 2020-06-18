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
  // DogCourseTheory,
  TextList,
  Image,
  // StyledExternal,
  DogCourseSimple,
  StyledLink,
  DogCourseTableHead
} from '../components';
import Responsive from '../components/layout/Responsive';
import DogMenu from '../components/menu/DogMenu';
import { PuppyOne, PuppyTwo, PuppyThree, PuppyFour, PuppyFive, PuppySix } from '../assets';

const PuppyProgram = [
  'Fornøjelige gåture, uden at trække i snoren',
  'Pauseknappen, så hvalpen kan falde til ro, når du er i ro',
  'Det sikre indkald hvor hvalpen kommer hver gang der kaldes',
  'Positiv miljøtræning, så nye og skræmmende ting kan mødes med selvtillid',  
  'Basisøvelser sit, dæk og kontaktøvelser, som sikrer dig, at DU altid er interessant',
  'Frivillig håndtering, hvor du gør det til en leg at få tjekket tænder, ører, klippet negle m.v.',
  'God impulskontrol så dagligdagens små glæder bliver lettere med en hvalp, der har lært at have ro'
  
];

const DogPuppy = () => (
  <Page>
    <Meta />
    <Banner text="Hundehold i Horsens">
      <BreadCrumps currentPage="Hvalpehold" />
    </Banner>
    <Background>
    <Row marginTop={"25px"} marginBottom={"45px"}>
        <Column widthPercentage="20%">
          <Title text="Udbud af hundehold" showHorizontalRuler />
          <DogMenu/>
        </Column>
        <Column widthPercentage="75%">
          <Title text="Hvalpehold i Horsens" showHorizontalRuler />
          <Text>
            Ønsker du at skabe et stærkt tillidsfuld bånd med din hvalp, gennem masser af succesoplevelser, så er du kommet til rette sted!
          </Text>
          <Text>
            Hvalpeholdet henvender sig til alle hvalpe i alderen fra 8 uger og op til 6 mdr.<br />
            Jeg lægger stort fokus på miljøtræning, håndtering og sociliasering af din hvalp og kommer også omkring basisøvelser som kontakt, sit og dæk.
          </Text>
          <Text>
            Al træning foregår med <b><font color="#33CCCC">belønningsbaserede metoder</font></b>, hvor vi bruger klikker eller "dygtig" til at markere korrekt adfærd og belønner hvalpen med mad og leg.
            Hvis din hvalp laver fejl hjælper vi den ved at gøre opgaven nemmere og mere letforståelig. Alle bliver sat op til succes.
          </Text>
          {/* <Text>
            <b>Teoriaften uden hvalp</b><br />
            Der afholdes 1,5 times teoriaften i starten, hvor vi vil snakke om almindelige problemstillinger med hvalpene, såsom hvalpebideri, renlighed og alene hjemme.
            Du vil også få indsigt i belønningskonceptet med at bruge mad, leg og ros til hverdagens opdragelse.
          </Text> */}
          <Text>
            <b>Træningsprogram for holdet</b><br />
            I løbet af vores 7 uger sammen vil vi komme igennem følgende:
          </Text>
          <TextList texts={PuppyProgram} />
          <Text>
          <b>Leg og socialisering</b><br />
            {/* Hvalpeholdene er koordineret således, at to hold altid har mulighed for at socialisere med hinanden i mellem træningstimerne.
            Derudover er der */}
            Der er afsat tid til <b><font color="#33CCCC">kontrolleret leg</font></b> i selve timen.
          </Text>
          <br />

          <Title text="Skema for kommende holdstart" showHorizontalRuler />
          <Title color="#33CCCC" text="Din investering: 900 kr."/>
          {/* <Text>
            Materialegebyr på 40 kr. betales første mødegang.
          </Text> */}
          <Table>
            <DogCourseSimple />
            <Tbody>
              <Tr>
                <Td>Hvalp E</Td>
                <Td>Søndag</Td>
                <Td>Ude</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>10.00 - 10.45</Td>
                <Td>7. juni</Td>
                <Td>19. juli</Td>
                <Td><font color="#D60E0E">*Venteliste*</font></Td>
              </Tr>
              <Tr>
                <Td>Hvalp F</Td>
                <Td>Mandag</Td>
                <Td>Ude</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>18.30 - 19.15</Td>
                <Td>8. juni</Td>
                <Td>20. juli</Td>
                <Td><font color="#D60E0E">*Venteliste*</font></Td>
              </Tr>
              <Tr>
                <Td>Hvalp G</Td>
                <Td>Søndag</Td>
                <Td>Ude</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>09.00 - 09.45</Td>
                <Td>5. juli</Td>
                <Td>16. august</Td>
                <Td><font color="#D60E0E">1 plads</font></Td>
              </Tr>
              <Tr>
                <Td>Hvalp H</Td>
                <Td>Mandag</Td>
                <Td>Ude</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>17.30 - 18.15</Td>
                <Td>6. juli</Td>
                <Td>17. august</Td>
                <Td><font color="#D60E0E">1 plads</font></Td>
              </Tr>
            </Tbody>
          </Table>
          <br />
          <Text>
            Efter sommerferien:
          </Text>
          <Table>
            <DogCourseTableHead />
            <Tbody>
              <Tr>
                <Td>Hvalp I</Td>
                <Td>Søndag</Td>
                <Td>Ude</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>10.00 - 10.45</Td>
                <Td>26. juli</Td>
                <Td>20. september</Td>
                <Td>Uge 34 + 35</Td>
                <Td><font color="#D60E0E">4 pladser</font></Td>
              </Tr>
              <Tr>
                <Td>Hvalp J</Td>
                <Td>Mandag</Td>
                <Td>Ude</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>18.30 - 19.15</Td>
                <Td>27. juli</Td>
                <Td>21. september</Td>
                <Td>Uge 35 + 36</Td>
                <Td><font color="#D60E0E">3 pladser</font></Td>
              </Tr>
            </Tbody>
          </Table>
          <br />
      
        <Title text="Billeder fra hvalpehold Horsens" showHorizontalRuler />
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
        </Row>


        </Column>
      </Row>
    </Background>
  </Page>
);

export default withRouter(DogPuppy);

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
