import styled from 'styled-components';
import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Responsive from '../layout/Responsive';
import { logo } from '../../assets';
import LargeMenu from './LargeMenu';
import SmallMenu from './SmallMenu';

class Menu extends Component {
  state = {
    showSidebar: false
  };

  toggleShowSideBar = () => {
    const { showSidebar } = this.state;

    this.setState({ showSidebar: !showSidebar });
  };

  render() {
    const { showSidebar } = this.state;
    return (
      <Background>
        <Bar>
          <CenteredA href="/">
            <Img src={logo} alt="logo" />
          </CenteredA>
          <MenuItemContainer>
            <MediaQuery minWidth={Responsive.sizes.tablet}>
              {matches =>
                matches ? (
                  <LargeMenu />
                ) : (
                  <SmallMenu onClick={this.toggleShowSideBar} showSidebar={showSidebar} />
                )}
            </MediaQuery>
          </MenuItemContainer>
        </Bar>
      </Background>
    );
  }
}

export default Menu;

const Background = styled.div`
  min-height: 90px;
  background: #333d46;
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

const MenuItemContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-items: flex-end;
  ${Responsive.media.tablet`
    flex-direction: column;
  `}
`;

const Img = styled.img`
  vertical-align: middle;
  border: 0;
  width: 285px;
  height: 90px;
  ${Responsive.media.tablet`
    align-self: center;
  `}
`;

const CenteredA = styled.a`
  ${Responsive.media.tablet`
    align-self: center;
  `}
`;
