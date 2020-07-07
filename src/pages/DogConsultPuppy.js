import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import {
  Landingpage,
  Column,
  MetaConsultPuppy,
  TitleCenter,
  Text, TextCenter,
  TextContainer,
  Image,
  Row, 
  FlexedRow,
  LandingpageHeadline,
  TextList, TextListMark, TextListArrow
} from '../components';
import Responsive from '../components/layout/Responsive';
import { ConsultPupOne, ConsultPupTwo } from '../assets';
import '../components/table/TableCss.css';

const ConsultPupAnnoyance = [
  'Du nyder at koble fra på sofaen om aftenen, men i stedet for afslapning og mig-tid, er det blevet til en kamp med hvalpen om ikke at gø ad dig, nappe eller være ustyrlig',
  'Du eller dine børn kan ikke gå rundt i huset uden at have en krævende hvalp siddende i buksebenet af og til',
  'Du forsøger at fortælle din hvalp hvad den må og ikke må, men i stedet for at stoppe når du beder om det, så er det som om det bliver værre'
];

const ConsultPupHour = [
  'At forstå din hvalps adfærd og årsagen til at den opfører sig som den gør',
  'At sætte rammer for hverdagen, så du helt undgår dårlig opførsel - også langt ude i fremtiden',
  'At få din hvalp til at gøre det du beder om',
  'At kunne få ro på din hvalp og dermed mere overskud til jer begge i hverdagen'
];

const ConsultPupForYou = [
  'dig, der ønsker at hjælpe din hvalp med at få mere ro på i hverdagen',
  'dig, der vil slippe for huller i huden efter knivskarpe hvalpetænder',
  'dig, der er førstegangs-hundeejer og savner konkrete værktøjer til hverdagens opdragelse',
  'eller dig, der allerede har god succes med din hvalp, men kunne tænke dig endnu flere input!'
];

const DogConsultPuppy = () => (
  <Landingpage>
    <MetaConsultPuppy />
    <LandingpageHeadline text="Hvalpevisit af hundeadfærdsbehandler">
    </LandingpageHeadline>
    <Background>
      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Få en rolig og lydig hund med redskaberne til nem og positiv opdragelse" showHorizontalRuler />
          <TextCenter>
            Har du en hvalp der ynder at sætte sine sylespidse tænder i dig?<br />
            Ødelægger den ting i hjemmet?<br />
            Måske opfører den sig til tider ustyrligt og lytter ikke til dig?<br />
            Eller ønsker du blot at få god vejledning fra start med den lille ny, så du helt undgår problemer som dette?
          </TextCenter>
          <TextCenter>
            Så bestil en tid til et hvalpevisit, hvor du får de redskaber du skal bruge for at skabe en
            lydig, kontaktsøgende hund, som let kan finde ro af sig selv og dermed gør jeres hverdag sammen mere overskuelig og hyggelig.
          </TextCenter>
          <br /><br />
            Jeg ønsker at bestille en tid nu
        </Column>
      </Row>

      <Row marginTop={"25px"}>
        <Column widthPercentage="100%">
          <TitleCenter text="Genkender du bare én af følgende oplevelser:" />
          <TextListArrow texts={ConsultPupAnnoyance} />
        </Column>
      </Row>

      <Row marginBottom={"25px"}>
        <Column widthPercentage="100%">
          <TitleCenter color="#1cb8b8" text="Hvis du kan nikke genkendende til bare ét af disse udsagn, så har jeg både en god og en dårlig nyhed til dig" />
          <TextCenter>
            Den dårlige nyhed er, at dårlig opførsel fra hvalpen skyldes manglende klarhed om ønsker fra dig
            og mangel på faste rutiner - og altså ikke en indre trodsighed eller stædighed hos hvalpen.<br />
            Det er desværre et smertefuldt faktum, at mange hvalpe får dårlige vaner, fordi de ikke bliver ordentligt vejledt fra start og hjulpet til hverdag.
          </TextCenter>
          <TextCenter>
            Den gode nyhed er, at <b>DU</b> kan lære at blive klar og tydelig overfor din hvalp, hvor du viser hvad du forventer af den på en god og rolig måde,
            så du kan få den lydige og dejlige hund du ved du har!
          </TextCenter>
          <TextCenter>
            Til et hvalpevisit får du metoderne til hvordan du kan sætte faste rammer og rutiner for din hvalp, gennem leg, ros og en <i>hulens masse godbidder</i>,
            så du helt kan undgå de førnævnte (meget) irriterende situationer.
          </TextCenter>
          <br /><br />
            Ja tak, giv mig metoderne til at få succes
          {/* <Text>
            Opdragelse handler ikke om hvor højt du kan råbe eller hvor hård du skal være, men blot om at have faste rutiner og guide din hvalp igennem
            jeres fælles hverdag, hvilket kan gøres med en positiv og legene tilgang, hvor både du og hvalpen oplever masser af succes og samtidig knytter bånd.
          </Text> */}
          <br />
        </Column>
      </Row>

      <Row>
        <TitleCenter text="I tvivl om det er noget for dig? Hør hvad andre har oplevet:" showHorizontalRuler />
      </Row>
      
      <Row marginBottom={"25px"}>
        <Column widthPercentage="48%">
            <FlexedRow>
              <Image src={ConsultPupOne} width="200px" height="300px"  />
              <TextContainer>
              <TitleCenter text="Nu kan vi komme nemmere gennem hverdagen" />
                <Text>
                  Vi takker og nejer for et fantastisk besøg!
                  Vi har simpelthen fået så mange værktøjer til hvordan vi får den bedste tid med Harry.
                </Text>
                <Text>
                  Det var virkelig rart at få nogle gode værktøjer, øvelser og lege.
                </Text>
                <Text>
                  Når vi lige er kommet i gang med træningen vil vi benytte os af dig igen senere!
                </Text>
                <Text>
                  Mvh Sheila og Daniel
                </Text>
              </TextContainer> 
            </FlexedRow>
          </Column>
        <Column widthPercentage="48%">
            <FlexedRow>
              <Image src={ConsultPupTwo} width="200px" height="300px"  />
              <TextContainer>
              <TitleCenter text="Vores hvalp har lært at slappe af på signal" />
                <Text>
                  Den største forandring for os var at få større viden omkring ro / søvns vigtighed for en hvalp.
                  Det var noget af en aha-oplevelse at lære hvalpens behov for at ”øve” sig i ro, da man ellers får et ”damp barn”.
                </Text>
                <Text>
                  Vi har set hvor lærenem han er og har lært at bruge et ”slap-af”-tæppe. Han søger i dag selv tæppet når han ved det er slap-af tid.
                </Text>
                <Text>
                  Freja og Polle
                </Text>
              </TextContainer> 
            </FlexedRow>
          </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter color="#1cb8b8" text="Et hvalpevisit er altså til:" />
          <TextList texts={ConsultPupForYou} />
          <TextCenter>
            og selvfølgelig dig, der ønsker at få svar på alle dine spørgsmål du måtte have omkring hvalpebideri, miljøtræning, socialisering,
            alene hjemme træning, renlighed og hvad du ellers går og tænker på!
          </TextCenter>
        </Column>
      </Row>
      
      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Jeg kan med glæde fortælle dig, at efter et hvalpevisit på 1,5 time, vil du være i stand til:" />
          <TextListMark texts={ConsultPupHour} />
          <TextCenter>
            Det tager kun halvanden time af din tid at sikre dig en mere overskuelig hverdag og en mere rolig, fælles fremtid!
          </TextCenter>
          <br /><br />
            Ja tak, giv mig overskud igen!
        </Column>
      </Row>



    </Background>
  </Landingpage>
);

export default withRouter(DogConsultPuppy);

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
