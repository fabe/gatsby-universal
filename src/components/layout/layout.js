import React from 'react';
import PropTypes from 'prop-types';

import 'reset.css.js';

const Layout = ({ children }) => <div>{children}</div>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
