/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import axios from 'axios'; // For making client request.
import styled from 'styled-components';
import Responsive from './layout/Responsive';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', phoneNo: '', email: '', message: '' };
  }

  handleForm = e => {
    if (!this.canBeSubmitted()) {
      e.preventDefault();
      return;
    }

    // axios
    //   .post('https://formcarry.com/s/WFZnCcWzbDe', this.state, {
    //     headers: { Accept: 'application/json' }
    //   })
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // e.preventDefault();
    console.log('Hello World');
  };

  handleFields = e => this.setState({ [e.target.name]: e.target.value });

  validate() {
    const { name, phoneNo, email, message } = this.state;

    return {
      name: name.length === 0,
      phoneNo: phoneNo.length === 0,
      email: email.length === 0,
      message: message.length === 0
    };
  }

  canBeSubmitted() {
    const errors = this.validate();
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    console.log(isDisabled);
    return !isDisabled;
  }

  render() {
    // https://goshakkk.name/instant-form-fields-validation-react/
    const errors = this.validate();
    console.log(errors);

    const isDisabled = Object.keys(errors).some(x => errors[x]);
    console.log(isDisabled);

    const shouldMarkError = field => {
      console.log(field);
      const hasError = errors[field];
      // const shouldShow = this.state.touched[field];

      return hasError; // ? shouldShow : false;
    };

    console.log(shouldMarkError());

    return (
      <Form onSubmit={this.handleForm}>
        <Row>
          <Column>
            <Label>Navn</Label>
            <Input
              type="text"
              id="name"
              name="name"
              onChange={this.handleFields}
              placeholder="Dit navn"
            />
          </Column>
          <Column>
            <Label htmlFor="phoneNo">Telefonnummer</Label>
            <Input
              type="text"
              id="phoneNo"
              name="phoneNo"
              placeholder="Dit telefonnummer"
              onChange={this.handleFields}
            />
          </Column>
          <Column>
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Din e-mail"
              onChange={this.handleFields}
            />
          </Column>
        </Row>
        <Row>
          <FullWidthColumn>
            <Label htmlFor="message">Besked</Label>
            <TextArea
              name="message"
              id="message"
              placeholder="Hvad kan jeg hjælpe med?"
              onChange={this.handleFields}
            />
          </FullWidthColumn>
        </Row>
        <Row>
          <Button disabled={isDisabled} type="submit">
            Send
          </Button>
        </Row>
      </Form>
    );
  }
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  ${Responsive.media.tablet`
    flex-direction: column;
  `}
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  ${Responsive.media.tablet`
    width: 100%;
  `}
`;

const FullWidthColumn = styled(Column)`
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  height: 200px;
`;

const Label = styled.label`
  padding-bottom: 5px;
  font-family: inherit;
`;

const Input = styled.input`
  border: solid 1px #ccc;
  background: #fff;
  box-shadow: none;
  height: 40px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  border-radius: 4px;
  font-family: inherit;
`;

const TextArea = styled.textarea`
  border: solid 1px #ccc;
  background: #fff !important;
  box-shadow: none !important;
  height: 100%;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  border-radius: 4px;
  font-family: inherit;
`;

const Button = styled.button`
  background: #1cb8b8;
  cursor: pointer;
  color: #fff;
  font-family: inherit;
  border-radius: 3px;
  border: 3px solid transparent;
  width: 100px;
  height: 50px;
  font-size: larger;
  &:hover {
    background: #008080;
  }
`;

export default ContactForm;
