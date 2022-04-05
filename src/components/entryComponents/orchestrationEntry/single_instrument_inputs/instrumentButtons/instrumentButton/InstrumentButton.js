import { useState } from "react";

import { FiDelete } from "react-icons/fi";

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
    setHasAssistant(false);
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={showDoublings}>
          {primaryPart} {specialDesignate ? specialDesignate : rank}
        </button>
       {specialDesignate && <FiDelete  className={styles.deleteButton} onClick={xButtonClicker} />}
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
