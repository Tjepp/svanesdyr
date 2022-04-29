import React from 'react';
import styled from 'styled-components';
import { Table, Tbody, Tr, Td } from 'react-super-responsive-table';

import {
  LandingpageOnline,
  Column,
  TitleCenter,
  Text,
  TextCenter,
  TextContainer,
  Image,
  Row,
  FlexedRow,
  TextListMark,
  LPHeadlineWalk,
  DogCourseSummer,
  MetaDogSummer,
  ButtonOnline,
  ContactPopUp,
} from '../components';
import Responsive from '../components/layout/Responsive';
import {
  OnlineCoverSummer,
  PuppyContinuedFive,
  RecallOne,
  TricksOne,
  CoolThree,
  NailClipSix,
  CoolAgainOne,
  PuppyContinuedOne,
  TricksTwo,
} from '../assets';
import '../components/table/TableCss.css';

const Spotliste = [
  'Hvert kursus varer op til 90 minutter',
  'Det inkluderer 60 minutters undervisning og derefter 30 minutters hygge, snak og socialisering',
  'Der serveres både lunt og koldt at drikke, som kakao, kaffe, te og juice som er med i prisen',
  'Kurserne er for alle hunde i alle aldre',
];

const DogSummer = () => (
  <LandingpageOnline>
    <MetaDogSummer />
    <Background>
      <Row>
        <Column widthPercentage="100%">
          <Image src={OnlineCoverSummer} />
          <br />
          <TitleCenter text="Til dig der ønsker at tilbringe sommerdagene sammen med din dejlige snude" />
          <TextCenter>
            Kom med og brug nogle af de solrige sommerdage i godt selskab med andre snuder. Tag både
            din bedre halvdel og børnene med til en hyggelig stund - alle er velkomne!
          </TextCenter>
          <TextCenter>Fælles for alle sommerens kurser er:</TextCenter>
          <TextListMark texts={Spotliste} />
          <TextCenter>
            Alle sommerens kurser foregår på træningspladsen Sorthøjvej 40, 8700 Horsens.
            <br />
            Alle kurserne tilbydes af Dyreadfærdskonsulent Sabrina Svane.
          </TextCenter>
          <br />
          <TitleCenter text="Ønsker du at tilmelde dig flere sommerkurser på én gang?" />
          <TextCenter>
            Finder du flere end 3 forskellige kurser i kataloget spændende?
            <br />
            Slip for at tilmelde dig hvert kursus én ad gangen, og book alle de hold du ønsker at
            deltage på ved at sende en mail direkte til Sabrina:
          </TextCenter>
          <ContactPopUp text="TILMELDING til flere sommerkurser på én gang" />
        </Column>
      </Row>
      <br />
      <br />

      <Row>
        <Column widthPercentage="100%">
          <LPHeadlineWalk text="Udbud af sommerkurser" />
        </Column>
      </Row>

      {/* LEGESTUE */}
      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Legestue opdelt efter størrelse" />
          <FlexedRow>
            <Image src={PuppyContinuedFive} width="300px" height="200px" />
            <TextContainer>
              <Text>
                <b>God socialisering under kontrollerede forhold!</b>
                <br />
                Alle får en god oplevelse med hjem, da der tages hensyn til den enkelte hund. Oftest
                startes legen ud med at to hunde lukkes sammen ad gangen, så de kan få lov til at se
                hinanden an. Det gør det nemt at afbryde legen, hvis det bliver for meget for den
                ene hund, eller de har brug for en pause.
                <br />
                Din hund har sin egen personlighed og sin egen præference for leg. Nogle kan godt
                lide at løbe og jage, andre elsker at bryde og være vild. Derfor sættes legetimen
                op, så vi kan se hvilke hunde der passer bedst sammen i legestil.
              </Text>
              <Text>
                <b>Deltagelse pr. snude: 150,- kr.</b>
                <br />
                uanset antal tobenede der er med
              </Text>
              <Text>Max 8 snuder pr. hold.</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Text>Små racers legestuer:</Text>
          <Table>
            <DogCourseSummer />
            <Tbody>
              <Tr>
                <Td>Små racer 1</Td>
                <Td>28</Td>
                <Td>Lørdag</Td>
                <Td>16. juli</Td>
                <Td>09.30 - 11.00</Td>
              </Tr>
              <Tr>
                <Td>Små racer 2</Td>
                <Td>29</Td>
                <Td>Tirsdag</Td>
                <Td>19. juli</Td>
                <Td>17.00 - 18.30</Td>
              </Tr>
              <Tr>
                <Td>Små racer 3</Td>
                <Td>29</Td>
                <Td>Søndag</Td>
                <Td>24. juli</Td>
                <Td>11.00 - 12.30</Td>
              </Tr>
              <Tr>
                <Td>Små racer 4</Td>
                <Td>30</Td>
                <Td>Onsdag</Td>
                <Td>27. juli</Td>
                <Td>18.30 - 20.00</Td>
              </Tr>
            </Tbody>
          </Table>
          <Text>Store racers legestuer:</Text>
          <Table>
            <DogCourseSummer />
            <Tbody>
              <Tr>
                <Td>Store racer 1</Td>
                <Td>28</Td>
                <Td>Lørdag</Td>
                <Td>16. juli</Td>
                <Td>11.00 - 12.30</Td>
              </Tr>
              <Tr>
                <Td>Store racer 2</Td>
                <Td>29</Td>
                <Td>Tirsdag</Td>
                <Td>19. juli</Td>
                <Td>18.30 - 20.00</Td>
              </Tr>
              <Tr>
                <Td>Store racer 3</Td>
                <Td>29</Td>
                <Td>Søndag</Td>
                <Td>24. juli</Td>
                <Td>09.30 - 11.00</Td>
              </Tr>
              <Tr>
                <Td>Store racer 4</Td>
                <Td>30</Td>
                <Td>Onsdag</Td>
                <Td>27. juli</Td>
                <Td>17.00 - 18.30</Td>
              </Tr>
            </Tbody>
          </Table>
          <ButtonOnline
            text="Klik her for tilmelding til Legestue"
            onClick={() => window.open('https://ezme.io/c/x1S/kRDy', '_blank')}
          ></ButtonOnline>
        </Column>
      </Row>

      {/* INDKALD */}
      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Indkald begynder og øvet" />
          <FlexedRow>
            <Image src={RecallOne} width="300px" height="200px" />
            <TextContainer>
              <Text>
                <b>Indkald Basis</b>
                <br />
                Basisholdet henvender sig til alle hunde i alle aldre, der har brug for et sikkert
                indkald. Du vil lære at skabe stor motivation i din hund ved at bruge effektive
                belønningsteknikker, så din hund får en høj forventning til dit fantastiske indkald.
                Vi vil gennemgå lette og sjove lege, som får din hund til at synes at indkald er en
                FEST.
              </Text>
              <Text>
                <b>Indkald Øvet</b>
                <br />
                Føler du din hund kommer 9/10 gange? Men nogle gange ignorerer dig når du kalder? På
                øvet gennemgår vi forskellige forstyrrelseslege, som lærer din hund, at selvom der
                er spændende ting at give sig til, så er det stadig FEDT at komme når du kalder!
              </Text>
              <Text>
                <b>Deltagelse pr. snude: 195,- kr.</b>
                <br />
                uanset antal tobenede der er med
              </Text>
              <Text>Max 5 snuder pr. hold.</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Table>
            <DogCourseSummer />
            <Tbody>
              <Tr>
                <Td>Basis 1</Td>
                <Td>28</Td>
                <Td>Søndag</Td>
                <Td>17. juli</Td>
                <Td>09.30 - 11.00</Td>
              </Tr>
              <Tr>
                <Td>Øvet 1</Td>
                <Td>28</Td>
                <Td>Søndag</Td>
                <Td>17. juli</Td>
                <Td>11.00 - 12.30</Td>
              </Tr>
              <Tr>
                <Td>Basis 2</Td>
                <Td>29</Td>
                <Td>Tirsdag</Td>
                <Td>19. juli</Td>
                <Td>10.00 - 11.30</Td>
              </Tr>
              <Tr>
                <Td>Øvet 2</Td>
                <Td>29</Td>
                <Td>Tirsdag</Td>
                <Td>19. juli</Td>
                <Td>11.30 - 13.00</Td>
              </Tr>
              <Tr>
                <Td>Basis 3</Td>
                <Td>30</Td>
                <Td>Mandag</Td>
                <Td>25. juli</Td>
                <Td>17.00 - 18.30</Td>
              </Tr>
              <Tr>
                <Td>Øvet 3</Td>
                <Td>30</Td>
                <Td>Mandag</Td>
                <Td>25. juli</Td>
                <Td>18.30 - 20.00</Td>
              </Tr>
            </Tbody>
          </Table>
          <ButtonOnline
            text="Klik her for tilmelding til Indkald"
            onClick={() => window.open('https://ezme.io/c/x1S/kRGX', '_blank')}
          ></ButtonOnline>
        </Column>
      </Row>

      {/* FITNESS */}
      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Fitness for alle" />
          <FlexedRow>
            <Image src={TricksOne} width="300px" height="200px" />
            <TextContainer>
              <Text>
                <b>Fokus på god kropskontrol og kropsbevidsthed</b>
                <br />
                Til dig der ønsker at styrke din hunds bevidsthed om sin egen krop! Vi vil gennemgå
                øvelser der fokuserer på kontrol af alle fire poter, forparts- og bagpartskontrol og
                styrke- / balanceopgaver.
              </Text>
              <Text>
                Holdet henvender sig især også til dig der ønsker nye måder at trætte hunden på
                mentalt, gennem små, sjove opgaver, som styrker jeres samarbejde og ikke mindst
                hundens selvtillid. Alle hunde i alle aldre kan deltage.
              </Text>
              <Text>
                <b>Deltagelse pr. snude: 195,- kr.</b>
                <br />
                uanset antal tobenede der er med
              </Text>
              <Text>Max 5 snuder pr. hold.</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Table>
            <DogCourseSummer />
            <Tbody>
              <Tr>
                <Td>Fitness 1</Td>
                <Td>29</Td>
                <Td>Onsdag</Td>
                <Td>20. juli</Td>
                <Td>17.00 - 18.30</Td>
              </Tr>
              <Tr>
                <Td>Fitness 2</Td>
                <Td>29</Td>
                <Td>Lørdag</Td>
                <Td>23. juli</Td>
                <Td>09.30 - 11.00</Td>
              </Tr>
              <Tr>
                <Td>Fitness 3</Td>
                <Td>30</Td>
                <Td>Tirsdag</Td>
                <Td>26. juli</Td>
                <Td>18.30 - 20.00</Td>
              </Tr>
            </Tbody>
          </Table>
          <ButtonOnline
            text="Klik her for tilmelding til Fitness for Alle"
            onClick={() => window.open('https://ezme.io/c/x1S/kRGr', '_blank')}
          ></ButtonOnline>
        </Column>
      </Row>

      {/* GÅTURE */}
      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Rolige gåture" />
          <FlexedRow>
            <Image src={CoolThree} width="300px" height="200px" />
            <TextContainer>
              <Text>
                <b>Med fokus på gå-pænt-teknikker og selvkontrol</b>
                <br />
                Til dig der ønsker at få mere afslappede gåture, med en hund der kan finde ro og gå
                pænt i snor uden at hive armen af dig. Holdet henvender sig til alle hunde i alle
                aldre, som har tendens til at stresse op på en gåtur. Du får redskaberne til at
                skabe en kontaktsøgende og rolig hund, gennem forskellige øvelser, der også vil
                styrke jeres fælles samarbejde.
              </Text>
              <Text>
                <b>Deltagelse pr. snude: 195,- kr.</b>
                <br />
                uanset antal tobenede der er med
              </Text>
              <Text>Max 5 snuder pr. hold.</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Table>
            <DogCourseSummer />
            <Tbody>
              <Tr>
                <Td>Gåtur 1</Td>
                <Td>28</Td>
                <Td>Lørdag</Td>
                <Td>16. juli</Td>
                <Td>12.30 - 14.00</Td>
              </Tr>
              <Tr>
                <Td>Gåtur 2</Td>
                <Td>29</Td>
                <Td>Lørdag</Td>
                <Td>23. juli</Td>
                <Td>11.00 - 12.30</Td>
              </Tr>
              <Tr>
                <Td>Gåtur 3</Td>
                <Td>30</Td>
                <Td>Tirsdag</Td>
                <Td>26. juli</Td>
                <Td>17.00 - 18.30</Td>
              </Tr>
            </Tbody>
          </Table>
          <ButtonOnline
            text="Klik her for tilmelding til Rolige Gåture"
            onClick={() => window.open('https://ezme.io/c/x1S/kRGx', '_blank')}
          ></ButtonOnline>
        </Column>
      </Row>

      {/* HÅNDTERING */}
      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Introduktion til frivillig håndtering" />
          <FlexedRow>
            <Image src={NailClipSix} width="300px" height="200px" />
            <TextContainer>
              <Text>
                <b>Få samtykke til den daglige pleje</b>
                <br />
                Du får redskaberne til hvordan du træner frivillig adfærd i hunden, som skal være
                startsignalet til hvornår håndtering kan begynde. Din hund lærer altså at sige ”jeg
                er klar” og ”pause, tak” under håndtering, og du lærer at aflæse hvornår din hund er
                tryg og utryg. Vi gennemgår Chirag Patels The Bucket Game og hvordan du indlære
                start/slut signaler.
              </Text>
              <Text>
                <b>Deltagelse pr. snude: 195,- kr.</b>
                <br />
                uanset antal tobenede der er med
              </Text>
              <Text>Max 5 snuder pr. hold.</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Table>
            <DogCourseSummer />
            <Tbody>
              <Tr>
                <Td>Håndtering 1</Td>
                <Td>28</Td>
                <Td>Søndag</Td>
                <Td>17. juli</Td>
                <Td>12.30 - 14.00</Td>
              </Tr>
              <Tr>
                <Td>Håndtering 2</Td>
                <Td>29</Td>
                <Td>Onsdag</Td>
                <Td>20. juli</Td>
                <Td>18.30 - 20.00</Td>
              </Tr>
              <Tr>
                <Td>Håndtering 3</Td>
                <Td>30</Td>
                <Td>Torsdag</Td>
                <Td>28. juli</Td>
                <Td>17.00 - 18.30</Td>
              </Tr>
            </Tbody>
          </Table>
          <ButtonOnline
            text="Klik her for tilmelding til Frivillig Håndtering intro"
            onClick={() => window.open('https://ezme.io/c/x1S/kRGe', '_blank')}
          ></ButtonOnline>
        </Column>
      </Row>

      {/* BLIV */}
      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Bliv!" />
          <FlexedRow>
            <Image src={PuppyContinuedOne} width="300px" height="200px" />
            <TextContainer>
              <Text>
                <b>Bliv i sit og dæk SELV med forstyrrelser</b>
                <br />
                Ønsker du at få en stensikker placering fra din hund, når du beder den om at sætte
                sig eller lægge sig? Måske har du en drøm om at kunne få den til at blive liggende i
                sin kurv, selvom der er gæster på besøg? Dette kursus giver dig redskaberne til at
                få fjederen ud af hundens ben og en god bliv, uanset om du beder om sit eller dæk.
                Vi kigger på konceptet selv med forstyrrelser i brug!
              </Text>
              <Text>
                <b>Deltagelse pr. snude: 195,- kr.</b>
                <br />
                uanset antal tobenede der er med
              </Text>
              <Text>Max 5 snuder pr. hold.</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Table>
            <DogCourseSummer />
            <Tbody>
              <Tr>
                <Td>Bliv 1</Td>
                <Td>29</Td>
                <Td>Torsdag</Td>
                <Td>21. juli</Td>
                <Td>10.00 - 11.30</Td>
              </Tr>
              <Tr>
                <Td>Bliv 2</Td>
                <Td>29</Td>
                <Td>Lørdag</Td>
                <Td>23. juli</Td>
                <Td>12.30 - 14.00</Td>
              </Tr>
            </Tbody>
          </Table>
          <ButtonOnline
            text="Klik her for tilmelding til Bliv!"
            onClick={() => window.open('https://ezme.io/c/x1S/kRGz', '_blank')}
          ></ButtonOnline>
        </Column>
      </Row>

      {/* TRICKS */}
      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Tricks og Sjov!" />
          <FlexedRow>
            <Image src={TricksTwo} width="300px" height="200px" />
            <TextContainer>
              <Text>
                <b>Det perfekte kursus til barn og hund sammen</b>
                <br />
                Og ikke mindst til dig, som nyder at lære nyt med din hund. Tricks og Sjov lægger
                vægt på Empowerment principperne, hvor hunden selv skal tage <u>initiativ</u> til
                adfærd, være <u>kreativ</u> og have nok <u>gåpåmod</u> til at fortsætte.
              </Text>
              <Text>
                Vi gennemgår flere tricks og øvelser, som giver succes, samarbejdsglæde og ikke
                mindst et smil på læben til dig der holder snoren. Du vil blandt andet lære hvordan
                du lærer din hund Zig-zag mellem ben, kravle og snurre-rundt.
              </Text>
              <Text>
                <b>Deltagelse pr. snude: 195,- kr.</b>
                <br />
                uanset antal tobenede der er med
              </Text>
              <Text>Max 5 snuder pr. hold.</Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Table>
            <DogCourseSummer />
            <Tbody>
              <Tr>
                <Td>Tricks 1</Td>
                <Td>29</Td>
                <Td>Torsdag</Td>
                <Td>21. juli</Td>
                <Td>11.30 - 13.00</Td>
              </Tr>
              <Tr>
                <Td>Tricks 2</Td>
                <Td>29</Td>
                <Td>Søndag</Td>
                <Td>24. juli</Td>
                <Td>12.30 - 14.00</Td>
              </Tr>
              <Tr>
                <Td>Tricks 3</Td>
                <Td>30</Td>
                <Td>Torsdag</Td>
                <Td>28. juli</Td>
                <Td>18.30 - 20.00</Td>
              </Tr>
            </Tbody>
          </Table>
          <ButtonOnline
            text="Klik her for tilmelding til Tricks og Sjov!"
            onClick={() => window.open('https://ezme.io/c/x1S/kRGk', '_blank')}
          ></ButtonOnline>
        </Column>
      </Row>
      <br />
      <br />
      <Row>
        <Column widthPercentage="100%">
          <LPHeadlineWalk text="Miljømøder" />
        </Column>
      </Row>

      {/* MILJØ */}
      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Miljø træning for alle aldre" />
          <FlexedRow>
            <Image src={CoolAgainOne} width="300px" height="200px" />
            <TextContainer>
              <Text>
                <b>Få kyndig vejledning i at lære din hund at lystre i nye miljøer</b>
                <br />
                Miljøholdet fokuserer på at indlære kontakt og ro, selv i nye miljøer. Du vil få
                vejledning i at øve selvkontrol, kontaktlege og gå pænt nær andre hunde og
                forskellige forstyrrelser, som områderne byder på. Vi kan møde alt fra fremmede
                hunde, voksne, børn, cyklister, jogger mv.
              </Text>
              <Text>
                <b>Deltagelse pr. snude: 150,- kr.</b>
                <br />
                Miljømøderne varer op til 60 minutter og alle aldre kan deltage, hvalpe, som voksne
                snuder. Max 5 snuder pr. hold.
              </Text>
              <Text>
                Træningen foregår på én af følgende lokationer i Horsens:
                <br />
                <i>Bygholm Park</i>, 8700 Horsens med gratis parkering ved siden af Scandic Hotel
                <br />
                <i>Lunden</i>, 8700 Horsens med gratis parkering ved siden af Horsens Kunstmuseum
              </Text>
            </TextContainer>
          </FlexedRow>
          <br />
          <Table>
            <DogCourseSummer />
            <Tbody>
              <Tr>
                <Td>Miljø Lunden 1</Td>
                <Td>29</Td>
                <Td>Mandag</Td>
                <Td>18. juli</Td>
                <Td>17.00 - 18.00</Td>
              </Tr>
              <Tr>
                <Td>Miljø Bygholm 1</Td>
                <Td>29</Td>
                <Td>Mandag</Td>
                <Td>18. juli</Td>
                <Td>18.30 - 19.30</Td>
              </Tr>
              <Tr>
                <Td>Miljø Lunden 2</Td>
                <Td>29</Td>
                <Td>Torsdag</Td>
                <Td>21. juli</Td>
                <Td>17.00 - 18.00</Td>
              </Tr>
              <Tr>
                <Td>Miljø Bygholm 2</Td>
                <Td>29</Td>
                <Td>Torsdag</Td>
                <Td>21. juli</Td>
                <Td>18.30 - 19.30</Td>
              </Tr>
              <Tr>
                <Td>Miljø Lunden 3</Td>
                <Td>30</Td>
                <Td>Tirsdag</Td>
                <Td>26. juli</Td>
                <Td>10.00 - 11.00</Td>
              </Tr>
              <Tr>
                <Td>Miljø Bygholm 3</Td>
                <Td>30</Td>
                <Td>Tirsdag</Td>
                <Td>26. juli</Td>
                <Td>11.30 - 12.30</Td>
              </Tr>
            </Tbody>
          </Table>
          <ButtonOnline
            text="Klik her for tilmelding til Miljømøder"
            onClick={() => window.open('https://ezme.io/c/x1S/kRGL', '_blank')}
          ></ButtonOnline>
        </Column>
      </Row>

      <br />
      <br />
    </Background>
  </LandingpageOnline>
);

export default DogSummer;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
