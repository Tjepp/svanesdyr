/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

import {
  Page,
  Banner,
  Column,
  MetaDogCircle,
  Title,
  TitleColor,
  Text,
  BreadCrumps,
  Row,
  TextList,
  Image,
  ContactPopUp,
  EasyMeList,
} from '../components';
import Responsive from '../components/layout/Responsive';
import DogMenu from '../components/menu/DogMenu';
import {
  PuppyContinuedThree,
  TricksTwo,
  TricksThree,
  TricksFour,
  CoolAgainSix,
  TricksSix,
} from '../assets';

const CircleInfo = [
  'Der vil være mellem 8-10 små stationer sat op på forhånd ved fremmøde',
  'Hver station har en bestemt opgave og altså en specifik øvelse for dig og din hund',
  'Opgaverne kan være blandet mellem lydighed, selvkontrol, kropskontrol og empowerment',
  'Hver station vil have en varighed på 5 minutter til at lege med opgaven',
  'Når uret ringer efter 5 minutter bevæger du dig til næste station og næste opgave',
  'Vi vil træne 45 - 60 minutter, indtil snuderne er trætte',
];

const CircleBenefits = [
  'Inspiration til træning hjemme med sjove øvelser og udfordringer',
  'En fast ugedag afsat til selskab med din elskede snude',
  'Hele 7 ugers træning med ugentligt møde',
  'Max 5 andre hyggelige holdkammerater, så der er god tid til dig',
];

const DogCircle = () => (
  <Page>
    <MetaDogCircle />
    <Banner text="Hundehold i Horsens">
      <BreadCrumps currentPage="Cirkeltræning" />
    </Banner>
    <Background>
      <Row marginTop="25px" marginBottom="45px">
        <Column widthPercentage="20%">
          <Title text="Udbud af hundehold" showHorizontalRuler />
          <DogMenu />
        </Column>
        <Column widthPercentage="75%">
          <Title text="Cirkeltræning for tidligere kursister hos Svanes Dyr" showHorizontalRuler />
          <Text>
            Vil du bare gerne fortsætte træningen og det gode samarbejde med din hund?
            <br />
            Søger du intet specifikt, men blot en mulighed for at have en fast dag om ugen sammen
            med din elskede snude?
            <br />
            Så er cirkeltræning det rette hold for dig!
          </Text>
          <TitleColor text="Bemærk: Holdet udbydes som udgangspunkt kun til tidligere kursister" />
          <Text>
            Dette skyldes at vi bruger klikkerprincipper og øvelser tidligere indlært via mine andre
            holdforløb. Det forventes desuden at hunden kan holde kontakt og ro, selv med andre
            snuder tæt på, så i kan dukke op og gå i gang med leg straks ved ankomst.
          </Text>
          <br />
          <Text bold>Cirkeltræningen tager udgangspunkt i konceptet fra fitnesscentrene:</Text>
          <TextList texts={CircleInfo} />
          <Text>
            Der forelægger intet fast program for holdet fra gang til gang med hvad vi vil gennemgå.
            Holdet køres udelukkende på inspiration og "dagens humør" fra træneren, derfor er
            individuelle ønsker også hjertens velkomne.
          </Text>
          <Text>
            <b>Hvad kan du forvente at få med?</b>
            <br />
            Ved deltagelse på holdet får du:
          </Text>
          <TextList texts={CircleBenefits} />
          <br />

          <Title text="Holdstart for Cirkeltræning" showHorizontalRuler />
          <TitleColor text="Din investering: 1095 kr." />
          <Text>i at styrke dig og din hunds samarbejde, med inspiration til ugentlig træning</Text>
          <Text italic>Bemærk betaling er bindende og beløb refunderes ikke.</Text>
          <br />
          <Title text="Kommende hold:" />
          <EasyMeList src="https://ezme.io/x/x1S/k3EK" />
          <br />
          <Text>
            Oplever du holdene er fyldt op, eller søger du holdstart på et andet tidspunkt skriver
            jeg dig hjertens gerne på venteliste til næste ledige plads. Blot smid mig en besked om
            dit holdønske her:
          </Text>
          <ContactPopUp text="Ja tak! Skriv mig på venteliste" />
          <br />
          <br />

          <Title text="Stemningsbilleder fra holdene" showHorizontalRuler />
          <Row>
            <Column>
              <Image src={PuppyContinuedThree} />
            </Column>
            <Column>
              <Image src={TricksTwo} />
            </Column>
            <Column>
              <Image src={TricksThree} />
            </Column>
          </Row>
          <Row>
            <Column>
              <Image src={TricksFour} />
            </Column>
            <Column>
              <Image src={CoolAgainSix} />
            </Column>
            <Column>
              <Image src={TricksSix} />
            </Column>
          </Row>
        </Column>
      </Row>
    </Background>
  </Page>
);

export default DogCircle;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
