import React from "react"

import styles from "./leftBodyContent.module.css"
import LeftBodyGroup from "../leftBody/LeftBodyGroup"
import ResourcesTodoGroup from "../leftBody/ResourcesTodoGroup"

export default function LeftBodyContent() {
  return (
    <div className={styles.body}>
      <ResourcesTodoGroup
        id={"1"}
        name={"Excalibur umbra"}
        currentDone={0}
        maxDone={3}
      />
      <ResourcesTodoGroup
        id={"2"}
        name={"Excalibur prime"}
        currentDone={0}
        maxDone={3}
      />
      <ResourcesTodoGroup
        id={"3"}
        name={"Excalibur"}
        currentDone={0}
        maxDone={3}
      />
      <ResourcesTodoGroup
        id={"4"}
        name={"Excalibur wraith"}
        currentDone={0}
        maxDone={3}
      />
    </div>
  )
}
