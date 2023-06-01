import React from 'react';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';

const MetaOnlinePuppy = ({ title, description, keywords }) => (
  <>
    <MetaTags>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <link rel="canonical" href="https://www.svanesdyr.dk/onlinehvalp" />
      <meta property="og:url" content="https://www.svanesdyr.dk/onlinehvalp" />

      <meta property="og:locale" content="da_DK" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.svanesdyr.dk/MetaOnlineCoverPuppy.png" />
      <meta property="og:site_name" content="Svanes Dyr" />

      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
    </MetaTags>
  </>
);

const defaultTitle =
  'Skab en tillidsfuld, rolig og samarbejdsvillig hvalp | Svanes Dyr | Hvalp med succes';
const defaultDescription =
  'Sådan får du en hvalp du kan tage med overalt - metoden til at blive fri for unoder, uro og konflikter';
const defaultKeywords = `hvalp med succes, hvalpevisit, hvalp gåtur, miljøtræning hvalp, socialisering hvalp, hvalpebideri, 
hvalp tisser inde, urenlig hvalp, renlig hvalp, positiv træning hvalp, træning hvalp, hvalpetræning, opdragelse hvalp, hvalpeopdragelse,
hvalp bider, hvalp napper, hvalp bukseben, hvalp alene hjemme, `;
MetaOnlinePuppy.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

MetaOnlinePuppy.defaultProps = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: defaultKeywords,
};

export default MetaOnlinePuppy;
