import React from 'react';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';

const Meta = ({ title, description, keywords }) => (
  <>
    <MetaTags>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <link rel="canonical" href="https://www.svanesdyr.dk/" />
      <meta property="og:url" content="https://www.svanesdyr.dk/" />

      <meta property="og:locale" content="da_DK" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.svanesdyr.dk/MainPage.jpg" />
      <meta property="og:site_name" content="Svanes Dyr" />

      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
    </MetaTags>
  </>
);

const defaultTitle =
  'Hundetræning | Hundehold Horsens | Kattetræning | Hundetræning Midtjylland | Klikkertræning | Foredrag hundeadfærd | Foredrag kat | Dyreadfærdskonsulent | Svanes Dyr ';
const defaultDescription = 'Svanes Dyr - Certificeret Dyreadfærdskonsulent';
const defaultKeywords = `Hundehold Horsens, Hundetræning Midtjylland, Kattetræning, klikkertræning, hestetræning Midtjylland, Svanes dyr, positiv hundetræning, 
  klikkertræning hest, klikkertræning kat, klikkertræning hund, adfærdsbehandler Midtjylland, adfærdsbehandler Horsens, hundeadfærd, 
  katteadfærd, hesteadfærd, adfærdsterapeut hund, adfærdsterapeut hest, adfærdsterapeut kat, hundehvisker, hestehvisker, kattehvisker, 
  rådgivning hund, hjælp hund, hjælp kat, hjælp hest, rådgivning kat, rådgivning hund, Sabrina Svane, svane hundetræning, foredrag hundeadfærd, 
  foredrag kat, foredrag katteadfærd, foredrag svane, konsulent adfærd, adfærdskonsulent`;
Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

Meta.defaultProps = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: defaultKeywords,
};

export default Meta;
