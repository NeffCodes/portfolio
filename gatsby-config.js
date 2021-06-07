module.exports = {
  siteMetadata: {
    title: "Personal Portfolio",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
};
