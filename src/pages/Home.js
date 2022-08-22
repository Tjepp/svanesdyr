import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { Page, Banner, Button, Meta, Column, Title, Text, Image, StyledB } from '../components';
import Responsive from '../components/layout/Responsive';
import { ClubCover, sabrinaAndBarney, FrontNoOne } from '../assets';

const Home = () => {
  const navigate = useNavigate();

  const onClick = (path) => {
    navigate(`/${path}`);
  };

  return (
    <Page>
      <Meta />
      <MediaQuery minWidth={Responsive.sizes.tablet}>
        {(matches) =>
          matches ? (
            <Banner text="Information om kommende hundehold, se her:">
              <Button text="HUNDEHOLD" onClick={() => onClick('hundehold')} />
            </Banner>
          ) : (
            <ButtonContainer>
              <Button text="HUNDEHOLD" onClick={() => onClick('hundehold')} />
            </ButtonContainer>
          )
        }
      </MediaQuery>
      <Background>
        <Container>
          <Column>
            <Image src={ClubCover} />
            <Title color="000" text="Gratis fællesskab til hundeejere!" />
            <StyledB color="#000" href="https://www.facebook.com/groups/hundesprogsklub">
              Vil du blive klogere på hvad din hund fortæller dig? Så kom GRATIS med i
              Hundesprogsklubben på Facebook. Et fællesskab for alle hundeejere, der ønsker at
              forstå deres bedste ven bedre!
            </StyledB>
          </Column>
          <Column>
            <Image src={FrontNoOne} />
            <Title color="000" text="Positive træningsmetoder" />
            <Text
              onClick={() => {
                onClick('minemetoder');
              }}
              color="#000"
            >
              Jeg anvender belønningsbaserede træningsmetoder fra de indlæringspsykologiske
              principper. Mine nøgleord i al omgang med dyr er samarbejde, succes og tillid.
            </Text>
          </Column>
          <Column>
            <Image src={sabrinaAndBarney} />
            <Title color="000" text="Katteadfærdsspecialist" />
            <Text
              onClick={() => {
                onClick('kattetraening');
              }}
              color="#000"
            >
              Jeg har specialiseret mig i katteadfærd og kan tilbyde dig professionel rådgivning og
              hjælp, hvis du oplever problemadfærd hos din kat.
            </Text>
          </Column>
        </Container>
      </Background>
    </Page>
  );
};

export default Home;

const Background = styled.div`
  background: #fff;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  ${Responsive.media.tablet`
    padding: 0;
  `}
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  justify-content: space-between;
  ${Responsive.media.tablet`
    flex-direction: column;
    align-items: center;
    padding: 15px;
    margin-top: 10px;
  `}
  margin-top: 50px;
  margin-bottom: 25px;
  flex-grow: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 25px;
`;
