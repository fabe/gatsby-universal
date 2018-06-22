import React from 'react';
import Layout from 'components/layout';
import Box from 'components/box';
import IO from 'components/io';
import Footer from 'components/footer';
import Modal from 'containers/modal';

export default () => (
  <Layout>
    <Box>
      <Modal />
    </Box>

    <div style={{ height: '100vh' }} />

    <IO>{({ isVisible }) => <Footer isVisible={isVisible} />}</IO>
  </Layout>
);
