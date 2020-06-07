import styled from 'styled-components';
import React, { Component } from 'react';
import Responsive from '../layout/Responsive';
import { logoLightGrey } from '../../assets';

class LandingpageMenu extends Component {
  render() {
    
    return (
      <Background>
        <Bar>
          <CenteredA href="/">
            <Img src={logoLightGrey} alt="logo" />
          </CenteredA>
        </Bar>
      </Background>
    );
  }
}

export default LandingpageMenu;

const Background = styled.div`
  min-height: 150px;
  background: #1cb8b8;
  display: flex;
  justify-content: center;
`;

const Bar = styled.div`
  display: flex;
  z-index: 9999;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
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
  ${Responsive.media.tablet`
    align-self: center;
  `}
`;
