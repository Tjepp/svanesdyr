import PropTypes from 'prop-types';
import { useLayoutEffect } from 'react';
import CookieConsent from 'react-cookie-consent';
import styled from 'styled-components';
import FooterBottom from '../FooterBottom';
import FooterTop from '../FooterTop';
import Header from '../Header';
import Menu from '../menu/Menu';

const Page = ({ children }) => {
  useLayoutEffect(() => {
    // EasyMe's widget scans the DOM once on script load and has no MutationObserver,
    // so SPA navigation leaves new booking placeholders un-hydrated.
    const easyMe = window.easymeConnect;
    if (easyMe?.triggerExpansions) {
      easyMe.triggerExpansions();
    } else if (document.getElementById('easyme-connect-alpine')) {
      window.location.reload();
    }
  }, []);

  return (
    <Container>
      <Header />
      <Menu />
      {children}
      <footer>
        <FooterTop />
        <FooterBottom />
      </footer>
      <CookieConsent>This website uses cookies to enhance the user experience. </CookieConsent>
    </Container>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
