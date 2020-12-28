import styled from 'styled-components';
import React from 'react';
import Responsive from './Responsive';
import PropTypes from 'prop-types';

const Row = ({ children, marginTop, marginBottom }) => (
  <StyledRow marginBottom={marginBottom} marginTop={marginTop}>
    {children}
  </StyledRow>
);

Row.propTypes = {
  children: PropTypes.node.isRequired,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
};

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
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
`;

export default Row;
