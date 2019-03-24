import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = ({ text, onClick, color, bold }) => (
  <StyledText bold={bold} color={color} onClick={onClick}>
    {text}
  </StyledText>
);

const StyledText = styled.p`
  color: ${props => props.color};
  text-decoration: none;
  cursor: ${props => (props.onClick ? 'pointer' : 'auto')};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  margin: 0 0 10px;
  &:hover {
    color: ${props => (props.onClick ? '#727272' : props.color)};
  }
`;

Text.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
  bold: PropTypes.bool
};

Text.defaultProps = {
  onClick: null,
  color: '#727272',
  bold: false
};

export default Text;
