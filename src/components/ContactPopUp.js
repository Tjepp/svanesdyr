import styled from 'styled-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from './ContactForm';
import Responsive from './layout/Responsive';

const ContactPopUp = ({ text }) => {
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <div>
      <ButtonContainer>
        <StyledButton onClick={toggleContactForm}>
          <Text>{text}</Text>
        </StyledButton>
      </ButtonContainer>
      {showContactForm && <ContactFormModal onClick={toggleContactForm} />}
    </div>
  );
};

ContactPopUp.propTypes = {
  text: PropTypes.string.isRequired,
};

const ContactFormModal = ({ onClick }) => {
  return (
    <StyledModal className="modal">
      <ContactForm />
      <FontAwesomeIcon icon="times" onClick={onClick} style={{ cursor: 'pointer' }} />
    </StyledModal>
  );
};

ContactFormModal.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const StyledModal = styled.div`
  position: absolute;
  background: white;
  display: flex;
  justify-content: center;
  z-index: 9999;
  border: 1px solid #ccc;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  ${Responsive.media.tablet`
    width: 100%;
    padding: 1rem;
  `}
`;

export default ContactPopUp;

const StyledButton = styled.a`
  background: linear-gradient(#379683, #1cb8b8);
  border: 1px solid #0f292f;
  box-shadow: inset 0 1px 1px 0 #99dede, 0 2px 0 -1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  font-weight: bold;
  font-family: inherit;
  outline: none;
  padding: 15px 30px;
  border-radius: 4px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Text = styled.div`
  color: #fff;
`;
