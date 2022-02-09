import DoublingOption from "./doublingOption/DoublingOption";
import { useState } from "react";

import styles from "./DoublingBox.module.css";

const DoublingBox = (props) => {

  const primaryPart = props.primaryPart;
  const rank = props.rank;
  const doublesObjects = props.doublesObjects;
  const setter = props.setter;
  const allParts = props.allParts;


  const displayedOptions = doublesObjects.map(
    (partObject) => (
      <DoublingOption
        key={doublesObjects.indexOf(partObject)}
        optionIndex={doublesObjects.indexOf(partObject)}
        primaryPart={primaryPart}
        rank={rank}
        partObject={partObject}
        setter={setter}
        allParts={allParts}
      />
    )
  );

  return <div className={styles.outerContainer}>{displayedOptions}</div>;
};

export default DoublingBox;
