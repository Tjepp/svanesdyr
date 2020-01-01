import React, { Fragment } from 'react';
import Text from '../Text';
import Title from '../Title';

const Education2017 = () => (
  <Fragment>
    <Title text="Kurser 2017" smallTitle color="#33CCCC" />
    <Text><b>Karen Frost</b><br />
      Aftenseminar den 9. november: "Stress hos hunde."
      <br />
      Weekendkursus den 16.-17. september: "Alene hjemme problemer - forebyggelse og behandling".
    </Text>
    <Text><b>Nordsøen Oceanarium</b><br />
    Deltidsbeskæftigelse sommer 2017.<br />
    Ansvar for planlægning af show-program og træning af deres tre gråsæler og sømrokke.<br />
    Udarbejdet en håndbog omkring træning og aktivering af sælerne, til nytilkomne på stedet.
    </Text>
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
