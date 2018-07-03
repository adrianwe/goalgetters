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
          allContentfulTag {
            edges {
              node {
                tag
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
              slug
            }
          })
        })
        result.data.allContentfulTag.edges.forEach(edge => {
          const { tag } = edge.node
          createPage({
            path: `/tag/${tag}`,
            component: path.resolve('./src/templates/tag.js'),
            context: {
              tag
            }
          })
        })
      })
    )
  })
}