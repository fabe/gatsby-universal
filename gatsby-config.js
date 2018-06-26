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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: title,
        short_name: shortTitle,
        start_url: '/',
        background_color: '#fff',
        theme_color: themeColor,
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
  ],
};
