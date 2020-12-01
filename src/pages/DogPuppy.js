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
import { PuppyOne, PuppyTwo, PuppyThree, PuppyFour, PuppyFive, PuppySix, TestiPupOne, TestiPupTwo, TestiPupThree } from '../assets';

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
          <TitleColor text="Din investering: 995 kr."/>
          <Text>i at få en rolig, imødekommende og selvsikker familiehund, der elsker at træne sammen med dig!</Text>
          <br /><Text italic>
            Bemærk betaling er bindende og beløb refunderes ikke.
          </Text>

          <Title text="Januar start" />
          <Table>
            <DogCourseSimple />
            <Tbody>
            <Tr>
                <Td>Hvalp A</Td>
                <Td>Mandag</Td>
                <Td>8700</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>16.30 - 17.15</Td>
                <Td>11. jan</Td>
                <Td>22. feb</Td>
                <Td><font color="#D60E0E">2 pladser</font></Td>
              </Tr>
              <Tr>
                <Td>Hvalp B</Td>
                <Td>Tirsdag</Td>
                <Td>8700</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>10.00 - 10.45</Td>
                <Td>19. jan</Td>
                <Td>2. marts</Td>
                <Td><font color="#D60E0E">2 pladser</font></Td>
              </Tr>
              <Tr>
                <Td>Hvalp C</Td>
                <Td>Søndag</Td>
                <Td>8700</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>10.00 - 10.45</Td>
                <Td>31. jan</Td>
                <Td>14. marts</Td>
                <Td><font color="#D60E0E">3 pladser</font></Td>
              </Tr>
            </Tbody>
          </Table>

          <Title text="Februar start:" />
          <Table>
            <DogCourseSimple />
            <Tbody>
              <Tr>
                <Td>Hvalp D</Td>
                <Td>Mandag</Td>
                <Td>8700</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>18.30 - 19.15</Td>
                <Td>1. feb</Td>
                <Td>15. marts</Td>
                <Td><font color="#D60E0E">3 pladser</font></Td>
              </Tr>
            </Tbody>
          </Table>
          
          {/* <br /><TitleColor text="2021 hold er under planlægning."/> */}
          <br />

        <Title text="Dette siger kursisterne efter deltagelse på Hvalpehold" showHorizontalRuler /> 
        <FlexedRow>
          <Image src={TestiPupOne} width="200px" height="300px" />
          <TextContainer>
            <TitleColor text=" ”Vi har fået virkelig gode øvelser som vi kan bruge i hverdagen” " />  
              <Text>
                Vi vil anbefale alle der skal have hvalp at deltage på Sabrinas hold, ikke bare for at lærer øvelserne
                men at prøve at arbejde sammen med sin hund er en super følelse! 
              </Text>
              <Text>
                Vi har fået bedre indsigt i hvordan en hund lærer så man kan bruge det på de udfordringer man har.
                Vi blev overrasket over hvor mange trin der skal til for at opbygge en øvelse og hvor mange godbidder der skal bruges, 
                men vi har fået en hund som gerne vil lytte og lære, et godt samarbejde med ham og værktøjerer til at arbejde videre selv.
              </Text>
              <Text>
                Det har været en mega god oplevelse!
              </Text>
              <Text>Ellen, Thomas og Njord</Text>
          </TextContainer>
        </FlexedRow>
        <br />
        <FlexedRow>
          <Image src={TestiPupTwo} width="200px" height="300px" />
          <TextContainer>
            <TitleColor text=" ”Det mest fantastiske var at der var tid til leg med andre hvalpe” " />  
              <Text>
                Det bedste ved hvalpeholdet er at der ikke var mange på holdet og tid og guidning i leg med andre hvalpe. 
              </Text>
              <Text>
                Jeg har fået bevidsthed om mit eget kropssprog i forhold til hunden og ikke mindst viden om hundenes indbyrdes sprog.
                Jeg vil anbefale alle der kunne have brug for træning at deltage på hvalpeholdet.
                Vi blev selv anbefalet Sabrina fremfor andre.
              </Text>
              <Text>Rikke og Santa’s</Text>
          </TextContainer>
        </FlexedRow>
        <br />
        <FlexedRow>
          <Image src={TestiPupThree} width="200px" height="300px" />
          <TextContainer>
            <TitleColor text=" ”Det har været den bedste investering i samarbejdet med vores hund ” " />  
              <Text>
                Den største forandring er sket i samarbejdet med min hvalp.
                Jeg har mere kontakt med min hund og har fået super gode forslag til mental stimulering og tips til motivation og belønning af ham.
              </Text>
              <Text>
                Jeg har fået en ny måde at læse vores hund på, og det mest fantastiske var at min søn med autisme har kunnet deltage.
                Sabrina er vildt dygtig og kommer rundt til alle på holdet.
              </Text>
              <Text>
                Jeg vil anbefale ALLE med en hvalp at deltage.
              </Text>
              <Text>Anja, Silas og Ozzy</Text>
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
