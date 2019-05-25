import React from 'react';
import styled from 'styled-components';
import { Table, Tbody, Tr, Td } from 'react-super-responsive-table';
import { withRouter } from 'react-router-dom';
import {
  Page,
  Banner,
  Column,
  Meta,
  Title,
  Text,
  Image,
  BreadCrumps,
  LectureTableHead,
  Row,
  StyledLink,
  StyledA
} from '../components';
import Responsive from '../components/layout/Responsive';
import { lectureFearAndAgression, lectureDogLanguage, lectureCalmDownFido } from '../assets';
import '../components/table/TableCss.css';

const Lecture = () => (
  <Page>
    <Meta />
    <Banner text="Foredrag hos Svanes Dyr">
      <BreadCrumps currentPage="Foredrag" />
    </Banner>
    <Background>
      <Row>
        <Column widthPercentage="62%">
          <Title text="Foredrag ved Sabrina Svane" showHorizontalRuler />
          <Text>
            Jeg underviser i de indlæringspsykologiske principper med udgangspunkt i
            belønningsbaserede teknikker. Mit fokus i undervisningen er altid at give forståelse for
            hundens sprog og adfærd, indsigt i stress og dens indflydelse på adfærd, samt give
            deltagerne redskaber med hjem til at forebygge adfærdsproblemer. Jeg tilbyder afholdelse
            af foredrag i forskellige emner, som du kan læse mere om længere nede på siden.
          </Text>
          <Text>
            {'Er du fra en hundeklub, dyrlægehus eller privatperson, så er du velkommen til at'}
            <StyledLink to="/kontakt"> kontakte mig</StyledLink>
            {
              ', hvis du ønsker at bestille tid til et foredrag eller ønsker at bestille en teoretisk aften/dag i et helt andet emne.'
            }
          </Text>
          <Text>
            Jeg har indgået et samarbejde med FOF i Horsens og udbyder løbende foredrag hos dem. Se
            kommende foredrag længere nede på siden eller klik ind på
            <StyledA href="http://www.fof.dk/horsens-hedensted-vejle/Kursusoversigt/friluftsliv-jagt-hundetraening-sejlads-kaeledyr/Hundetraening%20-%20foredrag">
              {" FOF's hjemmeside "}
            </StyledA>
            for at læse mere og se priser.
          </Text>
        </Column>
        <Column>
          <Title text="Priser for foredrag" showHorizontalRuler />
          <Text color="#33CCCC" bold>
            Alle priser er inkl. moms
          </Text>
          <Text bold>Timepris</Text>
          <Text>Bestilling af foredrag ved Sabrina Svane:</Text>
          <FlexRow>
            <Text whiteSpace>Hverdage mandag-fredag: </Text>
            <Text bold>600,- kr/time.</Text>
          </FlexRow>
          <FlexRow>
            <Text whiteSpace>Weekend lørdag-søndag: </Text>
            <Text bold>700,- kr/time.</Text>
          </FlexRow>
          <Text>Derudover et forberedelsestillæg på én timetakst.</Text>
          <Text bold> Kørsel </Text>
          <Text>Tillæg efter statens takster 3,56 kr/km begge veje.</Text>
        </Column>
      </Row>
      <Row>
        <Column widthPercentage="100%">
          <Title text="Kommende foredrag om hundeadfærd 2019" showHorizontalRuler />
          <Text color="#33CCCC" bold>
            Hos FOF - Ane Staunings Vej 21, 8700 Horsens:
          </Text>
          <Table>
            <LectureTableHead />
            <Tbody>
              <Tr>
                <Td>Hundens sprog - hvad fortæller de os? </Td>
                <Td>
                  <a href="http://www.fof.dk/horsens-hedensted-vejle/Kursusoversigt/friluftsliv-jagt-hundetraening-sejlads-kaeledyr/Hundetraening%20-%20foredrag/hundens-sprog-hvad-fortaeller-de-os?id=190824">
                    Klik her
                  </a>
                </Td>
                <Td>29. maj </Td>
                <Td>18.30 - 21.30 </Td>
                <Td>165 kr. </Td>
                <Td>Ledige pladser</Td>
              </Tr>
            </Tbody>
          </Table>
        </Column>
      </Row>
      <Row>
        <Title text="Udbud af foredrag om hund" showHorizontalRuler />
      </Row>
      <Row>
        <Column>
          <Image src={lectureDogLanguage} />
          <Title text="Hundens sprog - hvad fortæller de os?" smallTitle />
          <Text bold>Kursus på min. 3 timer</Text>
          <Text>
            Foredraget indeholder bl.a. hundens udvikling fra deres forfader ulven og frem til i
            dag, samt masser af billeder og videoer, som giver dig et godt indblik i de forskellige
            signaler. Du lære at aflæse disse signaler og undgå stressede situationer, således angst
            eller aggression kan forebygges.
          </Text>
        </Column>
        <Column>
          <Image src={lectureFearAndAgression} />
          <Title text="Angst og aggression: Forebyggelse og behandling" smallTitle />
          <Text bold>Kursus på min. 5 timer</Text>
          <Text>
            Reagerer din hund på andre hunde på gåturen? Snerrer den af gæsterne? Er den skrækslagen
            for dyrlægen? Foredraget omhandler bl.a. hundens indlæringsevner, hundens sprog, samt
            stress og dens negative indflydelse. Du får indsigt i, hvad der spiller en rolle for din
            hund og hvordan du kan ændre det.
          </Text>
        </Column>
        <Column>
          <Image src={lectureCalmDownFido} />
          <Title text="Slap af Fido!" smallTitle />
          <Text bold>Kursus på min. 5 timer</Text>
          <Text>
            Føler du din hund er lidt af et damp barn? Bliver den hyper når der sker noget, er svær
            at få ro på hjemme? Foredraget omhandler bl.a. hundens indlæringsevner, stress og dens
            negative indflydelse, samt hvilke faktorer i hverdagen, der spiller en rolle for din
            stressede hund.
          </Text>
        </Column>
      </Row>
    </Background>
  </Page>
);

export default withRouter(Lecture);

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
