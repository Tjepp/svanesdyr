import PropTypes from 'prop-types';

const defaultTitle = 'Snackshoppen | Naturlig hundeslik og tyggesager | Svanes Dyr';
const defaultDescription =
  'Besøg Snackshoppen i Nim ved Brædstrup – over 85 naturlige, tørrede snacks og godbidder til din hund. Allergivenlige varianter og stort udvalg af kødtyper.';
const defaultKeywords =
  'snackshop hund, naturlig hundeslik, tørrede snacks hund, allergivenlig hundeslik, hundegodbidder Brædstrup, Svanes Dyr snackshop, hundegodbidder Nim, gårdbutik hund, hundegodbidder Horsens';

const MetaSnackshop = ({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
}) => (
  <>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <link rel="canonical" href="https://www.svanesdyr.dk/snackshoppen" />
    <meta property="og:url" content="https://www.svanesdyr.dk/snackshoppen" />

    <meta property="og:locale" content="da_DK" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://www.svanesdyr.dk/images/Snackshop.png" />
    <meta property="og:site_name" content="Svanes Dyr" />

    <meta name="keywords" content={keywords} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
  </>
);

MetaSnackshop.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

export default MetaSnackshop;
