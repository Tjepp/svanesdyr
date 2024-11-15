import React from 'react';
import styled from 'styled-components';
import {
  Page,
  Banner,
  Column,
  Meta,
  Title,
  TitleColor,
  Text,
  BreadCrumps,
  Row,
  ContactForm,
  StyledExternal,
  TextList,
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
          <Text>
            Har du spørgsmål vedrørende din hund eller kat og ønsker at høre om jeg kan hjælpe?
          </Text>
          <FlexRow>
            <Text>
              Så send mig en mail på:
              <StyledExternal href="mailto:info@svanesdyr.dk"> info@svanesdyr.dk</StyledExternal>
              <br />
              Jeg har kontortid mandage og torsdage og besvarer dine mails i dette tidsrum
            </Text>
          </FlexRow>
          <FlexRow>
            <Text>
              Du kan sende en sms eller giv mig et kald på:
              <br />
              <StyledExternal href="tel: 93960500"> 93 960 500</StyledExternal>
              <br />
              Jeg besvarer opkald når det er muligt. I weekenden er telefonen lukket.
            </Text>
          </FlexRow>
          <br />
          <Title color="#872f35" text="Grundet travlhed kan jeg desværre ikke tage nye kunder ind!" />
          <Text>
            Derfor kan jeg desværre ikke tilbyde rådgivning og hjemmebesøg til problemadfærd før februar 2025 igen.
          </Text>
          <Text>
            I stedet vil jeg anbefale at tage kontakt til en af mine dygtige kollegaer, som har samme belønningsbaseret tilgang som jeg:
          </Text>
          <TextList texts={Colleagues} />
          <br />
          <TitleColor text="Eventuelt afbud til aftale skal meldes senest 24 timer før aftalt tidspunkt!" />
          <Text>
            Ved for sent afbud afregnes gebyr på 50 % af den afsatte konsultationstid.
            <br />
            Ved forgæves kørsel afregnes kørselstillæg efter statens takster.
          </Text>
          <br />
          <Title color="#872f35" text="Jeg har kontortid mandage og torsdage og besvarer dine mails i dette tidsrum" />
          {/* <Title color="#872f35" text="Jeg afholder i øjeblikket sommerferie og er tilbage på kontoret igen den 2. september!" /> */}
        </Column>
        <Column>
          <Title text="Firma informationer" showHorizontalRuler />
          <FlexRow>
            <Text bold>Firmaadresse:</Text>
            <Text whiteSpace> Horsensvej 31, Nim, 8740 </Text>
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
            <Text bold>Kontortid:</Text>
            <Text whiteSpace> Mandage og torsdage</Text>
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

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  ${Responsive.media.tablet`
    flex-direction: column;
  `}
`;
