import React from 'react';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';

const MetaDogSummer = ({ title, description, keywords }) => (
  <>
    <MetaTags>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <link rel="canonical" href="https://www.svanesdyr.dk/" />
      <meta property="og:url" content="https://www.svanesdyr.dk/" />

      <meta property="og:locale" content="da_DK" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.svanesdyr.dk/HoldLeg2.jpg" />
      <meta property="og:site_name" content="Svanes Dyr" />

      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
    </MetaTags>
  </>
);

const defaultTitle =
  'Sommerferietræning | Klikkertræning | Dyreadfærdskonsulent | Svanes Dyr '
  ;

const defaultDescription = 
  'Svanes Dyr - Hundetræning i sommerferien i Horsens'
  ;

const defaultKeywords = 
  `Sommerferie hund, sommerferietræning hund, hundetræning sommer, hundetræning sommerferie, familievenlig hundetræning, familie hundetræning,
  sommerdage hund`
  ;

MetaDogSummer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string
};

MetaDogSummer.defaultProps = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: defaultKeywords
};

export default MetaDogSummer;
