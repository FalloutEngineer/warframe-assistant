import React from "react"

import styles from "../leftBody.module.css"

//TODO: ADD drops on, description, etc
export default function ResourceTodo({
  id,
  name,
  currentAmount,
  maxAmount,
}: {
  id: string
  name: string
  currentAmount: number
  maxAmount: number
}) {
  return (
    <div className={styles.resourceTodo}>
      <div className={styles.resourceUpper}>
        <div className={styles.resourceMainInfo}>
          <p className="name">{name}</p>:{" "}
          <p className="currentAmount">{currentAmount}</p> /{" "}
          <p className="maxAmount">{maxAmount}</p>
        </div>
        <div className={styles.resourceButtons}>
          <button className={styles.smallButton}>del</button>{" "}
          <button className={styles.smallButton}>^</button>
        </div>
      </div>
    </div>
  )
}
