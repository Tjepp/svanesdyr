/* eslint-disable linebreak-style */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Text extends PureComponent {
  render() {
    const { bold, color, onClick, text, whiteSpace } = this.props;
    // TODO: https://stackoverflow.com/questions/33235890/react-replace-links-in-a-text
    return (
      <StyledText bold={bold} color={color} onClick={onClick} whiteSpace={whiteSpace}>
        {text}
      </StyledText>
    );
  }
}

const StyledText = styled.p`
  color: ${props => props.color};
  text-decoration: none;
  cursor: ${props => (props.onClick ? 'pointer' : 'auto')};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  white-space: ${props => (props.whiteSpace ? 'pre' : 'initial')};
  margin: 0 0 10px;
  &:hover {
    color: ${props => (props.onClick ? '#727272' : props.color)};
  }
`;

Text.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
  bold: PropTypes.bool,
  whiteSpace: PropTypes.bool
};

Text.defaultProps = { onClick: null, color: '#727272', bold: false, whiteSpace: false };

export default Text;
