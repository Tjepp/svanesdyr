import styled from 'styled-components';
import Responsive from './Responsive';

const Row = styled.div`
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
`;

export default Row;
