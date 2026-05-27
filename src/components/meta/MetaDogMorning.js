import PropTypes from 'prop-types';

const defaultTitle =
  'Formiddagshold | Hoopers | Rally-Lydighed | Samarbejde | Dyreadfærdskonsulent | Svanes Dyr ';
const defaultDescription = 'Svanes Dyr - Hoopers og Rally i Nim, nær Horsens';
const defaultKeywords = `Hoopers, hoopers begynder, hoops, hoopers horsens, hoopers mona, rally, rally-lydighed, rally begynder, rally fortsætter, rally-lydighed begynder, rally horsens, rally mona`;

const MetaDogMorning = ({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
}) => (
  <>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <link rel="canonical" href="https://www.svanesdyr.dk/hundehold/formiddagshold" />
    <meta property="og:url" content="https://www.svanesdyr.dk/hundehold/formiddagshold" />

    <meta property="og:locale" content="da_DK" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://www.svanesdyr.dk/MetaDogMonaRally.png" />
    <meta property="og:site_name" content="Svanes Dyr" />

    <meta name="keywords" content={keywords} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
  </>
);

MetaDogMorning.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

export default MetaDogMorning;
