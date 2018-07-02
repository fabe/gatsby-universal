const title = `Gatsby Universal`;
const shortTitle = `GatsbyU`;
const themeColor = `#000`;
const twitterUsername = `gatsbyjs`;
const description = `A boilerplate for Gatsby X Redux.`;

module.exports = {
  siteMetadata: {
    title,
    shortTitle,
    themeColor,
    description,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
