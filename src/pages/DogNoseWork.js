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
  ContactPopUp,
  EasyMeList,
} from '../components';
import Responsive from '../components/layout/Responsive';
import DogMenu from '../components/menu/DogMenu';

const NoseWorkProgram = [
  'Introduktion til Nose Work konceptet: Godbidsmetoden',
  'Etablering af søgeglæde hos din hund',
  'Indlæring af selvstændigt søgearbejde hos hunden',
  'Generalisering af søg til varierende miljøer',
  'Indlæring af start- og stop rutiner ved søg',
  'Indlæring af lineføring og linehåndtering hos hundefører',
];

const NoseWorkBenefits = [
  'Personlig sparring omkring din hund og jeres samarbejde',
  'Hele 5 ugers træning med mødegang hveranden uge',
  'Max 3 andre holdkammerater, så der er god tid til dig og din hund',
  'Op til 15 min individuelt søg pr. gang, da vi mødes i 60 min pr. lektion',
  'Adgang til online bibilotek med skriftlige trin-for-trin guides, så det er let at øve hjemme',
  'Kaffe, te og varm kakao at nyde til timerne, til ventetiden, mens du ser de andre hunde være på',
];

const NoseWorkRequirements = [
  'Din hund skal være tryg ved at sidde og vente i bilen, da hundene er på én ad gangen',
  'Du skal have en 5-10 meter line med for at give hunden bevægemulighed under søgene',
];

const DogNoseWork = () => (
  <Page>
    <Banner text="Hundehold i Horsens">
      <BreadCrumps currentPage="Nose Work Intro" />
    </Banner>
    <Background>
      <Row marginTop="25px" marginBottom="45px">
        <Column widthPercentage="20%">
          <Title text="Udbud af hundehold" showHorizontalRuler />
          <DogMenu />
        </Column>
        <Column widthPercentage="75%">
          <Title text="Nose Work Introkursus" showHorizontalRuler />
          <Text>
            Elsker din hund at bruge næsen?
            <br />
            Leder du efter en sjov aktivitet, som kan trætte din hund godt og arbejdes med på selv
            kedelige regnvejrsdage?
            <br />
            Så er Nose Work sikkert lige noget for jer!
          </Text>
          <Text>
            Introduktion til Nose Work startes med at hunden skal lære at bruge sin snude og søge
            efter noget velkendt: dens godbidder. Der vil tages udgangspunkt i principperne for
            sporten, og vi vil udfordrer både hundene og jer mere undervejs, så de bliver gode til
            at bruge deres snude og bliver gradvist mere selvsikre på at lave søg i forskellige miljøer. Vi anvender på
            intet tidspunkt en anden duft på introholdet.
          </Text>
          <Text>
            Får du blod på tanden efter introkurset og vil i gang med at arbejde med søg på duft og
            ikke kun godbidder, så udbyder jeg fortsætterhold på efterspørgsel. Når din hund har
            fået etableret et selvstændigt søg, udvides opgaven til at hunden skal finde frem til
            lavendelduft, som er den officielle Nose Work konkurrenceduft for begynderklassen.
          </Text>
          <Text>
            <b>Krav til deltagelse</b>
            <br />
            For at kunne deltage på Nose Work Intro skal følgende være opfyldt:
          </Text>
          <TextList texts={NoseWorkRequirements} />
          <Text>
            <b>Træningsprogram for holdet</b>
            <br />I løbet af vores 5 uger sammen vil vi komme gennem følgende:
          </Text>
          <TextList texts={NoseWorkProgram} />
          <Text>
            <b>Hvad kan du forvente at få med?</b>
            <br />
            Ved deltagelse på Nose Work Intro får du:
          </Text>
          <TextList texts={NoseWorkBenefits} />
          <Text>
            Bemærk at vi mødes <b>hver 14. dag</b> på dette hold, så der er god tid til at få trænet
            mellem hver lektion.
          </Text>
          <br />

          <Title text="Holdstart for Nose Work" showHorizontalRuler />
          <TitleColor text="Din investering: 1195 kr." />
          <Text>i at få en søgeglad hund, som aktivt og selvstændigt kan bruge næsen!</Text>
          <br />
          <EasyMeList src="https://ezme.io/x/x1S/Lxox" />
          <br />
          {/* <Title text="Hold startes op på efterspørgsel." /> */}
          <Text>
            Oplever du holdene er fyldt op, eller søger du holdstart på et andet tidspunkt skriver
            jeg dig hjertens gerne på venteliste til næste ledige plads. Blot smid mig en besked om
            dit holdønske her:
          </Text>
          <ContactPopUp text="Ja tak! Skriv mig på venteliste" />

          <br />
        </Column>
      </Row>
    </Background>
  </Page>
);

export default DogNoseWork;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
