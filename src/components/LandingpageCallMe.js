import styled from 'styled-components';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Responsive from './layout/Responsive';

const CallMe = () => (
  <IconContainer>
    <FontAwesomeIcon center icon="phone" color="#000" size="1x" />
    <Text href="tel: 93960500"> Giv et kald på : 93 960 500</Text>
  </IconContainer>
);

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  justify-content: center;
  padding: 1rem;
`;

const Text = styled.a`
  margin-left: 0.5rem;
  color: #000;
  text-decoration: none;
  font-weight: bold;
  ${Responsive.media.tablet`
  width: 100%;
  padding: 1rem;
`}
`;

export default CallMe;
