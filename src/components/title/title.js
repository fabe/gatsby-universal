import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './title.css';

const Title = ({ children, tag = 'h1', size }) => {
  return (
    <Text tag={tag} size={size}>
      {children}
    </Text>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  tag: PropTypes.string,
};

export default Title;
