import PropTypes from 'prop-types';

const defaultTitle = 'Onlinekurser | Svanes Dyr ';
const defaultDescription =
  'Onlinekurser med dyreadfærdskonsulent Sabrina Svane. 10+ kurser om gåtur, hundeleg, negleklipning, lydangst, gøen og hvalpetræning. Fra 99 kr.';
const defaultKeywords = `Onlinekursus gåtur, onlinekursus hund, stærk indkald hund, stærk indkald, god hundeleg, hundeleg, kontrolleret hundeleg, nelgeklipning hund, tryg negleklipning hund, frivillig håndtering hund, hund gæster, 
hund ro gæster, hund adhd, hund damp, gå pænt hund, trækker i snor hund, trækker i snoren, hund ikke slappe af, få hund til at slappe af, lydangst hund, nytårsangst hund, hund gør i haven, gøende hund, hunden gør, hund jager kat, hund jager fugle,`;

const MetaOnlineCourses = ({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
}) => (
  <>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <link rel="canonical" href="https://www.svanesdyr.dk/onlinekurser" />
    <meta property="og:url" content="https://www.svanesdyr.dk/onlinekurser" />

    <meta property="og:locale" content="da_DK" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://www.svanesdyr.dk/MetaOnlineCourses.png" />
    <meta property="og:site_name" content="Svanes Dyr" />

    <meta name="keywords" content={keywords} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
  </>
);

MetaOnlineCourses.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

export default MetaOnlineCourses;
