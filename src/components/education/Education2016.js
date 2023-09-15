/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Text from '../Text';
import TextList from '../textlist/TextList';
import { TitleColor } from '..';

const expoOne = [
  'Chirag Patel med "Give training back to the Animals - Husbandry is my agility" ',
  'Emma Parsons med "Stranger Danger! Dogs that are reactive to people" ',
  'Kathy Sdao med "What a pithy: Making Classes Memorable"',
];

const expoTwo = [
  'Kathy Sdao med "If you build it, they will come: Training a reliable recall" ',
  'Emma Parsons med "Ready.. or not? Working with reactive dogs" ',
  'Eva Bertilsson og Emelie Johnson-Vegh med "Clicker training principles are for teaching humans too!"',
];

const expoThree = [
  'Michelle Pouliot med "Collar cues" ',
  'Eva Bertilsson og Emelie Johnson-Vegh med "Animals in control: The choice is theirs" ',
  'Kathy Sdao med "Parameters of Premack"',
];

const susanFriedman = [
  'The Significance of Science and the Two Learning Paradigms. ',
  'Changing Respondent and Operant Behavior. ',
  'Functional Behavior Assessment and Analysis. ',
  'Client Conversation Skills and Ethical Practice.',
];

const Education2016 = () => (
  <>
    <TitleColor text="Kurser 2016" smallTitle />
    <Text>
      <b>Magtor</b>
      <br />
      Den 7. december foredrag: "Hundens Ernæring".
    </Text>
    <Text>
      <b>Jan Østergaard</b>
      <br />
      Weekendkursus den 12.-13. november: "Klikkertræning, shaping, target, platform og
      bagpartskontrol".
    </Text>
    <Text bold>ClickerExpo DK - 2016</Text>
    <i>Konference den 28. oktober:</i>
    <TextList texts={expoOne} />
    <i>Konference den 29. oktober:</i>
    <TextList texts={expoTwo} />
    <i>Konference den 30. oktober:</i>
    <TextList texts={expoThree} />
    <Text>
      <b>Dr. Susan Friedman</b>
      <br />
      Kursusforløb den 17.-19. juni 2016, omhandlende: ”Living and Learning with Animals: The
      Science and Technology of Behavior Change”
      <br />
      Gennemgåede emner for dagene:
      <TextList texts={susanFriedman} />
    </Text>

  </>
);

export default Education2016;
