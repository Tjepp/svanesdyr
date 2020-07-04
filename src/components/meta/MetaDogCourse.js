import React from 'react';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';
import { PuppyFour } from '../../assets';

const MetaDogCourse = ({ title, description, keywords }) => (
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
  'Hundehold Horsens | Hundetræning | Klikkertræning | Dyreadfærdskonsulent | Svanes Dyr '
  ;

const defaultDescription = 
  'Svanes Dyr - Hundetræning i Horsens'
  ;

const defaultKeywords = 
  `Hundehold Horsens, Hundetræning Horsens, hundetræning Midtjylland, hundehold midtjylland, klikkertræning, Svanes dyr, positiv hundetræning, 
  klikkertræning hund, hundeadfærd, hundehvisker, hjælp hund, Sabrina Svane, svane hundetræning, svanes hundetræning, hvalpehold, hjælp hvalp,
  hvalpetræning, cool hund, helt cool hund, helt cool, helt-cool, indkald hund, indkald hvalp, hund stikker af, unghund, unghundehold, lydighed, lydighedshold,
  hundelydighed, hund lydighed, hund trækker, hund gå pænt, hvalp trækker, hvalp gå pænt, hund hopper op, hund hopper gæster, hund gæster,
  socialisering hvalp, miljøtræning hvalp`
  ;

MetaDogCourse.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string
};

MetaDogCourse.defaultProps = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: defaultKeywords
};

export default MetaDogCourse;
