import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

const EasyMeList = ({ src }) => {
  useEffect(() => {
    window.$ = window.jQuery = $;

    const script = document.createElement('script');

    script.src = 'https://secure.easyme.biz/connect/v3/client.js';
    script.async = true;
    script.id = 'easyme-connect-kMj1RCBSOhIGq2lrpNHy';

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  });

  return (
    <React.Fragment>
      <link rel="stylesheet" href="https://secure.easyme.biz/connect/v2/loader.css"></link>
      <section className="ezme-loader">
        <div className="ezme-loader__title">
          <svg className="ezme-loader__svg" viewBox="0 0 100 100" width="20" height="20">
            <circle cx="50" cy="50" r="42" transform="rotate(-90,50,50)" />
          </svg>
          <div>Henter datoer...</div>
        </div>
        <div className="ezme-loader__subtitle">
          Problemer?
          <a href={src} target="_blank" rel="noopener noreferrer" className="ezme-loader__link">
            Åbn listen i nyt vindue
          </a>
        </div>
        <a href="https://easyme.dk/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://secure.easyme.biz/connect/v2/loader.svg"
            className="ezme-loader__brand"
            alt=""
          />
        </a>
      </section>
    </React.Fragment>
  );
};

EasyMeList.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default EasyMeList;
