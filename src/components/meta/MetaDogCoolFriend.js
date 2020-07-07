import React from 'react';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';

const MetaDogCoolFriend = ({ title, description, keywords }) => (
  <>
    <MetaTags>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <link rel="canonical" href="https://www.svanesdyr.dk/" />
      <meta property="og:url" content="https://www.svanesdyr.dk/" />

      <meta property="og:locale" content="da_DK" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.svanesdyr.dk/hund2.jpg" />
      <meta property="og:site_name" content="Svanes Dyr" />

      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
    </MetaTags>
  </>
);

const defaultTitle =
  'Hjælp til aggressiv hund | Hundehold Horsens | Dyreadfærdskonsulent | Svanes Dyr '
  ;

const defaultDescription = 
  'Svanes Dyr - Fra Frådig Fido til Venlig Vovse hundehold'
  ;

const defaultKeywords = 
  `hund rolig gåtur, hund gåtur, hund gør andre hunde, hunde gør, hund aggressiv, hund knurrer, hund bange andre hunde,
  hund trækker andre hunde, hund trækker gåtur, hund ikke gø, venlig vovse, negativ reaktion hund, problem hund, problemhund, positiv oplevelse hund,
  frygter andre hunde, frygt hund`
  ;

  MetaDogCoolFriend.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

MetaDogCoolFriend.defaultProps = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: defaultKeywords,
};

export default MetaDogCoolFriend;
