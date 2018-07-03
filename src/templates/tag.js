import React from 'react'
import Grid from '../components/grid'

export default ({ data, pathContext }) => (
  <Grid data={data} tag={pathContext.tag.toLowerCase()} />
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