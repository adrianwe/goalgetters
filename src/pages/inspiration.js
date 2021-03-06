import React from 'react'
import Grid from '../components/grid'

export default ({ data }) => (
  <Grid type='main' data={data} />
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