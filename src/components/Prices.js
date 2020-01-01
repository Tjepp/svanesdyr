import React, { Fragment } from 'react';
import Text from './Text';

const Prices = () => (
  <Fragment>
    <Text bold color="#33CCCC">Alle priser er inkl. moms </Text>
    <Text><b>Timepris</b><br />
      Hverdage man-fre før kl. 18.00:
      <b> 700,- kr/time</b>
      <br />
      Hverdage man-fre efter kl. 18.00:
      <b> 800,- kr/time</b>
      <br />
      Lørdage, samt søndage og helligdage:
      <b> Lukket </b>
    </Text>
    <Text><b>Prisen inkluderer</b><br />
      Fri opfølgning på telefon eller mail.
      <br />
      Skriftlig guide på gennemgåede tiltag tilsendes.
    </Text>
    <Text><b>Kørsel</b><br />
    Efter statens takster 3,52 kr/km begge veje. </Text>
  </Fragment>
);

export default Prices;
