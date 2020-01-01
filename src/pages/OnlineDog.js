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
  Image,
  StyledOnline
} from '../components';
import Responsive from '../components/layout/Responsive';
import '../components/table/TableCss.css';
import OnlineMenu from '../components/menu/OnlineMenu';
import { OnlineRecall, OnlineLeash } from '../assets';

const OnlineDog = () => (
  <Page>
    <script async id="_simplero_landing_page_js_134353" src="https://dittraeningsunivers.simplero.com/page/134353.js"></script>
    <Meta />
    <Banner text="Onlinekurser ved Svanes Dyr">
      <BreadCrumps currentPage="Hundekurser" />
    </Banner>
    <Background>
    <Row marginTop={"25px"} marginBottom={"45px"}>
        <Column widthPercentage="20%">
          <Title text="Menu onlinekurser" showHorizontalRuler />
          <OnlineMenu/>
        </Column>
        <Column widthPercentage="75%">
          <Title text="Online hundekurser" showHorizontalRuler />
          <Text>
            Hverdagen med hunden skal være en leg for begge parter, hvor gensidig glæde, samvær og succes er i centrum!<br />
            Klik ind på det enkelte hundekursus for at læse mere via <StyledA href="https://www.dittraeningsunivers.dk/"> Dit TræningsUnivers</StyledA>.
          </Text>
          <Row>
          <Column widthPercentage="45%">
                <Image src={OnlineRecall}/>
                <br />
              <StyledOnline href="https://www.dittraeningsunivers.dk/power_indkald">
              Power Indkald
              </StyledOnline>

                <Text color="#000000">
                  Få POWER og glæde i dit indkald, så DU altid er din hunds førsteprioritet!
                  På dette online kursus lærer du hvordan du selv kan træne et stærkt og stabilt indkald fyldt med power og glæde med din hund, selv når den bliver distraheret!
                </Text>
                <Title color="#000000" text="Din investering DKK 1.997,00 inkl. moms" smallTitle />

              <StyledB href="https://www.dittraeningsunivers.dk/power_indkald">
                  Lær mere om Power Indkald...
              </StyledB>

          </Column>
          <Column widthPercentage="45%">
                <Image src={OnlineLeash}/>
                <br />
              <StyledOnline href="https://www.dittraeningsunivers.dk/ikketraekke">
                Gå pænt uden at trække
              </StyledOnline>

                <Text color="#000000">
                  Få en hund der vil elske at følges med dig når i er ude!
                  På dette online kursus lærer du hvordan du træner din hund til ikke at trække i snoren, så i begge kan nyde rolige og afslappede gåture.
                </Text>
                <Title color="#000000" text="Din investering DKK 599,00 inkl. moms" smallTitle />

              <StyledB href="https://www.dittraeningsunivers.dk/ikketraekke">
                  Lær mere om Gå pænt i snor...
              </StyledB>

          </Column>
          </Row>
          </Column>
      </Row>
    </Background>
  </Page>
);

export default withRouter(OnlineDog);

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
