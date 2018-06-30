import React from 'react'
import Img from 'gatsby-image'
import styles from './tools.module.css'

export default ({ data }) => {
  const { slogan, headerImage } = data.contentfulPage

  return (
    <div>
      <div className={styles.slogan}>
        <div className={styles.sloganImageContainer}>
          <Img sizes={headerImage.sizes} className={styles.sloganImage} />
        </div>
        <div className={styles.sloganText}>#{slogan}</div>
      </div>
    </div>
  )
}

export const query = graphql`
  query ToolsQuery {
    contentfulPage(type: { eq: "Tools" }) {
      slogan
      headerImage {
        sizes(maxWidth: 1280) {
          ...GatsbyContentfulSizes
        }
      }
    }
  }
`