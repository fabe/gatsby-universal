import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

export default ({ data }) => (
  <Layout>
    <Head pageTitle={data.aboutJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.aboutJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

export const query = graphql`
  query AboutQuery {
    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
