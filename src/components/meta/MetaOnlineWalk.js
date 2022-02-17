import React from 'react';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';

const MetaOnlineWalk = ({ title, description, keywords }) => (
  <>
    <MetaTags>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <link rel="canonical" href="https://www.svanesdyr.dk/gaatur" />
      <meta property="og:url" content="https://www.svanesdyr.dk/gaatur" />

      <meta property="og:locale" content="da_DK" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.svanesdyr.dk/OnlineCoverWalk.png" />
      <meta property="og:site_name" content="Svanes Dyr" />

      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
    </MetaTags>
  </>
);

const defaultTitle = 'Drømmegåturen | Svanes Dyr | Onlinekursus | Ro på gåtur';
const defaultDescription =
  'Svanes Dyr - Få gåturen du drømmer om! Sådan lærer du din hund at passere andre hunde i ro og mag';
const defaultKeywords = `Onlinekursus gåtur, aggressiv hund andre hunde, gør af andre hunde, træls gåtur hund, online hund ro, onlinekursus hund ro, hund kontakt gåtur,`;
MetaOnlineWalk.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

MetaOnlineWalk.defaultProps = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: defaultKeywords,
};

export default MetaOnlineWalk;
