import React from 'react';
import LargeMenuItem from './LargeMenuItem';
import styled from 'styled-components';

const LargeMenu = () => (
  <Container>
    <LargeMenuItem url="/hundehold" text="Hundehold" />
    <LargeMenuItem url="/legestue" text="Legestue " />
    <LargeMenuItem url="/onlinekurser" text="Onlinekurser " />
    <LargeMenuItem url="/hundetraening" text="Hund" />
    <LargeMenuItem url="/kattetraening" text="Kat" />
    <LargeMenuItem url="/prisoversigt" text="Priser" />
    <LargeMenuItem url="/foredrag" text="Foredrag" />
    <LargeMenuItem url="/snackshoppen" text="Butik" />
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
