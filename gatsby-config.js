/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require("path")

module.exports = {
  siteMetadata: {
    title: "Diomedes lajara | Web Developer",
    description: "I help small companies & clients grow their business online",
    url: "https://www.diomedes.dev", // No trailing slash allowed!
    // image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@dl_ajara",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        components: path.join(__dirname, "src/components"),
        pages: path.join(__dirname, "src/pages"),
        utils: path.join(__dirname, "src/utils"),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Diomedes Lajara",
        short_name: "dlomedes",
        start_url: "/",
        // background_color: config.darkNavyColor,
        // theme_color: config.navyColor,
        // display: "minimal-ui",
        icon: "src/images/dl-logo.png",
      },
    },
  ],
}
