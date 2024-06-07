import React from 'react';
import styled from 'styled-components';

import {
  LandingpageOnline,
  Column,
  TitleCenter,
  Image,
  Row,
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
          <TitleCenter text="Snackshoppen åbner torsdag den 17. oktober 2024" />
          <TitleCenter text="På adressen Horsensvej 31, Nim, 8740 Brædstrup" />
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter color="#872f35" text="Vi ses til oktober!" />
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
