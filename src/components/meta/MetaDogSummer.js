import React from 'react';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';

const MetaDogSummer = ({ title, description, keywords }) => (
  <>
    <MetaTags>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <link rel="canonical" href="https://www.svanesdyr.dk/sommerhund" />
      <meta property="og:url" content="https://www.svanesdyr.dk/sommerhund" />

      <meta property="og:locale" content="da_DK" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.svanesdyr.dk/MetaDogSummer.jpg" />
      <meta property="og:site_name" content="Svanes Dyr" />

      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
    </MetaTags>
  </>
);

const defaultTitle =
  'Sommerferietræning i Nim | Dyreadfærdskonsulent | Svanes Dyr ';
const defaultDescription = 'Svanes Dyr - Hundetræning i sommerferien i Nim, nær Horsens';
const defaultKeywords = `Sommerferie hund, sommerferietræning hund, hundetræning sommer, hundetræning sommerferie, familievenlig hundetræning, familie hundetræning,
  sommerdage hund, barn og hund, sommer barn hund, nose work sommer, nose work sommertræning, hundelegestue horsens, hundelegestue, ikke hoppe op, hilse pænt hund, gåtur hund, gå pænt hund, ikke trække hund, trækker i snoren,`;
MetaDogSummer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

MetaDogSummer.defaultProps = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: defaultKeywords,
};

export default MetaDogSummer;
