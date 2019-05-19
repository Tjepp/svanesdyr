import React from 'react';
import { Thead, Tr, Th } from 'react-super-responsive-table';

const LectureTableHead = () => (
  <Thead>
    <Tr>
      <Th>Foredrag</Th>
      <Th>Tilmelding og læs mere </Th>
      <Th>Dato</Th>
      <Th>Tidspunkt</Th>
      <Th>Pris</Th>
      <Th>Status</Th>
    </Tr>
  </Thead>
);

export default LectureTableHead;
