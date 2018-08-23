import React from 'react';
import IO from 'components/io';
import Title from 'components/title';
import { Container } from './io-example.css';

export default () => (
  <IO rootMargin="-50px">
    {({ isVisible, hasBeenVisible }) => (
      <Container isVisible={isVisible}>
        <Title tag="span">IntersectionObserver</Title>
      </Container>
    )}
  </IO>
);
