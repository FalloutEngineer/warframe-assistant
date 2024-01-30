import React from "react"

import styles from "./rightNav.module.css"
import Link from "next/link"

export default function RightNav() {
  return (
    <nav className={styles.rightNav}>
      <ul className={styles.rightNavList + " rightNavList"}>
        <li className={styles.rightNavItem}>
          <Link
            href="/"
            className={
              "button-outline" + " " + styles.rightNavLink + " " + styles.active
            }
          >
            Main
          </Link>
        </li>
        <li className={styles.rightNavItem}>
          <Link
            href="/alerts"
            className={"button-outline" + " " + styles.rightNavLink}
          >
            Alerts
          </Link>
        </li>
        <li className={styles.rightNavItem}>
          <Link
            href="/fissures"
            className={"button-outline" + " " + styles.rightNavLink}
          >
            Fissures
          </Link>
        </li>
        <li className={styles.rightNavItem}>
          <Link
            href="/lootTables"
            className={"button-outline" + " " + styles.rightNavLink}
          >
            Loot Tables
          </Link>
        </li>
        <li className={styles.rightNavItem}>
          <Link
            href="/resources"
            className={"button-outline" + " " + styles.rightNavLink}
          >
            Resources
          </Link>
        </li>
        <li className={styles.rightNavItem}>
          <Link
            href="/timers"
            className={"button-outline" + " " + styles.rightNavLink}
          >
            Timers
          </Link>
        </li>
      </ul>
    </nav>
  )
}
