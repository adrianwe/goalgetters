import React, { Component } from 'react'
import Img from 'gatsby-image'
import { navigateTo } from 'gatsby-link'
import Recaptcha from 'react-google-recaptcha'
// recaptchaKey import statement is for dev only, prod env var is loaded in the component
import { recaptchaKey } from '../../keys/keys'
import styles from './kontakt.module.css'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class Kontakt extends Component {
  state = {}

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleRecaptcha = value => {
    this.setState({ 'g-recaptcha-response': value })
  }

  handleSubmit = e => {
    e.preventDefault()

    if (this.state['g-recaptcha-response']) {
      const form = e.target
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...this.state
        })
      })
        .then(() => navigateTo(form.getAttribute('action')))
        .catch(error => alert(error))
    }
  }

  render() {
    const { headerImage } = this.props.data.contentfulPage

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
            <form name='contact' method='post' action='/success' data-netlify='true' data-netlify-recaptcha='true' data-netlify-honeypot='bot-field' onSubmit={this.handleSubmit}>
              <input name='bot-field' className={styles.formField} />
              <noscript>
                <p>This form won’t work with Javascript disabled</p>
              </noscript>
              <div>
                <input type='text' name='email' placeholder='Email für Rückantwort (optional)' onChange={this.handleChange} />
              </div>
              <div>
                <input required type='text' name='text' placeholder='Mein Anliegen' onChange={this.handleChange} />
              </div>
              <Recaptcha
                ref='recaptcha'
                sitekey={recaptchaKey || process.env.GATSBY_SITE_RECAPTCHA_KEY}
                onChange={this.handleRecaptcha}
              />
              <input type='submit' value='Abschicken' />
            </form>
          </div>
        </div>
      </div>
    )
  }
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