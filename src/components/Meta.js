import React from 'react';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';

const Meta = ({ title, description, keywords }) => (
  <React.Fragment>
    <MetaTags>
      <title>{title}</title>
      <meta name="og:title" content={title} />
      <link rel="canonical" href="https://www.svanesdyr.dk/" />
      <meta property="og:url" content="https://www.svanesdyr.dk/" />

      <meta property="og:locale" content="da_DK" />
      <meta property="og:type" content="website" />

      <meta property="og:site_name" content="Svanes dyr" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
    </MetaTags>
  </React.Fragment>
);

const defaultTitle =
  'Hundetræning | Kattetræning | Hestetræning | Hundehold Horsens | Hundetræning Midtjylland | Klikkertræning | Foredrag hundeadfærd | Foredrag kat | Dyreadfærdskonsulent | Svanes dyr ';

const defaultDescription = 'Svanes dyr - Certificeret Dyreadfærdskonsulent';

const defaultKeywords = `Hundehold Horsens, Hundetræning Midtjylland, Kattetræning, klikkertræning, hestetræning Midtjylland, Svanes dyr, positiv hundetræning, 
klikkertræning hest, klikkertræning kat, klikkertræning hund, adfærdsbehandler Midtjylland, adfærdsbehandler Horsens, hundeadfærd, 
katteadfærd, hesteadfærd, adfærdsterapeut hund, adfærdsterapeut hest, adfærdsterapeut kat, hundehvisker, hestehvisker, kattehvisker, 
rådgivning hund, hjælp hund, hjælp kat, hjælp hest, rådgivning kat, rådgivning hund, Sabrina Svane, svane hundetræning, foredrag hundeadfærd, 
foredrag kat, foredrag katteadfærd, foredrag svane, konsulet adfærd, adfærdskonsulent`;

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string
};

Meta.defaultProps = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: defaultKeywords
};

export default Meta;