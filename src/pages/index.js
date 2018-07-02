import React from 'react';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Stopper from 'components/stopper';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';

export default ({ data }) => (
  <Layout>
    <Box>
      <Title tag="h2">
        An opinionated starter for using Gatsby v2 with Redux, tag-agnostic
        styled-components, page transitions and scroll events with
        IntersectionObserver.
      </Title>
      <Modal />
    </Box>
    <div style={{ height: '100vh' }} />
    <Stopper />
  </Layout>
);

export const query = graphql`
  query HomepageQuery {
    contentJson {
      title
      content
    }
  }
`;
