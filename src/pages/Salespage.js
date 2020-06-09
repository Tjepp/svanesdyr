import React, { useState } from 'react';
import styled from 'styled-components';
import { Landingpage, Meta, Text, Button } from '../components';
import Responsive from '../components/layout/Responsive';
import LandingpageMenu from '../components/menu/LandingpageMenu';
import ContactForm from '../components/ContactForm';

const Salespage = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <Landingpage>
      <LandingpageMenu />
      <Meta />
      <WhiteBlock>
        <Content>
          <Text font color="#33CCCC">
            Skriv endnu flere ting her
          </Text>
          <Button text="Hello World" onClick={toggleContactForm} />
        </Content>
      </WhiteBlock>
      <BlackBlock>
        <Content>
          <Text font color="#33CCCC">
            Skriv endnu flere ting her
          </Text>
        </Content>
      </BlackBlock>
      <BlackBlock>
        <Content>
          <Text font color="#33CCCC">
            Skriv endnu flere ting her
          </Text>
        </Content>
      </BlackBlock>
      {showContactForm && <ContactFormModal onClick={toggleContactForm} />}
    </Landingpage>
  );
};

const ContactFormModal = ({ onClick }) => {
  return (
    <StyledModal className="modal" onClick={onClick}>
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

export default Salespage;

const Block = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  ${Responsive.media.tablet`
    padding: 0;
  `}
`;

const WhiteBlock = styled(Block)`
  background: #fff;
`;

const BlackBlock = styled(Block)`
  background: #000;
`;

const Content = styled.div`
  max-width: 1200px;
`;
