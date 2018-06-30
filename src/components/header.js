import React, { Component, Fragment } from 'react'
import Link from 'gatsby-link'

class Nav extends Component {
  state = {
    display: 'none'
  }

  toggleHamburger = () => {
    this.setState((prevState) => ({
      display: prevState.display === 'none' ? 'block' : 'none'
    }))
  }

  render() {
    const { type, navigation } = this.props
    const { display } = this.state

    return (
      <Fragment>
        <nav className={`${type}Nav`} style={{ display: type === 'mobile' && display }}>
          <ul className={`${type}Nav__items`}>
            {navigation.map(navItem => (
              <li key={`${type}_${navItem.linkSlug}`} className={`${type}Nav__item`}>
                <Link to={`/${navItem.linkSlug}`}>{navItem.linkName}</Link>
              </li>
            ))}
          </ul>
          <div className={`${type}Nav__search`}>
            <input type='text' placeholder='Suche...' />
            <input type='submit' value='Los!' />
          </div>
        </nav>
        {type === 'mobile' && (
          <div className='hamburger' onClick={this.toggleHamburger}>
            <div className='bar1'></div>
            <div className='bar2'></div>
            <div className='bar3'></div>
          </div>
        )}
      </Fragment>
    )
  }
}

export default ({ title, navigation }) => (
  <div className='header'>
    <div className='title'>
      <Link to='/'>{title}</Link>
    </div>
    <Nav type='main' navigation={navigation} />
    <Nav type='mobile' navigation={navigation} />
  </div>
)