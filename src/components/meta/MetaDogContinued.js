import PropTypes from 'prop-types';

const defaultTitle =
  'Hvalpe-Fortsætterhold i Nim | Unghundetræning | Svanes Dyr';
const defaultDescription = 'Svanes Dyr - Hvalpe-Fortsætterhold for unghunde i Nim, nær Horsens';
const defaultKeywords = `Unghundehold Horsens, unghundetræning Horsens, unghundetræning midtjylland, unghundehold midtjylland, unghund hold, unghundehold, unghund træning, stor hvalp træning,
  hund teenager træning, indkald hvalp, hvalp trækker, hvalp gå pænt, hvalp hopper op, hvalp hopper gæster, hvalp gæster, hvalp hilse pænt, lineføring, indkald, selvkontrol hund,
  unghund lydighed, hund lydighed, hvalp fortsætter hold, hvalp fortsætterhold, hvalpe-fortsætterhold, hvalpefortsætterhold, samarbejde hund, samarbejde hvalp`;

const MetaDogContinued = ({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
}) => (
  <>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <link rel="canonical" href="https://www.svanesdyr.dk/hundehold/hvalpfortsat" />
    <meta property="og:url" content="https://www.svanesdyr.dk/hundehold/hvalpfortsat" />

    <meta property="og:locale" content="da_DK" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://www.svanesdyr.dk/MetaDogContinued.jpg" />
    <meta property="og:site_name" content="Svanes Dyr" />

    <meta name="keywords" content={keywords} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
  </>
);

MetaDogContinued.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

export default MetaDogContinued;
