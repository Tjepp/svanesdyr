import styled from 'styled-components';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CallMe = () => (
  <IconContainer>
    <FontAwesomeIcon icon="phone" color="#fff" size="1x" />
    <Text href="tel: 93960500"> Ring til mig : 93 960 500</Text>
  </IconContainer>
);

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  margin-right: 1.25rem;
`;

const Text = styled.a`
  margin-left: 0.5rem;
  color: #fff;
  text-decoration: none;
`;

export default CallMe;
