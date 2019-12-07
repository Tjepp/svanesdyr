import styled from 'styled-components';
import Responsive from './Responsive';
import React from 'react';


const Row = ({ children, marginTop, marginBottom }) => (
  <StyledRow marginBottom={marginBottom}  marginTop={marginTop}>{children}</StyledRow>
);

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  justify-content: space-between;
  align-self: center;
  ${Responsive.media.tablet`
    flex-direction: column;
    align-items: center;
  `}
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
`;

export default Row;
