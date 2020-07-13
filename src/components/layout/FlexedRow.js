import styled from 'styled-components';
import React from 'react';
import Responsive from './Responsive';

const FlexedRow = ({ children }) => <FlexRow>{children}</FlexRow>;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  ${Responsive.media.tablet`
    flex-direction: column;
  `}
`;

export default FlexedRow;
