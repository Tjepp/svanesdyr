import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { 
        Landingpage,
        Banner,
        Button,
        Meta,
        Text 
      } from '../components';
import Responsive from '../components/layout/Responsive';
import LandingpageMenu from '../components/menu/LandingpageMenu'
import MediaQuery from 'react-responsive';

class Salespage extends PureComponent {
  onClick = path => {
    const { history } = this.props;
    history.push(`/${path}`);
  };

  render() {
    return (
      <Landingpage>
        <LandingpageMenu>
          <Text>
            Skriv titel her
          </Text>
        </LandingpageMenu>
        <Meta />
        <MediaQuery minWidth={Responsive.sizes.tablet}>
              {matches =>
                matches ? (
                <Banner text="Information om kommende hundehold, se her:">
                  <Button text="HUNDEHOLD" onClick={() => this.onClick('hundehold')} />
                </Banner>) : 
                (<ButtonContainer>
                  <Button text="HUNDEHOLD" onClick={() => this.onClick('hundehold')} />
                </ButtonContainer>)
              }
            </MediaQuery>
        <Background>
              <Text>
                Skriv interessante sager her
              </Text>
        </Background>
        <BackgroundColor>
              <Text font color="#33CCCC"> 
                Skriv endnu flere ting her
              </Text>
        </BackgroundColor>
      </Landingpage>
    );
  }
}


export default Salespage;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  ${Responsive.media.tablet`
    padding: 0;
  `}
  margin-top: 25px;
  margin-bottom: 25px;
`;

const BackgroundColor = styled.div`
  background: #666;
  display: flex;
  justify-content: center;
  ${Responsive.media.tablet`
    padding: 0;
  `}
  margin-top: 25px;
  margin-bottom: 25px;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 25px;
`;
