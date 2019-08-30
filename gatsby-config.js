/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require("path")

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
        components: path.resolve(__dirname, "src/components"),
        utils: path.resolve(__dirname, "src/components/utils"),
        theme: path.resolve(__dirname, "src/components/theme"),
        images: path.resolve(__dirname, "src/images"),
      },
    },
  ],
}
