import React from 'react';
import Layout from 'components/layout';
import Box from 'components/box';

export default () => (
  <Layout>
    <Box>
      <pre>{`# Installation
gatsby new my-site https://github.com/fabe/gatsby-universal

# To develop
yarn develop

# To build
yarn build

# To test SSR (for Lighthouse etc.)
yarn ssr

# To format JS (precommit)
yarn prettier

# To generate favicons (included in \`build\`)
yarn favicons
`}</pre>
    </Box>
  </Layout>
);
