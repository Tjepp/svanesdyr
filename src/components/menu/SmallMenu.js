import React, { Fragment } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import SmallMenuItem from './SmallMenuItem';

const SmallMenu = ({ onClick, showSidebar }) => (
  <Fragment>
    <MenuButton onClick={onClick}>
      <FontAwesomeIcon icon="bars" color="#fff" size="1x" />
    </MenuButton>
    <CollapsibleMenu showSidebar={showSidebar}>
      <SmallMenuItem url="/dogcourse" text="Hundehold" />
      <SmallMenuItem url="/dog" text="Hund" />
      <SmallMenuItem url="/horse" text="Hest" />
      <SmallMenuItem url="/cat" text="Kat" />
      <SmallMenuItem url="/lecture" text="Foredrag" />
      <SmallMenuItem url="/about" text="Om Mig " />
      <SmallMenuItem url="/mymethods" text="Mine metoder" />
      <SmallMenuItem url="/contact" text="Kontakt" />
    </CollapsibleMenu>
  </Fragment>
);

SmallMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
  showSidebar: PropTypes.bool.isRequired
};

export default SmallMenu;

const CollapsibleMenu = styled.div`
  height: ${props => (props.showSidebar ? '344px' : '0')};
  width: 100%;
  overflow: hidden;
  transition: all 0.5s ease-out;
`;

const MenuButton = styled.button`
  background-color: #008080;
  padding: 0.625rem 0.75rem;
  border-radius: 3px;
  margin-bottom: 1rem;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
`;
