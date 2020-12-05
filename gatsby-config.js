module.exports = {
  siteMetadata: {
    title: `Bolos Accounting`,
    description: `Our policy is to ensure that we take care of our clients’
    accounting, bookkeeping and other financial works such as, financial
    reports, financial planning etc. We are happy when you are happy.`,
    author: `@artticfox`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`quattrocento sans\:400,700,400i,700i`, `cardo`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        offset: -150,
        duration: 1000,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bolos-accounting`,
        short_name: `bolos`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#00556F`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
