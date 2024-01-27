import Link from "next/link"
import React from "react"

import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        Made by{" "}
        <Link href={"/"} className="regularLink">
          Ruston Martin
        </Link>
      </p>
      <p className={styles.footerText}>v0.0.1</p>
    </footer>
  )
}
