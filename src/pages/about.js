import React from 'react'
import Img from 'gatsby-image'
import styles from './about.module.css'

export default ({ data }) => (
  <div>
    <div className={styles.navBackground}></div>
    <div className={styles.pageTitle}>#Our Story</div>
    <div className={styles.pageMain}>
        <div>
          <Img className={styles.aboutPhoto} sizes={data.contentfulPage.headerImage.sizes} />
        </div>
        <div className={styles.about}> 
        goalgetters! begann mit einer einfachen Idee: Menschen zu unterstützen, einem erfüllenden Beruf nachzugehen. Zu viele verbringen jeden Tag damit, den Sinn in ihrer Arbeit zu suchen. Sie sind es leid, jedes Wochenende nach Traumjobs zu suchen, die nicht existieren. Sie wollen sich nicht weiter fragen, was sie alles erreichen könnten, wenn sie nur den Mut und das Know-How dazu hätten. Als Netzwerk von Experten freuen wir uns, dich bei deiner Reise zu unterstützen! - Stephanie 
        </div>
    </div>
  </div>
)

export const query = graphql`
  query AboutQuery {
    contentfulPage(type: { eq: "About" }) {
      headerImage {
        sizes(maxWidth: 1280) {
          ...GatsbyContentfulSizes
        }
      }
    }
  }
`