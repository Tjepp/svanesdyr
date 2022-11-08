import React from 'react';
import styled from 'styled-components';

import {
  LandingpageOnline,
  Column,
  TitleCenter,
  TextCenter,
  Image,
  Row,
  EasyMeList,
} from '../components';
import Responsive from '../components/layout/Responsive';
import { OnlineCoverPuppyCourse } from '../assets';
import '../components/table/TableCss.css';

const DogPuppyMarch = () => (
  <LandingpageOnline>
    <Background>
      <Row>
        <Column widthPercentage="100%">
          <Image src={OnlineCoverPuppyCourse} />
          <br />
          <TitleCenter text="Wooohoooo! Du er med!" />
          <TextCenter>
            Tusind tak for din investering i din hvalp og jeres fremtid sammen!
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter text="Du får lige straks en bekræftelse på mail med oplysninger om din holdtilmelding" />
          <TextCenter>
            Føler du dig snydt, så tjek din spam mappe - måske putter jeg mig der.
          </TextCenter>
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
          <TitleCenter color="#872f35" text="Vil du sikre dig en plads på forløbet efter hvalpeholdets afslutning?" />
          <TextCenter>
            Jeg oplever stor efterspørgsel på mine holdforløb og er ofte booket et par måneder i forvejen. 
            Da jeg rigtig gerne vil tilgodese dig og din hvalp, får du tilbuddet om en plads på fortsætterholdet allerede nu, inden det er overtegnet.
          </TextCenter>
          <TextCenter>
            Tænker du allerede nu, at du vil have flest mulige uger med succesfuldt samarbejde med din hvalp?<br />
            At få flere input til hverdagens lydighed med fokus på ro?<br />
            Ikke mindst at kunne hente gode råd når din hvalp bliver teenager?<br />
            Så har du muligheden for at få det hele med på et Hvalpe-Fortsætterhold.
            <br />
            <br />
          </TextCenter>
          <TitleCenter text="Book din plads inden hvalpeholdet starter og få 10% i rabat." />
          <TextCenter color="#008037" bold>
          Du skal blot bruge rabatkoden: MartsHvalp
          </TextCenter>
          <TextCenter>
            Når du vælger at reservere plads på ét af de efterfølgende Hvalpe-Fortsætterhold:
          </TextCenter>
          <EasyMeList src="https://ezme.io/x/x1S/LxSR" />
        </Column>
      </Row>

      <Row>
        <Column widthPercentage="100%">
        <TextCenter>
            Jeg glææææder mig til at se både dig og din hvalp til det kommende hvalpehold!
            <br />
          </TextCenter>
          <TitleCenter color="#872f35" text="Vi ses inden længe!" />
        </Column>
      </Row>

      <br />
      <br />
    </Background>
  </LandingpageOnline>
);

export default DogPuppyMarch;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
