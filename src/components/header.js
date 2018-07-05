import React, { Component, Fragment } from 'react'
import Link from 'gatsby-link'
import styles from './header.module.css'

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
        <nav className={styles[`${type}Nav`]} style={{ display: type === 'mobile' && display }}>
          <ul className={styles[`${type}Nav__items`]}>
            {navigation.map(navItem => (
              <li key={`${type}_${navItem.linkSlug}`} className={styles[`${type}Nav__item`]}>
                <Link to={`/${navItem.linkSlug}`}>{navItem.linkName}</Link>
              </li>
            ))}
          </ul>
          {/* <div className={styles[`${type}Nav__search`]}>
            <input type='text' placeholder='Suche...' />
            <input type='submit' value='Los!' />
          </div> */}
        </nav>
        {type === 'mobile' && (
          <div className={styles.hamburger} onClick={this.toggleHamburger}>
            <div className={styles.bar1}></div>
            <div className={styles.bar2}></div>
            <div className={styles.bar3}></div>
          </div>
        )}
      </Fragment>
    )
  }
}

export default ({ title, navigation }) => (
  <div className={styles.header}>
    <div className={styles.title}>
      <Link to='/'>{title}</Link>
    </div>
    <Nav type='main' navigation={navigation} />
    <Nav type='mobile' navigation={navigation} />
  </div>
)