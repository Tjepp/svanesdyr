/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import { Table, Tbody, Tr, Td } from 'react-super-responsive-table';
import { withRouter } from 'react-router-dom';
import {
  Page,
  Banner,
  Column,
  MetaDogPuppy,
  Title,
  TitleColor,
  Text,
  BreadCrumps,
  Row,
  TextList,
  Image,
  DogCourseSimple,
  StyledLink,
  FlexedRow,
  TextContainer
} from '../components';
import Responsive from '../components/layout/Responsive';
import DogMenu from '../components/menu/DogMenu';
import { PuppyOne, PuppyTwo, PuppyThree, PuppyFour, PuppyFive, PuppySix, ConsultPupTwo } from '../assets';

const PuppyProgram = [
  'Fornøjelige gåture, uden at trække i snoren',
  'Pauseknappen, så hvalpen kan falde til ro, når du er i ro',
  'Det sikre indkald hvor hvalpen kommer hver gang der kaldes',
  'Positiv miljøtræning, så nye og skræmmende ting kan mødes med selvtillid',  
  'Basisøvelser sit, dæk og kontaktøvelser, som sikrer dig, at DU altid er interessant',
  'Frivillig håndtering, hvor du gør det til en leg at få tjekket tænder, ører, klippet negle m.v.',
  'God impulskontrol så dagligdagens små glæder bliver lettere med en hvalp, der har lært at have ro'
];

const PuppyBenefits = [
  'Gode muligheder for socialisering og leg under kontrollerede forhold',
  'Personlig sparring omkring din hvalp og jeres hverdag sammen',
  'Gode råd og tips til optimal aktivering af hvalpen',
  'Hele 7 ugers træning med ugentligt møde',
  'Max 3 andre holdkammerater, så der er god tid til dig',
  'Skriftlige trin-for-trin guides tilsendt hver uge på mail så du kan øve derhjemme',  
  'Udleveret en klikker til valgfrit brug i træningen'
];

const DogPuppy = () => (
  <Page>
    <MetaDogPuppy />
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
            Al træning foregår med <StyledLink to="/minemetoder"> belønningsbaserede træningsmetoder</StyledLink>, hvor vi bruger klikker eller "dygtig" til at markere korrekt adfærd og belønner hvalpen med mad og leg.
            Hvis din hvalp laver fejl hjælper vi den ved at gøre opgaven nemmere og mere letforståelig. Alle bliver sat op til succes.
          </Text>
          <Text>
            <b>Træningsprogram for holdet</b><br />
            I løbet af vores 7 uger sammen vil vi komme igennem følgende:
          </Text>
          <TextList texts={PuppyProgram} />
          <Text>
            <b>Hvad kan du forvente at få med?</b><br />
            Ved deltagelse på Hvalpeholdet får du:
          </Text>
          <TextList texts={PuppyBenefits} />
          <Text>
            Der er afsat tid til <StyledLink to="/hundehold"> kontrolleret leg</StyledLink> til timerne.
          </Text>
          <br />

          <Title text="Skema for kommende holdstart" showHorizontalRuler />
          <TitleColor text="Din investering: 950 kr."/>

          <Title text="September start:" />
          <Table>
            <DogCourseSimple />
            <Tbody>
              <Tr>
                <Td>Hvalp K</Td>
                <Td>Søndag</Td>
                <Td>8700</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>09.00 - 09.45</Td>
                <Td>6. september</Td>
                <Td>18. oktober</Td>
                <Td><font color="#D60E0E">*Venteliste*</font></Td>
              </Tr>
              <Tr>
                <Td>Hvalp Xtra</Td>
                <Td>Mandag</Td>
                <Td>8700</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>17.30 - 18.15</Td>
                <Td>7. september</Td>
                <Td>19. oktober</Td>
                <Td><font color="#D60E0E">*Venteliste*</font></Td>
              </Tr>
              <Tr>
                <Td>Hvalp L</Td>
                <Td>Tirsdag</Td>
                <Td>8700</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>17.30 - 18.15</Td>
                <Td>8. september</Td>
                <Td>20. oktober</Td>
                <Td><font color="#D60E0E">*Venteliste*</font></Td>
              </Tr>
            </Tbody>
          </Table>

          <Title text="Oktober start:" />
          <Table>
            <DogCourseSimple />
            <Tbody>
              <Tr>
                <Td>Hvalp M</Td>
                <Td>Søndag</Td>
                <Td>8700</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>10.00 - 10.45</Td>
                <Td>4. oktober</Td>
                <Td>15. november</Td>
                <Td><font color="#D60E0E">3 pladser</font></Td>
              </Tr>
              <Tr>
                <Td>Hvalp N</Td>
                <Td>Mandag</Td>
                <Td>8700</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>19.30 - 20.15</Td>
                <Td>12. oktober</Td>
                <Td>23. november</Td>
                <Td><font color="#D60E0E">4 pladser</font></Td>
              </Tr>
              <Tr>
                <Td>Hvalp O</Td>
                <Td>Tirsdag</Td>
                <Td>8700</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>17.30 - 18.15</Td>
                <Td>27. oktober</Td>
                <Td>8. december</Td>
                <Td><font color="#D60E0E">3 pladser</font></Td>
              </Tr>
            </Tbody>
          </Table>

          <Title text="November start:" />
          <Table>
            <DogCourseSimple />
            <Tbody>
              <Tr>
                <Td>Hvalp P</Td>
                <Td>Søndag</Td>
                <Td>8700</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>11.00 - 11.45</Td>
                <Td>1. november</Td>
                <Td>13. december</Td>
                <Td><font color="#D60E0E">4 pladser</font></Td>
              </Tr>
            </Tbody>
          </Table>
          <br />

        <Title text="Dette siger kursisterne efter deltagelse på Hvalpehold" showHorizontalRuler /> 
        <FlexedRow>
          <Image src={ConsultPupTwo} width="200px" height="300px" />
          <TextContainer>
            <TitleColor text=" ”Vores hvalp har lært at slappe af på signal” " />  
            <Text>
                Den største forandring for os var at få større viden omkring ro / søvns vigtighed
                for en hvalp. Det var noget af en aha-oplevelse at lære hvalpens behov for at ”øve”
                sig i ro, da man ellers får et ”damp barn”.
              </Text>
              <Text>
                Vi har set hvor lærenem han er og har lært at bruge et ”slap-af”-tæppe. Han søger i
                dag selv tæppet når han ved det er tid til ro.
              </Text>
              <Text>Freja og Polle</Text>
          </TextContainer>
        </FlexedRow>
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
