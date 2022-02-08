import { useState } from "react";

import DoublingBox from "./doublingBox/DoublingBox";
import styles from "./InstrumentButton.module.css";

const InstrumentButton = (props) => {
  const [doublingsClicked, setDoublingsClicked] = useState(false);

  const { primaryPart, rank, doublesObjects } = props.chair;

  const setter = props.setter;
  const allParts = props.allParts;

  console.log(doublesObjects);

  const showDoublings = () => {
    setDoublingsClicked((previous) => !previous);
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={showDoublings}>
          {primaryPart} {rank}
        </button>
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
