import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import Responsive from './layout/Responsive';

export default class Image extends React.Component {
  state = { isOpen: false };

  handleShowDialog = () => {
    const isDesktop = window.innerWidth >= Responsive.sizes.desktop;

    if (isDesktop) {
      const { isOpen } = this.state;
      this.setState({ isOpen: !isOpen });

      document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    }
  };

  render() {
    const { src, width, height } = this.props;
    const { isOpen } = this.state;

    return (
      <>
        <LazyLoad height="250">
          <ImageContainer src={src} width={width}>
            <StyledImage src={src} width={width} height={height} onClick={this.handleShowDialog} />
          </ImageContainer>
        </LazyLoad>
        {isOpen && (
          <StyledModal className="modal" onClick={this.handleShowDialog}>
            <ImageContainer>
              <StyledImage src={src} />
            </ImageContainer>
          </StyledModal>
        )}
      </>
    );
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

Image.defaultProps = {
  width: '100%',
  height: '100%',
};

const ImageContainer = styled.div`
  transition: transform 3000ms ease-in-out;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 4px 4px 0px 4px;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  align-self: center;
  cursor: pointer;
`;

const StyledImage = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

const StyledModal = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  transition: opacity 0.5s;
`;
