import Image from "next/image"

import logo from "../public/logo.png"

import styles from "./header.module.css"
import Link from "next/link"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Image
          src={logo}
          alt="logo placeholder"
          className={styles.globalLogo}
        />
        <p className={styles.logoText}>Warframe Assistant</p>
      </div>
    </header>
  )
}
