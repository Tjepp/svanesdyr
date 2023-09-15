import React from 'react';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';

const MetaDogCoolEnvironment = ({ title, description, keywords }) => (
  <>
    <MetaTags>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <link rel="canonical" href="https://www.svanesdyr.dk/hundehold/miljohold" />
      <meta property="og:url" content="https://www.svanesdyr.dk/hundehold/miljohold" />

      <meta property="og:locale" content="da_DK" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.svanesdyr.dk/MetaDogEnvironment.jpg" />
      <meta property="og:site_name" content="Svanes Dyr" />

      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
    </MetaTags>
  </>
);

const defaultTitle =
  'Miljøhold Horsens | Hundetræning  | Lydighed | Dyreadfærdskonsulent | Svanes Dyr ';
const defaultDescription = 'Svanes Dyr - Miljøhold for hunde i alle aldre i Horsens';
const defaultKeywords = `Hundehold Horsens, Hundetræning Horsens, hund trækker, hund gå pænt, hund hilse pænt, miljø hund, miljøtræning hund,
  hund lydighed, lydighedshold, hundelydighed, lydighed, hund rolig gåtur, hund gåtur, miljøhold hund, miljø hundetræning, lydig hund gåtur, lydighed gåtur,
  selvkontrol hund, impulskontrol hund, doggie zen, belønning hund`;
  MetaDogCoolEnvironment.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

MetaDogCoolEnvironment.defaultProps = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: defaultKeywords,
};

export default MetaDogCoolEnvironment;
