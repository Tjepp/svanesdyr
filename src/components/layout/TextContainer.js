import styled from 'styled-components';
import Responsive from './Responsive';
import React from 'react';


const TextContainer = ({ children }) => (
  <TextContained>{children}</TextContained>
);

const TextContained = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  ${Responsive.media.tablet`
    margin-left: 0px;
  `}
`;


export default TextContainer;
