import PropTypes from 'prop-types';

const defaultTitle =
  'Fortsat Helt-Cool i Nim | Hundetræning  | Lydighed | Dyreadfærdskonsulent | Svanes Dyr ';
const defaultDescription =
  'Svanes Dyr - Fortsat Helt-Cool træning for hunde i alle aldre i Nim, nær Horsens';
const defaultKeywords = `Hundehold Horsens, Hundetræning Horsens, hund trækker, hund gå pænt, hund hilse pænt, miljø hund, miljøtræning hund,
  hund lydighed, lydighedshold, hundelydighed, lydighed, hund rolig gåtur, hund gåtur, miljøhold hund, miljø hundetræning, lydig hund gåtur, lydighed gåtur,
  selvkontrol hund, impulskontrol hund, doggie zen, belønning hund`;

const MetaDogCoolContinued = ({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
}) => (
  <>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <link rel="canonical" href="https://www.svanesdyr.dk/hundehold/fortsatcool" />
    <meta property="og:url" content="https://www.svanesdyr.dk/hundehold/fortsatcool" />

    <meta property="og:locale" content="da_DK" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://www.svanesdyr.dk/MetaDogCoolContinued.jpg" />
    <meta property="og:site_name" content="Svanes Dyr" />

    <meta name="keywords" content={keywords} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
  </>
);

MetaDogCoolContinued.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

export default MetaDogCoolContinued;
