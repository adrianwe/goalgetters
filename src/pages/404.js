import React from 'react'
import styles from './impressum.module.css'

const NotFoundPage = () => (
  <div>
    <div className={styles.navBackground}></div>
    <div className={styles.impressum}>
      <div className={styles.impressumTitle}>404 Not Found</div>
      <div>Diese Seite existiert nicht.</div>
    </div>
  </div>
)

export default NotFoundPage