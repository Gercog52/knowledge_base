const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if ( node.internal.type === `MarkdownRemark` ||
      (node.internal.type === 'Directory' && node.name !== 'data')
     ) {
    const slug = createFilePath(
      { node, getNode, basePath: `/home/gercog/doc/knowledge_base/site/` }
    );
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      allDirectory(filter: {name: {ne: "data"}}) {
        nodes {
          name
          fields {
            slug
          }
        }
      }
    }
  `)
  console.log(JSON.stringify(result, null, 4))
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/Md.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}