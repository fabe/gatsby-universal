const {
  siteTitle,
  siteTitleShort,
  siteDescription,
  siteUrl,
  themeColor,
  social,
} = require('./site-config');

module.exports = {
  siteMetadata: {
    siteTitle,
    siteTitleShort,
    siteDescription,
    siteUrl,
    themeColor,
    social,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/content/`,
      },
    },
  ],
};
