import React, { Fragment } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import SmallMenuItem from './SmallMenuItem';

const SmallMenu = ({ onClick, showSidebar }) => (
  <>
    <MenuButton onClick={onClick}>
      <FontAwesomeIcon icon="bars" color="#fff" size="1x" />
    </MenuButton>
    <CollapsibleMenu showSidebar={showSidebar}>
      <SmallMenuItem url="/hundehold" text="Hundehold" />
      <SmallMenuItem url="/onlinekurser" text="Onlinekurser" />
      <SmallMenuItem url="/hundetraening" text="Hund" />
      {/* <SmallMenuItem url="/hestetraening" text="Hest" /> */}
      <SmallMenuItem url="/kattetraening" text="Kat" />
      <SmallMenuItem url="/foredrag" text="Foredrag" />
      <SmallMenuItem url="/dyreadfaerdskonsulent" text="Om Mig " />
      <SmallMenuItem url="/minemetoder" text="Mine metoder" />
      <SmallMenuItem url="/kontakt" text="Kontakt" />
    </CollapsibleMenu>
  </>
);

SmallMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
  showSidebar: PropTypes.bool.isRequired,
};

export default SmallMenu;

const CollapsibleMenu = styled.div`
  height: ${(props) => (props.showSidebar ? '300px' : '0')};
  width: 100%;
  overflow: hidden;
  transition: all 0.5s ease-out;
`;

const MenuButton = styled.button`
  background-color: #379683;
  padding: 0.625rem 0.75rem;
  border-radius: 3px;
  margin-bottom: 1rem;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
`;
