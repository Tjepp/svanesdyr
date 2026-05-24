import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from '../Image';
import Responsive from '../layout/Responsive';

const TestimonialImage = ({ src, alt = '' }) => (
  <TestimonialImageWrapper>
    <Image src={src} alt={alt} width="100%" height="300px" />
  </TestimonialImageWrapper>
);

TestimonialImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default TestimonialImage;

const TestimonialImageWrapper = styled.div`
  width: 250px;
  flex-shrink: 0;
  ${Responsive.media.tablet`
    width: 200px;
  `}
`;
