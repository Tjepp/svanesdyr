import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import {
  Page,
  Banner,
  Column,
  Meta,
  Title,
  Text,
  BreadCrumps,
  Row,
  ContactForm,
  StyledA,
  MapsInfoMarker
} from '../components';
import Responsive from '../components/layout/Responsive';
import '../components/table/TableCss.css';

const SvanesDyrLocation = { lat: 55.980569, lng: 9.613036 };
const SvanesDyrTrainingCourseLocation = { lat: 55.890248, lng: 9.813864 };

const Contact = () => (
  <Page>
    <Meta />
    <Banner text="Kontakt Svanes Dyr v/Sabrina Svane">
      <BreadCrumps currentPage="Kontakt" />
    </Banner>
    <Background>
      <Row>
        <Column widthPercentage="65%">
          <Title text="Kontakt Sabrina Svane" showHorizontalRuler />
          <Text>
            Har du spørgsmål vedrørende din hund, kat eller hest og ønsker at høre om jeg kan
            hjælpe?
          </Text>
          <FlexRow>
            <Text whiteSpace>Så send mig en mail på: </Text>
            <StyledA href="mailto:info@svanesdyr.dk">info@svanesdyr.dk</StyledA>
          </FlexRow>
          <Text>Jeg svarer normaltvist indenfor 24 timer.</Text>
          <FlexRow>
            <Text whiteSpace>Du kan sende en sms eller giv mig et kald på: </Text>
            <StyledA href="tel: 93960500"> 93 960 500</StyledA>
          </FlexRow>
          <Text> Jeg besvarer opkald når det er muligt. I weekenden er telefonen lukket. </Text>
          <Text color="#33CCCC" bold>
            Eventuelt afbud til aftale skal meldes senest 24 timer før aftalt tidspunkt!
          </Text>
        </Column>
        <Column>
          <Title text="Firma informationer" showHorizontalRuler />
          <FlexRow>
            <Text bold>Firmaadresse:</Text>
            <Text whiteSpace> 8740 Brædstrup</Text>
          </FlexRow>
          <FlexRow>
            <Text bold>Træningsbane adresse:</Text>
            <Text whiteSpace> 8700 Horsens</Text>
          </FlexRow>
          <FlexRow>
            <Text bold>Telefon:</Text>
            <Text whiteSpace> 93 960 500</Text>
          </FlexRow>
          <FlexRow>
            <Text bold>Email:</Text>
            <Text whiteSpace> info@svanesdyr.dk</Text>
          </FlexRow>
          <FlexRow>
            <Text bold>CVR-nr.:</Text>
            <Text whiteSpace> 35903100</Text>
          </FlexRow>
        </Column>
      </Row>
      <Row>
        <Column widthPercentage="100%">
          <Title text="Kontakt formular" showHorizontalRuler />
          <ContactForm />
        </Column>
      </Row>
      <Row>
        <LoadScript id="script-loader" googleMapsApiKey={process.env.REACT_APP_GMAP_API_KEY}>
          <GoogleMap
            id="circle-example"
            mapContainerStyle={{
              height: '300px',
              width: '100%',
              marginBottom: '20px'
            }}
            zoom={9}
            center={{
              lat: 55.931853,
              lng: 9.681581
            }}
          >
            <MapsInfoMarker position={SvanesDyrLocation} text="Svanes dyr" />
            <MapsInfoMarker
              position={SvanesDyrTrainingCourseLocation}
              text="Svanes Dyr - Træningsbane"
            />
          </GoogleMap>
        </LoadScript>
      </Row>
    </Background>
  </Page>
);

export default withRouter(Contact);

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  ${Responsive.media.tablet`
    flex-direction: column;
  `}
`;
