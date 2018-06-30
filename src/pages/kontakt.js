import React from 'react'
import Img from 'gatsby-image'
import styles from './kontakt.module.css'

export default ({ data }) => {
  const { headerImage } = data.contentfulPage

  return (
    <div>
      <div className={styles.slogan}>
        <div className={styles.sloganImageContainer}>
          <Img sizes={headerImage.sizes} className={styles.sloganImage} />
        </div>
      </div>
      <div className={styles.contactBody}>
        <div className={styles.contactHeader}>#Kontakt</div>
        <div className={styles.contactForm}>
          <form>
            <div>
              <label>Sag mir deine Email-Adresse, wenn du eine Antwort erhalten willst</label>
              <input type='text' name='email' placeholder='Email' />
            </div>
            <div>
              <label>Willst du dein Anliegen beschreiben?</label>
              <input type='text' name='text' />
              <input type='submit' value='Abschicken' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query KontaktQuery {
    contentfulPage(type: { eq: "Kontakt" }) {
      headerImage {
        sizes(maxWidth: 1280) {
          ...GatsbyContentfulSizes
        }
      }
    }
  }
`