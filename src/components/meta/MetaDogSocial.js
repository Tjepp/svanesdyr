import React from 'react';
import PropTypes from 'prop-types';

const defaultTitle =
  'Socialiseringshold i Nim | Kontrolleret leg | Dyreadfærdskonsulent | Svanes Dyr ';
const defaultDescription = 'Svanes Dyr - Socialiseringshold i Nim, nær Horsens';
const defaultKeywords = `hundehold midtjylland, klikkertræning hvalp, Svanes dyr, positiv hundetræning, 
  hjælp hvalp, hvalpetræning, socialisering hvalp, miljøtræning hvalp, tillid hvalp, samarbejde hvalp, kontrolleret leg hvalp`;

const MetaDogSocial = ({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
}) => (
  <>
    <title>{title}</title>
      <meta property="og:title" content={title} />
      <link rel="canonical" href="https://www.svanesdyr.dk/hundehold/socialisering" />
      <meta property="og:url" content="https://www.svanesdyr.dk/hundehold/socialisering" />

      <meta property="og:locale" content="da_DK" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.svanesdyr.dk/MetaDogSocial.jpg" />
      <meta property="og:site_name" content="Svanes Dyr" />

      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
  </>
);

MetaDogSocial.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

export default MetaDogSocial;
