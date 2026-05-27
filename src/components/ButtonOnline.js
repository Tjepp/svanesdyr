import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({ text, href }) => (
  <ButtonContainer>
    <StyledButton href={href} target="_blank" rel="noopener noreferrer">
      <Text>{text}</Text>
    </StyledButton>
  </ButtonContainer>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Button;

const StyledButton = styled.a`
  background: linear-gradient(#008037, #008037);
  border: 1px solid #000;
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
