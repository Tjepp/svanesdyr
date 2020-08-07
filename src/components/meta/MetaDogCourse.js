import React from 'react';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';

const MetaDogCourse = ({ title, description, keywords }) => (
  <>
    <MetaTags>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <link rel="canonical" href="https://www.svanesdyr.dk/hundehold/" />
      <meta property="og:url" content="https://www.svanesdyr.dk/hundehold/" />

      <meta property="og:locale" content="da_DK" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.svanesdyr.dk/MetaDogCourse4.jpg" />
      <meta property="og:site_name" content="Svanes Dyr" />

      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
    </MetaTags>
  </>
);

const defaultTitle =
  'Hundehold Horsens | Hundetræning | Klikkertræning | Dyreadfærdskonsulent | Svanes Dyr '
  ;

const defaultDescription = 
  'Svanes Dyr - Hundetræning i Horsens'
  ;

const defaultKeywords = 
  `Hundehold Horsens, Hvalpehold Horsens, Hundetræning Horsens, hundetræning Midtjylland, hundehold midtjylland, klikkertræning, Svanes dyr, positiv hundetræning, 
  klikkertræning hund, Sabrina Svane, svane hundetræning, svanes hundetræning, hvalpehold, hjælp hvalp, svane hundehold, svanes hundehold, belønning hund, 
  hvalpetræning, cool hund, helt cool hund, helt cool, helt-cool, indkald hund, indkald hvalp, hund stikker af, unghund, unghundehold, lydighed, lydighedshold,
  hundelydighed, hund lydighed, hund trækker, hund gå pænt, hvalp trækker, hvalp gå pænt, hund hopper op, hund hopper gæster, hund gæster,
  socialisering hvalp, miljøtræning hvalp, familievenlig hundetræning, familie hundetræning, samarbejde hund, tillid hund, succes hund, kontrolleret leg`
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
