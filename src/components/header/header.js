import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './header.css';
import Title from 'components/title';

const Header = () => (
  <Container>
    <Title tagName="h2">Gatsby Redux</Title>
  </Container>
);

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
