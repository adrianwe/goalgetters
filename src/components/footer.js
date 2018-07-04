import React, { Component, Fragment } from 'react'
import Link from 'gatsby-link'
import addToMailchimp from 'gatsby-plugin-mailchimp'

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
        <div className='landingNewsletter'>
          <div className='landingNewsletter__text'>Bleib auf dem Laufenden mit unserem wöchentlichen Newsletter:</div>
          <div className='landingNewsletter__form'>
            <form onSubmit={this.handleSubmit}>
              <div className='email'>
                <input type='email' name='email' placeholder='Email' onChange={e => this.setState({ email: e.target.value })} />
              </div>
              <div className='submitButton'>
                <input type='submit' value='Anmelden' />
              </div>
            </form>
          </div>
          {this.state.result && (
            <div className={this.state.result.result === 'success' ? 'mailChimpSuccess' : 'mailChimpError'} dangerouslySetInnerHTML={{ __html: this.state.result.msg }}></div>
          )}
          <div className='impressumText'>Mit deiner Anmeldung erklärst du dich mit unseren <Link to='/impressum'>Datenschutzbedingungen </Link> einverstanden.</div>
        </div>
        <div className='mainFooter'>
          <nav className='mainFooter__nav'>
            <ul className='mainFooter__links'>
              <li className='mainFooter__link'>
                <Link to='/'>Home</Link>
              </li>
              <li className='mainFooter__link'>
                <Link to='/impressum'>Impressum</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Fragment>
    )
  }
}
