import React from 'react';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';

const MetaOnlineCourses = ({ title, description, keywords }) => (
  <>
    <MetaTags>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <link rel="canonical" href="https://www.svanesdyr.dk/onlinekurser" />
      <meta property="og:url" content="https://www.svanesdyr.dk/onlinekurser" />

      <meta property="og:locale" content="da_DK" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.svanesdyr.dk/MetaOnlineCourses.png" />
      <meta property="og:site_name" content="Svanes Dyr" />

      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
    </MetaTags>
  </>
);

const defaultTitle = 'Onlinekurser | Svanes Dyr ';
const defaultDescription =
  'Svanes Dyr - Onlinekurser med Dyreadfærdskonsulent Sabrina Svane';
const defaultKeywords = `Onlinekursus gåtur, onlinekursus hund, stærk indkald hund, stærk indkald, god hundeleg, hundeleg, kontrolleret hundeleg, nelgeklipning hund, tryg negleklipning hund, frivillig håndtering hund, hund gæster, 
hund ro gæster, hund adhd, hund damp, gå pænt hund, trækker i snor hund, trækker i snoren, hund ikke slappe af, få hund til at slappe af, lydangst hund, nytårsangst hund, hund gør i haven, gøende hund, hunden gør, hund jager kat, hund jager fugle,`;
MetaOnlineCourses.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

MetaOnlineCourses.defaultProps = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: defaultKeywords,
};

export default MetaOnlineCourses;
