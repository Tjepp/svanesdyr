import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = ({ text, color }) => <StyledTitle color={color}>{text}</StyledTitle>;

const StyledTitle = styled.h4`
  color: ${props => props.color};
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.01);
  font-size: 22px;
  margin: 0 0 25px;
`;

Title.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string
};

Title.defaultProps = {
  color: '#666'
};

export default Title;
