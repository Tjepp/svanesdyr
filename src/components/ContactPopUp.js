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
          <ButtonText>{text}</ButtonText>
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
    <>
      <Backdrop onClick={onClick} />
      <StyledModal>
        <CloseButton onClick={onClick} aria-label="Luk">
          <FontAwesomeIcon icon="times" />
        </CloseButton>
        <ContactForm />
      </StyledModal>
    </>
  );
};

ContactFormModal.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9998;
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.5rem;
  color: #333;
  z-index: 10000;

  &:hover {
    color: #000;
  }

  ${Responsive.media.tablet`
    top: 0.5rem;
    right: 0.5rem;
    font-size: 2rem;
    padding: 1rem;
  `}
`;

const StyledModal = styled.div`
  position: fixed;
  background: white;
  display: flex;
  flex-direction: column;
  z-index: 9999;
  border: 1px solid #ccc;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  padding-top: 3rem;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 8px;
  box-sizing: border-box;
  animation: fadeIn 0.3s ease-out;

  ${Responsive.media.tablet`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: none;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    padding: 1rem;
    padding-top: 4rem;
    border: none;
    border-radius: 0;
  `}

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

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

const ButtonText = styled.div`
  color: #fff;
`;

export default ContactPopUp;
