import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, href }) => (
  <StyledButton href={href} >
    <Text>{text}</Text>
  </StyledButton>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Button;

const StyledButton = styled.a`
  background: linear-gradient(#379683, #1cb8b8);
  border: 1px solid #0f292f;
  box-shadow: inset 0 1px 1px 0 #99dede, 0 2px 0 -1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  font-weight: bold;
  font-family: inherit;
  outline: none;
  padding: 15px 30px;
  border-radius: 4px;
  text-decoration: none;
`;

const Text = styled.div`
  color: #fff;
`;
