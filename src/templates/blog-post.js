import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styles from './blog-post.module.css'

export default ({ data }) => {
  const { title, tags, image, body } = data.contentfulBlogPost

  return (
    <div>
      <div className={styles.left}></div>
      <div className={styles.right}></div>
      <div className={styles.blogHeader}>
        <Img sizes={image.sizes} className={styles.blogImage} />
      </div>
      <div className={styles.blogTitle}>#{title}</div>
      <div dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} className={styles.mainText}></div>
      <div className={styles.tags}>
        {tags.map(tag => (
          <p key={tag.id}>#{tag.tag}</p>
        ))}
      </div>
      {/* <div className={styles.backButton}>
        <Link to='/inspiration'>zur Artikel Übersicht --></Link>
      </div> */}
    </div>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      tags {
        id
        tag
      }
      image {
        sizes(maxWidth: 1280) {
          ...GatsbyContentfulSizes
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`