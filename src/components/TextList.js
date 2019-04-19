import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextList = ({ texts }) => (
  <StyledList>
    {texts.map(text => (
      <ListItem>{text}</ListItem>
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
