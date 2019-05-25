import React, { Fragment } from 'react';
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
  TextList
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
      <Row>
        <Column widthPercentage="62%">
          <Title text="Om Sabrina Svane" showHorizontalRuler />
          <FlexRow>
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
                og få større forståelse for deres adfærd, såvel som velfærd.
              </Text>
              <Text>
                Min passion er at formidle min viden videre til andre og bidrage til større
                forståelse for dyr og deres behov. Mit ønske og håb er, at jeg kan bidrage til et
                liv i harmoni mellem ejere og deres kæledyr.
              </Text>
            </TextContainer>
          </FlexRow>
        </Column>
        <Column>
          <Title text="Hurtige facts om mig" showHorizontalRuler />
          <Text color="#33CCCC" bold>
            Certificeret Dyreadfærdskonsulent
          </Text>
          <Text>Officielle titel: "Bachelor of Sciences in Animal Behavior Therapy" (BSc ABT)</Text>
          <Text bold>Træner og adfærdsbehandler</Text>
          <Text>Af alle slags dyr.</Text>
          <Text>Speciale i hunde, heste og katte.</Text>
          <Text bold>Træningsmetoder</Text>
          <Text>Jeg benytter belønningsbaserede træningsmetoder.</Text>
          <Text>Baseret på indlæringspsykologiske principper.</Text>
          <Text bold>Up-to-date rådgivning</Text>
          <Text>Jeg deltager på kursuser flere gange årligt.</Text>
        </Column>
      </Row>
      <Row>
        <Column widthPercentage="62%">
          <Title text="Mine uddannelser" showHorizontalRuler />
          <Text bold>Certificeret Dyreadfærdskonsulent siden den 30. maj 2014</Text>
          <Text>
            Som Dyreadfærdskonsulent specialiserer jeg mig i løsning af problemadfærd hos dyr og
            uddannelsen har givet mig en stor forståelse for indlæring og adfærd på tværs af alle
            dyrearter. Fokus har primært været hunde og heste, men det videnskabelige og teoretiske
            udgangspunkt har været for alle arter i dyreriget.
          </Text>
          <Text bold>Kursuser i katteadfærd siden den 26. januar 2014.</Text>
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
      <Row>
        <Column widthPercentage="100%">
          <Title text="Andre kursusforløb" showHorizontalRuler />
          <Text>
            Udover mine uddannelser er jeg løbende på kursuser, for at sikre mig, at jeg er helt
            opdateret på det nyeste indenfor adfærds- og træningsverdenen.
          </Text>
          <Text>Du kan se nedenfor hvad jeg har deltaget i.</Text>
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

const Education2018 = () => (
  <Fragment>
    <Title text="Kursuser 2018" smallTitle color="#33CCCC" />
    <Text bold>Christina Ingerslev</Text>
    <Text bold>Chirag Patel</Text>
    <Text bold>Lise Bang Hansen</Text>
  </Fragment>
);

const Education2017 = () => (
  <Fragment>
    <Title text="Kursuser 2017" smallTitle color="#33CCCC" />
    <Text bold>Karen Frost</Text>
    <Text bold>Nordsøen Oceanarium - Praktik</Text>
    <Text bold>Jan Østergaard</Text>
  </Fragment>
);

const Education2016 = () => (
  <Fragment>
    <Title text="Kursuser 2016" smallTitle color="#33CCCC" />
    <Text bold>Magtor</Text>
    <Text bold>Jan Østergaard</Text>
    <Text bold>ClickerExpo DK - 2016</Text>
    <Text bold>Dr. Susan Friedman</Text>
  </Fragment>
);

const Education2015 = () => (
  <Fragment>
    <Title text="Kursuser 2015" smallTitle color="#33CCCC" />
    <Text bold>Ádám Miklósi</Text>
    <Text>Weekendkursus den 17.-18. oktober 2015, omhandlende: ”The Family Dog Project”</Text>
    <Text>
      Miklósi er medstifter af ”The Family Dog Project” i Budapest, Ungarn. Projektet har til formål
      at undersøge det evolutionære og etologiske fundament for hund-menneske relationen. Interessen
      ligger ikke kun i at undersøge hundens mentale formåen, men i alle aspekter af hundes og
      menneskers adfærd der har styrket båndet mellem de to arter.
    </Text>
  </Fragment>
);

const expo2014One = [
  'Ken Ramirez med "Big and Tall, Round or Small? Modifier Cues & How To Teach Them!" ',
  'Kay Laurence med "Do you see what I see? The Benefits of Keen Behavioral Observation" ',
  'Karen Pryor med "Hidden Aversives - Drawbacks of Negative Reinforcement and Extinction"'
];

const expo2014Two = [
  'Michele Pouliot med "Better, Faster, Smarter - Competition Training with Platforms" ',
  'Michele Pouliot med "Pace, Place & More - Strategic Reinforcement Delivery" ',
  'Eva Bertilsson og Emelie Johnson-Vegh med "Rewards Ends, Then What?"'
];

const expo2014Three = [
  `Eva Bertilsson og Emelie Johnson-Vegh med "Let's Make some Noise! Techniques to Build Your Dog's Confidence" `,
  'Michele Pouliot med "Hold it, Get it, Bring it, Give it! The Multi-Purpose Clicked Retrieve" ',
  'Ken Ramirez med "Aggression Treatment & Context"'
];

const Education2014 = () => (
  <Fragment>
    <Title text="Kursuser 2014" smallTitle color="#33CCCC" />
    <Text bold>ClickerExpo UK - Europe 2014</Text>
    <i>Konference den 17. oktober:</i>
    <br />
    <TextList texts={expo2014One} />
    <i>Konference den 18. oktober:</i>
    <br />
    <TextList texts={expo2014Two} />

    <i>Konference den 19. oktober:</i>
    <br />
    <TextList texts={expo2014Three} />

    <Text bold>Anders Hallgren</Text>
    <Text>Seminar den 28. september 2014: "Stress hos hunde".</Text>
  </Fragment>
);

const Education2013 = () => (
  <Fragment>
    <Title text="Kursuser 2013" smallTitle color="#33CCCC" />
    <Text bold>Ken Ramirez</Text>
    <Text>Weekendkursus den 23.-24. november 2013, med emnerne:</Text>
    <Text>
      "Non-Food Reinforcers" og "Concept Training" (Modifier Cues, Adduction, and Mimicry), "Common
      Trainer Mistakes and Errors", "Non-formal Interactions", "Social Animals - Working with more
      than One Animal" og "Handling Animal Mistakes".
    </Text>
    <Text>
      Seminar den 22. november 2013: "How Exotic Animals Taught me to be a Better Dog Trainer".
    </Text>
  </Fragment>
);

const Education2012 = () => (
  <Fragment>
    <Title text="Kursuser 2012" smallTitle color="#33CCCC" />
    <Text bold>Ray Coppinger</Text>
    <Text>
      Weekendkursus den 8.-9. september 2012: "The evolution of dogs and behavior of the dogs".
    </Text>
    <Text bold>Christa fra Tellington TTouch</Text>
    <Text>Weekendkursus den 31. august-1. september 2012: "TTouch training and massage".</Text>
    <Text bold>Kathy Sdao</Text>
    <Text>Weekendkursus den 4.-5. juli 2012: "Cues and behavior chains".</Text>
    <Text bold>Marc Pierard</Text>
    <Text>Seminar den 23. marts 2012: "Nøglen til succesfuld træning" af heste.</Text>
  </Fragment>
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

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  ${Responsive.media.tablet`
    flex-direction: column;
  `}
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  ${Responsive.media.tablet`
    margin-left: 0px;
  `}
`;
