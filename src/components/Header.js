import styled from 'styled-components';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CallMe from './CallMe';
import EmailMe from './EmailMe';
import Responsive from './layout/Responsive';

const TopBar = () => (
  <Background>
    <Bar>
      <Column>
        <CallMe />
        <EmailMe />
      </Column>
      <Column>
        <IconLink href="https://www.facebook.com/SvanesDyr" target="_blank" aria-label="Besøg SvanesDyr på Facebook">
          <FontAwesomeIcon icon={['fab', 'facebook-f']} color="#fff" />
        </IconLink>
      </Column>
    </Bar>
  </Background>
);

export default TopBar;

const IconLink = styled.a`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  cursor: pointer;
`;

const Background = styled.div`
  height: 3rem;
  background: #379683;
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: center;
  ${Responsive.media.tablet`
    height: 0.75rem;
  `}
`;

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 0 0.5rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: row;
  ${Responsive.media.tablet`
    display: none;
  `}
`;
