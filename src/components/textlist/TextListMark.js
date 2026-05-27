import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextListMark = ({ texts }) => (
  <StyledList>
    {texts.map((text, key) => (
      // biome-ignore lint/suspicious/noArrayIndexKey: Static list - items have no ids and are never reordered
      <ListItem key={key}>{text}</ListItem>
    ))}
  </StyledList>
);

const StyledList = styled.ul`
  list-style-type: '✓ ';
  padding-left: 20px;
  color: #000;
  font-size: 20px;
`;

const ListItem = styled.li`
  color: #000;
  font-size: 15px;
  line-height: 22px;
`;

TextListMark.propTypes = {
  texts: PropTypes.arrayOf(String).isRequired,
};

export default TextListMark;
