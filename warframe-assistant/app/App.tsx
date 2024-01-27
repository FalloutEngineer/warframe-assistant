import LeftBody from "./LeftBody"
import RightBody from "./RightBody"

import styles from "./app.module.css"

export default function App({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={styles.app}>
      <LeftBody />
      <RightBody>{children}</RightBody>
    </div>
  )
}
