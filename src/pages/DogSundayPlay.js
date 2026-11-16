import styled from 'styled-components';
import {
  Sunday1,
  Sunday2,
  Sunday3,
  Sunday4,
  Sunday5,
  Sunday6,
  Sunday7,
  Sunday8,
  Sunday9,
} from '../assets';
import {
  Banner,
  BreadCrumps,
  Column,
  EasyMeList,
  Image,
  MetaDogSundayPlay,
  Page,
  Row,
  Text,
  TextList,
  Title,
  TitleColor,
} from '../components';
import Responsive from '../components/layout/Responsive';

const SundayBenefits = [
  'Styrke kontakten og roen – øve at din hund kan koncentrere sig om dig, selvom der er andre hunde omkring jer',
  'Give din sensitive hund gode oplevelser – træne i nærheden af andre hunde, uden at nogen kommer uinviteret hen og hilser',
  'Øve gode hundemøder – hjælpe din hund med at hilse og kommunikere på en rolig og høflig måde',
  'Finde en ny legekammerat – måske møder I lige den hund, som din egen klikker fantastisk med, og som den kan få en god leg med',
  'Give hunden frihed uden snor – lade den undersøge og løbe frit i et afgrænset område uden andre hunde.',
  'Udfordre både krop og hjerne – gå på opdagelse på dagens opstillede motorikbaner og lave sjove samarbejdsøvelser',
];

const DogSundayPlay = () => {
  return (
    <Page>
      <MetaDogSundayPlay />
      <Banner text="Søndagshygge i Nim, nær Horsens">
        <BreadCrumps currentPage="Gårdhygge" />
      </Banner>
      <Background>
        <Row marginTop="25px" marginBottom="45px">
          <Column widthPercentage="100%">
            <Title text="Gårdhygge, for nuværende og tidligere kursister" showHorizontalRuler />
            <Text>
              Savner du et sted, hvor din hund kan træne, snuse, lege og være social - uden at du
              skal bekymre dig om uønskede hundemøder?
            </Text>
            <Text>
              Til Gårdhygge åbner jeg gården i to timer for tidligere kursister og
              legestuedeltagere, der har lyst til en hyggelig formiddag med deres hund.
              <br />
              Her er der plads til både den sociale festabe, den nysgerrige snude og hunden, der
              helst vil betragte verden lidt på afstand.
            </Text>
            <Text>
              <b>
                For det bedste ved Gårdhygge er, at du selv kan vælge, hvad din hund skal have ud af
                dagen!
              </b>
              <br />
              Måske vil du:
              <TextList texts={SundayBenefits} />
            </Text>
            <Text>
              <b>Og ved du, hvad det allerbedste er?</b>
              <br />
              Du er omgivet af andre hundeejere, der ligesom dig har forståelse for, at god
              socialisering handler om at respektere hinandens grænser.
              <br />
              Her er der ingen forventning om, at alle hunde skal hilse på hinanden.
              <br />
              Ingen hunde, der bare får lov til at løbe hen til fremmede hunde.
              <br />
              Og ingen grund til at undskylde, hvis din hund har brug for lidt ekstra afstand.
              <br />
              Her er der plads til at tage hensyn – og stadig få en fantastisk oplevelse sammen!
            </Text>
            <Text>
              Jeg står selvfølgelig til rådighed undervejs og vil ofte gå rundt med en af mine egne
              hunde på dagen, hvis du har spørgsmål eller gerne vil have lidt sparring. Og mens
              hundene får stimuleret både sanser, krop og hjerne, sørger jeg for lidt varmt at
              drikke til de tobenede. For det er altså ikke kun hundene, der skal have mulighed for
              at hygge og være sociale!
            </Text>
            <Text>
              <b>Hvem kan deltage?</b>
              <br />
              Gårdhygge er for dig, der tidligere har deltaget på enten et holdforløb eller 2
              legestuer hos mig. Det sikrer, at alle kender principperne for den gode hundeleg,
              respekterer hinandens afstand og hjælper med at skabe et trygt miljø for både hunde og
              mennesker.
            </Text>
            <Text>
              <b>Antal pladser til Søndagshygge</b>
              <br />
              Der er 12 pladser til rådighed, grundet begrænset antal p-pladser på gården.
              <br />
              Din tilmelding gælder for én parkeringsplads!
              <br />
              Derfor er flere hunde og flere tobenede i samme bil hjertens velkommen. Så fyld gerne
              bilen op! Prisen er den samme.
            </Text>

            <br />
            <Title text="Tilmelding til Søndagshygge" showHorizontalRuler />
            <TitleColor text="Din investering: 125 kr. pr. bil" />
            <Text>
              To timers hundehygge, gode oplevelser, nye indtryk og mulighed for at tage en dejligt
              stimuleret hund med hjem!
            </Text>
            <Text italic>Bemærk betaling er bindende og beløb refunderes ikke.</Text>
            <br />
            <Title text="Kommende datoer for Søndagshygge:" />
            <EasyMeList src="https://ezme.io/x/x1S/fFzy" />

            <br />
            <Title text="Stemningsbilleder fra Gårdhygge" showHorizontalRuler />
            <Row>
              <Column>
                <Image
                  src={Sunday9}
                  alt="Oversigt over gårdens faciliteter med indtegnet arealer markeret i farver"
                />
              </Column>
              <Column>
                <Image src={Sunday4} alt="Gravhund står på balancebræt og kigger op på ejer" />
              </Column>
              <Column>
                <Image
                  src={Sunday8}
                  alt="To hunde leger og kigger spændt på hinanden inden de sætter i løb"
                />
              </Column>
            </Row>
            <Row>
              <Column>
                <Image
                  src={Sunday1}
                  alt="Lille pomeranian står på græsplæne med agilityringe i baggrunden til gårdhygge"
                />
              </Column>
              <Column>
                <Image src={Sunday5} alt="Brun hund snuser i badebassin efter godbidder" />
              </Column>
              <Column>
                <Image
                  src={Sunday3}
                  alt="Motorikbane med farverige kegler og træningsudstyr på græsplæne"
                />
              </Column>
            </Row>
            <Row>
              <Column>
                <Image
                  src={Sunday6}
                  alt="En springer spaniel sidder og balancerer på vippe og venter på en godbid"
                />
              </Column>
              <Column>
                <Image
                  src={Sunday2}
                  alt="Træningsplads med flere blå tunneller opsat til tunnel-mania aktivitet"
                />
              </Column>
              <Column>
                <Image
                  src={Sunday7}
                  alt="3 hunde står på hver sin side af et hegn og kigger interesseret på hinanden"
                />
              </Column>
            </Row>
          </Column>
        </Row>
      </Background>
    </Page>
  );
};

export default DogSundayPlay;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
