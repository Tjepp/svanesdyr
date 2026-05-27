import PropTypes from 'prop-types';

const defaultTitle =
  'Sikkert indkald til din hund | Klikkertræning | Dyreadfærdskonsulent | Svanes Dyr ';
const defaultDescription = 'Svanes Dyr - Indkaldskursus i Nim, nær Horsens';
const defaultKeywords = `Hundehold indkald Horsens, Hundetræning indkald Horsens, klikkertræning, Svanes dyr, positiv hundetræning, sikkert indkald, frihed gåtur, 
  indkald hund, indkald hvalp, hund stikker af, indkaldskursus, indkalder kursus, indkald hundehold, indkald Horsens, indkald forstyrrelser`;

const MetaDogRecall = ({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
}) => (
  <>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <link rel="canonical" href="https://www.svanesdyr.dk/hundehold/indkald" />
    <meta property="og:url" content="https://www.svanesdyr.dk/hundehold/indkald" />

    <meta property="og:locale" content="da_DK" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://www.svanesdyr.dk/MetaDogRecall.jpg" />
    <meta property="og:site_name" content="Svanes Dyr" />

    <meta name="keywords" content={keywords} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
  </>
);

MetaDogRecall.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

export default MetaDogRecall;
