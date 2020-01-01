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
  StyledA,
  StyledB,
  StyledOnline,
  Image
} from '../components';
import Responsive from '../components/layout/Responsive';
import '../components/table/TableCss.css';
import OnlineMenu from '../components/menu/OnlineMenu';
import { OnlinePlayMaster } from '../assets';

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
            Klik ind på det enkelte hundekursus for at læse mere via <StyledA href="https://www.dittraeningsunivers.dk/"> Dit TræningsUnivers</StyledA>.
          </Text>
          <Row>
          <Column widthPercentage="45%">
                <Image src={OnlinePlayMaster}/>
                <br />
              <StyledOnline href="https://www.dittraeningsunivers.dk/play_master">
                Play Master
              </StyledOnline>

                <Text color="#000000">
                  Får din kat nok med udfordringer i hverdagen?
                  Manglende aktivering kan resultere i en plagende, pågående, angribende eller uartig kat, som generer dig.
                  DU kan blive mester i at finde på sjove aktiviteter med din kat!
                </Text>
                <Title color="#000000" text="Din investering DKK 879,00 inkl. moms" smallTitle />

              <StyledB href="https://www.dittraeningsunivers.dk/play_master">
                  Lær mere om Play Master...
              </StyledB>

          </Column>

          </Row>
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
