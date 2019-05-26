import React, { Fragment } from 'react';
import Text from '../Text';
import Title from '../Title';
import TextList from '../TextList';

const oceanarium = [
  'Ansvar for planlægning af show-program og træning af deres tre gråsæler og sømrokke.',
  'Udarbejdet en håndbog omkring træning og aktivering af sælerne, til nytilkomne på stedet.'
];

const Education2017 = () => (
  <Fragment>
    <Title text="Kurser 2017" smallTitle color="#33CCCC" />
    <Text bold>Karen Frost</Text>
    <Text>
      Aftenseminar den 9. november: "Stress hos hunde."
      <br />
      Weekendkursus den 16.-17. september: "Alene hjemme problemer - forebyggelse og behandling".
    </Text>
    <Text bold>Nordsøen Oceanarium - Praktik</Text>
    <TextList texts={oceanarium} />
    <Text>Praktikperiode på 10 uger fra juni til august mdr.</Text>
    <Text bold>Jan Østergaard</Text>
    <Text>
      Kursus den 22. juli: "Fri ved fod".
      <br />
      Weekendkursus den 25.-26. marts: Fortsætterkursus med "Klikkertræning, shaping, target,
      fremadsendelse, rundering og plads".
    </Text>
  </Fragment>
);

export default Education2017;
