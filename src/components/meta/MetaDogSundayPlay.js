import React from 'react';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';

const MetaDogSundayPlay = ({ title, description, keywords }) => (
  <>
    <MetaTags>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <link rel="canonical" href="https://www.svanesdyr.dk/hundehold/hyggedage" />
      <meta property="og:url" content="https://www.svanesdyr.dk/hundehold/hyggedage" />

      <meta property="og:locale" content="da_DK" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.svanesdyr.dk/MetaDogPlay.jpg" />
      <meta property="og:site_name" content="Svanes Dyr" />

      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
    </MetaTags>
  </>
);

const defaultTitle = 'Søndagshygge i Nim, nær Horsens | Dyreadfærdskonsulent | Svanes Dyr ';
const defaultDescription = 'Svanes Dyr - Søndagshygge for nuværende og tidligere kursister';
const defaultKeywords = `hundehold midtjylland, Svanes dyr, positiv hundetræning, legestue, hundelegestue, hundelegestue horsens, legestue horsens,
  hjælp hvalp, hvalpetræning, socialisering hvalp, miljøtræning hvalp, tillid hvalp, samarbejde hvalp, kontrolleret leg hvalp, legestue hund horsens, legestue hvalp horsens,`;
MetaDogSundayPlay.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

MetaDogSundayPlay.defaultProps = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: defaultKeywords,
};

export default MetaDogSundayPlay;
