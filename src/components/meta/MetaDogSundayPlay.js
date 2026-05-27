import PropTypes from 'prop-types';

const defaultTitle = 'Søndagshygge i Nim, nær Horsens | Dyreadfærdskonsulent | Svanes Dyr ';
const defaultDescription =
  'Søndagshygge i Nim – 2 timers åbent hus for nuværende og tidligere kursister. Motorikbane, fritløbsplads på 1500 kvm, Tunnel-Mania og Snackshop.';
const defaultKeywords = `hundehold midtjylland, Svanes dyr, positiv hundetræning, legestue, hundelegestue, hundelegestue horsens, legestue horsens,
  hjælp hvalp, hvalpetræning, socialisering hvalp, miljøtræning hvalp, tillid hvalp, samarbejde hvalp, kontrolleret leg hvalp, legestue hund horsens, legestue hvalp horsens,`;

const MetaDogSundayPlay = ({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
}) => (
  <>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <link rel="canonical" href="https://www.svanesdyr.dk/hyggedage" />
    <meta property="og:url" content="https://www.svanesdyr.dk/hyggedage" />

    <meta property="og:locale" content="da_DK" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://www.svanesdyr.dk/MetaDogPlay.jpg" />
    <meta property="og:site_name" content="Svanes Dyr" />

    <meta name="keywords" content={keywords} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
  </>
);

MetaDogSundayPlay.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

export default MetaDogSundayPlay;
