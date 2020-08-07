import React from 'react';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';

const MetaConsultPuppy = ({ title, description, keywords }) => (
  <>
    <MetaTags>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <link rel="canonical" href="https://www.svanesdyr.dk/hvalpevisit" />
      <meta property="og:url" content="https://www.svanesdyr.dk/hvalpevisit" />

      <meta property="og:locale" content="da_DK" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.svanesdyr.dk/MetaConsultPup.jpg" />
      <meta property="og:site_name" content="Svanes Dyr" />

      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
    </MetaTags>
  </>
);

const defaultTitle =
  'Hvalpevisit | Ny hvalp | Klikkertræning | Dyreadfærdskonsulent | Svanes Dyr '
  ;

const defaultDescription = 
  'Svanes Dyr - Hvalpevisit: Få den bedste start sammen'
  ;

const defaultKeywords = 
  `Hvalpetræning Horsens, hvalpetræning Midtjylland, klikkertræning, Svanes dyr, positiv hundetræning, 
  Sabrina Svane, indkald hvalp, rådgivning hvalp, hvalpevisit, hvalpevisit Horsens, socialisering hvalp, miljøtræning hvalp,
  hvalp trækker, hvalp gå pænt, hvalp hopper op, hvalp hopper gæster, hvalp gæster, hundeadfærdsbehandler, hvalp behandler,
  hvalpemotivation, hvalp motivation, hvalp gør, ny hvalp, hvalp træning, hjælp hvalp, hvalpetræning, hvalpebideri, hvalp bider,
  renlig hvalp, alene hjemme hvalp, alene hvalp`
  ;

MetaConsultPuppy.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string
};

MetaConsultPuppy.defaultProps = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: defaultKeywords
};

export default MetaConsultPuppy;
