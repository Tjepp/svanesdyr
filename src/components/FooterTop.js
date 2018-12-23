import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const FooterTop = ({ text, onClick }) => <StyledButton onClick={onClick}>{text}</StyledButton>;

FooterTop.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default FooterTop;

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
