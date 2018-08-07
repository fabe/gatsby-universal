import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Container } from './header.css';
import Title from 'components/title';
import Nav from 'components/header/nav';

const Header = ({ title }) => (
  <Container>
    <Link to="/">
      <Title tag="h1">{title}</Title>
    </Link>

    <Nav />
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
