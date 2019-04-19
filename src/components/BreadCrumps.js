import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from '../ReactRouterPropTypes';

const BreadCrumps = ({ currentPage, history }) => (
  <div>
    <Text>Du er her: </Text>
    <LinkText
      onClick={() => {
        history.push('/');
      }}
    >
      Forside
    </LinkText>
    <Text>
      {'> '}
      {currentPage}
    </Text>
  </div>
);

const Text = styled.div`
  display: inline-block;
  line-height: 24px;
  font-size: 13px;
  font-weight: normal;
  color: #9e9e9e;
  margin: 0 0 0 5px;
`;

const LinkText = styled.a`
  font-weight: bold;
  display: inline-block;
  line-height: 24px;
  font-size: 13px;
  color: #9e9e9e;
  margin: 0 0 0 5px;
  cursor: pointer;
`;

BreadCrumps.propTypes = {
  currentPage: PropTypes.string.isRequired,
  history: ReactRouterPropTypes.history
};

BreadCrumps.defaultProps = {
  history: ReactRouterPropTypes.history
};

export default withRouter(BreadCrumps);
