import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const SmallMenuItem = ({ text, url }) => <Item href={url}>{text}</Item>;

SmallMenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default SmallMenuItem;

const Item = styled.a`
display: flex;
justify-content: center;
height: 40px;
width: 100%;
border-width: 0 0 3px 0;
border-style: solid;
border-color: transparent
color: white;
font-weight: 400;
font-size: 14px;
line-height: 18px;
align-items: center;
text-decoration:none;
  &:hover {
    border-style: solid;
    border-color: #008080
    background-color: #252c34;
   }
`;
