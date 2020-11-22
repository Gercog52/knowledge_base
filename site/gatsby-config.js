/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `/home/gercog/doc/knowledge_base/data`,
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
    }
  ],
}
