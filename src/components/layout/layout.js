import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/header';
import Transition from 'components/transition';

import 'reset.css.js';

const Layout = ({ children }) => (
  <div>
    <Header />
    <Transition>{children}</Transition>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
