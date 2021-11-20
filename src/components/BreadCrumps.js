import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const BreadCrumps = ({ currentPage }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Text>Du er her: </Text>
      <LinkText
        onClick={() => {
          navigate('/');
        }}
      >
        Forside
      </LinkText>
      <Text>
        {'> '}
        {currentPage}
      </Text>
    </div>
  );
};

const Text = styled.div`
  display: inline-block;
  line-height: 24px;
  font-size: 13px;
  font-weight: normal;
  color: #9e9e9e;
  margin: 0 0 0 5px;
`;

const LinkText = styled.a`
  font-weight: bold;
  display: inline-block;
  line-height: 24px;
  font-size: 13px;
  color: #9e9e9e;
  margin: 0 0 0 5px;
  cursor: pointer;
`;

export default BreadCrumps;
