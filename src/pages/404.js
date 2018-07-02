import React from 'react'
import styles from './404.module.css'

export default () => (
  <div>
    <div className={styles.navBackground}></div>
    <div className={styles.box404}>
      <div className={styles.title404}>404: Not Found</div>
      <div>Diese Seite existiert nicht.</div>
    </div>
  </div>
)