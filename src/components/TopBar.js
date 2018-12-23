import styled from 'styled-components';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CallMe from './CallMe';
import EmailMe from './EmailMe';
import media from './Media';

// <FontAwesomeIcon color="#fff" icon={['fab', 'linkedin-in']} style={{ padding: '6 12' }} />

function navigateTo(url) {
  window.open(url, '_blank');
}

const TopBar = () => (
  <Background>
    <Bar>
      <Column>
        <CallMe />
        <EmailMe />
      </Column>
      <Column>
        <Button
          type="button"
          onClick={() => {
            navigateTo('https://www.facebook.com/SvanesDyr');
          }}
        >
          <FontAwesomeIcon color="#fff" icon={['fab', 'facebook-f']} style={{ padding: '6 12' }} />
        </Button>
      </Column>
    </Bar>
  </Background>
);

export default TopBar;

const Button = styled.button` {
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden;
  outline:none;
  `;

const Background = styled.div`
  height: 2rem;
  background: #25292c;
  border-bottom: 1px solid #414f5a;
  display: flex;
  justify-content: center;
  ${media.tablet`
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
  ${media.tablet`
    display: none;
  `}
`;
