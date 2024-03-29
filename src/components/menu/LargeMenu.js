import React from 'react';
import LargeMenuItem from './LargeMenuItem';

const LargeMenu = () => (
  <>
    <LargeMenuItem url="/hundehold" text="Hundehold" />
    <LargeMenuItem url="/onlinekurser" text="Onlinekurser " />
    <LargeMenuItem url="/hundetraening" text="Hund" />
    {/* <LargeMenuItem url="/hestetraening" text="Hest" /> */}
    <LargeMenuItem url="/kattetraening" text="Kat" />
    <LargeMenuItem url="/foredrag" text="Foredrag" />
    <LargeMenuItem url="/dyreadfaerdskonsulent" text="Om Mig" />
    <LargeMenuItem url="/minemetoder" text="Mine metoder" />
    <LargeMenuItem url="/kontakt" text="Kontakt" />
  </>
);

export default LargeMenu;
