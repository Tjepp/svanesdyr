/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import { Table, Tbody, Tr, Td } from 'react-super-responsive-table';
import { withRouter } from 'react-router-dom';
import {
  Page,
  Banner,
  Column,
  MetaDogCool,
  Title,
  TitleColor,
  Text, TextContainer,
  BreadCrumps,
  Row, FlexedRow,
  DogCourseSimple,
  TextList,
  Image,
  StyledLink
} from '../components';
import Responsive from '../components/layout/Responsive';
import DogMenu from '../components/menu/DogMenu';
import { CoolOne, CoolTwo, CoolThree, CoolFour, CoolFive, CoolSix, TestiCoolOne, TestiCoolTwo, TestiCoolThree, TestiCoolFour } from '../assets';

const CoolProgram = [
  'Fornøjelige gåture, uden at trække i snoren',
  'Hilse pænt / ikke hoppe op af mennesker',
  'Positiv indlæring af et stop ord som "nej"',
  'Indlæring af at gå i kurven / falde til ro på signal',
  'Pauseknappen, så hunden kan falde til ro, når du er i ro',
  'Træning af rolige gåture omkring andre hunde og mennesker',
  'God impulskontrol så dagligdagens små glæder bliver lettere med en hund, der har lært at have ro'
];

const CoolBenefits = [
  'Personlig sparring omkring din hund og jeres hverdag sammen',
  'Gode råd og tips til optimal aktivering af hunden',
  'Hele 7 ugers træning med ugentligt møde',
  'Max 3 andre holdkammerater, så der er god tid til dig',
  'Skriftlige trin-for-trin guides tilsendt hver uge på mail så du kan øve derhjemme',  
  'Udleveret en klikker til valgfrit brug i træningen'
];

const ContinuedCoolProgram = [
  'Rolige gåture: Øvelse i at gå væk fra andre hunde',
  'Rolige gåture: Øvelse i fortovspassager med andre hunde',
  'Rolige gåture: Øvelse i stop-op og hilsemøder med andre',
  'Hverdagsgåture med kontakt og ro i nye miljøer',
  'Større udfordring med flere selvkontrols-lege',
  'Sit og dæk bliv-træning'
];

const DogCool = () => (
  <Page>
    <MetaDogCool />
    <Banner text="Hundehold i Horsens">
      <BreadCrumps currentPage="Helt-Cool" />
    </Banner>
    <Background>
    <Row marginTop={"25px"} marginBottom={"45px"}>
        <Column widthPercentage="20%">
          <Title text="Udbud af hundehold" showHorizontalRuler />
          <DogMenu/>
        </Column>
        <Column widthPercentage="75%">
          <Title text="Helt-Cool kursus i Horsens" showHorizontalRuler />
          <Text>
            Ønsker du at få en mere afslappet hverdag, med en hund der selv kan finde ro, som kan gå pænt i snor uden at hive armen af dig og hilse pænt, uden at hoppe op -
            så er du kommet til rette sted!
          </Text>
          <Text>
            Helt-Cool kurset henvender sig til alle hunde i alle aldre, som har tendens til at stresse.
            Mit fokus med dette kursus er at give dig redskaberne til at skabe en afbalanceret og rolig hund, gennem forskellige øvelser,
            der også vil styrke jeres fælles samarbejde.
          </Text>
          <Text>
            Al træning foregår med <StyledLink to="/minemetoder"> belønningsbaserede træningsmetoder</StyledLink>, hvor vi bruger klikker eller "dygtig" til at markere korrekt adfærd og belønner hunden med mad og leg.
            Hvis din hund laver fejl hjælper vi den ved at gøre opgaven nemmere og mere letforståelig. Alle bliver sat op til succes.
          </Text>
          <Text>
            <b>Passer kurset til din hund?</b><br />
            Føler du din hund er lidt af et "damp"-barn eller bliver ustyrligt glad ved mødet med andre, så er dette hold det rette for jer!
            Kurset henvender sig <b>ikke</b> til hunde der er bange for andre hunde eller reagerer aggressivt ved synet af andre.
            Står du med denne problemstilling anbefaler jeg at
            <StyledLink to="/kontakt"> booke tid </StyledLink>
            til en
            <StyledLink to="/hundetraening"> konsultation</StyledLink>,
            hvor du kan få personlig vejledning og redskaber til at hjælpe din hund.
            Eller tjek om <StyledLink to="/hundehold/venligvovse"> Venlig-Vovse </StyledLink> holdet er noget for jer.
          </Text>
          <Text>
            <StyledLink to="/kontakt"> Kontakt mig </StyledLink> endelig hvis du er i tvivl.
          </Text>
          <Text>
            <b>Træningsprogram for holdet</b><br />
            I løbet af vores 7 uger sammen vil vi komme igennem følgende:
          </Text>
          <TextList texts={CoolProgram} />
          <Text>
            <b>Hvad kan du forvente at få med?</b><br />
            Ved deltagelse på Helt-Cool kurset får du:
          </Text>
          <TextList texts={CoolBenefits} />
          <Text>
            Der tages hensyn til sensitive hunde og praktiseres god afstand før, under og efter timerne.
            Til de legeglade hunde er der mulighed for lidt <StyledLink to="/hundehold"> kontrolleret leg</StyledLink> efter timen.
          </Text>
          <br />

          <Title text="Skema for kommende holdstart" showHorizontalRuler />
          <TitleColor text="Din investering: 950 kr."/>
          <Table>
            <DogCourseSimple />
            <Tbody>
              <Tr>
                <Td>Cool G</Td>
                <Td>Tirsdag</Td>
                <Td>8700</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>19.30 - 20.15</Td>
                <Td>27. oktober</Td>
                <Td>8. december</Td>
                <Td><font color="#D60E0E">*Venteliste*</font></Td>
              </Tr>
            </Tbody>
          </Table>

          <Title text="November start:" />
          <Table>
            <DogCourseSimple />
            <Tbody>
              <Tr>
                <Td>Cool H</Td>
                <Td>Søndag</Td>
                <Td>8700</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>12.15 - 13.00</Td>
                <Td>1. november</Td>
                <Td>13. december</Td>
                <Td><font color="#D60E0E">*Venteliste*</font></Td>
              </Tr>
            </Tbody>
          </Table>
          <br />

          <Title text="Dette siger kursisterne efter deltagelse på Helt-Cool" showHorizontalRuler /> 
          <FlexedRow>
            <Image src={TestiCoolOne} width="200px" height="300px" />
            <TextContainer>
              <TitleColor text=" ”Vi var bekymret for om vores hund kunne lærer det vi ønskede, men vi blev overrasket” " />  
              <Text>
                Det mest fantastiske ved at deltage på helt cool har været den effektive hjælp til håndtering af problematikker.
                Vi har fået roligere gåture, en rolig hund ved gæster i hjemmet og en bedre relation til hunden. 
              </Text>
              <Text>
                Det har været helt fantastisk at deltage og vi glæder os til at forsætte på nyt hold.
              </Text>
              <Text>
                Sarah og Kasper (Molly)
              </Text>
            </TextContainer>
          </FlexedRow>
          <br />
          
          <FlexedRow>
            <Image src={TestiCoolThree} width="200px" height="300px" />
            <TextContainer>
              <TitleColor text=" ”Jeg var lidt imod at vi skulle bruge klikker. Men for pokker hvor det virker!” " />  
              <Text>
                Jeg er blevet mere sikker og tydelig når jeg går tur og møder andre hunde,
                jeg har fået nogle gode redskaber til at holde Kenzos opmærksomhed på mig.
                Det var en overraskelse hvor stor effekt klikkeren har.
                Jeg har fået øjnene op for hvor meget min hund faktisk elsker at arbejde og træne med mig.
              </Text>
              <Text>
                Alle der har en glad, social hund, som mener den skal snakke med alle, synes jeg skal tage kurset.
                Da Sabrina er god til at formidle enkelte øvelser, som rent faktisk virker. Og som de fleste kan være med på. 
              </Text>
              <Text>
                Jeanette Schouborg og Kenzo
              </Text>
            </TextContainer>
          </FlexedRow>
          <br />

          <FlexedRow>
            <Image src={TestiCoolTwo} width="200px" height="300px" />
            <TextContainer>
              <TitleColor text=" ”Vi fik øjnene op for at selv angste hunde godt kan med andre” " />
              <Text>
                Inden start var jeg bekymret for at passe ind.
                Da jeg har angst selv, var det en stor fordel at blive bekræftiget i at det jeg gør er rigtigt.
                Og at se uanset str på hunden så rammer stort set alle ejere samme problematikker.
              </Text>
              <Text>
                Der er sket meget udviklingsmæssigt med vores lille bandit, den største forandring er bedre samværd mellem os og andre.
                Vi har nydt at komme til træning og prøve noget nyt.
              </Text>
              <Text>
                Jette Nancke og Dion
              </Text>
            </TextContainer>
          </FlexedRow>
          <br />

          <FlexedRow>
            <Image src={TestiCoolFour} width="200px" height="300px" />
            <TextContainer>
              <TitleColor text=" ”Vi frygtede vi ikke ville lære noget nyt, men vi tog fejl ” " />  
              <Text>
                Vi vidste ikke om det passede til vores hund da han ikke var decideret overgearet/glad og stresset.
                Men vi har lært hvordan han motiveres på gåture, hvordan vi undgår overstimulering (og klappen går ned) 
                og ikke mindst hvordan vi møder fremmede mere hensigtsmæssigt.
              </Text>
              <Text>
                Da vi prøvede Sidde eller gå-legen gik det op for mig at min hund holder bedre kontakt når der er fart over feltet end at vi sidder og kigger.
                Harry kan bedre lige når vi løber/leger/larmer. 
              </Text>
              <Text>
                Jeg ved nu hvordan jeg kan gøre gåturen bedre for alle fordi jeg kender min hund bedre, og dét er en stor forandring.
              </Text>
              <Text>
                - HarryBerryyy!
              </Text>
            </TextContainer>
          </FlexedRow>
          <br />

          <Title text="Fortsat Helt-Cool" showHorizontalRuler />
          <Text>
            Ved efterspørgsel udbydes der fortsætterhold for kursister, som har deltaget på tidligere cool-hold.<br />
            Programmets primære fokus er at give din hund det sorte bælte i god impulskontrol! Hvor de rolige gåture praktiseres i stor stil.
          </Text>
          <Text>
            <b>Træningsprogram for Fortsat-holdet</b>
          </Text>
          <TextList texts={ContinuedCoolProgram} />
          <Table>
            <DogCourseSimple />
            <Tbody>
              <Tr>
                <Td>Fortsat Cool C</Td>
                <Td>Tirsdag</Td>
                <Td>8700</Td>
                <Td><StyledLink to="/kontakt">Kontakt mig</StyledLink></Td>
                <Td>18.30 - 19.15</Td>
                <Td>3. november</Td>
                <Td>12. december</Td>
                <Td><font color="#D60E0E">1 plads</font></Td>
              </Tr>
            </Tbody>
          </Table>
          <br />

          <Title text="Stemningsbilleder fra Helt-Cool kursus" showHorizontalRuler />
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
          </Row>


        </Column>
      </Row>
    </Background>
  </Page>
);

export default withRouter(DogCool);

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
