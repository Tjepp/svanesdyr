import PropTypes from 'prop-types';
import { memo } from 'react';
import styled from 'styled-components';
import Responsive from './layout/Responsive';

const TextCenter = memo(function TextCenter({
  bold = false,
  color = '#000',
  onClick = null,
  children,
  whiteSpace = false,
  italic = false,
}) {
  return (
    <StyledText
      $bold={bold}
      color={color}
      onClick={onClick}
      $whiteSpace={whiteSpace}
      $italic={italic}
    >
      {children}
    </StyledText>
  );
});

const StyledText = styled.div`
  color: ${(props) => props.color};
  text-decoration: none;
  cursor: ${(props) => (props.onClick ? 'pointer' : 'auto')};
  font-weight: ${(props) => (props.$bold ? 'bold' : 'normal')};
  font-style: ${(props) => (props.$italic ? 'italic' : 'normal')};
  white-space: ${(props) => (props.$whiteSpace ? 'pre' : 'initial')};
  margin: 0 0 10px;
  font-size: 15px;
  line-height: 22px;
  &:hover {
    color: ${(props) => (props.onClick ? '#727272' : props.color)};
  }
  ${Responsive.media.tablet`
    margin-left: 0px;
    margin-top: 25px;
    text-align: center;
  `}
`;

TextCenter.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
  bold: PropTypes.bool,
  whiteSpace: PropTypes.bool,
  italic: PropTypes.bool,
};

export default TextCenter;
