import React from "react"
import ResourceTodo from "./ResourceTodo"

import styles from "../leftBody.module.css"

export default function ResourcesTodoGroup({
  id,
  name,
  currentDone,
  maxDone,
}: {
  id: string
  name: string
  currentDone: number
  maxDone: number
}) {
  return (
    <div className={styles.group}>
      <div className={styles.groupTop}>
        <h4 className={styles.groupName}>{name}</h4>
        <p className={styles.groupDone}>
          Done : {currentDone} / {maxDone}{" "}
        </p>
        <button className={styles.smallButton}>del</button>
      </div>
      {/* TODO: Auto generate list of components from DB 

        Input on Hover

        I button, on click - more info

        User can create own resource types and then reuse
        OR
        Load resource types from database


        PRIORITY
        
        */}
      <div className={styles.groupBody}>
        <ul>
          <li>
            <ResourceTodo
              id={"1"}
              name={"Rubedo"}
              currentAmount={50}
              maxAmount={100}
            />
          </li>
        </ul>
        <ul>
          <li>
            <ResourceTodo
              id={"2"}
              name={"Argon"}
              currentAmount={1}
              maxAmount={4}
            />
          </li>
        </ul>
        <ul>
          <li>
            <ResourceTodo
              id={"3"}
              name={"Orokin Reactor"}
              currentAmount={0}
              maxAmount={1}
            />
          </li>
        </ul>
        <button className={styles.smallButton}>+</button>
      </div>
    </div>
  )
}
