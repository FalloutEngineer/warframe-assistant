import React from "react"

import styles from "../leftBody.module.css"

export default function LeftBodyControls() {
  return (
    <div className={styles.leftBodyControls}>
      <button className={styles.controlsButton}>Create New Group</button>
      <button className={styles.controlsButton}>Create New Item Type</button>
    </div>
  )
}
