import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { MetaNotFound, Page, Text, Title } from '../components';

const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirect = setTimeout(() => {
      navigate('/', { replace: true });
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [navigate]);

  return (
    <Page>
      <MetaNotFound />
      <Container>
        <Title text="Siden blev ikke fundet" />
        <Text>Beklager, den side du leder efter findes ikke.</Text>
        <Text>Du bliver sendt til forsiden om {countdown} sekunder...</Text>
        <StyledLink href="/">Gå til forsiden nu</StyledLink>
      </Container>
    </Page>
  );
};

export default NotFound;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  padding: 20px;
  text-align: center;
`;

const StyledLink = styled.a`
  margin-top: 20px;
  color: #1a73e8;
  text-decoration: underline;
`;
