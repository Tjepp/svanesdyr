import React, { Fragment } from 'react';
import Text from '../Text';
import { TitleColor } from '..';

const Education2018 = () => (
  <Fragment>
    <TitleColor text="Kurser 2018" smallTitle />
    <Text><b>Christina Ingerslev</b><br />
    Weekendkursus den 9. september: "Problemadfærd på træningsbanen."</Text>
    <Text><b>Chirag Patel</b><br />
      Weekendkursus den 26.-27. maj: "Hvalpetræning og socialisering. Frivillig håndtering."
    </Text>
    <Text><b>Lise Bang Hansen</b><br />
    Aftenseminar den 22. marts: "Vaccination af hunde."</Text>
  </Fragment>
);

export default Education2018;
