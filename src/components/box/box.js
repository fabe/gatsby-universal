import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './box.css';

const Box = ({ children }) => <Container>{children}</Container>;

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
