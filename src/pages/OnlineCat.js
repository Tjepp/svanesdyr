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
  StyledB
} from '../components';
import Responsive from '../components/layout/Responsive';
import '../components/table/TableCss.css';
import OnlineMenu from '../components/menu/OnlineMenu';

const OnlineCat = () => (
  <Page>
    <Meta />
    <Banner text="Onlinekurser ved Svanes Dyr">
      <BreadCrumps currentPage="Kattekurser" />
    </Banner>
    <Background>
    <Row marginTop={"25px"} marginBottom={"45px"}>
        <Column widthPercentage="20%">
          <Title text="Menu onlinekurser" showHorizontalRuler />
          <OnlineMenu/>
        </Column>
        <Column widthPercentage="75%">
          <Title text="Online kattekurser" showHorizontalRuler />
          <Text>
            Fordi katte også fortjener en indholdsrig hverdag, med sjov og succes i samvær med deres mennesker!<br />
            Klik ind på det enkelte hundekursus for at læse mere via <StyledB href="https://www.dittraeningsunivers.dk/"> Dit TræningsUnivers</StyledB>.
          </Text>

        </Column>
      </Row>
    </Background>
  </Page>
);

export default withRouter(OnlineCat);

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
