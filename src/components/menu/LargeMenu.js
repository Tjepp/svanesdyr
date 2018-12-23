import React, { Fragment } from 'react';
import LargeMenuItem from './LargeMenuItem';

const LargeMenu = () => (
  <Fragment>
    <LargeMenuItem url="/dogcourse" text="Hundehold" />
    <LargeMenuItem url="/dog" text="Hund" />
    <LargeMenuItem url="/horse" text="Hest" />
    <LargeMenuItem url="/cat" text="Kat" />
    <LargeMenuItem url="/lecture" text="Foredrag" />
    <LargeMenuItem url="/about" text="Om Mig " />
    <LargeMenuItem url="/mymethods" text="Mine metoder" />
    <LargeMenuItem url="/contact" text="Kontakt" />
  </Fragment>
);

export default LargeMenu;
