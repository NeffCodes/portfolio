const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    //template 1
    //note: add a filter to allmarkdownremark to be able to select only specific ones. 
    const template1 = graphql(`
    query Template1 {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
        result.data.allMarkdownRemark.edges.forEach( ({ node }) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve(`./src/templates/code-template.js`),
                context: {
                    slug: node.fields.slug,
                },
            })
        })
    });

    //template 2 goes here... don't forget to add it to the return below

    return Promise.all([template1])
};
