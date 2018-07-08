import React from 'react'
import Grid from '../components/grid'

export default ({ data, pathContext }) => (
  <Grid type='tag' data={data} tag={pathContext.tag.toLowerCase()} />
)

export const query = graphql`
  query TagQuery($tag: String!) {
    allContentfulBlogPost(
      filter: {tags: {tag: {eq: $tag}}}
      sort: {fields: [creationDate], order: DESC}
    ) {
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