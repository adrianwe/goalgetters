import React from 'react'
import styles from './impressum.module.css'

export default ({ data }) => {
  const { titel, text } = data.contentfulImpressum

  return (
    <div className={styles.main}>
      <div className={styles.navBackground}></div>
      <div className={styles.impressum}>
        <div className={styles.impressumTitle}>{titel}</div>
        <div dangerouslySetInnerHTML={{ __html: text.childMarkdownRemark.html }}></div>
      </div>
    </div>
  )
}

export const query = graphql`
  query ImpressumQuery {
    contentfulImpressum(titel: { eq: "Impressum und Datenschutz" }) {
      titel
      text {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`