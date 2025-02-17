import React from 'react';
import Text from './Text';
import { TitleColor } from '.';

const Prices = () => (
  <>
    <TitleColor text="Alle priser er inkl. moms" />
    <Text>Der takseres per påbegyndt kvarter.</Text>
    <Text>
      <b>Timepris</b>
      <br />
      Hverdage man-fre før kl. 18.00:
      <b> 950,- kr/time</b>
      <br />
      Hverdage man-fre efter kl. 18.00:
      <b> 1.200,- kr/time</b>
      <br />
      Lørdage, samt søndage og helligdage:
      <b> Lukket </b>
    </Text>
    <Text>
      <b>Prisen inkluderer</b>
      <br />
      Fri opfølgning på telefon eller mail i 6 mdr.
      <br />
      Skriftlig guide på tiltag tilsendes efter ønske.
    </Text>
    <Text>
      <b>Telefon samtaler</b>
      <br />
      Takseres til almindelig timepris efter 15 min.
    </Text>
    <Text>
      <b>Kørsel</b>
      <br />
      Efter statens takster 3,81 kr/km begge veje.
    </Text>
    <Text>
      <b>Afbud</b>
      <br />
      Skal meldes senest 24 timer før aftalt tidspunkt!
      <br />
      Ved for sent afbud afregnes gebyr på 50 % af den afsatte konsultationstid.
      Ved forgæves kørsel afregnes kørselstillæg efter statens takster.
    </Text>
  </>
);

export default Prices;
