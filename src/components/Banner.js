import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Responsive from './Responsive';

const Banner = ({ children, text }) => (
  <Background>
    <Container>
      <Title>{text}</Title>
      {children}
    </Container>
  </Background>
);

Banner.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired
};

export default Banner;

const Background = styled.div`
  display: flex;
  justify-content: center;
  background: #fafafa;
  width: 100%;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  ${Responsive.media.tablet`
    padding: 0;
    min-height: 100px;
  `}
`;

const Container = styled.div`
  display: flex;
  color: #888;
  width: 100%;
  max-width: 1200px;
  flex-direction: row;
  padding: 0.5rem;
  justify-content: space-between;
  align-items: center;
  ${Responsive.media.tablet`
    justify-content: center;
    flex-direction: column;
  `}
`;

const Title = styled.h1`
  font-weight: normal;
  color: #666;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.01);
  margin: 10px 0 10px 0;
`;
