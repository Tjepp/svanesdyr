/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

import {
  Page,
  Banner,
  Column,
  Meta,
  Title,
  TitleColor,
  Text,
  BreadCrumps,
  Row,
  Image,
} from '../components';
import Responsive from '../components/layout/Responsive';
import '../components/table/TableCss.css';
import { sabrinaAndBarney, methodOne, methodTwo } from '../assets';

const MyMethods = () => (
  <Page>
    <Meta />
    <Banner text="Træningsmetoder ved Svanes Dyr">
      <BreadCrumps currentPage="Mine Metoder" />
    </Banner>
    <Background>
      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <Title text="Belønningsbaserede træningsteknikker" showHorizontalRuler />
          <Text>
            Uanset hvilket kæledyr jeg skal hjælpe, så har jeg altid en belønningsbaseret tilgang
            til træning og opdragelse.
          </Text>
          <Text>
            Hvad indebærer en belønningsbaseret tilgang?
            <br />
            Jeg lægger vægt på at sætte hunden op til succes og sørge for at belønne den når den
            gøre noget korrekt. Alt hvad jeg godt kan lide at se bliver bekræftet! Jeg bekræfter
            hunden ved at bruge en klikker eller give verbalt ros når jeg ser ønsket adfærd, og
            følger op med en godbid eller anden form for rar belønning for at vise hunden at dét kan
            betale sig at gentage. Ligesom med os mennesker, så gør hunde og katte også kun dét der
            kan betale sig for dem. Dvs. de skal have en ordentlig løn for at gøre et stykke
            arbejde.
          </Text>
          <Text>
            Skulle det ske at hunden laver fejl, fx ved at gøre det modsatte af hvad jeg beder den
            om eller slet ikke reagerer på mit signal. Så er det min opgave og mit ansvar at hjælpe
            på rette vej igen. Det kan jeg gøre ved at guide hunden over i den adfærd jeg ønsker at
            se. Hvis jeg bad om sit og ikke fik hvad jeg ønskede, kan jeg altid tage en godbid og
            vise hunden positionen ved at lokke den. Gør hunden noget den ikke må, så afbryder jeg
            ved at kalde og derefter vise hvad jeg så ønsker. Ansvaret som ejer er at vise hvad vi
            ønsker på en rolig, positiv og forstående måde og sørge for at bekræfte den adfærd vi
            kan lide at se.
          </Text>
          <Text>
            Ved at træne ud fra en belønningsbaseret tilgang lægger du fokus på at skabe samarbejde
            mellem dig og din hund, gør træningen motiverende, succesfuld og ikke mindst sjov!
          </Text>
          <Text>
            Den belønningsbaserede træningsmetode stammer fra de indlæringspsykologiske principper,
            og kaldes i teoretisk term for <b>positiv forstærkning.</b>
          </Text>
        </Column>
        {/* <Column>
          <Title text="Vil du vide mere?" showHorizontalRuler />
          <TitleColor text="Rejse med kæledyr?" smallTitle />
          <Text>
            <StyledLink to="/kontakt">Kontakt mig </StyledLink>
            for gode råd eller se mere på
            <StyledExternal href="https://www.stenaline.dk/dyr">
              Stenalines hjemmeside
            </StyledExternal>
            .
          </Text>
        </Column> */}
      </Row>
      <Row>
        <Title text="Uddybelse af forskellige træningsteknikker" showHorizontalRuler />
      </Row>
      <Row marginBottom="25px">
        <Column>
          <Image src={methodOne} />
          <TitleColor text="Forskel på indlæringsmetoder" smallTitle />
          <Text>
            Billedet ovenfor viser de fem forskellige konsekvenser, som følger adfærd (her vist med
            hund). I din hverdag med hunden er det vigtigt at lægge fokus på den grønne boks, hvor
            ønsket adfærd belønnes og der guides ved uønsket adfærd. Står du og træner din hund vil
            der helt lavpraktisk ske det, at din hund får en godbid når den gøre noget du kan lide
            at se. Sker det at den laver fejl, så får den ikke sin godbid (den mister noget godt).
            For at undgå frustration efter en fejl er det vigtigt at guide hunden til en succes, så
            den kan opnå sin belønning igen. Ved at anvende metoder i den grønne boks arbejder du i
            belønningscenteret af hjernen, som er forbundet med rare følelser. Da motiverer du din
            hund til yderligere at samarbejde, fordi du er rar at være sammen med, hvilket styrker
            tilliden mellem jer.
          </Text>
          <Text>
            Lægges fokus på at rette eller skælde ud på hunden når den viser en uhensigtsmæssig
            adfærd, så bevæger du dig ned i den røde boks. Ubehag kan være alt fra et hævet
            toneleje, streng og anspændt kropssprog til fysisk afstraffelse ved at rykke i linen
            eller slå. Bruger du sådanne metoder vil hunden forsøge at undgå at blive straffet, som
            kan ende ud med at den helt undgår dig. Træningen kan da blive endnu sværere at udføre.
            Ved at anvende metoder i den røde boks arbejder du i frygtcentret af hjernen, som er
            forbundet med negative følelser. Træning med negative følelser kan føre til at hunden
            begynder at udvise enten apatisk adfærd, aggression eller angst.
          </Text>
          <Text>
            Bruger du en blanding af at belønne når det går godt og skælde ud når det går skidt, så
            vil skældud og de negative følelser altid bære overvægt. Hunde, og såmænd også katte og
            heste, er instinktivt kodet til at overleve, derfor vil ubehag altid have første
            prioritet i at undgås, fremfor at fokusere på mad. Hvis straf derfor er en del af
            hverdagen, vil hunden begynde at betragte ros fra dig, som at den blot undgår straf
            denne gang. Du kan risikere at din hund i sidste ende ikke bliver motiveret på at få
            ros.
          </Text>
        </Column>
        <Column>
          <Image src={methodTwo} />
          <TitleColor text="Shaping: Form adfærd du kan lide" smallTitle />
          <Text>
            Shaping er formning af adfærd via trinvise tilnærmelser til denne adfærd. Man kan
            betragte det lidt som at gå op ad en trappe: For enden af trappen er dit mål og for
            hvert skridt op ad trappen nærmer du dig dit mål. Disse skridt, eller trin op ad
            trappen, betragtes som fremskridt når du er igang med at lære ny adfærd.
          </Text>
          <Text>
            Inddelingen af disse trappetrin skal defineres individuelt, da nogle hurtigt oplever
            fremskridt og forsåtelse for øvelsen, hvor andre har brug for mere tid. Det vigtigste er
            at tage den tid det tager, ellers kan en øvelse falde fra hinanden - svarende til at
            falde hele vjen ned ad trappen igen.
          </Text>
        </Column>
        <Column>
          <Image src={sabrinaAndBarney} />
          <TitleColor text="Markér korrekt adfærd!" smallTitle />
          <Text>
            For at træningen og hverdagens opdragelse skal være succesfuld og give fremskridt, så er
            det vigtig at tage en markør i brug. En markør kan være et rosende ord som f.eks.
            "dygtig" eller en klikker. Denne markør skal altid efterfølges af en belønning. Om det
            er mad, kæl eller legetøj der foretrækkes som beløning er meget individuelt.
          </Text>
          <Text>
            Din markør skal lyde idét du ser adfærd du ønsker at se mere af! Markøren signalerer til
            din hund, at den adfærd der blev markeret, skal den tilbyde mere af. Sørger du for altid
            at belønne efter markøren, så vil din hund motiveres til at forsætte med at tilbyde dig
            ønsket adfærd. Uønsket adfærd kan dermed gå i sig selv.
          </Text>
        </Column>
      </Row>
    </Background>
  </Page>
);

export default MyMethods;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
