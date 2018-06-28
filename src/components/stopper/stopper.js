import React from 'react';
import IO from 'components/io';
import Title from 'components/title';
import { Container } from './stopper.css';

export default () => (
  <IO rootMargin="-50px">
    {({ isVisible, hasBeenVisible }) => (
      <Container isVisible={isVisible}>
        <Title>IntersectionObserver</Title>
      </Container>
    )}
  </IO>
);
