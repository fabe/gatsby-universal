import React from 'react';
import IO from 'components/io';
import { Container } from './footer.css';

export default props => (
  <IO>
    {({ isVisible }) => (
      <Container isVisible={isVisible}>&copy; 2018 Thicc</Container>
    )}
  </IO>
);
