import styled from 'styled-components';
import React from 'react';
import Responsive from '../layout/Responsive';
import { logoLightGrey } from '../../assets';

const LandingpageMenu = () => (
  <Background>
    <Bar>
      <CenteredA href="/">
        <Img src={logoLightGrey} alt="logo" />
      </CenteredA>
      <Title> Hello World </Title>
    </Bar>
  </Background>
);

export default LandingpageMenu;

const Background = styled.div`
  min-height: 150px;
  background: #1cb8b8;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Bar = styled.div`
  display: flex;
  z-index: 9999;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  ${Responsive.media.tablet`
    flex-direction: column;
    margin: 0; 
  `}
`;

const Img = styled.img`
  vertical-align: middle;
  border: 0;
  width: 220px;
  height: 130px;
  ${Responsive.media.tablet`
    align-self: center;
  `}
  margin-top: 5px;
  margin-bottom: 5px;
`;

const CenteredA = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  ${Responsive.media.tablet`
    align-self: center;
    position: unset;
  `}
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
`;
