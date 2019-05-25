import React, { Fragment } from 'react';
import Text from './Text';

const Prices = () => (
  <Fragment>
    <Text color="#33CCCC">Alle priser er inkl. moms </Text>
    <Text bold>Timepris </Text>
    <Text>
      Hverdage man-fre før kl. 18.00:
      <b> 600,- kr/time.</b>
      <br />
      Hverdage man-fre efter kl. 18.00:
      <b> 700,- kr/time. </b>
      <br />
      Lørdage, samt søndage og helligdage:
      <b> Lukket </b>
    </Text>
    <Text bold>Prisen inkluderer </Text>
    <Text>
      Fri opfølgning på telefon eller mail.
      <br />
      Skriftlig guide på gennemgåede tiltag tilsendes.
    </Text>
    <Text bold>Kørsel </Text>
    <Text>Efter statens takster 3,56 kr/km begge veje. </Text>
  </Fragment>
);

export default Prices;
