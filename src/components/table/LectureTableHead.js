import React from 'react';
import { Thead, Tr, Th } from 'react-super-responsive-table';

const LectureTableHead = () => (
  <Thead>
    <Tr>
      <Th>Dato</Th>
      <Th>Foredrag</Th>
      <Th>Tilmelding</Th>
      <Th>Tidspunkt</Th>
      <Th>Pris</Th>
      <Th>Status</Th>
    </Tr>
  </Thead>
);

export default LectureTableHead;
