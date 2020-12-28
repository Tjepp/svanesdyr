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
  TitleColor,
  Text,
  BreadCrumps,
  Row,
  Image,
  StyledExternal,
  FlexedRow,
  TextContainer,
  Education2012,
  Education2013,
  Education2014,
  Education2015,
  Education2016,
  Education2017,
  Education2018,
  Education2019,
  Education2020,
  Education2021,
} from '../components';
import Responsive from '../components/layout/Responsive';
import { sabrinaNew, petbc } from '../assets';
import '../components/table/TableCss.css';

const About = () => (
  <Page>
    <Meta />
    <Banner text="Om Svanes Dyr v/Sabrina Svane">
      <BreadCrumps currentPage="Om mig" />
    </Banner>
    <Background>
      <Row marginTop="25px">
        <Column widthPercentage="65%">
          <Title text="Om Sabrina Svane" showHorizontalRuler />
          <FlexedRow>
            <Image src={sabrinaNew} width="210px" height="270px" />
            <TextContainer>
              <Text>
                Jeg hedder Sabrina Svane og er certificeret Dyreadfærdskonsulent (BSc ABT) ved
                Center for Dyreterapi i Hirtshals. Jeg bor i den skønne by Brædstrup, sammen med min
                mand Thor, vores dejlige huskatte Barney og Lily, samt lille Welsh Corgi Pembroke
                Gary.
              </Text>
              <Text>
                Jeg er opvokset på en gård udenfor Horsens by og har hele livet været omgivet af
                dyr, både igennem naturen og mit eget hold af kæledyr. Min største interesse har
                altid lagt i dyreriget og min hverdag med dyrene inspirerede mig til at uddanne mig
                og få større forståelse for deres adfærd.
              </Text>
              <Text>
                Min passion er at formidle min viden videre til andre og bidrage til større
                forståelse for dyr og deres behov. Mit ønske og håb er, at jeg kan bidrage til et
                liv i harmoni mellem ejere og deres kæledyr.
              </Text>
            </TextContainer>
          </FlexedRow>
        </Column>
        <Column>
          <Title text="Hurtige facts om mig" showHorizontalRuler />
          <TitleColor text="Certificeret Dyreadfærdskonsulent" />
          <Text>Officielle titel: "Bachelor of Sciences in Animal Behavior Therapy" (BSc ABT)</Text>
          <Text>
            <b>Træner og adfærdsbehandler</b> af alle slags dyr. Mit speciale er hunde og katte.
          </Text>
          <Text>
            Jeg bruger <b>belønningsbaserede træningsmetoder</b>. Baseret på indlæringspsykologiske
            principper.
          </Text>
          <Text>
            Du får <b>up-to-date rådgivning</b> da jeg deltager på kurser og efteruddannelse flere
            gange årligt.
          </Text>
        </Column>
      </Row>
      <Row>
        <Column widthPercentage="65%">
          <Title text="Mine uddannelser" showHorizontalRuler />
          <Text bold>Certificeret Dyreadfærdskonsulent siden den 30. maj 2014</Text>
          <Text>
            Som Dyreadfærdskonsulent specialiserer jeg mig i løsning af problemadfærd hos dyr og
            uddannelsen har givet mig en stor forståelse for indlæring og adfærd på tværs af alle
            dyrearter. Fokus har primært været hunde og heste, men det videnskabelige og teoretiske
            udgangspunkt har været for alle arter i dyreriget.
          </Text>
          <Text bold>Kurser i katteadfærd siden den 26. januar 2014.</Text>
          <Text>
            Udannelsen har haft fokus på kattens adfærd og natur og lagt meget vægt på menneskers
            hold af katte i dag. Under forløbet har jeg modtaget undervisning i sædvanlige
            adfærdsproblemer og dertilhørende løsningsmetoder.
          </Text>
          <Text bold>Certificeret Hestevelfærdsrådgiver siden den 7. januar 2012.</Text>
          <Text>
            Igennem denne uddannelse blev der lagt meget vægt på hestens anatomi, fysiologi og
            ernæring, samt den daglige brug. Forløbet har ligeledes fokuseret på forståelse for
            hestens adfærd og natur, samt positive træningsmetoder.
          </Text>
          <Text bold>Certificeret Hundeadfærdsinstruktør siden den 24. september 2011.</Text>
          <Text>
            Det primære fokus i uddannelsen har været hundens velfærd og en generel forståelse for
            hunde og deres sprog, hvilket giver en solid baggrund og grundviden til den daglige
            træning og omgang med hunden.
          </Text>
        </Column>
        <Column>
          <Title text="Om uddannelsesstedet" showHorizontalRuler />
          <Text>
            Mine uddannelser er taget ved Center for Dyreterapi i Hirtshals, som er den eneste i
            Danmark der er godkendt af den fælles europæiske organisation
            <StyledExternal href="https://www.petbc.org.uk/">
              PetBc (Pet Education, Training and Behaviour Council.
            </StyledExternal>
          </Text>
          <Text>
            Organisationen er dannet af eksperter, som kun godkender uddannelser, der har et højt
            fagligt niveau og følger de etiske regler for behandling af dyr.
          </Text>
          <Text>
            Uddannelserne ved Center for Dyreterapi har en bred teoretisk baggrund og varer længere
            end nogle andre uddannelser i Danmark. Den høje standard kommer af at alt undervisning
            er opbygget på baggrund af videnskabelige undersøgelser og indlæringspsykologiske
            principper.
          </Text>
          <Image src={petbc} width="100px" height="78px" />
        </Column>
      </Row>
      <Row marginBottom="25px">
        <Column widthPercentage="100%">
          <Title text="Andre kursusforløb" showHorizontalRuler />
          <Text>
            Udover mine uddannelser er jeg løbende på kurser, for at sikre mig, at jeg er helt
            opdateret på det nyeste indenfor adfærds- og træningsverdenen.
            <br />
            Du kan se nedenfor hvad jeg har deltaget i.
          </Text>
          <Education2021 />
          <Education2020 />
          <Education2019 />
          <Education2018 />
          <Education2017 />
          <Education2016 />
          <Education2015 />
          <Education2014 />
          <Education2013 />
          <Education2012 />
        </Column>
      </Row>
    </Background>
  </Page>
);

export default withRouter(About);

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
