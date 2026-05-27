import PropTypes from 'prop-types';

const defaultTitle =
  'Cirkeltræning | Lydighed | Tricks | Empowerment | Hundetræning Horsens | Klikkertræning | Dyreadfærdskonsulent | Svanes Dyr ';
const defaultDescription = 'Svanes Dyr - Lydighed, tricks og motorik hundehold i Nim, nær Horsens';
const defaultKeywords = `Empowerment, empowerment hund, tricks hund, motorik hund, kropskontrol hund, kreativ hundetræning, klikkertræning hund, 
  targettræning, target hund, targettræning hund, target træning hund, dog parkour, kropsbevidsthed hund, selvtillid hund, dog fitness, doggy fitness, 
  nervøs hund, usikker hund, selvsikker hund`;

const MetaDogCircle = ({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
}) => (
  <>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <link rel="canonical" href="https://www.svanesdyr.dk/hundehold/tricks" />
    <meta property="og:url" content="https://www.svanesdyr.dk/hundehold/tricks" />

    <meta property="og:locale" content="da_DK" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://www.svanesdyr.dk/MetaDogCircle.jpg" />
    <meta property="og:site_name" content="Svanes Dyr" />

    <meta name="keywords" content={keywords} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
  </>
);

MetaDogCircle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

export default MetaDogCircle;
