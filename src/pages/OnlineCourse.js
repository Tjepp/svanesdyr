/* eslint-disable react/no-unescaped-entities */
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
  TextList,
  Image,
  StyledA
} from '../components';
import Responsive from '../components/layout/Responsive';
import '../components/table/TableCss.css';
import { SandCNoOne } from '../assets';
import OnlineMenu from '../components/menu/OnlineMenu';

const onlineCheck = [
  'Træne din hund, men kan ikke deltage på hundeholdsforløb',
  'Hjælpe din hund/kat af med dårlige vaner og indlære gode vaner',
  'Give din hvalp/killing den bedste start i sit nye hjem',
  'Styrke samarbejdet og tilliden mellem dig og din hund/kat',
  'Blive klogere på positiv og etisk træning af hund/kat',
];

const OnlineCourse = () => (
  <Page>
    <Meta />
    <Banner text="Onlinekurser ved Svanes Dyr">
      <BreadCrumps currentPage="Onlinekurser" />
    </Banner>
    <Background>
    <Row marginTop={"25px"} marginBottom={"45px"}>
        <Column widthPercentage="20%">
          <Title text="Menu onlinekurser" showHorizontalRuler />
          <OnlineMenu/>
        </Column>
        <Column widthPercentage="75%">
          <Title text="Onlinekurser" showHorizontalRuler />
          <Text>
            Her på siden kan du finde et udbud af onlinekurser som udbydes på medlemssiden <StyledA href="https://www.dittraeningsunivers.dk/"> Dit TræningsUnivers</StyledA>.
          </Text>
          <Text bold>
            Onlinekurser er til dig, som bl.a. ønsker at:
          </Text>
            <TextList texts={onlineCheck} />
          <Text>
            Vi anvender <b>etiske, belønningsbaserede træningsmetoder</b>, med fokus på at styrke samarbejdet mellem dig og din hund/kat.<br />
            Vores mål er at give dig redskaberne til at skabe en harmonisk hverdag i samarbejde med dit kæledyr!
          </Text><br />
          <Text bold><font color="#33CCCC">
            Vi ønsker dig god lærings- og træningslyst!</font>
          </Text><br />
          <Text italic>
            Sabrina Svane - Svanes Dyr<br />
            Camilla E. Bruhn - Dyrecoach
          </Text><br />
          <Image src={SandCNoOne} />
        </Column>
      </Row>
    </Background>
  </Page>
);

export default withRouter(OnlineCourse);

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
