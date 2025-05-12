import React from 'react';
import styled from 'styled-components';
import {
  Page,
  Banner,
  Column,
  Meta,
  Title,
  // TitleColor,
  Text,
  BreadCrumps,
  Row,
  // ContactForm,
  StyledExternal,
  TextList,
  StyledLink,
  TitleColor,
} from '../components';
import Responsive from '../components/layout/Responsive';
import '../components/table/TableCss.css';

// const SvanesDyrLocation = { lat: 55.980569, lng: 9.613036 };
// const SvanesDyrTrainingCourseLocation = { lat: 55.890248, lng: 9.813864 };

const Colleagues = [
   'HORSENS: Maja Bruus, Horsens Hundecenter, www.hundecoach.dk',
   'SILKEBORG: Christine Løwe, Løwe & Hund, www.løweoghund.dk',
   'GIVSKUD: Lone Enghave, Enghave & Hund, www.enghaveoghund.dk',
   'HERNING: Jan Vestergaard, Egely Hunde, www.egelyhunde.dk',
   'ÅRHUS: Camilla Bruhn, Dyrecoach, www.dyrecoach.dk',
 ];

const Contact = () => (
  <Page>
    <Meta />
    <Banner text="Kontakt Svanes Dyr v/Sabrina Svane">
      <BreadCrumps currentPage="Kontakt" />
    </Banner>
    <Background>
      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <Title text="Kontakt Sabrina Svane" showHorizontalRuler />
          <Title text="Har du spørgsmål vedrørende din hund eller kat og ønsker at høre om jeg kan hjælpe?" />
            <Text>
              Så send mig en mail på:
              <StyledExternal href="mailto:info@svanesdyr.dk"> info@svanesdyr.dk</StyledExternal>
              <br />
              Jeg har kontortid mandage og torsdage og besvarer dine mails i dette tidsrum
            </Text>
            <Text>
              Du kan sende en sms eller giv mig et kald på:
              <br />
              <StyledExternal href="tel: 93960500"> 93 960 500</StyledExternal>
              <br />
              Jeg besvarer opkald når det er muligt. I weekenden er telefonen lukket.
            </Text>
            <TitleColor text="Jeg takserer for min rådgivning på hhv. telefon og skriftlig korrespondance på mail/facebook" />
            <Text>
              Se mere om dette under <StyledLink to="/prisoversigt"> Priser</StyledLink>.
              <br />
              Det er selvfølgelig gratis at spørge om din problemstilling er noget jeg kan hjælpe med eller hvis du ønsker at høre hvad jeg kan tilbyde.
            </Text>
          <br />
          <Title color="#872f35" text="Svanes Dyr holder midlertidigt lukket for nye kunder!" />
          <Text>
            Derfor kan jeg desværre ikke tilbyde rådgivning og hjemmebesøg til problemadfærd i øjeblikket. Jeg annoncerer her på siden når jeg har åbent for tilgang igen.
          </Text>
          <Text>
            I stedet vil jeg anbefale at tage kontakt til en af mine dygtige kollegaer, som har samme belønningsbaseret tilgang som jeg:
          </Text>
          <TextList texts={Colleagues} />
          <br />
          <br />
          {/* <Title color="#872f35" text="Jeg har kontortid mandage og torsdage og besvarer dine mails i dette tidsrum" /> */}
          {/* <Title color="#872f35" text="Jeg afholder i øjeblikket ferie og er tilbage på kontoret igen den 27. januar!" /> */}
        </Column>
      </Row>
      {/* <Row>
        <Column widthPercentage="100%">
          <Title text="Kontakt formular" showHorizontalRuler />
          <ContactForm />
        </Column>
      </Row> */}
      {/* <Row marginBottom="25px">
        <LoadScript id="script-loader" googleMapsApiKey={process.env.REACT_APP_GMAP_API_KEY}>
          <GoogleMap
            id="circle-example"
            mapContainerStyle={{
              height: '300px',
              width: '100%',
              marginBottom: '20px',
            }}
            zoom={9}
            center={{
              lat: 55.931853,
              lng: 9.681581,
            }}
          >
            <MapsInfoMarker position={SvanesDyrLocation} text="Svanes dyr" />
            <MapsInfoMarker
              position={SvanesDyrTrainingCourseLocation}
              text="Svanes Dyr - Træningsbane"
            />
          </GoogleMap>
        </LoadScript>
      </Row> */}
    </Background>
  </Page>
);

export default Contact;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;

// const FlexRow = styled.div`
//   display: flex;
//   flex-direction: row;
//   ${Responsive.media.tablet`
//     flex-direction: column;
//   `}
// `;
