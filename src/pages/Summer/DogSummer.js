import styled from 'styled-components';
import {
  Column,
  LandingpageSummer,
  MetaDogSummer,
  Row,
  TextCenter,
  TextListMark,
  Title,
  TitleCenter,
} from '../../components';
import Responsive from '../../components/layout/Responsive';
import SummerMenu from '../../components/menu/SummerMenu';

const Spotliste = [
  'Hvert kursus varer op til 90 minutter',
  'Det inkluderer 60 minutters undervisning og derefter 30 minutters hygge, snak og socialisering',
  'Der serveres både lunt og koldt at drikke, som kakao, kaffe, te og juice som er med i prisen',
  'Kurserne er for alle hunde i alle aldre',
  'Alle sommerkurser afholdes af Dyreadfærdskonsulent Sabrina Svane',
];

const DogSummer = () => (
  <LandingpageSummer>
    <MetaDogSummer />
    <Background>
      <Row>
        <Column widthPercentage="20%">
          <Title text="Udbud af sommerkurser" showHorizontalRuler />
          <SummerMenu />
        </Column>
        <Column widthPercentage="75%">
          <TitleCenter text="Til dig der ønsker at tilbringe sommerdagene i uge 30 eller 31 sammen med din hund" />
          <TextCenter>
            Kom med og brug nogle af de solrige sommerdage i Nim, nær Horsens og Brædstrup i godt
            selskab med andre hundesnuder. Tag både din bedre halvdel og børnene med til en hyggelig
            hundetræning stund - alle er velkomne!
          </TextCenter>
          <TextCenter bold>Der udbydes igen i år de populære sommerkurser for hunde!</TextCenter>
          <TextCenter>
            Fælles for alle sommerkurser er:
            <TextListMark texts={Spotliste} />
          </TextCenter>
          <TextCenter>
            Alle sommerens hundehold foregår på træningspladsen Horsensvej 31, Nim, 8740 Brædstrup.
          </TextCenter>
          <br />
          <TitleCenter text="Er sommerkurset du vil med på fyldt??" />
          <TextCenter>
            Så smid mig en mail på hvilket kursus du gerne vil på venteliste på (og ved rigelig
            efterspørgsel starter jeg ekstra hold op!):
          </TextCenter>
          <br />
        </Column>
      </Row>
      <br />
      <br />
    </Background>
  </LandingpageSummer>
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
