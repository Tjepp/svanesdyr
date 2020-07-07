import React from 'react';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';

const MetaDogCool = ({ title, description, keywords }) => (
  <>
    <MetaTags>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <link rel="canonical" href="https://www.svanesdyr.dk/" />
      <meta property="og:url" content="https://www.svanesdyr.dk/" />

      <meta property="og:locale" content="da_DK" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.svanesdyr.dk/HoldCool3.png" />
      <meta property="og:site_name" content="Svanes Dyr" />

      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
    </MetaTags>
  </>
);

const defaultTitle =
  'Helt-Cool Horsens | Hundelydighed | Klikkertræning | Dyreadfærdskonsulent | Svanes Dyr '
  ;

const defaultDescription = 
  'Svanes Dyr - Helt-Cool kursus for hunde i Horsens'
  ;

const defaultKeywords = 
  `Hundehold Horsens, Hundetræning Horsens, hund trækker, hund gå pænt, hund hopper op, hund hopper gæster, hund gæster, hund hilse pænt,
  hund lydighed, lydighedshold, hundelydighed, lydighed, cool hund, helt cool hund, helt cool, helt-cool, hund rolig gåtur, hund gåtur,
  selvkontrol hund, impulskontrol hund, doggie zen, belønning hund`
  ;

MetaDogCool.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

MetaDogCool.defaultProps = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: defaultKeywords,
};

export default MetaDogCool;
