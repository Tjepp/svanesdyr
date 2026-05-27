import PropTypes from 'prop-types';

const defaultTitle =
  'Reaktiv til Ro | Hundehold i Nim, nær Horsens | Dyreadfærdskonsulent | Svanes Dyr ';
const defaultDescription =
  'Reaktiv til Ro kursus i Nim nær Horsens – for hunde der gør eller knurrer af andre hunde. Max 4 hunde, inkl. privat session.';
const defaultKeywords = `hund rolig gåtur, hund gåtur, hund gør andre hunde, hunde gør, hund aggressiv, hund knurrer, hund bange andre hunde,
  hund trækker andre hunde, hund trækker gåtur, hund ikke gø, venlig vovse, negativ reaktion hund, problem hund, problemhund, positiv oplevelse hund,
  frygter andre hunde, frygt hund, selvtillid hund`;

const MetaDogCoolReactive = ({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
}) => (
  <>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <link rel="canonical" href="https://www.svanesdyr.dk/hundehold/reaktivtilro" />
    <meta property="og:url" content="https://www.svanesdyr.dk/hundehold/reaktivtilro" />

    <meta property="og:locale" content="da_DK" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://www.svanesdyr.dk/MetaDogCoolFriend.jpg" />
    <meta property="og:site_name" content="Svanes Dyr" />

    <meta name="keywords" content={keywords} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
  </>
);

MetaDogCoolReactive.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

export default MetaDogCoolReactive;
