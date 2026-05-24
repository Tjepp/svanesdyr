import React from 'react';
import PropTypes from 'prop-types';

const defaultTitle =
  'Spotkurser | Dyreadfærdskonsulent | Svanes Dyr ';
const defaultDescription = 'Svanes Dyr - Spotkurser i Nim, nær Horsens';
const defaultKeywords = `familievenlig hundetræning, familie hundetræning, ikke hoppe op, hilse pænt hund, gåtur hund, gå pænt hund, ikke trække hund, trækker i snoren,`;

const MetaDogSpot = ({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
}) => (
  <>
    <title>{title}</title>
      <meta property="og:title" content={title} />
      <link rel="canonical" href="https://www.svanesdyr.dk/spotkurser" />
      <meta property="og:url" content="https://www.svanesdyr.dk/spotkurser" />

      <meta property="og:locale" content="da_DK" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.svanesdyr.dk/MetaDogSummer.jpg" />
      <meta property="og:site_name" content="Svanes Dyr" />

      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
  </>
);

MetaDogSpot.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

export default MetaDogSpot;
