import React from 'react';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';

const MetaDogSocial = ({ title, description, keywords }) => (
  <>
    <MetaTags>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <link rel="canonical" href="https://www.svanesdyr.dk/hundehold/socialisering" />
      <meta property="og:url" content="https://www.svanesdyr.dk/hundehold/socialisering" />

      <meta property="og:locale" content="da_DK" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.svanesdyr.dk/MetaDogPlay1.jpg" />
      <meta property="og:site_name" content="Svanes Dyr" />

      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
    </MetaTags>
  </>
);

const defaultTitle =
  'Socialiseringshold Horsens | Kontrolleret leg | Dyreadfærdskonsulent | Svanes Dyr ';
const defaultDescription = 'Svanes Dyr - Socialiseringshold i Horsens';
const defaultKeywords = `hundehold midtjylland, klikkertræning hvalp, Svanes dyr, positiv hundetræning, 
  hjælp hvalp, hvalpetræning, socialisering hvalp, miljøtræning hvalp, tillid hvalp, samarbejde hvalp, kontrolleret leg hvalp`;
MetaDogSocial.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

MetaDogSocial.defaultProps = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: defaultKeywords,
};

export default MetaDogSocial;
