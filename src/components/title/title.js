import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './title.css';

const Title = ({ children, tagName = 'h1' }) => {
  const TextWithTagName = Text.withComponent(tagName);
  return <TextWithTagName>{children}</TextWithTagName>;
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  tagName: PropTypes.string,
};

export default Title;
