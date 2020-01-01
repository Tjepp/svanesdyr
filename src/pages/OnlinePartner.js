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
  Image
} from '../components';
import Responsive from '../components/layout/Responsive';
import '../components/table/TableCss.css';
import { SandCNoTwo } from '../assets';
import OnlineMenu from '../components/menu/OnlineMenu';

const OnlinePartner = () => (
  <Page>
    <Meta />
    <Banner text="Onlinekurser ved Svanes Dyr">
      <BreadCrumps currentPage="Samarbejdspartner" />
    </Banner>
    <Background>
    <Row marginTop={"25px"} marginBottom={"45px"}>
        <Column widthPercentage="20%">
          <Title text="Menu onlinekurser" showHorizontalRuler />
          <OnlineMenu/>
        </Column>
        <Column widthPercentage="75%">
          <Title text="Samarbejdspartner" showHorizontalRuler />
          <Text>
            Sabrina Svane - indehaver af Svanes Dyr - har indgået et samarbejde med Camilla Bruhn - indehaver af Dyrecoach -
             i et fælles mål om at udbyde onlinekurser til dig, uanset om du er hund-, hest- eller katteejer.
          </Text>
          <Text>
            Vi ønsker at give dig en større forståelse for hundens / hestens / kattens adfærd og 
            indsigt i hvordan du kan træne og hjælpe dig og din hund / hest / kat til en mere harmonisk hverdag sammen.
          </Text>
          <Text>
            Vi anvender <b>etiske, belønningsbaserede træningsmetoder</b>, med fokus på at styrke samarbejdet mellem dig og din hund/kat.<br />
            Vores mål er at give dig redskaberne til at skabe en harmonisk hverdag i samarbejde med dit kæledyr!
          </Text>
          <Text>
            Vores onlinekurser henvender sig til dig med familiehunden, hyggehesten eller hvis du har katte i hjemmet,
            og ønsker rådgivning og redskaber til at skabe en tillidsfuld samarbejdspartner.
            Vi lægger ikke vægt på konkurrenceverdenens krav, men fokuserer på at skabe en hverdag i balance mellem dig og din hund / hest / kat.
          </Text>
          <br />
          <Text bold><font color="#33CCCC">
            Vi ønsker dig god lærings- og træningslyst!</font>
          </Text>
          <br />
          <Text italic>
            Sabrina Svane - Svanes Dyr<br />
            Camilla E. Bruhn - Dyrecoach
          </Text><br />
          <Image src={SandCNoTwo} />
        </Column>
      </Row>
    </Background>
  </Page>
);

export default withRouter(OnlinePartner);

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;