import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Page, Banner, Button, Meta, Column, Title, Text, Image } from '../components';
import ReactRouterPropTypes from '../ReactRouterPropTypes';
import Responsive from '../components/layout/Responsive';
import { sabrinaWithPuppy, sabrinaAndBarney, labradors } from '../assets';

class Home extends PureComponent {
  onClick = path => {
    const { history } = this.props;
    history.push(`/${path}`);
  };

  render() {
    return (
      <Page>
        <Meta />
        <Banner text="For information om kommende hundehold, se her:">
          <Button text="HUNDEHOLD" onClick={() => this.onClick('hundehold')} />
        </Banner>
        <Background>
          <Container>
            <Column>
              <Image src={sabrinaWithPuppy} />
              <Title text="Kort om mig" />
              <Text
                onClick={() => {
                  this.onClick('dyreadfaerdskonsulent');
                }}
                color="#008080"
              >
                Professionel rådgivning og vejledning til almen træning eller løsning af
                adfærdsproblemer til din hund, hest eller kat. Klik ind i menuen for oven for at
                læse mere om hvad jeg kan tilbyde til netop dig og dit kæledyr!
              </Text>
            </Column>
            <Column>
              <Image src={labradors} />
              <Title text="Positive træningsmetoder" />
              <Text
                onClick={() => {
                  this.onClick('minemetoder');
                }}
                color="#008080"
              >
                Jeg benytter mig af belønningsbaserede træningsmetoder fra de indlæringspsykologiske
                principper. Jeg vægter gensidig samarbejde og glæde højt og jeg tager hensyn til den
                enkelte i træningen.
              </Text>
            </Column>
            <Column>
              <Image src={sabrinaAndBarney} />
              <Title text="Katteadfærdsspecialist" />
              <Text
                onClick={() => {
                  this.onClick('kattetraening');
                }}
                color="#008080"
              >
                Jeg er certificeret Dyreadfærdskonsulent (BSc ABT) og har udover denne uddannelse
                specialiseret mig i katte og katteadfærd. Oplever du et adfærdsproblem i din kat,
                kan du få rådgivning og hjælp til dette hos mig.
              </Text>
            </Column>
          </Container>
        </Background>
      </Page>
    );
  }
}

Home.propTypes = {
  history: ReactRouterPropTypes.history
};

Home.defaultProps = {
  history: ReactRouterPropTypes.history
};

export default Home;

const Background = styled.div`
  background: #fff;
  display: flex;
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
  `}
`;
