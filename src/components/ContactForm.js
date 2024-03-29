/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import axios from 'axios'; // For making client request.
import styled from 'styled-components';
import Responsive from './layout/Responsive';
import Text from './Text';
import StyledA from './links/StyledExternal';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phoneNo: '',
      email: '',
      message: '',
      touched: {
        name: false,
        phoneNo: false,
        email: false,
        message: false,
      },
      sent: false,
      sendError: false,
    };
  }

  handleForm = (e) => {
    if (!this.canBeSubmitted()) {
      e.preventDefault();
      return;
    }

    const { name, phoneNo, email, message } = this.state;

    axios
      .post(
        'https://formcarry.com/s/WFZnCcWzbDe',
        { name, phoneNo, email, message },
        {
          headers: { Accept: 'application/json' },
        }
      )
      .then((response) => {
        this.setState({ sent: true });
      })
      .catch((error) => {
        this.setState({ sendError: true });
      });
    e.preventDefault();
  };

  handleFields = (e) => this.setState({ [e.target.name]: e.target.value });

  handleBlur = (field) => (evt) => {
    const { touched } = this.state;

    this.setState({
      touched: { ...touched, [field]: true },
    });
  };

  canBeSubmitted() {
    const errors = this.validate();
    const isDisabled = Object.keys(errors).some((x) => errors[x]);
    return !isDisabled;
  }

  validate() {
    const { name, phoneNo, email, message } = this.state;

    return {
      name: name.length === 0,
      phoneNo: phoneNo.length === 0,
      email: email.length === 0,
      message: message.length === 0,
    };
  }

  render() {
    const errors = this.validate();
    const isDisabled = Object.keys(errors).some((x) => errors[x]);
    const { touched, sent, name, sendError, message } = this.state;

    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = touched[field];

      return hasError ? shouldShow : false;
    };

    return (
      <>
        {sendError ? (
          <Text whiteSpace>
            Der skete desværre en fejl.
            <br />
            <StyledA href={`mailto:info@svanesdyr.dk?body=${message}`}>
              Send mig en mail istedet
            </StyledA>
          </Text>
        ) : null}
        {sent ? (
          <MessageSentContainer>
            {/* <Text>{`Jeg afholder i øjeblikket ferie! Tak for din besked ${name}, jeg er tilbage på kontoret igen den 15. januar. Du får svar hurtigst muligt herefter.`}</Text> */}
            <Text>{`Tak for din besked ${name}! Jeg har kontortid mandage og torsdage og svarer tilbage på disse dage.`}</Text>
          </MessageSentContainer>
        ) : (
          <Form onSubmit={this.handleForm}>
            <Row>
              <Column>
                <Label>Navn</Label>
                <Input
                  error={shouldMarkError('name')}
                  onBlur={this.handleBlur('name')}
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
                  error={shouldMarkError('phoneNo')}
                  onBlur={this.handleBlur('phoneNo')}
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
                  error={shouldMarkError('email')}
                  onBlur={this.handleBlur('email')}
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
                <Label htmlFor="message">Din Besked:</Label>
                <TextArea
                  error={shouldMarkError('message')}
                  onBlur={this.handleBlur('message')}
                  name="message"
                  id="message"
                  placeholder="Oplys venligst hvilket hold du vil deltage på eller om du ønsker en konsultation"
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
        )}
      </>
    );
  }
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-height: 450px;
  justify-content: space-evenly;
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
    padding-bottom: 1rem;
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
  border: ${(props) => (props.error ? 'solid 1px #F00' : 'solid 1px #CCC')};
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
  border: ${(props) => (props.error ? 'solid 1px #F00' : 'solid 1px #CCC')};
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

const MessageSentContainer = styled.div`
  min-height: 450px;
`;

export default ContactForm;
