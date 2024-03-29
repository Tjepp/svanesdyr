import React from 'react';
import styled from 'styled-components';
import {
  Page,
  Banner,
  Column,
  MetaOnlineCourses,
  Title,
  TitleColor,
  Text,
  Image,
  BreadCrumps,
  Row,
  TextList,
  TextListMark,
  ButtonOnline,
} from '../components';
import Responsive from '../components/layout/Responsive';
import { 
  OnlinePlayFull, 
  OnlineLook, 
  OnlineGarden, 
  OnlinePulling, 
  OnlineRelax, 
  OnlineSound, 
  OnlineVisit, 
  OnlineBookpuppy,
  OnlineRecall,
  OnlinePlay,
  OnlineGuests,
  OnlineNail,
 } from '../assets';
import '../components/table/TableCss.css';

const recall = [
  'Hvorfor du ikke (kun) skal bruge hundens navn til indkald',
  'Hvordan du bliver mere spændende at komme hen til, fremfor fristelserne i miljøet ',
  'Hvordan du sikrer dig din hund kommer på indkald, uanset hvor i er (og ikke kun derhjemme) ',
];
const call = [
  '3 lette øvelser at lege med for at få det stabile indkald',
  'Trin-for-trin gennemgående videoguide på hele indkaldet',
];

const dogPlay = [
  'Hvorfor der ikke er grund til bekymring, selvom hundene leger vildt',
  'De 4 spilleregler du skal spotte, som tegn på den gode hundeleg',
  'Hvordan hunde, selv med stor størrelsesforskel, stadig godt kan have god hundeleg sammen',
];
const play = [
  'Hvordan hunden kommunikerer om den er tryg eller utryg',
  'Hvad det betyder hvis hunden begynder at humpe en legekammerat',
  'De 4 legeregler du skal spotte, som tegn på den gode hundeleg',
  'Hvordan du kan lave positive introduktionsmøder mellem hundene',
  'og ikke mindst hvordan du bruger Samtykketesten - dit redskab til at kontrollere legen',
];

const nails = [
  'Hvordan du kan få en logrende hund når negleklipperen hives frem!',
  'Hvordan du trin-for-trin træner din hund op til at blive glad for at få klippet negle',
  'Teknikken til at undgå blødning, så du trygt kan klippe neglene selv',
];
const nail = [
  'Trin-for-trin videoguide på gradvis tilvænning af negle',
  'Videoeksempler på hvordan din hund fortæller dig den er tryg eller utryg, så du ved hvad du skal øve ',
];

const pulling = [
  'Sele-snortricket der kan skåne din arm',
  'Metoden til at få mere ro på, fremfor hunden stresser fremad',
  'Teknikken til at undgå din hund trækker i snoren',
];
const pull = [
  'Video eksempel på metoden i brug, første gang en kursist praktiserede det med hendes hund',
  'Video eksempel på teknikkens ”før” og ”efter” effekt',
];

const barking = [
  'Teknikken til at stoppe din hund når den gør i haven',
  'Tricket til at undgå din hund starter med at gø',
  'Metoden til at lære din hund at være stille',
];
const bark = [
  'En tallerkenleg du kan øve for at lære din hund at ro kan betale sig',
  'Video eksempel på tallerkenlegen i aktion og råd til at overføre roen til haven',
];

const chasing = [
  'Nøgleordet der giver dig og din hund succes fra start',
  'Metoden der lærer din hund at kigge, fremfor at reagere',
  'En sjov leg med din hund, der kan forebygge impulsiv jagt',
];
const chase = [
  'Video eksempel på metoden i brug, første gang hvalpen Zoey ser solsorte og gerne vil jage dem',
  'Video eksempler på legen der kan forebygge impulsiv jagt',
];

const guests = [
  'Svaret på hvorfor du IKKE skal ignorere din hund når den vil hoppe op!',
  'Tricket der forhindrer din hund i at hoppe op',
  'Metoden til at få ro på mens der hilses',
];
const guest = [
  'Hvordan du opbygger en ny og mere rolig gæste-rutine',
  'Hvordan du lærer din hund at gå til ro i længere tid',
  'Hvilke hjælpemidler du kan bruge, for helt at undgå din hund rastløst opsøger gæsterne',
];

const quiet = [
  'Din erfarne Dyreadfærdskonsulents 5 retningslinjer til succes med rolig adfærd',
  'Svaret på hvorfor din hund kan finde ro i visse situationer, men ikke andre',
  'Svaret på hvordan du lærer din hund at gå fra at være ”på” med træning til afslapning',
];

const noises = [
  'Svaret på hvad forskellen mellem frygt og angst er',
  'Svaret på hvorfor din hund reagerer på lyde',
  'Din erfarne Dyreadfærdskonsulents 3 tips til behandling af af din hunds lydangst',
];
const noisy = [
  'Video eksempel på hvordan du kan træne lyde til at blive til noget rart igen',
  'En øvelse du kan lege med din hund, så den selv starter larm - og synes det er FEDT!',
];



const OnlineCourses = () => (
  <Page>
    <MetaOnlineCourses />
    <Banner text="Onlinekurser til hundeejere">
      <BreadCrumps currentPage="Onlinekurser" />
    </Banner>
    <Background>
      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <Title text="Onlinekurser med Dyreadfærdskonsulent Sabrina Svane" showHorizontalRuler />
          <Text>
            Ønsker du guidet hjælp til en specifik problemadfærd eller mere viden omkring hundens kommunikation, så er du kommet til rette sted!<br />
            Her på siden finder du forskellige onlinekurser i formatet som længerevarende webinars eller appetitlige minikurser. Du kan finde svar på nogle af dine træningsspørgsmål som fx indkald, negleklipning eller gå pænt i snor.
            Fokus i disse guides er at skabe en stærk relation mellem dig og din hund, hvor du får teknikkerne til at anvende belønningsbaserede metoder med succes, og udføre træningen på hundens præmisser.
          </Text>
          <Text>
            Du vil også kunne finde forskellige webinarer med fokus på hundens kommunikation, herunder bl.a. den gode hundeleg og hvordan du kontrollerer legen mellem hundene.
          </Text>
          <Text>
            <b>Sådan får du adgang til dit onlinekursus</b><br />
            Efter betaling får du straks tilsendt en mail, hvori du finder et personligt link til Sabrina Svanes online bibliotek på Onedrive.
            I dette bibliotek vil dit webinar eller minikursus ligge klar til afspilning med det samme.
            Du kan også vælge at downloade dit onlinekursus til din computer, tablet eller mobil - så du ikke behøver at finde linket i din mail hver gang, og kan se det lige når du har lyst.
          </Text>
          <Text>
            Ovenstående adgangsmetode er gældende for alle onlinekurser her på siden.
          </Text>
          <Text>
            <b>Din investering giver dig adgang til privat brug</b><br />
            Jeg skal gøre opmærksom på at adgang til onlinekurset er kun til personligt brug. Alle onlinekurser her på siden er under Copyright Sabrina Svane, Svanes Dyr. Det må derfor <b>ikke</b> kopieres, sælges, uddeles eller anvendes derudover uden skriftlig tilladelse fra Sabrina Svane.
          </Text>
        </Column>
      </Row>

      <Row>
        <Title text="Udbud af Onlinekurser for hundeejere" showHorizontalRuler />
      </Row>
      <Row marginBottom="25px">
        <Column>
          <Image src={OnlineRecall} />
          <TitleColor text="Opskriften på det stærke indkald" smallTitle />
          <Text>
            Kommer din hund første gang du kalder? <br />
            Ville det ikke være drømmescenariet? <br />
            At din hund synes du er mere spændende end alt andet?  
          </Text>
          <Text>
            Så få ingredienserne til at skabe det stabile drømme-indkald her i webinaret: Opskriften på det stærke indkald 
          </Text>
          <Text>
            <b>I dette webinar får du svaret på:</b>
            <TextListMark texts={recall} />
            Ikke mindst får du:
            <TextList texts={call} />
          </Text>
          <Text>
            Din investering i at skabe det indkald du drømmer om; <b>199,- kr.</b>
          </Text>
          <ButtonOnline text="Jeg er klar på at skabe et stærkt indkald!" onClick={() => window.open('https://ezme.io/c/x1S/okib', '_blank')}></ButtonOnline>
          <br />
        </Column>

        <Column>
          <Image src={OnlinePlay} />
          <TitleColor text="4 tegn på den gode hundeleg" smallTitle />
          <Text>
            Synes du hundeleg kan se bidsk ud og lyde voldsomt? <br />
            Bliver du i tvivl om hvornår legen egentlig er god mellem hundene? 
          </Text>
          <Text>
            Så fjern tvivlen og få svaret her i webinaret om de 4 tegn på den gode hundeleg!
          </Text>
          <Text>
            <b>I dette webinar får du svaret på:</b>
            <TextListMark texts={dogPlay} />
            Ikke mindst får du: Masser af video eksempler på spillereglerne i aktion under leg.
          </Text>
          <Text>
            Din investering i at kunne spotte forskellen mellem leg og alvor; <b>129,- kr.</b>
          </Text>
          <ButtonOnline text="Ja tak! Lad mig fluks få adgang" onClick={() => window.open('https://ezme.io/c/x1S/ug5B', '_blank')}></ButtonOnline>
          <br />
        </Column>

        <Column>
          <Image src={OnlinePlayFull} />
          <TitleColor text="Sådan kontrollerer du leg mellem hunde - og giver alle en god oplevelse" smallTitle />
          <Text>
            Det er en myte, at hundene skal kunne klare sig selv, når det kommer til at sætte grænser overfor andre hunde!
            Hvis du overlader hundene til sig selv, så opstår der meget ofte en situation, hvor grænserne ikke respekteres.
            Der bliver simpelthen ikke lyttet. 
            Når din hund ikke føler sig lyttet til, vil den begynde at råbe højere og adfærden eskalerer.
            I sidste ende kan du stå med en hund, der udviser angst eller aggression pga. dårlige  oplevelser med andre hunde.
          </Text>
          <Text>
            At overlade hundene til selv at finde ud af det, svarer til at overlade børnene i skolegården til sig selv, hvilket enhver forælder vil finde uacceptabelt.
            Der skal være en voksen, ansvarlig til stede, som kan afbryde når nok er nok og sørge for, at alle har en god stund sammen. 
          </Text>
          <Text>
            <b>I dette webinar får du svaret på:</b>
            <TextListMark texts={play} />
          </Text>
          <Text>
            Din investering i at kunne kontrollere legen mellem hunde, og sikre dig alle får en god oplevelse; <b>199,- kr.</b>
          </Text>
          <ButtonOnline text="Ja tak til opskriften på god hundeleg!" onClick={() => window.open('https://ezme.io/c/x1S/okiW', '_blank')}></ButtonOnline>
          <br />
        </Column>
      </Row>

      <Row marginBottom="25px">
        <Column>
          <Image src={OnlineNail} />
          <TitleColor text="Sådan gør du din hund tryg ved negleklipning" smallTitle />
          <Text>
            Kan din hund bestemt ikke lide at få klippet negle? <br />
            Måske flygter den blot ved synet af negleklipperen? 
          </Text>
          <Text>
            Så få opskriften på at gøre negleklipning til kvalitetstid fremfor skræmmescenarie her i webinaret!
          </Text>
          <Text>
            <b>I dette webinar får du svaret på:</b>
            <TextListMark texts={nails} />
            Ikke mindst får du:
            <TextList texts={nail} />
          </Text>
          <Text>
            Din investering i at negleklipning bliver kvalitetstid fremfor overgreb; <b>199,- kr.</b>
          </Text>
          <ButtonOnline text="Jeg er klar på mere tryg negleklipning!" onClick={() => window.open('https://ezme.io/c/x1S/ok5D', '_blank')}></ButtonOnline>
          <br />
        </Column>

        <Column>
          <Image src={OnlineGarden} />
          <TitleColor text="Stop gøende adfærd i haven" smallTitle />
          <Text>
            Gør din hund i haven? <br />
            Skælder din hund ud på dem der går på den anden side af hækken? <br />
            Kunne du tænke dig at have en hund der er stille når den bliver lukket ud i haven?
          </Text>
          <Text>
            Så giver Dyreadfærdskonsulent Sabrina Svane dig her et minikursus i Stop gøende adfærd i haven!
          </Text>
          <Text>
            <b>I dette minikursus får du:</b>
            <TextListMark texts={barking} />
            Ikke mindst får du:
            <TextList texts={bark} />
          </Text>
          <Text>
            Din investering i trygt at kunne lukke din hund i haven: <b>99,- kr.</b>
          </Text>
          <ButtonOnline text="Ja tak, til mere ro i haven!" onClick={() => window.open('https://ezme.io/c/x1S/ok51', '_blank')}></ButtonOnline>
          <br />
        </Column>

        <Column>
          <Image src={OnlinePulling} />
          <TitleColor text="Opskriften på at lære hunden at gå pænt, uden at trække" smallTitle />
          <Text>
            Trækker din hund i snoren? <br />
            Føler du din hund har supertravlt når i går tur sammen? <br />
            Kunne du tænke dig en hund der fandt mere ro og ikke trak armen af dig?
          </Text>
          <Text>
            Så får du her et minikursus i Opskriften på at lære hunden at gå pænt, uden at trække!
          </Text>
          <Text>
            <b>I dette minikursus får du:</b>
            <TextListMark texts={pulling} />
            Ikke mindst får du:
            <TextList texts={pull} />
          </Text>
          <Text>
            Din investering i løs line og mere ro på gåturene; <b>119,- kr.</b>
          </Text>
          <ButtonOnline text="Giv mig succes til min næste gåtur!" onClick={() => window.open('https://ezme.io/c/x1S/ok5c', '_blank')}></ButtonOnline>
          <br />
        </Column>
      </Row>

      <Row marginBottom="25px">
      <Column>
          <Image src={OnlineVisit} />
          <TitleColor text="Første trin til at få ro på, når der kommer gæster" smallTitle />
          <Text>
            Hopper din hund op ad dine gæster? <br />
            Bliver den helt ekstatisk når i får besøg? <br />
            Ville du ønske din hund kunne finde ro når gæsterne kommer ind ad døren?
          </Text>
          <Text>
            Så får du her mit minikursus der giver dig Første trin til at få ro på, når der kommer gæster!
          </Text>
          <Text>
            <b>I dette minikursus får du:</b>
            <TextListMark texts={guests} />
            Ikke mindst får du: Videoeksempel på metoden i brug, første gang en kursist øver det med sine gæster.
          </Text>
          <Text>
            Din investering i mere ro og poterne plantet på gulvet, allerede næste gang du får besøg; <b>119,- kr.</b>
          </Text>
          <ButtonOnline text="Ja tak til rolig hilsen på gæster!" onClick={() => window.open('https://ezme.io/c/x1S/ok5H', '_blank')}></ButtonOnline>
          <br />
        </Column>

        <Column>
          <Image src={OnlineGuests} />
          <TitleColor text="Metoden til ro med gæster i huset" smallTitle />
          <Text>
            Har din hund svært ved at finde ro mens i har gæster på besøg? <br />
            Er du i tvivl om hvordan du lærer din hund at være knap så opmærksomhedskrævende?
          </Text>
          <Text>
            Så fjern tvivlen og få svaret her i webinaret: Metoden til ro med gæster i huset! 
          </Text>
          <Text>
            <b>I dette webinar får du:</b>
            <TextListMark texts={guest} />
            Ikke mindst får du: Trin-for-trin videoguide på hvordan du lærer din hund en stabil Bliv!
          </Text>
          <Text>
            Din investering i mere ro og nærvær overfor dine gæster, allerede næste gang du får besøg; <b>149,- kr.</b>
          </Text>
          <ButtonOnline text="Jeg er klar på at få ro med mine gæster!" onClick={() => window.open('https://ezme.io/c/x1S/okMX', '_blank')}></ButtonOnline>
          <br />
        </Column>

        <Column>
          <Image src={OnlineRelax} />
          <TitleColor text="Metoden til at finde ro, når der skal laves ingenting" smallTitle />
          <Text>
            Kræver din hund din opmærksomhed når du er optaget af andet? <br />
            Bliver sofatid til mere uro end afslapning? <br />
            Ville du ønske din hund kunne finde ro sammen med dig når der sker ”ingenting”?
          </Text>
          <Text>
            Så kig med her i minikurset hvor jeg giver dig Metoden til at lære din hund at fine ro, når i skal lave absolut ingenting!
          </Text>
          <Text>
            <b>I dette minikursus får du:</b>
            <TextListMark texts={quiet} />
          </Text>
          <Text>
            Din investering i at lære din hund at være rolig, selvom det er ”kedeligt”; <b>119,- kr.</b>
          </Text>
          <ButtonOnline text="Ja tak! Til en mere afslappet hund!" onClick={() => window.open('https://ezme.io/c/x1S/okM0', '_blank')}></ButtonOnline>
          <br />
        </Column>

      </Row>

      <Row marginBottom="25px">
      <Column>
          <Image src={OnlineSound} />
          <TitleColor text="3 tips til behandling af lydangst" smallTitle />
          <Text>
            Gør din hund af bestemte lyde? <br />
            Måske er den ængstelig nytårsaften? <br />
            Ville du ønske din hund generelt ikke blev bange for lyde?
          </Text>
          <Text>
            Så kig med her i minikurset hvor Dyreadfærdskonsulent Sabrina Svane giver dig 3 tips til behandling af lydangst!
          </Text>
          <Text>
            <b>I dette minikursus får du:</b>
            <TextListMark texts={noises} />
            Ikke mindst får du:
            <TextList texts={noisy} />
          </Text>
          <Text>
            Din investering i mere ro og tryghed for din hund omkring lyde: <b>149,- kr.</b>
          </Text>
          <ButtonOnline text="Ja tak! Til hjælp til min hunds lydangst" onClick={() => window.open('https://ezme.io/c/x1S/okMZ', '_blank')}></ButtonOnline>
          <br />
        </Column>

        <Column>
          <Image src={OnlineLook} />
          <TitleColor text="Teknikken til at kigge på andre dyr, uden at jage" smallTitle />
          <Text>
            Jager din hund andre dyr? <br />
            Ville du ønske din hund kunne kigge på fuglene i haven, fremfor at jage dem? <br />
            Eller lade naboens katte være i fred på gåturene, fremfor at slæbe dig hen til dem?
          </Text>
          <Text>
            Så giver Dyreadfærdskonsulent Sabrina Svane dig her Teknikken til at lære din hund at kigge på andre dyr, uden at jage!
          </Text>
          <Text>
            <b>I dette minikursus får du:</b>
            <TextListMark texts={chasing} />
            Ikke mindst får du:
            <TextList texts={chase} />
          </Text>
          <Text>
            Din investering i en rolig hund omkring andre dyr: <b>99,- kr.</b>
          </Text>
          <ButtonOnline text="Jeg er klar til at øve ro omkring andre dyr!" onClick={() => window.open('https://ezme.io/c/x1S/okMG', '_blank')}></ButtonOnline>
          <br />
        </Column>

      <Column>
          <Image src={OnlineBookpuppy} width="400px" height="256px" />
          <TitleColor text="Adfærdsbehandlerens 5 vigtigste råd til træning af din hvalp" smallTitle />
          <Text>
            En E-bog til dig der ønsker en konfliktfri hverdag med fokus på at skabe en tillidsfuld hvalp, som synes du er det bedste i verden!
          </Text>
          <ButtonOnline text="Læs mere her" onClick={() => window.open('https://www.svanesdyr.dk/hvalpmedsucces', '_blank')}></ButtonOnline>
          <br />
        </Column>
      </Row>

    </Background>
  </Page>
);

export default OnlineCourses;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
