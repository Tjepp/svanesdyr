import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const EasyMeList = ({ src }) => {
  const scriptToInject = `
  (function(e,m) {
    if(e.getElementById(m))return;var s=document.createElement('script');s.id=m;
    s.src='https://secure.easyme.biz/connect/v2/client.js';s.async=true;
    var el = document.getElementsByTagName('script')[0];el.parentNode.insertBefore(s,el);
    })(document, 'easyme-connect-kMj1RCBSOhIGq2lrpNHy');`;

  useEffect(() => {
    // eslint-disable-next-line no-new-func
    const executeScript = new Function(scriptToInject);
    executeScript();
  });

  // useEffect(() => {
  //   const script = document.createElement('script');

  //   script.src = 'https://secure.easyme.biz/connect/v2/client.js';
  //   script.async = true;

  //   script.onload = () => {
  //     // eslint-disable-next-line no-debugger
  //     debugger;
  //     console.log(window);
  //     // eslint-disable-next-line no-undef
  //     //easymeConnect();

  //     var test = window['easymeConnect'];
  //     test.getInitArg()
  //     console.log(test);
  //   };

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // });

  return (
    <React.Fragment>
      <script dangerouslySetInnerHTML={{ __html: scriptToInject }} />
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
