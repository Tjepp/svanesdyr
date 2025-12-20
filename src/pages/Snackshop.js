import React from 'react';
import styled from 'styled-components';

import {
  LandingpageOnline,
  Column,
  TitleCenter,
  Image,
  Row,
  Text,
  TextList,
  TextListMark,
} from '../components';
import Responsive from '../components/layout/Responsive';
import { SnackshopCover } from '../assets';
import '../components/table/TableCss.css';

const AllDogs = [
  'Velegnet til hvalpen og hvalpetænderne',
  'Med god tyggetid til den voksne hund ',
  'Eller de ekstra robuste, til de heftige gnavere der savner ekstra lang tyggetid',
];

const Allergy = [
  'Lam',
  'Kanin',
  'Hest',
];

const Snacks = [
  'Buffalo',
  'Okse',
  'Ged',
  'Hjort og Rådyr',
  'Vildsvin',
  'Gris',
  'Kamel',
  'Kylling',
];

const Snackshop = () => (
  <LandingpageOnline>
    <Background>
      <Row>
        <Column widthPercentage="100%">
          <Image src={SnackshopCover} />
          <br />
          <TitleCenter text="Snackshoppen kan besøges på adressen Horsensvej 31, Nim, 8740 Brædstrup" />
          <Text>
            Snackshoppen er en lille, intim gårdbutik i udkanten af Nim, med et stort udvalg af naturlige, tørrede snacks og godbidder til din bedste ven.
            <br />
            Du finder over 85 forskellige typer af snacks, hvor du blandt udvalget sagtens kan finde tyggesager der er:
            <TextListMark texts={AllDogs} />
            Find desuden lige den smagsvariant din hund er fan af eller bedst kan tåle!
            <br />
            Udvalget består både af allergivenlige snacks i form af:
            <TextList texts={Allergy} />
            Og et større udvalg af:
            <TextList texts={Snacks} />
            Snackposerne kommer desuden med tydelig EU-mærkat og markering, så du kan se hvor i verden godterne kommer fra og kan shoppe løs med ro i maven.
          </Text>
          {/* <TitleCenter text="Snackshoppens åbningstider er den første fredag i måneden kl. 12.00 - 17.00" /> */}
          <TitleCenter text="Snackshoppens næste åbningsdag er: fredag den 2. januar 2026 fra kl. 12.00 - 17.00" />
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter color="#872f35" text="Siden her er under opbygning og vil i fremtiden vise Snackshoppens udvalg." />
          <TitleCenter color="#872f35" text="Snackshoppen er en fysisk butik og ikke en webshop" />
        </Column>
      </Row>

      <br />
      <br />
    </Background>
  </LandingpageOnline>
);

export default Snackshop;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
