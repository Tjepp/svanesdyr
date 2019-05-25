/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
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
  Image,
  StyledLink
} from '../components';
import Responsive from '../components/layout/Responsive';
import '../components/table/TableCss.css';
import { sabrinaAndBarney, methodOne, methodTwo } from '../assets';

const MyMethods = () => (
  <Page>
    <Meta />
    <Banner text="Træningsmetoder Svanes Dyr">
      <BreadCrumps currentPage="Mine Metoder" />
    </Banner>
    <Background>
      <Row>
        <Column widthPercentage="65%">
          <Title text="Belønningsbaserede træningsteknikker" showHorizontalRuler />
          <Text>
            Jeg benytter mig af belønningsbaserede træningsmetoder fra de indlæringspsykologiske
            principper, også kaldet
            <b> positiv forstærkning. </b>
            Hos mig foregår træningen helt på dyrets præmisser, hvor fokus er at opnå gensidigt
            samarbejde og tillid. Der tages hensyn til alder, race, tidligere træning mv., da ingen
            er ens. Jeg tager altid udgangspunkt i hvad du som ejer ønsker at opnå i træningen med
            dit kæledyr.
          </Text>
          <Text>
            I træningen af dyr lægger jeg fokus på at belønne korrekt adfærd og motivere kæledyret
            til at arbejde sammen med mig. Dette gøres ved at belønne hvert eneste rigtige "gæt",
            som kæledyret tilbyder. Vores dyr ved ikke automatisk hvad vi forventer af dem, derfor
            er det vigtigt at rose dem, når de gætter rigtigt. Så ved de hvilken adfærd de skal
            fortsætte med at tilbyde.
          </Text>
          <Text>
            Efterhånden som kæledyret er med på hvad jeg ønsker, øger jeg gradvist mit kriterie for,
            hvor meget jeg ønsker den skal udføre ad gangen. Denne teknik kaldes shaping og sørger
            for, at kæledyret er med på hvad jeg mener og føler fremgang i træningen. Dette
            forebygger eventuel forvirring. Forvirring kan skabe frustration og stress, hvilket gør
            træningsoplevelsen negativ. Derfor er det vigtigt at gøre træningen så let som muligt,
            indtil kæledyret er med på hvad den skal.
          </Text>
          <Text>
            Gætter kæledyret på noget tidspunkt forkert, så straffer jeg den ikke for dette. Jeg
            guider derimod mod det jeg ønsker. Dette kan gøres ved blot at vise hvad jeg forventer
            og belønne derefter.
          </Text>
          <Text>
            Fokus på samarbejde og succes gør træningen
            <b> succesfuld, motiverende </b>
            og ikke mindst
            <b> sjov </b>
            for begge parter!
          </Text>
        </Column>
        <Column>
          <Title text="Vil du vide mere?" showHorizontalRuler />
          <Text>Gode bøger omhandlende de belønningsbaserede træningsmetoder:</Text>
          <Text color="#33CCCC" bold>
            Til hundeejere:
          </Text>
          <FlexRow>
            <Text bold whiteSpace>
              "Don't shoot the dog!"
            </Text>
            <Text bold italic>
              af Karen Pryor
            </Text>
          </FlexRow>
          <FlexRow>
            <Text whiteSpace>"Stress, angst og aggression"</Text>
            <Text italic>af Anders Hallgren</Text>
          </FlexRow>
          <Text color="#33CCCC" bold>
            Til hesteejere:
          </Text>
          <FlexColumn>
            <Text whiteSpace>"Indlæringspsykologi for hest og rytter"</Text>
            <Text italic>af Bettina Hvidemose</Text>
          </FlexColumn>
          <FlexRow>
            <Text whiteSpace>"Clicker Training for your Horse"</Text>
            <Text italic>af Alexandra Kurland</Text>
          </FlexRow>
          <Text color="#33CCCC" bold>
            Til katteejere:
          </Text>
          <FlexRow>
            <Text whiteSpace>"The Domestic Cat"</Text>
            <Text italic>af Turner and Bateson</Text>
          </FlexRow>
          <FlexRow>
            <Text whiteSpace>"Alt om Katte"</Text>
            <Text italic>af Candida Frith-MacDonald</Text>
          </FlexRow>
          <Text color="#33CCCC" bold>
            Rejse med kæledyr?
          </Text>
          <Text>
            <StyledLink to="/kontakt">Kontakt mig </StyledLink>
            for gode råd
          </Text>
        </Column>
      </Row>
      <Row>
        <Title text="Træningsteknikker" showHorizontalRuler />
      </Row>
      <Row>
        <Column>
          <Image src={methodOne} />
          <Title text="Indlæringsmetoder" smallTitle />
          <Text>
            Billedet ovenfor viser de fem forskellige konsekvenser, som efterfølges af et dyrs
            adfærd (her vist med hund). I den daglige omgang og træning af dyr er det vigtigt at
            fokusere på den grønne boks, hvor fokus er at belønne for korrekt adfærd og guide væk
            fra ukorrekt adfærd. Når dyret tilbyder en uønsket adfærd er konsekvensen, at den ikke
            får sin belønning (mister noget godt). For at undgå frustration efter en fejl er det
            vigtigt at guide dyret til en succes, så den kan opnå sin belønning igen. Ved at anvende
            metoder i den grønne boks motiveres kæledyret til samarbejde og initiativ, hvilket
            styrker jeres fælles bånd og tillid.
          </Text>
          <Text>
            Fokuserer man på at korrigere uønsket adfærd uhensigtsmæssigt og anvender metoder i den
            røde boks, så vil kæledyret arbejde for at undgå ubehaget, som kan ende ud med at undgå
            sin ejer. Kæledyret forbinder da træning med negative oplevelser, hvilket kan føre til
            enten apatisk adfærd, aggression eller angst. Forventningen om straf i hverdagen kan
            også lede til stress og frustration, da kæledyret ikke føler ubehaget kan undgås.
          </Text>
          <Text>
            Benytter man en god blanding af at belønne og straffe, vil straffen altid bære overvægt.
            Dyr er kodet til at overleve, derfor vil ubehag altid prioriteres at undgås, fremfor at
            få mad. Hvis straf derfor er en del af hverdagen, vil kæledyret blot tænke "phew" når
            den får ros og ikke blive yderligere motiveret på rosen.
          </Text>
        </Column>
        <Column>
          <Image src={methodTwo} />
          <Title text="Shaping" smallTitle />
          <Text>
            Shaping er formning af adfærd via trinvise tilnærmelser til denne adfærd. Man kan
            betragte det lidt som at gå op ad en trappe: For enden af trappen er dit mål og for
            hvert skridt op ad trappen nærmer du dig dit mål. Disse skridt, eller trin op ad
            trappen, betragtes som fremskridt.
          </Text>
          <Text>
            Inddelingen af trappetrinene defineres ud fra det individuelle dyr, da nogle hurtigt
            oplever fremskridt, hvor andre har brug for mere tid. Det vigtigste er at tage den tid
            det tager, ellers kan en øvelse falde fra hinanden - svarende til at falde ned til trin
            1 på trappen igen.
          </Text>
        </Column>
        <Column>
          <Image src={sabrinaAndBarney} />
          <Title text="Markér korrekt adfærd!" smallTitle />
          <Text>
            For at træningessessionerne skal være succesrige og give fremskridt, så er det vigtig at
            tage en markør i brug. En markør kan være et rosende ord som f.eks. "dygtig" eller en
            klikker. Denne markør skal parres med en belønning, som kæledyret ønsker. Om det er mad,
            kæl eller legetøj afhænger af individet.
          </Text>
          <Text>
            Din markør skal lyde idét dit kæledyr tilbyder en korrekt adfærd, uanset om det er under
            en træningssession eller i hverdagens opdragelse. Markøren signalerer til kæledyret, at
            den adfærd der blev markeret, skal den tilbyde mere af. Sørger du for altid at belønne
            efter markøren, så vil dit kæledyr motiveres til at forsætte med at tilbyde dig korrekt
            adfærd. Uhensigtmæssig adfærd vil dermed forsvinde.
          </Text>
        </Column>
      </Row>
    </Background>
  </Page>
);

export default withRouter(MyMethods);

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  ${Responsive.media.tablet`
    flex-direction: column;
  `}
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
