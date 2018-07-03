const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allContentfulBlogPost {
            edges {
              node {
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allContentfulBlogPost.edges.forEach(edge => {
          const { slug } = edge.node
          createPage({
            path: `/post/${slug}`,
            component: path.resolve('./src/templates/blog-post.js'),
            context: {
              slug: slug
            }
          })
        })
      })
    )
  })
}