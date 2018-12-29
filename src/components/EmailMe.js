import styled from 'styled-components';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EmailMe = () => (
  <IconContainer>
    <FontAwesomeIcon icon="envelope" color="#fff" size="1x" />
    <Text href="mailto:info@svanesdyr.dk"> Email : info@svanesdyr.dk </Text>
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

export default EmailMe;
