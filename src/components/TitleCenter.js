import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { titleHr } from '../assets';
import Responsive from './layout/Responsive';

const TitleCenter = ({ text, color, showHorizontalRuler, smallTitle }) => (
  <StyledTitle color={color} showHorizontalRuler={showHorizontalRuler} smallTitle={smallTitle}>
    {text}
  </StyledTitle>
);

const StyledTitle = styled.h4`
  color: ${(props) => props.color};
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.01);
  font-size: ${(props) => (props.smallTitle ? '18px' : '22px')};
  margin: 10px 0 10px 0;
  width: 100%;
  font-weight: normal;
  &:after {
    background: url(${titleHr}) repeat;
    height: 5px;
    margin-left: 0px;
    width: -webkit-fill-available;
    content: '';
    display: ${(props) => (props.showHorizontalRuler ? 'block' : 'none')};
  }
  ${Responsive.media.tablet`
  margin-left: 0px;
  margin-top: 25px;
  text-align: center;
  `}
`;

TitleCenter.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  showHorizontalRuler: PropTypes.bool,
  smallTitle: PropTypes.bool,
};

TitleCenter.defaultProps = {
  color: '#000',
  showHorizontalRuler: false,
  smallTitle: false,
};

export default TitleCenter;
