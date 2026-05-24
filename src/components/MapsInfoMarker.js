import React, { useState } from 'react';
import { InfoWindow, Marker } from '@react-google-maps/api';
import PropTypes from 'prop-types';

const MapsInfoMarker = ({ position, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Marker position={position} onClick={toggleIsOpen}>
      {isOpen && (
        <InfoWindow position={position} onCloseClick={toggleIsOpen}>
          <div
            style={{
              background: `white`,
            }}
          >
            <p>{text}</p>
          </div>
        </InfoWindow>
      )}
    </Marker>
  );
};

MapsInfoMarker.propTypes = {
  text: PropTypes.string.isRequired,
  position: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
};

export default MapsInfoMarker;
