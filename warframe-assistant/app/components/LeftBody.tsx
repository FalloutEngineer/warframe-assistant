import Footer from "./Footer"
import Header from "./Header"
import LeftBodyContent from "./LeftBodyContent"
import LeftBodyControls from "./LeftBodyControls"

import styles from "../leftBody.module.css"

export default async function LeftBody() {
  return (
    <div className={styles.leftBody}>
      <Header />
      <LeftBodyControls />
      <LeftBodyContent />
      <Footer />
    </div>
  )
}
