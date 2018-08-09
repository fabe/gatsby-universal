import React from 'react';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import Stopper from 'components/stopper';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';

export default ({ data }) => (
  <Layout>
    <Box>
      <Title tag="span">
        {data.contentJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
      <Modal>
        <video
          src="https://i.imgur.com/gzFqNSW.mp4"
          playsInline
          loop
          autoPlay
          muted
        />
      </Modal>
    </Box>
    <Gallery items={data.contentJson.gallery} />
    <div style={{ height: '50vh' }} />
    <Stopper />
  </Layout>
);

export const query = graphql`
  query HomepageQuery {
    contentJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
