/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// eslint-disable-next-line no-undef
module.exports = {
  /* Your site config here */
  siteMetadata: {

  },
  plugins: [
    "gatsby-plugin-transition-link",
    "gatsby-plugin-react-svg",
    "gatsby-plugin-sass",
    //gatsby-plugin-layout fixed the problem who rerending layout after switch a page
    {
      resolve: "gatsby-plugin-layout",
      options: {
        // eslint-disable-next-line no-undef
        component: require.resolve("./src/components/Layout/layout.js"),
      },
    },

  ],
};
