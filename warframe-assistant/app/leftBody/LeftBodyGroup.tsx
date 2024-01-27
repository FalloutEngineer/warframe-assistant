import React from "react"

import styles from "../leftBody.module.css"

export default function LeftBodyGroup() {
  return (
    <div className={styles.group}>
      <div className={styles.groupTop}>
        <h4 className={styles.groupName}>$name</h4>
        <p className={styles.groupDone}>Done : 0 / $max </p>
        <button className={styles.smallButton}>del</button>
      </div>
      <div className={styles.groupBody}>
        {/* TODO: Auto generate list of components from DB 

        Input on Hover

        I button, on click - more info

        User can create own resource types and then reuse
        
        */}
        <ul>
          <li
            style={{
              display: "flex",
              borderBottomWidth: "1px",
              borderBottomColor: "rgba(255, 255, 255, 0.15)",
            }}
          >
            Rubedo: 100 <button className={styles.smallButton}>del</button>{" "}
            <button className={styles.smallButton}>^</button>
          </li>
          <li
            style={{
              display: "flex",
              borderBottomWidth: "1px",
              borderBottomColor: "rgba(255, 255, 255, 0.15)",
            }}
          >
            Argon: 4 <button className={styles.smallButton}>del</button>{" "}
            <button className={styles.smallButton}>^</button>
          </li>
          <li
            style={{
              display: "flex",
              borderBottomWidth: "1px",
              borderBottomColor: "rgba(255, 255, 255, 0.15)",
            }}
          >
            Orokin reactor: 1{" "}
            <button className={styles.smallButton}>del</button>{" "}
            <button className={styles.smallButton}>^</button>
          </li>
        </ul>
        <button className={styles.smallButton}>+</button>
      </div>
    </div>
  )
}
