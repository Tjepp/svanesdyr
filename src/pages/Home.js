import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Page, Banner, Button, Image, Meta } from '../components';
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
            <Column
              title="Kort om mig"
              text="Professionel rådgivning og vejledning til almen træning eller løsning af adfærdsproblemer til
                    din hund, hest eller kat. Klik ind i menuen for oven for at læse mere om hvad jeg kan tilbyde
                    til netop dig og dit kæledyr!"
              picture={sabrinaWithPuppy}
              onClick={() => {
                this.onClick('about');
              }}
            />
            <Column
              title="Positive træningsmetoder"
              text="Jeg benytter mig af belønningsbaserede træningsmetoder fra de indlæringspsykologiske
                    principper. Jeg vægter gensidig samarbejde og glæde højt og jeg tager hensyn til den enkelte i
                    træningen."
              picture={labradors}
              onClick={() => {
                this.onClick('mymethods');
              }}
            />
            <Column
              title="Katteadfærdsspecialist"
              text="Jeg er certificeret Dyreadfærdskonsulent (BSc ABT) og har udover denne uddannelse
                    specialiseret mig i katte og katteadfærd. Oplever du et adfærdsproblem i din kat, kan du få
                    rådgivning og hjælp til dette hos mig."
              picture={sabrinaAndBarney}
              onClick={() => {
                this.onClick('cat');
              }}
            />
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

const Column = ({ title, text, onClick, picture }) => (
  <ColumnContainer>
    <Image src={picture} />
    <Title>{title}</Title>
    <Text onClick={onClick}>{text}</Text>
  </ColumnContainer>
);

Column.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  picture: PropTypes.string.isRequired
};

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

const ColumnContainer = styled.div`
  flex-direction: column;
  margin: 20px 0px;
  width: 32%;
  ${Responsive.media.tablet`
    width: 100%;
    align-self: end;
    margin: 20px 0px;
  `}
`;

const Title = styled.h4`
  color: #666;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.01);
`;

const Text = styled.p`
  color: #008080;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #727272;
  }
`;
