import styled from 'styled-components';
import React from 'react';
import Responsive from './layout/Responsive';
import PropTypes from 'prop-types';

const LPHeadlinePuppy = ({ text }) => (
  <Background>
    <Container>
      <Title>{text}</Title>
    </Container>
  </Background>
);

LPHeadlinePuppy.propTypes = {
  text: PropTypes.string.isRequired,
};

export default LPHeadlinePuppy;

const Background = styled.div`
  display: flex;
  justify-content: center;
  background: #fff;
  width: 100%;
  border-bottom: 1px solid #fff;
  ${Responsive.media.tablet`
    padding: 0;
    min-height: 100px;
  `}
`;

const Container = styled.div`
  display: flex;
  color: #fff;
  width: 100%;
  max-width: 1200px;
  flex-direction: row;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  ${Responsive.media.tablet`
    justify-content: center;
    flex-direction: column;
  `}
`;

const Title = styled.h1`
  font-weight: normal;
  color: #004aad;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.01);
  margin: 5px 0 5px 0;
  text-align: center;
  ${Responsive.media.tablet`
    text-align: center;
  `}
`;
