import React from 'react';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';

const MetaOnlineWebinarPlaytime = ({ title, description, keywords }) => (
  <>
    <MetaTags>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <link rel="canonical" href="https://www.svanesdyr.dk/webinardengodehundeleg" />
      <meta property="og:url" content="https://www.svanesdyr.dk/webinardengodehundeleg" />

      <meta property="og:locale" content="da_DK" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.svanesdyr.dk/MetaOnlineDogPlay.png" />
      <meta property="og:site_name" content="Svanes Dyr" />

      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
    </MetaTags>
  </>
);

const defaultTitle = 'Webinar Hundeleg | Svanes Dyr | Online | Kontrolleret hundeleg';
const defaultDescription =
  'Svanes Dyr: Sådan kontrollerer du leg mellem hunde - så giver alle en god oplevelse';
const defaultKeywords = `Onlinekursus hundeleg, den gode hundeleg, kontrolleret socialisering, kontrolleret hundeleg, kontrolleret hvalpeleg, hvalpeleg, hundeleg, hunde leger, hvalpe leger, hundenes leg, hvalpes leg, hvalp socialisering, hvalpesocialisering,`;
MetaOnlineWebinarPlaytime.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

MetaOnlineWebinarPlaytime.defaultProps = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: defaultKeywords,
};

export default MetaOnlineWebinarPlaytime;
