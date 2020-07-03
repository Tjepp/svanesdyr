import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledMenuLinkWithIcon = ({link, text}) => (
  <StyledMenuItem>
    <FontAwesomeIcon icon="chevron-right" color="#000" size="1x" />
    <StyledMenuLink to={link}> {text}</StyledMenuLink>
  </StyledMenuItem>
)

const StyledMenuLink = styled(Link)`
  font-family: inherit;
  text-decoration: none;
  cursor: pointer;
  font-size: 1em;
  margin-left: 10px;
  color: #000;
  font-weight: bold; 
`;

const StyledMenuItem = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export default StyledMenuLinkWithIcon;
