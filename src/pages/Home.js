import React, { Component } from 'react';
import { Page, Banner, Button } from '../components';

class Home extends Component {
  render() {
    return (
      <Page>
        <Banner text="For information om kommende hundehold, se her:">
          <Button
            text="HUNDEHOLD"
            onClick={() => {
              console.log('HelloWorld');
            }}
          />
        </Banner>
        <h3>Hello Home</h3>
      </Page>
    );
  }
}

export default Home;
