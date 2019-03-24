import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Page, Banner, Button, Meta, Column, Title, Text, Image } from '../components';
import ReactRouterPropTypes from '../ReactRouterPropTypes';
import Responsive from '../components/Responsive';
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
          <Button text="HUNDEHOLD" onClick={() => this.onClick('dogcourse')} />
        </Banner>
        <Background>
          <Container>
            <Column>
              <Image src={sabrinaWithPuppy} />
              <Title text="Kort om mig" />
              <Text
                text="Professionel rådgivning og vejledning til almen træning eller løsning af adfærdsproblemer til
                    din hund, hest eller kat. Klik ind i menuen for oven for at læse mere om hvad jeg kan tilbyde
                    til netop dig og dit kæledyr!"
                onClick={() => {
                  this.onClick('about');
                }}
                color="#008080"
              />
            </Column>
            <Column>
              <Image src={labradors} />
              <Title text="Positive træningsmetoder" />
              <Text
                text="Jeg benytter mig af belønningsbaserede træningsmetoder fra de indlæringspsykologiske
                principper. Jeg vægter gensidig samarbejde og glæde højt og jeg tager hensyn til den enkelte i
                træningen."
                onClick={() => {
                  this.onClick('mymethods');
                }}
                color="#008080"
              />
            </Column>
            <Column>
              <Image src={sabrinaAndBarney} />
              <Title text="Katteadfærdsspecialist" />
              <Text
                text="Jeg er certificeret Dyreadfærdskonsulent (BSc ABT) og har udover denne uddannelse
                specialiseret mig i katte og katteadfærd. Oplever du et adfærdsproblem i din kat, kan du få
                rådgivning og hjælp til dette hos mig."
                onClick={() => {
                  this.onClick('cat');
                }}
                color="#008080"
              />
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
