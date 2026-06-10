import styled from 'styled-components';
import { NWGary } from '../../assets';
import {
  Column,
  EasyMeList,
  FlexedRow,
  Image,
  LandingpageSummer,
  MetaDogSummer,
  Row,
  Text,
  TextCenter,
  TextContainer,
  TextListMark,
  Title,
  TitleCenter,
} from '../../components';
import Responsive from '../../components/layout/Responsive';
import SummerMenu from '../../components/menu/SummerMenu';

const NW = [
  'Et glas med 50 olie-kontaminerede emner',
  '10 ml lavendelhydrolat',
  'En pakke med filtdutter',
  'Forskellige centrifugerør',
  'En metaldåse med magnet, så du kan arbejde korrekt videre med duften hjemme uden at smitte hele huset',
];

const DogSummerNW = () => (
  <LandingpageSummer>
    <MetaDogSummer />
    <Background>
      <Row>
        <Column widthPercentage="20%">
          <Title text="Udbud af sommerkurser" showHorizontalRuler />
          <SummerMenu />
        </Column>
        <Column widthPercentage="75%">
          <TitleCenter text="4 timers intensiv introduktion til Nose Work - Lad jagten på duften begynde!" />
          <FlexedRow>
            <Image
              src={NWGary}
              alt="Corgi snuser ved campingvogn under Nose Work træning"
              width="300px"
              height="200px"
            />
            <TextContainer>
              <Text>
                <b>Med Hundetræner og Nose Work Instruktør Anja Nielsen fra Anja&Hund</b>
                <br />
                Nu har du muligheden for at få en grundig introduktion til en sportsgren, der giver
                din hund empowerment - selvtillid, kontrol og velvære. Nose Work er næsearbejde sat
                i system. Det udspringer af professionelt specialsøg, som vi bl.a. kender det fra
                narkohundes arbejde.
              </Text>
              <Text>
                Nose Work er en sjov leg for alle hunde uanset alder, race og øvrige
                træningsbaggrund. Her er plads til alle. Nose Work er også for reaktive hunde, da
                der altid kun er én hund, der arbejder, mens resten venter i bilerne.
              </Text>
            </TextContainer>
          </FlexedRow>
          <TextCenter>
            <br />
            <Text>
              Kurset er ment som en lyn-introduktion til legen og sporten og vil være en blanding af
              teori og praksis. Efter kurset har du redskaberne til at kunne arbejde hjemme med de
              forskellige trin, du bliver præsenteret for på introen.
              <br />I praksisdelen vil du arbejde med papkassesøg og simpelt indendørssøg. Du får en
              grundig introduktion til sporten, og kan med din egen hund prøve de første søg. Det
              gælder om at få et godt fundamentet for det at søge. Du vil lære at forstærke hundens
              naturlige søgeadfærd, og du vil lære at læse din hunds signaler (naturlige
              markeringsadfærd).
            </Text>
            <Text>
              Da Nose Work går ud på at lære din hund at finde specifikke dufte overalt - i alle
              miljøer - vil du på kurset også lære, hvordan du håndterer de forskellige dufte
              korrekt. I Nose Work arbejder man med 3 forskellige dufte: Lavendel, eukalyptus og
              anis. Lavendel er den første duft (iflg. konkurrenceprogrammet), og derfor den duft,
              vi vil koncentrere os om. Du vil blive præsenteret for lavendelduften både som æterisk
              olie og som hydrolat. Du lærer, hvordan du med olie kontaminerer (smitter) emner med
              duft. Det er vigtigt, at dette gøres korrekt, da du ellers kan spolere meget for dig
              selv og din hund. Og du lærer, hvordan du kan arbejde med hydrolater. Du og din hund
              får også lov at lave et enkelt søg eller to med parringer (godbid + duft).
            </Text>
            <Text>
              Alle deltagere med hund på kurset vil få udleveret et startkit til videre træning
              hjemme. Startkittet består af:
              <TextListMark texts={NW} />
            </Text>
            <Text>
              <b>Deltagelse med hund: 1.095,- kr.</b>
              <br />
              Kurset har plads til max 4 hunde, så der er god tid til hver.
              <br />
              <i>
                Bemærk din hund skal være tryg ved at sidde og vente i bilen, da hundene er på én ad
                gangen!
              </i>
            </Text>
            <Text>
              <b>Deltagelse uden hund (observatør): 550,- kr.</b>
              <br />
              <i>Startkit kan tilkøbes efter aftale med Anja, såfremt det ønskes</i>
            </Text>
          </TextCenter>
          <br />

          <TitleCenter text="Tilmelding til Introduktion til Nose Work:" />
          <EasyMeList src="https://ezme.io/x/x1S/fm6D" />
        </Column>
      </Row>

      <br />
      <br />
    </Background>
  </LandingpageSummer>
);

export default DogSummerNW;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
