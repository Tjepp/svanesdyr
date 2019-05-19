import React from 'react';
import { Thead, Tr, Th } from 'react-super-responsive-table';

const DogCourseTableHead = () => (
  <Thead>
    <Tr>
      <Th>Holdtype</Th>
      <Th>Tilmelding</Th>
      <Th>Tidspunkt</Th>
      <Th>Dato start</Th>
      <Th>Dato slut</Th>
      <Th>Varighed</Th>
      <Th>Ingen træning</Th>
      <Th>Holdstatus</Th>
    </Tr>
  </Thead>
);

export default DogCourseTableHead;
