import React from 'react';
import PropTypes from 'prop-types';

const defaultTitle =
  'Hold kløerne af møblerne | Svanes Dyr | E-bog til katten der kradser';
const defaultDescription = 'Svanes Dyr - E-bog Kat - 3 simple trin der holder kløerne af møblerne';
const defaultKeywords = `katten kradser møbler, møbler kradses, katten ødelægger møbler, kat kradser møbler, kat ødelægger møbler, kat kradser sengen, 
kat kradser sofa, kat kradser lænestol, kat ødelægger sofaen, kat ligeglad kradsetræ, kat kradsetræ `;

const MetaOnlineEbookCatScratch = ({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
}) => (
  <>
    <title>{title}</title>
      <meta property="og:title" content={title} />
      <link rel="canonical" href="https://www.svanesdyr.dk/kattekradsekursus" />
      <meta property="og:url" content="https://www.svanesdyr.dk/kattekradsekursus" />

      <meta property="og:locale" content="da_DK" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.svanesdyr.dk/MetaOnlineEbookCatScratch.png" />
      <meta property="og:site_name" content="Svanes Dyr" />

      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
  </>
);

MetaOnlineEbookCatScratch.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

export default MetaOnlineEbookCatScratch;
