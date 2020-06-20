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
  // Image,
  StyledLink
} from '../components';
import Responsive from '../components/layout/Responsive';
import DogMenu from '../components/menu/DogMenu';
// import { CoolOne, CoolTwo, CoolThree, CoolFour, CoolFive, CoolSix } from '../assets';

const DogCoolFriend = () => (
  <Page>
    <Meta />
    <Banner text="Hundehold i Horsens">
      <BreadCrumps currentPage="Venlig-Vovse" />
    </Banner>
    <Background>
    <Row marginTop={"25px"} marginBottom={"45px"}>
        <Column widthPercentage="20%">
          <Title text="Udbud af hundehold" showHorizontalRuler />
          <DogMenu/>
        </Column>
        <Column widthPercentage="75%">
          <Title text="Venlig-Vovse hold i Horsens" showHorizontalRuler />
          <Text>
            Ønsker du at få flere afslappede gåture, hvor din hund kan passere andre hunde uden at reagerer aggressivt eller ængsteligt, så er dette hold det rette for jer!
          </Text>
          <Text>
            Venlig-Vovse holdet henvender sig til alle hunde i alle aldre, som reagerer på andre hunde ved at gø, trække fremad eller vil flygte ved synet af dem.
            Mit fokus med dette kursus er at hjælpe din hund med at få flere positive oplevelser i nærheden af andre, så frygten for mødet med andre hunde forsvinder.
            Du vil få redskaberne til at håndtere hverdagens gåture, så i fremadrettet kan nyde turene i stedet for at stresse over dem.
          </Text>
          <Text>
            Al træning foregår med <b><font color="#33CCCC">belønningsbaserede metoder</font></b>, hvor vi bruger klikker eller "dygtig" til at markere korrekt adfærd og belønner hunden med mad og leg.
            Der tages hensyn til den enkelte hunds personlighed og tolerancetærskel.
            Målet er at ingen af hundene skal føle sig nødsaget til at reagere, men derimod finder ud af at andre hundes tilstedeværelse er positivt.
          </Text>
          <Text>
            <b>Passer kurset til din hund?</b><br />
            Kurset henvender sig til hunde der er bange for andre hunde eller reagerer aggressivt ved synet af andre.<br />
            Føler du din hund er lidt af et "damp"-barn eller blot bliver ustyrligt glad ved mødet med andre, så er dette hold <b>ikke</b> det rette for jer.
            Da anbefaler jeg i stedet <StyledLink to="/hundehold/coolhold"> Helt-Cool kurset</StyledLink>.
          </Text>
          <Text>
            Står du med en generelt stresset hund, som udover at reagerer negativt på andre hunde også har andre problemstillinger, anbefaler jeg at
            <StyledLink to="/kontakt"> booke tid </StyledLink>
            til en
            <StyledLink to="/hundetraening"> konsultation</StyledLink>,
            hvor du kan få personlig vejledning og redskaber til at hjælpe din hund.
            Venlig-Vovse holdet har nemlig kun fokus på én ting, hvor du til en konsultation kan få hjælp til alt det du ønsker.
            Hvis du er i tvivl, så <StyledLink to="/kontakt"> kontakt mig </StyledLink> endelig.
          </Text>
          <Text>
            <b>Kursets forløb</b><br />
            Kurset varer 6 uger, hvor vi mødes én gang ugentligt.<br />
            Første gang vi mødes er der afsat 60 min., for at jeg kan få et godt indtryk af den enkelte hund.
            Derefter mødes vi 45 min. pr. gang over de sidste 5 lektioner.
            I vil være <b><font color="#33CCCC">max 3 hunde</font></b> på holdet, hvor hundene vil være ude én ad gangen til at starte med.
            Derfor er det vigtigt, at din hund kan sidde trygt i bilen og vente på sin tur.
          </Text>
          <br />

          <Title text="Skema for kommende holdstart" showHorizontalRuler />
          <Title color="#33CCCC" text="Din investering: 950 kr."/>
          <Text>
            Nye hold planlægges til september.
          </Text>
          {/* <Table>
            <DogCourseSimple />
            <Tbody>
              <Tr>
                <Td>Venlig-Vovse A</Td>
                <Td>Søndag</Td>
                <Td>8700</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>11.15 - 12.00</Td>
                <Td>5. juli</Td>
                <Td>9. august</Td>
                <Td><font color="#D60E0E">2 pladser</font></Td>
              </Tr>
            </Tbody>
          </Table> */}
          <br />

        {/* <Title text="Billeder fra Helt-Cool kursus" showHorizontalRuler />
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
        </Row> */}


        </Column>
      </Row>
    </Background>
  </Page>
);

export default withRouter(DogCoolFriend);

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
