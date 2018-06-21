const title = `Gatsby Redux Intro`;
const shortTitle = `GatsbyRedux`;
const themeColor = `#000`;

module.exports = {
  siteMetadata: {
    title,
    shortTitle,
    themeColor,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
