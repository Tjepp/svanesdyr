import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import {
  Page,
  Banner,
  Column,
  Meta,
  Title,
  Text,
  BreadCrumps,
  Row,
  ContactForm
} from '../components';
import Responsive from '../components/layout/Responsive';
import '../components/table/TableCss.css';

const Contact = () => (
  <Page>
    <Meta />
    <Banner text="Kontakt Svanes Dyr v/Sabrina Svane">
      <BreadCrumps currentPage="Kontakt" />
    </Banner>
    <Background>
      <Row>
        <Column widthPercentage="62%">
          <Title text="Kontakt Sabrina Svane" showHorizontalRuler />
          <Text text="Har du spørgsmål vedrørende din hund, kat eller hest og ønsker at høre om jeg kan hjælpe?" />
          <FlexRow>
            <Text whiteSpace text="Så send mig en mail på: " />
            <Text bold text="info@svanesdyr.dk" />
          </FlexRow>
          <Text text="Jeg svarer normaltvist indenfor 24 timer." />
          <FlexRow>
            <Text whiteSpace text="Du kan sende en sms eller giv mig et kald på: " />
            <Text bold text="tlf. 93960500" />
          </FlexRow>
          <Text text="Jeg besvarer opkald når det er muligt. I weekenden er telefonen lukket." />
          <Text
            text="Eventuelt afbud til aftale skal meldes senest 24 timer før aftalt tidspunkt!"
            color="#33CCCC"
            bold
          />
        </Column>
        <Column>
          <Title text="Firma informationer" showHorizontalRuler />
          <FlexRow>
            <Text bold whiteSpace text="Firmaadresse: " />
            <Text text="8740 Brædstrup" />
          </FlexRow>
          <FlexRow>
            <Text bold whiteSpace text="Træningsbane adresse: " />
            <Text text="8700 Horsens" />
          </FlexRow>
          <FlexRow>
            <Text bold whiteSpace text="Telefon: " />
            <Text text="93 960 500" />
          </FlexRow>
          <FlexRow>
            <Text bold whiteSpace text="Email: " />
            <Text text="info@svanesdyr.dk" />
          </FlexRow>
          <FlexRow>
            <Text bold whiteSpace text="CVR-nr.: " />
            <Text text="35903100" />
          </FlexRow>
        </Column>
      </Row>
      <Row>
        <Column widthPercentage="100%">
          <Title text="Kontakt formular" showHorizontalRuler />
          <ContactForm />
        </Column>
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
