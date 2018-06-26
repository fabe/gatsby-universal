import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Container } from './header.css';
import Title from 'components/title';
import Nav from 'components/header/nav';
import Transition from 'components/transition';

const transitionStyles = timeout => ({
  entering: {
    transform: `translateY(-100%)`,
  },
  entered: {
    transition: `transform ${timeout}ms ease-in-out`,
    transform: `translateY(0)`,
  },
  exiting: {
    transition: `transform ${timeout}ms ease-in-out`,
    transform: `translateY(-100%)`,
  },
});

const Header = ({ title }) => (
  <Transition styles={transitionStyles}>
    <Container>
      <Link to="/">
        <Title tag="h1">{title}</Title>
      </Link>

      <Nav />
    </Container>
  </Transition>
);

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
