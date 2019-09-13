module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  pathPrefix: '/level-up-tuts',
  plugins: [
    `gatsby-plugin-react-helmet`, // Luts
    `gatsby-plugin-styled-components`, // Luts
    {
      resolve: `gatsby-source-filesystem`, // Luts
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`, // Luts
    `gatsby-transformer-sharp`, // Luts
    `gatsby-plugin-sharp`, // Luts
    `gatsby-plugin-netlify-cms`, // Luts
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
