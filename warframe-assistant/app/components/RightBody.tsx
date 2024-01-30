import RightNav from "./RightNav"

import styles from "./rightBody.module.css"

export default function RightBody({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={styles.rightBody}>
      <RightNav />
      <div className={styles.rightBodyContent}>{children}</div>
    </div>
  )
}
