import React from 'react';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';

const MetaConsultAggression = ({ title, description, keywords }) => (
  <>
    <MetaTags>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <link rel="canonical" href="https://www.svanesdyr.dk/aggression" />
      <meta property="og:url" content="https://www.svanesdyr.dk/aggression" />

      <meta property="og:locale" content="da_DK" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.svanesdyr.dk/MetaDogCool.png" />
      <meta property="og:site_name" content="Svanes Dyr" />

      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
    </MetaTags>
  </>
);

const defaultTitle =
  'Adfærdsrådgvining | Aggression | Udfarende hund | Dyreadfærdskonsulent | Svanes Dyr ';
const defaultDescription = 'Svanes Dyr - Adfærdskonsultation til den aggressive, udfarende hund';
const defaultKeywords = `Hundehold Horsens, Hundetræning Horsens, reaktiv hund, gøende hund, aggression hund, aggressiv hund, møde andre hunde, hundemøder, sur hund, sur hundemøde, dårlig hundemøde, rolig gåtur, onlinekursus gåtur, online hundekursus, stresset hund, gåtur stress, hund rolig gåtur, hund gåtur,
  selvkontrol hund, impulskontrol hund,`;

  MetaConsultAggression.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

MetaConsultAggression.defaultProps = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: defaultKeywords,
};

export default MetaConsultAggression;
