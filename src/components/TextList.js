import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// ESLint disabled because:
// The list and items are static–they are not computed and do not change;
// The items in the list have no ids;
// The list is never reordered or filtered.

const TextList = ({ texts }) => (
  <StyledList>
    {texts.map((text, key) => (
      // eslint-disable-next-line react/no-array-index-key
      <ListItem key={key}>{text}</ListItem>
    ))}
  </StyledList>
);

const StyledList = styled.ul`
  list-style-type: circle;
  padding-left: 20px;
`;

const ListItem = styled.li`
  color: #727272;
`;

TextList.propTypes = {
  texts: PropTypes.arrayOf(String).isRequired
};

export default TextList;