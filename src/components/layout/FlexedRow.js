import PropTypes from 'prop-types';
import styled from 'styled-components';
import Responsive from './Responsive';

const FlexedRow = ({ children }) => <FlexRow>{children}</FlexRow>;

FlexedRow.propTypes = {
  children: PropTypes.node.isRequired,
};

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  ${Responsive.media.tablet`
    flex-direction: column;
    align-items: center;
  `}
`;

export default FlexedRow;
