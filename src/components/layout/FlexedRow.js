import styled from 'styled-components';
import Responsive from './Responsive';
import React from 'react';


const FlexedRow = ({ children }) => (
  <FlexRow>{children}</FlexRow>
);

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  ${Responsive.media.tablet`
    flex-direction: column;
  `}
`;


export default FlexedRow;
