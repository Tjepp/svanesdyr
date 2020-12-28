import styled from 'styled-components';
import React from 'react';
import Responsive from './Responsive';
import PropTypes from 'prop-types';

const TextContainer = ({ children }) => <TextContained>{children}</TextContained>;

TextContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const TextContained = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  ${Responsive.media.tablet`
    margin-left: 0px;
    margin-top: 25px;
    text-align: center;
  `}
`;

export default TextContainer;
