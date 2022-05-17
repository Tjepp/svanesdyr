import React from 'react';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';

const MetaOnlineEbookPuppyFive = ({ title, description, keywords }) => (
  <>
    <MetaTags>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <link rel="canonical" href="https://www.svanesdyr.dk/hvalpmedsucces" />
      <meta property="og:url" content="https://www.svanesdyr.dk/hvalpmedsucces" />

      <meta property="og:locale" content="da_DK" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.svanesdyr.dk/OnlineCoverPuppyFive.png" />
      <meta property="og:site_name" content="Svanes Dyr" />

      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
    </MetaTags>
  </>
);

const defaultTitle =
  'Ebog med adfærdsbehandlerens 5 vigtigste råd til træning af din hvalp | Svanes Dyr | Hvalp med succes';
const defaultDescription = 'Svanes Dyr - Opskriften på at få den rolige familiehund du drømmer om';
const defaultKeywords = `hvalp med succes, hvalpevisit, hvalp gåtur, miljøtræning hvalp, socialisering hvalp, `;
MetaOnlineEbookPuppyFive.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

MetaOnlineEbookPuppyFive.defaultProps = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: defaultKeywords,
};

export default MetaOnlineEbookPuppyFive;
