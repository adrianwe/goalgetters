import React, { Component, Fragment } from 'react'
import Link from 'gatsby-link'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import styles from './footer.module.css'

export default class Footer extends Component {
  state = {
    email: '',
    result: null
  }
  
  handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(this.state.email)
      .then(result => {
        this.setState({ result })
      })
  }

  render() {
    return(
      <Fragment>
        <div className={styles.landingNewsletter}>
          <div className={styles.landingNewsletter__text}>Bleib auf dem Laufenden mit unserem wöchentlichen Newsletter:</div>
          <div className={styles.landingNewsletter__form}>
            <form onSubmit={this.handleSubmit}>
              <div className={styles.email}>
                <input required type='email' name='email' placeholder='Email' onChange={e => this.setState({ email: e.target.value })} />
              </div>
              <div className={styles.submitButton}>
                <input type='submit' value='Anmelden' />
              </div>
            </form>
          </div>
          {this.state.result && (
            <div className={this.state.result.result === 'success' ? styles.mailChimpSuccess : styles.mailChimpError} dangerouslySetInnerHTML={{ __html: this.state.result.msg }}></div>
          )}
          <div className={styles.impressumText}>Mit deiner Anmeldung erklärst du dich mit unseren <Link to='/impressum'>Datenschutzbedingungen </Link> einverstanden.</div>
        </div>
        <div className={styles.mainFooter}>
          <nav className={styles.mainFooter__nav}>
            <ul className={styles.mainFooter__links}>
              <li className={styles.mainFooter__link}>
                <Link to='/about'>About</Link>
              </li>
              <li className={styles.mainFooter__link}>
                <Link to='/impressum'>Impressum/Datenschutz</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Fragment>
    )
  }
}
