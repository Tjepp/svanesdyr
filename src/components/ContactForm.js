import React, { useState, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Responsive from './layout/Responsive';
import Text from './Text';
import StyledA from './links/StyledExternal';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNo: '',
    email: '',
    message: '',
  });
  const [touched, setTouched] = useState({
    name: false,
    phoneNo: false,
    email: false,
    message: false,
  });
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState(false);

  const validate = useCallback(() => {
    return {
      name: formData.name.length === 0,
      phoneNo: formData.phoneNo.length === 0,
      email: formData.email.length === 0,
      message: formData.message.length === 0,
    };
  }, [formData]);

  const canBeSubmitted = useCallback(() => {
    const errors = validate();
    const isDisabled = Object.keys(errors).some((x) => errors[x]);
    return !isDisabled;
  }, [validate]);

  const handleForm = (e) => {
    if (!canBeSubmitted()) {
      e.preventDefault();
      return;
    }

    axios
      .post(
        'https://formcarry.com/s/WFZnCcWzbDe',
        { 
          name: formData.name, 
          phoneNo: formData.phoneNo, 
          email: formData.email, 
          message: formData.message 
        },
        {
          headers: { Accept: 'application/json' },
        }
      )
      .then(() => {
        setSent(true);
      })
      .catch(() => {
        setSendError(true);
      });
    e.preventDefault();
  };

  const handleFields = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const errors = validate();
  const isDisabled = Object.keys(errors).some((x) => errors[x]);

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
          <StyledA href={`mailto:info@svanesdyr.dk?body=${formData.message}`}>
            Send mig en mail istedet
          </StyledA>
        </Text>
      ) : null}
      {sent ? (
        <MessageSentContainer>
          <Text>{`Tak for din besked ${formData.name}! Jeg har kontortid mandage og torsdage og svarer tilbage på disse dage.`}</Text>
        </MessageSentContainer>
      ) : (
        <Form onSubmit={handleForm}>
          <Row>
            <Column>
              <Label>Navn</Label>
              <Input
                $error={shouldMarkError('name')}
                onBlur={handleBlur('name')}
                type="text"
                id="name"
                name="name"
                onChange={handleFields}
                placeholder="Dit navn"
              />
            </Column>
            <Column>
              <Label htmlFor="phoneNo">Telefonnummer</Label>
              <Input
                $error={shouldMarkError('phoneNo')}
                onBlur={handleBlur('phoneNo')}
                type="text"
                id="phoneNo"
                name="phoneNo"
                placeholder="Dit telefonnummer"
                onChange={handleFields}
              />
            </Column>
            <Column>
              <Label htmlFor="email">E-mail</Label>
              <Input
                $error={shouldMarkError('email')}
                onBlur={handleBlur('email')}
                type="email"
                id="email"
                name="email"
                placeholder="Din e-mail"
                onChange={handleFields}
              />
            </Column>
          </Row>
          <Row>
            <FullWidthColumn>
              <Label htmlFor="message">Din Besked:</Label>
              <TextArea
                $error={shouldMarkError('message')}
                onBlur={handleBlur('message')}
                name="message"
                id="message"
                placeholder="Oplys venligst hvilket hold du vil deltage på eller om du ønsker en konsultation"
                onChange={handleFields}
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
};

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
  border: ${(props) => (props.$error ? 'solid 1px #F00' : 'solid 1px #CCC')};
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
  border: ${(props) => (props.$error ? 'solid 1px #F00' : 'solid 1px #CCC')};
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
