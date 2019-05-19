import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { titleHr } from '../assets';
import Responsive from './layout/Responsive';

const Title = ({ text, color, showHorizontalRuler, columnTitle }) => (
  <StyledTitle color={color} showHorizontalRuler={showHorizontalRuler} columnTitle={columnTitle}>
    {text}
  </StyledTitle>
);

const StyledTitle = styled.h4`
  display: flex;
  color: ${props => props.color};
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.01);
  font-size: ${props => (props.columnTitle ? '18px' : '22px')};
  margin: 10px 0 10px 0;
  white-space: ${props => (props.showHorizontalRuler ? 'nowrap' : 'initial')};
  width: -webkit-fill-available;
  ${Responsive.media.phone`
    white-space: initial;
  `}
  &:after {
    background: url(${titleHr}) repeat;
    height: 5px;
    margin-left: 10px;
    width: -webkit-fill-available;
    content: '';
    align-self: center;
    display: ${props => (props.showHorizontalRuler ? '' : 'none')};
  }
`;

Title.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  showHorizontalRuler: PropTypes.bool,
  columnTitle: PropTypes.bool
};

Title.defaultProps = {
  color: '#666',
  showHorizontalRuler: false,
  columnTitle: false
};

export default Title;
