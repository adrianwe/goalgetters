import React from 'react'
import Grid from '../components/grid'

export default ({ data }) => (
  <Grid data={data} />
)

export const query = graphql`
  query InspirationQuery {
    allContentfulBlogPost(sort: {fields: [creationDate], order: DESC}) {
      edges {
        node {
          id
          slug
          image {
            sizes(maxWidth: 1280) {
              ...GatsbyContentfulSizes
            }
          }
          title
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          tags {
            id
            tag
          }
        }
      }
    }
    allContentfulTag {
      edges {
        node {
          id
          tag
        }
      }
    }
  }
`