import React, { Fragment } from 'react';
import LargeMenuItem from './LargeMenuItem';

const LargeMenu = () => (
  <Fragment>
    <LargeMenuItem url="/hundehold" text="Hundehold" />
    <LargeMenuItem url="/hundetraening" text="Hund" />
    <LargeMenuItem url="/hestetraening" text="Hest" />
    <LargeMenuItem url="/kattetraening" text="Kat" />
    <LargeMenuItem url="/foredrag" text="Foredrag" />
    <LargeMenuItem url="/dyreadfaerdskonsulent" text="Om Mig " />
    <LargeMenuItem url="/minemetoder" text="Mine metoder" />
    <LargeMenuItem url="/kontakt" text="Kontakt" />
  </Fragment>
);

export default LargeMenu;
