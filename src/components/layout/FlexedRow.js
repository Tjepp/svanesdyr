import PropTypes from 'prop-types';
import styled from 'styled-components';
import Responsive from './Responsive';

const FlexedRow = ({ children, justifyContent }) => (
  <FlexRow $justifyContent={justifyContent}>{children}</FlexRow>
);

FlexedRow.propTypes = {
  children: PropTypes.node.isRequired,
  justifyContent: PropTypes.string,
};

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.$justifyContent || 'flex-start'};
  ${Responsive.media.tablet`
    flex-direction: column;
    align-items: center;
  `}
`;

export default FlexedRow;
