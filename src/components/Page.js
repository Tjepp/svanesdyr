import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import TopBar from './TopBar';
import Menu from './menu/Menu';
import FooterBottom from './FooterBottom';

const Page = ({ children }) => (
  <Container>
    <TopBar />
    <Menu />
    {children}
    <FooterBottom />
  </Container>
);

Page.propTypes = {
  children: PropTypes.node.isRequired
};

export default Page;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align: center;
  justify-content: center;
`;
