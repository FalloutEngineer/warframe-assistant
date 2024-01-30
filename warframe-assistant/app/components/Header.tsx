import Image from "next/image"

import logo from "../../public/logo.png"

import styles from "./header.module.css"
import SignOutButton from "./SignOutButton"
import { getServerSession } from "next-auth"
import { nextauthOptions } from "@/lib/nextauthoptions"

export default async function Header() {
  const session = await getServerSession(nextauthOptions)
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
      <div className={styles.userBlock}>
        <SignOutButton />
        <p className={styles.email}>{session?.user?.email}</p>
      </div>
    </header>
  )
}
