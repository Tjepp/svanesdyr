import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Responsive from './Responsive';

const Column = ({ children, widthPercentage }) => (
  <ColumnContainer width={widthPercentage}>{children}</ColumnContainer>
);

Column.propTypes = {
  children: PropTypes.node.isRequired,
  widthPercentage: PropTypes.string
};

Column.defaultProps = {
  widthPercentage: '32%'
};

const ColumnContainer = styled.div`
  flex-direction: column;
  margin: 20px 0px;
  width: ${props => props.width};
  ${Responsive.media.tablet`
   width: 100%;
   align-self: end;
   margin: 20px 0px;
 `}
`;

export default Column;
