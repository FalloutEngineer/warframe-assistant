import LeftBody from "./LeftBody"
import RightBody from "./RightBody"

import styles from "./app.module.css"

import { nextauthOptions } from "@/lib/nextauthoptions"
import { getServerSession } from "next-auth/next"

export default async function App({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession(nextauthOptions)

  return session ? (
    <div className={styles.app}>
      <LeftBody />
      <RightBody>{children}</RightBody>
    </div>
  ) : (
    <div className={styles.app}>{children}</div>
  )
}
