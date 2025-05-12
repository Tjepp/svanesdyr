import React from 'react';
import styled from 'styled-components';

import {
  Page,
  Banner,
  Column,
  Meta,
  Title,
  BreadCrumps,
  Row,
  TitleColor,
  Text,
  StyledLink,
} from '../components';
import Responsive from '../components/layout/Responsive';
import '../components/table/TableCss.css';


const Prices = () => (
  <Page>
    <Meta />
    <Banner text="Adfærdsspecialist til hund og kat Midtjylland">
      <BreadCrumps currentPage="Hund" />
    </Banner>
    <Background>
      <Row marginTop="25px">
        <Column widthPercentage="100%">
          <Title text="Priser hos Svanes Dyr" showHorizontalRuler />
          <TitleColor text="Alle priser er inkl. moms" />
          <Title text="Hundehold" />
              <Text>
                Priser på hundehold kan ses under det enkelte hold.
                <br />
                <StyledLink to="/hundehold"> Find holdoversigten her</StyledLink>.
              </Text>
          <Title text="Konsultationspris" />
              <Text>
                Der takseres per påbegyndt kvarter.
              </Text>
              <Text>
                Hverdage man-tors før kl. 18.00:
                <b> 1.100,- kr.</b> pr. time
                <br />
                Hverdage man-tors efter kl. 18.00:
                <b> 1.500,- kr.</b> pr. time
                <br />
                Fredage, lørdage, samt søndage og helligdage:
                <b> Lukket </b>
              </Text>
              <Text>
                En konsultation varer typisk mellem 1 - 1,5 time.
              </Text>
              <Text>
                <b> + Kørsel</b>
                <br />
                Efter statens takster 3,81 kr/km begge veje ved besøg i hjemmet.
                <br />
                Ingen kørselstillæg ved aftalt konsultation på min træningsplads i Nim.
              </Text>
              <Text>
                <b>Prisen inkluderer</b>
                <br />
                Fri opfølgning på telefon eller mail i 6 mdr.
                <br />
                Dette inkluderer også telefonsamtaler eller mail korrespondance inden besøget (som normaltvist takseres).
                <br />
                Skriftlig opsummering på tiltag tilsendes på mail efter konsultation.
              </Text>
          <Title text="Online Video-konsultation" />
              <Text>
                Takseres til almindelig konsultationspris per påbegyndt kvarter:
                <br />
                Hverdage man-fre før kl. 18.00:
                <b> 1.100,- kr.</b> pr. time
                <br />
                Hverdage man-tors efter kl. 18.00:
                <b> 1.500,- kr.</b> pr. time
                <br />
              </Text>
              <Text>
                En konsultation varer typisk mellem 1 - 1,5 time.
              </Text>
              <Text>
                <b>Prisen inkluderer</b>
                <br />
                Fri opfølgning på telefon eller mail i 6 mdr.
                <br />
                Dette inkluderer også telefonsamtaler eller mail korrespondance inden konsultationen (som normaltvist takseres).
                <br />
                Skriftlig opsummering på tiltag tilsendes på mail efter konsultation.
              </Text>
          <Title text="Telefon samtaler" />
              <Text>
                Takseres til almindelig konsultationspris:
                <br />
                Hverdage man-fre før kl. 18.00:
                <b> 1.100,- kr.</b> pr. time
              </Text>
              <Text>
                Der takseres per påbegyndt kvarter.
                <br />
                Faktura tilsendes på mail efter samtale. Eller du har mulighed for at mobilepay.
                <br />
                <i>Ved booking af konsultation takseres der ikke for pågældende samtale.</i>
              </Text>
              <Text>
                Det er selvfølgelig gratis at ringe og spørge om din problemstilling er noget jeg kan hjælpe med eller hvis du ønsker at høre hvad jeg kan tilbyde.
              </Text>
          <Title text="Skriftlig konsultation" />
              <Text>
                Alle spørgsmål velkommen. Gode råd og tiltag gives gerne pr. mail eller facebook beskeder, hvis der ikke er behov for konsultation.
                <br />
                Skriftlig korrespondance: <b> 200,- kr.</b>
                <br />
                Faktura tilsendes på mail ved besvarelse.
                <br />
                <i>Ved booking af konsultation takseres der ikke for pågældende mail-samtale eller facebook-samtale.</i>
              </Text>
              <Text>
                Det er selvfølgelig gratis at skrive og spørge om din problemstilling er noget jeg kan hjælpe med eller hvis du ønsker at høre hvad jeg kan tilbyde.
              </Text>
          <Title text="Afbud til konsultation" />
          <TitleColor text="Skal meldes senest 24 timer før aftalt tidspunkt!" />
              <Text>
                Ved for sent afbud afregnes gebyr på 50 % af den afsatte konsultationstid.
                Ved forgæves kørsel afregnes kørselstillæg efter statens takster.
                <br />
              </Text>
          <Title text="Foredrag og Webinar" />
              <Text>
                Der takseres efter foredragets planlagte varighed.
              </Text>
              <Text>
                Hverdage man-fre:
                <b> 1.550,- kr./time</b>
                <br />
                Weekend lør-søn:
                <b> 1.950,- kr./time</b>
              </Text>
              <Text>
                <b> + Kørsel</b>
                <br />
                Efter statens takster 3,81 kr/km begge veje ved besøg i hjemmet.
                <br />
                Evt. Broafgift tillægges også.
              </Text>
              <Text>
                <b>Prisen inkluderer</b>
                <br />
                Forberedelsestillæg og udprint til deltagere.
              </Text>
        </Column>
      </Row>
    
    </Background>
  </Page>
);

export default Prices;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
