import React from 'react';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';

const MetaDogTricks = ({ title, description, keywords }) => (
  <>
    <MetaTags>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <link rel="canonical" href="https://www.svanesdyr.dk/hundehold/empowerment" />
      <meta property="og:url" content="https://www.svanesdyr.dk/hundehold/empowerment" />

      <meta property="og:locale" content="da_DK" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.svanesdyr.dk/MetaDogTricks6.jpg" />
      <meta property="og:site_name" content="Svanes Dyr" />

      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
    </MetaTags>
  </>
);

const defaultTitle =
  'Fit Empowerment | Fokus på selvtillid | Hundetræning Horsens | Klikkertræning | Dyreadfærdskonsulent | Svanes Dyr ';
const defaultDescription = 'Svanes Dyr - Tricks & Motorik hundehold i Horsens';
const defaultKeywords = `Empowerment, empowerment hund, tricks hund, motorik hund, kropskontrol hund, kreativ hundetræning, klikkertræning hund, 
  targettræning, target hund, targettræning hund, target træning hund, dog parkour, kropsbevidsthed hund, selvtillid hund, dog fitness, doggy fitness, 
  nervøs hund, usikker hund, selvsikker hund`;
MetaDogTricks.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

MetaDogTricks.defaultProps = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: defaultKeywords,
};

export default MetaDogTricks;
