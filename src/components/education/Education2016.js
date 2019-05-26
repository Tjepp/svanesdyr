import React, { Fragment } from 'react';
import Text from '../Text';
import Title from '../Title';
import TextList from '../TextList';

const expoOne = [
  'Chirag Patel med "Give training back to the Animals - Husbandry is my agility" ',
  'Emma Parsons med "Stranger Danger! Dogs that are reactive to people" ',
  'Kathy Sdao med "What a pithy: Making Classes Memorable"'
];

const expoTwo = [
  'Kathy Sdao med "If you build it, they will come: Training a reliable recall" ',
  'Emma Parsons med "Ready.. or not? Working with reactive dogs" ',
  'Eva Bertilsson og Emelie Johnson-Vegh med "Clicker training principles are for teaching humans too!"'
];

const expoThree = [
  'Michelle Pouliot med "Collar cues" ',
  'Eva Bertilsson og Emelie Johnson-Vegh med "Animals in control: The choice is theirs" ',
  'Kathy Sdao med "Parameters of Premack"'
];

const susanFriedman = [
  'The Significance of Science and the Two Learning Paradigms. ',
  'Changing Respondent and Operant Behavior. ',
  'Functional Behavior Assessment and Analysis. ',
  'Client Conversation Skills and Ethical Practice.'
];

const Education2016 = () => (
  <Fragment>
    <Title text="Kurser 2016" smallTitle color="#33CCCC" />
    <Text bold>Magtor</Text>
    <Text>Den 7. december foredrag: "Hundens Ernæring".</Text>
    <Text bold>Jan Østergaard</Text>
    <Text>
      Weekendkursus den 12.-13. november: "Klikkertræning, shaping, target, platform og
      bagpartskontrol".
    </Text>
    <Text bold>ClickerExpo DK - 2016</Text>
    <i>Konference den 28. oktober:</i>
    <br />
    <TextList texts={expoOne} />
    <i>Konference den 29. oktober:</i>
    <br />
    <TextList texts={expoTwo} />
    <i>Konference den 30. oktober:</i>
    <br />
    <TextList texts={expoThree} />
    <Text bold>Dr. Susan Friedman</Text>
    <Text>
      Kursusforløb den 17.-19. juni 2016, omhandlende: ”Living and Learning with Animals: The
      Science & Technology of Behavior Change”
      <br />
      Gennemgåede emner for dagene:
    </Text>
    <TextList texts={susanFriedman} />
  </Fragment>
);

export default Education2016;
