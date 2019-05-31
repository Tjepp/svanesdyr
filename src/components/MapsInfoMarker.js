import React, { PureComponent } from 'react';
import { InfoWindow, Marker } from '@react-google-maps/api';
import PropTypes from 'prop-types';

class MapsInfoMarker extends PureComponent {
  state = {
    isOpen: false
  };

  toggleIsOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { position, text } = this.props;
    const { isOpen } = this.state;

    return (
      <Marker position={position} onClick={this.toggleIsOpen}>
        {isOpen && (
          <InfoWindow position={position} onCloseClick={this.toggleIsOpen}>
            <div
              style={{
                background: `white`
              }}
            >
              <p>{text}</p>
            </div>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

MapsInfoMarker.propTypes = {
  text: PropTypes.string.isRequired,
  position: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }).isRequired
};

export default MapsInfoMarker;
