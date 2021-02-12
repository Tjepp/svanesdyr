import React from 'react';
import Text from './Text';
import { TitleColor } from '.';

const Prices = () => (
  <>
    <TitleColor text="Alle priser er inkl. moms" />
    <Text>
      <b>Timepris</b>
      <br />
      Hverdage man-fre før kl. 18.00:
      <b> 800,- kr/time</b>
      <br />
      Hverdage man-fre efter kl. 18.00:
      <b> 950,- kr/time</b>
      <br />
      Lørdage, samt søndage og helligdage:
      <b> Lukket </b>
    </Text>
    <Text>
      <b>Prisen inkluderer</b>
      <br />
      Fri opfølgning på telefon eller mail.
      <br />
      Skriftlig guide på gennemgåede tiltag tilsendes.
    </Text>
    <Text>
      <b>Kørsel</b>
      <br />
      Efter statens takster 3,44 kr/km begge veje.
    </Text>
  </>
);

export default Prices;
