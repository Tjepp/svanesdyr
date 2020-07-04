import styled from 'styled-components';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm'

const ContactPopUp = ({ text }) => {
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return(
    <React.Fragment>
      <StyledButton onClick={toggleContactForm}>
        <Text>{text}</Text>
      </StyledButton>
      {showContactForm && <ContactFormModal/>}
    </React.Fragment>
  )
}

ContactPopUp.propTypes = {
  text: PropTypes.string.isRequired,
};

const ContactFormModal = () => {
  return (
    <StyledModal className="modal">
      <ContactForm />
    </StyledModal>
  );
};

const StyledModal = styled.div`
  position: absolute;
  width: 600px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  border: 1px solid #ccc;
  transition: 1.1s ease-out;
`;

export default ContactPopUp;

const StyledButton = styled.a`
  background: linear-gradient(#379683, #1cb8b8);
  border: 1px solid #0F292F;
  box-shadow: inset 0 1px 1px 0 #99dede, 0 2px 0 -1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  font-weight: bold;
  font-family: inherit;
  outline: none;
  padding: 15px 30px;
  border-radius: 4px;
`;

const Text = styled.div`
  color: #fff;
`;
