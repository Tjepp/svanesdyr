import React from 'react';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';

const MetaOnlineWebinarCool = ({ title, description, keywords }) => (
  <>
    <MetaTags>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <link rel="canonical" href="https://www.svanesdyr.dk/webinarreaktivtilro" />
      <meta property="og:url" content="https://www.svanesdyr.dk/webinarreaktivtilro" />

      <meta property="og:locale" content="da_DK" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.svanesdyr.dk/MetaOnlineCoverDogPlay.png" />
      <meta property="og:site_name" content="Svanes Dyr" />

      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
    </MetaTags>
  </>
);

const defaultTitle = 'Webinar Rolig gåtur | Svanes Dyr | Online | Fra reaktiv til ro';
const defaultDescription =
  'Svanes Dyr: Fra reaktiv til ro i mødet med andre hunde';
const defaultKeywords = `Onlinekursus gåtur, reaktiv hund, gøende hund, aggression hund, aggressiv hund, møde andre hunde, hundemøder, sur hund, sur hundemøde, dårlig hundemøde, rolig gåtur, onlinekursus gåtur, online hundekursus, stresset hund, gåtur stress,`;
MetaOnlineWebinarCool.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

MetaOnlineWebinarCool.defaultProps = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: defaultKeywords,
};

export default MetaOnlineWebinarCool;
