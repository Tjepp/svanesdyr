import React from 'react';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';
import { PuppyFour } from '../../assets';

const MetaConsultPuppy = ({ title, description, keywords }) => (
  <React.Fragment>
    <MetaTags>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <link rel="canonical" href="https://www.svanesdyr.dk/" />
      <meta property="og:url" content="https://www.svanesdyr.dk/" />

      <meta property="og:locale" content="da_DK" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={PuppyFour} />

      <meta property="og:site_name" content="Svanes dyr" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
    </MetaTags>
  </React.Fragment>
);

const defaultTitle =
  'Hvalpevisit Horsens | Hundetræning | Klikkertræning | Dyreadfærdskonsulent | Svanes Dyr '
  ;

const defaultDescription = 
  'Svanes Dyr - Hundetræning i Horsens'
  ;

const defaultKeywords = 
  `Hundetræning Horsens, hundetræning Midtjylland, klikkertræning, Svanes dyr, positiv hundetræning, 
  klikkertræning hund, hundeadfærd, hundehvisker, hjælp hund, Sabrina Svane, svane hundetræning, svanes hundetræning,
  indkald hund, indkald hvalp, rådgivning hvalp, hvalpevisit, hvalpevisit Horsens, socialisering hvalp, miljøtræning hvalp,
  hund trækker, hund gå pænt, hvalp trækker, hvalp gå pænt, hund hopper op, hund hopper gæster, hund gæster, hund behandler, hundeadfærdsbehandler,
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
