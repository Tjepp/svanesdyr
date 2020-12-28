/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Text from '../Text';
import { TitleColor } from '..';
import TextList from '../textlist/TextList';

const expo2014One = [
  'Ken Ramirez med "Big and Tall, Round or Small? Modifier Cues & How To Teach Them!" ',
  'Kay Laurence med "Do you see what I see? The Benefits of Keen Behavioral Observation" ',
  'Karen Pryor med "Hidden Aversives - Drawbacks of Negative Reinforcement and Extinction"',
];

const expo2014Two = [
  'Michele Pouliot med "Better, Faster, Smarter - Competition Training with Platforms" ',
  'Michele Pouliot med "Pace, Place & More - Strategic Reinforcement Delivery" ',
  'Eva Bertilsson og Emelie Johnson-Vegh med "Rewards Ends, Then What?"',
];

const expo2014Three = [
  `Eva Bertilsson og Emelie Johnson-Vegh med "Let's Make some Noise! Techniques to Build Your Dog's Confidence" `,
  'Michele Pouliot med "Hold it, Get it, Bring it, Give it! The Multi-Purpose Clicked Retrieve" ',
  'Ken Ramirez med "Aggression Treatment & Context"',
];

const Education2014 = () => (
  <>
    <TitleColor text="Kurser 2014" smallTitle />
    <Text bold>ClickerExpo UK - Europe 2014</Text>
    <i>Konference den 17. oktober:</i>
    <br />
    <TextList texts={expo2014One} />
    <i>Konference den 18. oktober:</i>
    <br />
    <TextList texts={expo2014Two} />

    <i>Konference den 19. oktober:</i>
    <br />
    <TextList texts={expo2014Three} />

    <Text>
      <b>Anders Hallgren</b>
      <br />
      Seminar den 28. september 2014: "Stress hos hunde".
    </Text>
  </>
);

export default Education2014;
