import React from 'react';
import styled from 'styled-components';

import {
  LandingpageOnline,
  Column,
  TitleCenter,
  Image,
  Row,
  Text,
} from '../components';
import Responsive from '../components/layout/Responsive';
import { SnackshopCover } from '../assets';
import '../components/table/TableCss.css';

const Snackshop = () => (
  <LandingpageOnline>
    <Background>
      <Row>
        <Column widthPercentage="100%">
          <Image src={SnackshopCover} />
          <br />
          <TitleCenter text="Snackshoppen åbner fredag den 7. november kl. 12.00 - 17.00" />
          <TitleCenter text="På adressen Horsensvej 31, Nim, 8740 Brædstrup" />
          <Text>
            Snackshoppen er en lille, intim gårdbutik i udkanten af Nim, med et stort udvalg af naturlige, tørrede snacks og godbidder til din bedste ven
          </Text>
          <TitleCenter text="Snackshoppens åbningstider er den første fredag i måneden kl. 12.00 - 17.00" />
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
