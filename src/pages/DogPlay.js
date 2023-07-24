/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

import {
  Page,
  Banner,
  Column,
  MetaDogPlay,
  Title,
  TitleColor,
  Text,
  BreadCrumps,
  Row,
  TextList,
  Image,
  EasyMeList,
  StyledLink,
} from '../components';
import Responsive from '../components/layout/Responsive';
import DogMenu from '../components/menu/DogMenu';
import {
  PlayOne,
  PlayTwo,
  PlayThree,
  PlayFour,
  PlayFive,
  PuppyContinuedFive,
  PlaySeven,
  PlayEight,
  PlayNine,
} from '../assets';

const PlayBenefits = [
  'Indsigt i hvad der er passende leg',
  'Viden om signaler der gives, når din eller en anden hund siger stop',
  'Redskaber til at kontrollere legen, så alle får en god oplevelse',
  'Kontrollerede forhold med en adfærdsspecialist på sidelinjen',
  'Hele 45 min. med social hygge to- og firbenede mellem',
];

const PlayTypes = [
  'Små racer: Max skulderhøjde 30 cm.',
  'Mellemstore racer: Skulderhøjde fra 30 - 60 cm.',
  'Store racer: Skulderhøjde fra 60 cm og opefter',
];

const PlayRoom = [
  'Små racer: Max 10 hunde',
  'Mellemstore racer: Max 8 hunde',
  'Store racer: Max 6 hunde',
];

const DogPlay = () => {
  return (
    <Page>
      <MetaDogPlay />
      <Banner text="Hundehold i Horsens">
        <BreadCrumps currentPage="Legestue" />
      </Banner>
      <Background>
        <Row marginTop="25px" marginBottom="45px">
          <Column widthPercentage="20%">
            <Title text="Udbud af hundehold" showHorizontalRuler />
            <DogMenu />
          </Column>
          <Column widthPercentage="75%">
            <Title text="Hundelegestue i Horsens" showHorizontalRuler />
            <Text>
              Ønsker du positive oplevelser i samvær med andre hunde, for din hvalp, unghund eller
              voksne snude, så er du kommet til rette sted!
            </Text>
            <Text>
              Legestuen henvender sig til alle hunde i alle aldre, uanset race. Jeg lægger vægt på
              den enkelte hunds ønsker til social omgang med de andre hunde. Hundene bliver derfor
              matchet med hinanden alt efter lyst og legestil.
            </Text>
            <Text>
              <b>Bemærk: </b>
              Legestuen henvender sig til hunde der er glade for andre hunde, eller måske lidt
              forsigtige og lige skal se an før de tør op. Hunde der reagerer med at gø, knurre
              eller være udfarende overfor andre hunde passer ikke ind i legestuen, men er velkommen
              på <StyledLink to="/hundehold/socialisering"> socialiseringsholdet</StyledLink> i
              stedet.
            </Text>
            <Text>
              <b>Kontrolleret leg og socialisering</b>
              <br />
              Kontrolleret leg indebærer et mål om at alle får en god oplevelse med hjem, så der vil
              altid tages hensyn til den enkelte hund. Oftest startes legetiden ud med at to hunde
              lukkes sammen ad gangen, således de kan få lov til at se hinanden an. Dette gør det
              nemt at afbryde legen, hvis det bliver for meget for den ene hund, eller de har brug
              for en pause.
            </Text>
            <Text>
              Din hund har sin egen personlighed og sin egen præference for leg. Nogle kan godt lide
              at løbe og jage, andre elsker at bryde og være voldsom. Derfor sættes legetiden altid
              op, så vi kan se hvilke hunde der passer bedst sammen i legestil.
            </Text>
            <Text>
              Kontrolleret leg giver god mulighed for at tage hensyn til den enkelte hund, og
              samtidig får du indsigt i hvad der er passende leg mellem hundene og hvilke signaler
              der gives, når din eller en anden hund siger stop.
            </Text>
            <Text>
              <b>Hvad kan du forvente at få med?</b>
              <br />
              Ved deltagelse til en legestue får du:
            </Text>
            <TextList texts={PlayBenefits} />

            <Text>
              <b>Inddeling af racer</b>
              <br />
              For at alle snuder får en succesfuld oplevelse i samværet med andre, bliver
              legestuerne inddelt efter størrelse. Derfor skal du vælge den legestue der passer til
              din hund, efter dens højde. Har du en lille hvalp, som ender med at blive en stor
              race, skal du tage udgangspunkt i dens nuværende højde når du tilmelder den.
            </Text>
            <Text>
              Legestuerne inddeles i 3 typer:
              <TextList texts={PlayTypes} />
            </Text>

            <Text>
              <b>Antal pladser til legestuerne</b>
              <br />
              For at forholdene er kontrollerede er der begrænsning på hvor mange pladser hver legestue har til rådighed pr. gang:
              <TextList texts={PlayRoom} />
            </Text>
            

            <br />
            <Title text="Datoer for legestuer" showHorizontalRuler />
            <TitleColor text="Din investering: 100 kr." />
            {/* <TitleColor text="Sommerlegestuerne varer dobbelt så lang tid og her vil din investering blive: 175 kr." /> */}
            <Text>i at få en hyggelig stund i positivt samspil med andre hunde!</Text>
            <Text italic>Bemærk betaling er bindende og beløb refunderes ikke.</Text>
            <br />
            <Title text="Kommende legestuer:" />
            <EasyMeList src="https://ezme.io/x/x1S/knhZ" />

            <br />
            <Title text="Billeder fra legestuerne i Horsens" showHorizontalRuler />
            <Row>
              <Column>
                <Image src={PlayOne} />
              </Column>
              <Column>
                <Image src={PlayTwo} />
              </Column>
              <Column>
                <Image src={PlayThree} />
              </Column>
            </Row>
            <Row>
              <Column>
                <Image src={PlayFour} />
              </Column>
              <Column>
                <Image src={PlayFive} />
              </Column>
              <Column>
                <Image src={PuppyContinuedFive} />
              </Column>
            </Row>
            <Row>
              <Column>
                <Image src={PlaySeven} />
              </Column>
              <Column>
                <Image src={PlayEight} />
              </Column>
              <Column>
                <Image src={PlayNine} />
              </Column>
            </Row>
          </Column>
        </Row>
      </Background>
    </Page>
  );
};

export default DogPlay;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
