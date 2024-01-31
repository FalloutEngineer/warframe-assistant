"use client"

import React from "react"

import styles from "../leftBody.module.css"

export default function LeftBodyControls(groupCreationHandler: any) {
  return (
    <div className={styles.leftBodyControls}>
      <button className={styles.controlsButton + " button-outline"}>
        Create New Group
      </button>
      {/* <button className={styles.controlsButton + " button-outline"}>
        Create New Item Type
      </button> */}
    </div>
  )
}
