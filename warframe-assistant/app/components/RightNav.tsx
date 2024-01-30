import React from "react"

import styles from "./rightNav.module.css"
import Link from "next/link"

export default function RightNav() {
  return (
    <nav className={styles.rightNav}>
      <ul className={styles.rightNavList + " rightNavList"}>
        <li className={styles.rightNavItem}>
          <Link href="/" className={styles.rightNavLink + " " + styles.active}>
            Main
          </Link>
        </li>
        <li className={styles.rightNavItem}>
          <Link href="/alerts" className={styles.rightNavLink}>
            Alerts
          </Link>
        </li>
        <li className={styles.rightNavItem}>
          <Link href="/fissures" className={styles.rightNavLink}>
            Fissures
          </Link>
        </li>
        <li className={styles.rightNavItem}>
          <Link href="/lootTables" className={styles.rightNavLink}>
            Loot Tables
          </Link>
        </li>
        <li className={styles.rightNavItem}>
          <Link href="/resources" className={styles.rightNavLink}>
            Resources
          </Link>
        </li>
        <li className={styles.rightNavItem}>
          <Link href="/timers" className={styles.rightNavLink}>
            Timers
          </Link>
        </li>
      </ul>
    </nav>
  )
}
