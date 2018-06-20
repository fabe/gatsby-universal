import React from 'react';
import Layout from 'components/layout';
import Header from 'components/header';
import Box from 'components/box';
import Modal from 'containers/modal';

export default () => (
  <Layout>
    <Header />
    <Box>
      <Modal />
    </Box>
  </Layout>
);
