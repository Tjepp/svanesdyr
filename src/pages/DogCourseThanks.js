import styled from 'styled-components';
import { OnlineCoverCourse } from '../assets';
import {
  ButtonOnline,
  Column,
  Image,
  LandingpageOnline,
  Row,
  TextCenter,
  TitleCenter,
} from '../components';
import Responsive from '../components/layout/Responsive';
import '../components/table/TableCss.css';

const DogCourseThanks = () => (
  <LandingpageOnline noindex>
    <Background>
      <Row>
        <Column widthPercentage="100%">
          <Image
            src={OnlineCoverCourse}
            alt="Coverbillede for fysisk holdtræning med hund"
            priority
          />
          <br />
          <TitleCenter text="Wooohoooo! Du er med!" />
          <TextCenter>
            Tusind tak for din investering i din hund og jeres fremtid sammen!
            <br />
            Jeg glææææder mig til at se både dig og din hund til det kommende holdforløb!
            <br />
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
          <TitleCenter color="#872f35" text="Vi ses inden længe!" />
        </Column>
      </Row>

      <ButtonOnline
        text="Lad mig se hvad du ellers tilbyder af holdforløb! Tag mig til hjemmesiden"
        href="https://www.svanesdyr.dk/hundehold"
      ></ButtonOnline>
      <br />
      <br />
    </Background>
  </LandingpageOnline>
);

export default DogCourseThanks;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
