import React from 'react';
import { Thead, Tr, Th } from 'react-super-responsive-table';

const DogCourseTableHead = () => (
  <Thead>
    <Tr>
      <Th>Holdnavn</Th>
      <Th>Tidspunkt</Th>
      <Th>Max antal</Th>
      <Th>Holdstatus</Th>
      <Th>Tilmelding</Th>
    </Tr>
  </Thead>
);

export default DogCourseTableHead;
