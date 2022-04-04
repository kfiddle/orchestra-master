import { useState } from "react";

import DoublingBox from "./doublingBox/DoublingBox";
import styles from "./InstrumentButton.module.css";

const InstrumentButton = (props) => {
  const [doublingsClicked, setDoublingsClicked] = useState(false);

  const { primaryPart, rank, specialDesignate, doublesObjects } = props.chair;

  const setter = props.setter;
  const allParts = props.allParts;
  const setHasAssistant = props.setHasAssistant;

  const showDoublings = () => {
    setDoublingsClicked((previous) => !previous);
  };

  const xButtonClicker = () => {
    let tempParts = allParts;
    tempParts["HORN"].pop();
    setter(tempParts);

    console.log(allParts);
    setHasAssistant(false);
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={showDoublings}>
          {primaryPart} {specialDesignate ? specialDesignate : rank}
        </button>
        {specialDesignate && <button onClick={xButtonClicker}>X</button>}
      </div>
      <div className={styles.doublingContainer}>
        {doublingsClicked && (
          <DoublingBox
            primaryPart={primaryPart}
            rank={rank}
            doublesObjects={doublesObjects}
            setter={setter}
            allParts={allParts}
          />
        )}
      </div>
    </div>
  );
};

export default InstrumentButton;
