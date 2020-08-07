import React from 'react';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';

const MetaDogRecall = ({ title, description, keywords }) => (
  <>
    <MetaTags>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <link rel="canonical" href="https://www.svanesdyr.dk/hundehold/indkald" />
      <meta property="og:url" content="https://www.svanesdyr.dk/hundehold/indkald" />

      <meta property="og:locale" content="da_DK" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.svanesdyr.dk/MetaDogRecall1.jpg" />
      <meta property="og:site_name" content="Svanes Dyr" />

      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
    </MetaTags>
  </>
);

const defaultTitle =
  'Sikkert indkald til din hund | Klikkertræning | Dyreadfærdskonsulent | Svanes Dyr '
  ;

const defaultDescription = 
  'Svanes Dyr - Indkaldskursus i Horsens'
  ;

const defaultKeywords = 
  `Hundehold indkald Horsens, Hundetræning indkald Horsens, klikkertræning, Svanes dyr, positiv hundetræning, sikkert indkald, frihed gåtur, 
  indkald hund, indkald hvalp, hund stikker af, indkaldskursus, indkalder kursus, indkald hundehold, indkald Horsens, indkald forstyrrelser`
  ;

MetaDogRecall.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string
};

MetaDogRecall.defaultProps = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: defaultKeywords
};

export default MetaDogRecall;
