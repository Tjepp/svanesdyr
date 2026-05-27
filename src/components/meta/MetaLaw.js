import PropTypes from 'prop-types';

const defaultTitle = 'Handelsbetingelser | Svanes Dyr | Onlinekurser';
const defaultDescription = 'Svanes Dyr - Handelsbetingelser onlinekurser';
const defaultKeywords = `Onlinekursus handelsbetingelser,`;

const MetaLaw = ({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
}) => (
  <>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <link rel="canonical" href="https://www.svanesdyr.dk/onlinehandelsbetingelser" />
    <meta property="og:url" content="https://www.svanesdyr.dk/onlinehandelsbetingelser" />

    <meta property="og:locale" content="da_DK" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://www.svanesdyr.dk/MetaLaw.png" />
    <meta property="og:site_name" content="Svanes Dyr" />

    <meta name="keywords" content={keywords} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
  </>
);

MetaLaw.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

export default MetaLaw;
