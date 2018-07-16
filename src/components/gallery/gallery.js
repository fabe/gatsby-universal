import React from 'react';
import Item from 'components/gallery/item';
import { Container } from './gallery.css';

export default ({ items }) => (
  <Container>{items.map((item, i) => <Item {...item} key={i} />)}</Container>
);
