import React from 'react'
import Link from 'gatsby-link'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Img from 'gatsby-image'
import styles from './index.module.css'

export default ({ data }) => {
  const { slogan, headerImage, landingIntros, landingLinks, quoteOfDay } = data.contentfulPage

  return (
    <div>
      <div className={styles.slogan}>
        <div className={styles.sloganImageContainer}>
          <Img sizes={headerImage.sizes} className={styles.sloganImage} />
        </div>
        <AnchorLink href='#intros' className={styles.sloganText}>#{slogan}</AnchorLink>
      </div>

      <div id='intros'>
        {landingIntros.map(intro => (
          <div key={intro.landingIntroHeader} className={styles.intro}>
            <div className={styles.introDisclaimer}>#{intro.landingIntroHeader}</div>
            <div className={styles.introText} dangerouslySetInnerHTML={{ __html: intro.landingIntroText.childMarkdownRemark.html}}></div>
          </div>
        ))}
      </div>

      <div className={styles.landingLinks}>
        {landingLinks.map((link, index) => (
          <div key={link.landingLinkHeader} className={index % 2 === 0 ? styles.landingLink2 : styles.landingLink1}>
            <Link to='/inspiration'>
              <div className={styles.landingLinkHeader}>#{link.landingLinkHeader}</div>
              <div>{link.landingLinkText} -></div>
            </Link>
          </div>
        ))}
      </div>

      <div className={styles.quoteBox}>
        <div className={styles.quoteHeading}>{quoteOfDay.quoteTitle}</div>
        <div className={styles.quoteText} dangerouslySetInnerHTML={{ __html: quoteOfDay.quoteText.childMarkdownRemark.html }}></div>
        <div className={styles.quoteSub}>-{quoteOfDay.quoteAuthor}</div>
      </div>
    </div>
  )
}

export const query = graphql`
  query LandingQuery {
    contentfulPage(type: { eq: "Landing" }) {
      slogan
      headerImage {
        sizes(maxWidth: 1280) {
          ...GatsbyContentfulSizes
        }
      }
      landingIntros {
        landingIntroHeader
        landingIntroText {
          childMarkdownRemark {
            html
          }
        }
      }
      landingLinks {
        landingLinkHeader
        landingLinkText
      }
      quoteOfDay {
        quoteTitle
        quoteText {
          childMarkdownRemark {
            html
          }
        }
        quoteAuthor
      }
    }
  }
`