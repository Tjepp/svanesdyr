import React from 'react';
import LargeMenuItem from './LargeMenuItem';
import styled from 'styled-components';

const LargeMenu = () => (
  <Container>
    <LargeMenuItem url="/hundehold" text="Hundehold" />
    <LargeMenuItem url="/onlinekurser" text="Onlinekurser " />
    <LargeMenuItem url="/hundetraening" text="Hund" />
    {/* <LargeMenuItem url="/hestetraening" text="Hest" /> */}
    <LargeMenuItem url="/kattetraening" text="Kat" />
    <LargeMenuItem url="/foredrag" text="Foredrag" />
    <LargeMenuItem url="/dyreadfaerdskonsulent" text="Om Mig" />
    <LargeMenuItem url="/minemetoder" text="Mine metoder" />
    <LargeMenuItem url="/kontakt" text="Kontakt" />
  </Container>
);

export default LargeMenu;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
`;
