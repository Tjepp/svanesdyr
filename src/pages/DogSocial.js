/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

import {
  Page,
  Banner,
  Column,
  Title,
  TitleColor,
  Text,
  BreadCrumps,
  Row,
  TextList,
  Image,
  StyledLink,
  ContactPopUp,
  EasyMeList,
} from '../components';
import Responsive from '../components/layout/Responsive';
import DogMenu from '../components/menu/DogMenu';
import {
  PlayOne,
  PlayTwo,
  PlayThree,
  PlayFour,
  PlayFive,
  PlaySix,
  PlaySeven,
  PlayEight,
  PlayNine,
} from '../assets';
import MetaDogSocial from '../components/meta/MetaDogSocial';

const SocialProgram = [
  'Pauseknappen, så hunden kan falde til ro, når du er i ro',
  'Kontaktlege, som sikrer dig, at DU altid er interessant',
  'Positiv socialisering, så nye snuder og mennesker kan mødes med selvtillid',
  'Kontrollerede hilsemøder, så din hund lære at hilse roligt uden at trække i snoren',
  'Kontrolleret leg, så din hund lære at forstå hundesproget',
];

const SocialBenefits = [
  'Indsigt i hvad der er passende leg',
  'Viden om signaler der gives, når din eller en anden hund siger stop',
  'Redskaber til at kontrollere legen, så alle får en god oplevelse',
  'Socialisering med forskellige størrelser',
  'Kontrollerede forhold med en træner på sidelinjen',
  'Øvelse i at finde ro nær andre hunde',
  'Ugentligt samvær med 7 andre snuder',
];

const DogSocial = () => {
  return (
    <Page>
      <MetaDogSocial />
      <Banner text="Hundehold i Horsens">
        <BreadCrumps currentPage="Socialiseringshold" />
      </Banner>
      <Background>
        <Row marginTop="25px" marginBottom="45px">
          <Column widthPercentage="20%">
            <Title text="Udbud af hundehold" showHorizontalRuler />
            <DogMenu />
          </Column>
          <Column widthPercentage="75%">
            <Title text="Socialiseringshold i Horsens" showHorizontalRuler />
            <Text>
              Ønsker du at skabe en tillidsfuld, velsocialiseret hund der har masser af gåpåmod og
              ro i mødet med nye snuder, så er du kommet til rette sted!
            </Text>
            <Text>
              Socialiseringsholdet henvender sig til alle hunde i alle aldre og racer, helt ned fra
              8 uger gammel og op til senior, fra den mindste pote til den største bamse.
            </Text>
            <Text>
              Jeg lægger vægt på at lære hundene at være sammen med andre hunde, uden at blive for
              voldsom og med fokus på at aflæse hinandens signaler. Derfor vil vi skifte mellem at
              øve ro blandt andre snuder, samt hilsemøder og kontrolleret leg.
            </Text>
            <Text>
              <b>Kontrolleret leg</b> indebærer et mål om at alle får en god oplevelse med hjem, så
              der vil altid tages hensyn til den enkelte hund. Din hund har sin egen personlighed og
              sin egen præference for leg. Nogle kan godt lide at løbe og jage, andre elsker at
              bryde og være voldsom. Derfor sættes legetiden altid op, så vi kan se hvilke hunde der
              passer bedst sammen i legestil.
            </Text>
            <Text>
              Vi vil starte ud med at sætte hundene sammen 2og2, og finde ud af hvem der matcher
              hinanden. Der roteres undervejs, så hundene skiftevis er på og får en pause. Dermed
              bliver det også muligt at øve ro og afslapning, nær andre legene hunde. Alt er med
              vejledning fra din træner, både i hundesproget og roen omkring andre.
            </Text>
            <Text>
              <b>Program for holdet</b>
              <br />I løbet af vores 4 møder sammen vil vi komme igennem følgende:
            </Text>
            <TextList texts={SocialProgram} />
            <Text>
              <b>Hvad kan du forvente at få med?</b>
              <br />
              Ved deltagelse på Socialiseringsholdet får du:
            </Text>
            <TextList texts={SocialBenefits} />
            <Text>
              Al træning foregår med{' '}
              <StyledLink to="/minemetoder"> belønningsbaserede træningsmetoder</StyledLink>, hvor
              vi bruger klikker eller "dygtig" til at markere korrekt adfærd og belønner hunden med
              mad. Hvis din hund laver fejl hjælper vi den ved at gøre opgaven nemmere og mere
              letforståelig. Alle bliver sat op til succes.
            </Text>
            <br />
            <Title text="Holdstart for Socialiseringsholdet" showHorizontalRuler />
            <TitleColor text="Din investering: 550 kr." />
            <Text>
              i at få en imødekommende og selvsikker familiehund, der snildt kan finde ro blandt
              andre snuder!
            </Text>
            <Text italic>Bemærk betaling er bindende og beløb refunderes ikke.</Text>
            <br />
            <Title text="Kommende hold:" />
            <EasyMeList src="https://ezme.io/x/x1S/k3z0" />
            <br />
            <Text>
              Oplever du holdene er fyldt op, eller søger du holdstart på et andet tidspunkt skriver
              jeg dig hjertens gerne på venteliste til næste ledige plads. Blot smid mig en besked
              om dit holdønske her:
            </Text>
            <ContactPopUp text="Ja tak! Skriv mig på venteliste" />
            <br />
            <br />
            <Title text="Billeder fra Socialiseringshold Horsens" showHorizontalRuler />
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
                <Image src={PlaySix} />
              </Column>
            </Row>
          </Column>
        </Row>
      </Background>
    </Page>
  );
};

export default DogSocial;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
