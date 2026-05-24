import React from 'react';
import PropTypes from 'prop-types';

const defaultTitle =
  'Tryg Frisørtid m/Hundefrisør Torsten | Nim | Frivillig Håndtering | Dyreadfærdskonsulent | Svanes Dyr ';
const defaultDescription = 'Svanes Dyr - Tryg Frisørtid kursus for hunde i Nim, nær Horsens';
const defaultKeywords = `Negleklip hund, klippe negle hund, klip negl hund, håndtering hund, frivillig håndtering, frivillig håndtering hund, hund bange negleklip,
   negleklip hvalp, klippe negle hvalp, klip negl hvalp, håndtering hvalp, frivillig håndtering hvalp, hvalp bange negleklip, hundebad, blower hund, bad hund, 
   frisørklip hund, hundefrisør, frisør hund, pelsklip hund, pels klip hund, pelsklip hvalp, pels klip hvalp, pelspleje hund, pelspleje hvalp,`;

const MetaDogStylist = ({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
}) => (
  <>
    <title>{title}</title>
      <meta property="og:title" content={title} />
      <link rel="canonical" href="https://www.svanesdyr.dk/hundehold/tryghundepleje" />
      <meta property="og:url" content="https://www.svanesdyr.dk/hundehold/tryghundepleje" />

      <meta property="og:locale" content="da_DK" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.svanesdyr.dk/MetaDogStylist.jpg" />
      <meta property="og:site_name" content="Svanes Dyr" />

      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
  </>
);

MetaDogStylist.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

export default MetaDogStylist;
