import React from 'react';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';

const MetaLaw = ({ title, description, keywords }) => (
  <>
    <MetaTags>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <link rel="canonical" href="https://www.svanesdyr.dk/Onlinehandelsbetingelser" />
      <meta property="og:url" content="https://www.svanesdyr.dk/Onlinehandelsbetingelser" />

      <meta property="og:locale" content="da_DK" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.svanesdyr.dk/logoLightGrey.png" />
      <meta property="og:site_name" content="Svanes Dyr" />

      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
    </MetaTags>
  </>
);

const defaultTitle = 'Handelsbetingelser | Svanes Dyr | Onlinekurser';
const defaultDescription = 'Svanes Dyr - Handelsbetingelser onlinekurser';
const defaultKeywords = `Onlinekursus handelsbetingelser,`;

MetaLaw.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

MetaLaw.defaultProps = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: defaultKeywords,
};

export default MetaLaw;
