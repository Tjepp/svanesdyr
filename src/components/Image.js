import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';
import Responsive from './layout/Responsive';

const Image = ({
  src,
  alt = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px',
  width = '100%',
  aspectRatio = '4 / 3',
  priority = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShowDialog = () => {
    const isDesktop = window.innerWidth >= Responsive.sizes.desktop;

    if (isDesktop) {
      setIsOpen((prev) => !prev);
      document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    }
  };

  // Check if src is a CDN path (starts with /images/) or a webpack import (data URL or hashed path)
  const isCdnPath = src.startsWith('/images/');

  // Extract just the filename (e.g., "Front1.jpg" from "/images/Front1.jpg")
  const filename = isCdnPath ? src.replace('/images/', '') : src;

  // Generate responsive srcset using Netlify Image CDN URLs with query params
  // URL pattern: /img/filename.jpg?w=400 -> redirects to /.netlify/images?url=/images/filename.jpg&w=400
  const widths = [400, 800, 1200];
  const srcSet = isCdnPath
    ? widths.map((w) => `/img/${filename}?w=${w} ${w}w`).join(', ')
    : undefined;

  // Default src for CDN paths uses 800w, for imports use as-is
  const defaultSrc = isCdnPath ? `/img/${filename}?w=800` : src;

  // Full size src for modal (no width param = original size with format optimization)
  const fullSrc = isCdnPath ? `/img/${filename}` : src;

  return (
    <>
      <ImageContainer $width={width}>
        <StyledImage
          src={defaultSrc}
          srcSet={srcSet}
          sizes={isCdnPath ? sizes : undefined}
          alt={alt}
          loading={priority ? undefined : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
          $width={width}
          $aspectRatio={aspectRatio}
          onClick={handleShowDialog}
        />
      </ImageContainer>
      {isOpen && (
        <StyledModal onClick={handleShowDialog}>
          <ModalImage src={fullSrc} alt={alt} />
        </StyledModal>
      )}
    </>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  sizes: PropTypes.string,
  width: PropTypes.string,
  aspectRatio: PropTypes.string,
  priority: PropTypes.bool,
};

export default Image;

const ImageContainer = styled.div`
  transition: transform 3000ms ease-in-out;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 4px 4px 4px 4px;
  width: ${(props) => props.$width};
  align-self: center;
  cursor: pointer;
`;

const StyledImage = styled.img`
  width: ${(props) => props.$width};
  aspect-ratio: ${(props) => props.$aspectRatio};
  object-fit: cover;
  display: block;
`;

const ModalImage = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
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
  cursor: pointer;
`;
