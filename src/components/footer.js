import React, { Fragment } from 'react'
import Link from 'gatsby-link'

export default () => (
  <Fragment>
    <div className='landingNewsletter'>
      <div className='landingNewsletter__text'>Bleib auf dem Laufenden mit unserem wöchentlichen Newsletter:</div>
      <div className='landingNewsletter__form'>
        <form name='contact' method='post' netlify action='/success'>
          <div className='email'>
            <input type='email' name='email' placeholder='Email' />
          </div>
          <div className='submitButton'>
            <input type='submit' value='Anmelden' />
          </div>
        </form>
      </div>
      <div className='impressumText'>Mit deiner Anmeldung erklärst du dich mit unserem Datenschutz und AGB einverstanden.</div>
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