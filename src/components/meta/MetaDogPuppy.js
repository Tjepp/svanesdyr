import React from 'react';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';

const MetaDogPuppy = ({ title, description, keywords }) => (
  <>
    <MetaTags>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <link rel="canonical" href="https://www.svanesdyr.dk/" />
      <meta property="og:url" content="https://www.svanesdyr.dk/hundehold/hvalpehold" />

      <meta property="og:locale" content="da_DK" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.svanesdyr.dk/HoldHvalp2.jpg" />
      <meta property="og:site_name" content="Svanes Dyr" />

      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
    </MetaTags>
  </>
);

const defaultTitle =
  'Hvalpehold Horsens | God socialisering | Klikkertræning | Dyreadfærdskonsulent | Svanes Dyr '
  ;

const defaultDescription = 
  'Svanes Dyr - Hvalpehold i Horsens'
  ;

const defaultKeywords = 
  `Hvalpehold Horsens, hvalpetræning Horsens, hvalpehold midtjylland, klikkertræning hvalp, Svanes dyr, positiv hundetræning, 
  hvalpehold, hjælp hvalp, hvalpetræning, indkald hvalp, hvalp trækker, hvalp gå pænt, hvalp hopper op, hvalp hopper gæster, hvalp gæster, hvalp hilse pænt,
  socialisering hvalp, miljøtræning hvalp, tillid hvalp, samarbejde hvalp, kontrolleret leg hvalp, frivillig håndtering, impulskontrol hvalp`
  ;

MetaDogPuppy.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

MetaDogPuppy.defaultProps = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: defaultKeywords,
};

export default MetaDogPuppy;
