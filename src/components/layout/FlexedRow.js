import styled from 'styled-components';
import React from 'react';
import Responsive from './Responsive';
import PropTypes from 'prop-types';

const FlexedRow = ({ children }) => <FlexRow>{children}</FlexRow>;

FlexedRow.propTypes = {
  children: PropTypes.node.isRequired,
};

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  ${Responsive.media.tablet`
    flex-direction: column;
  `}
`;

export default FlexedRow;
