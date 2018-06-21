import React from 'react';
import Layout from 'components/layout';
import Box from 'components/box';
import Modal from 'containers/modal';
import IO from 'helpers/io';

export default () => (
  <Layout>
    <Box>
      <Modal />
    </Box>

    <div style={{ height: '150vh' }} />

    <IO />
  </Layout>
);
