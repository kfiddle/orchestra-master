import { useState } from "react";

import DoublingBox from "./doublingBox/DoublingBox";
import styles from "./InstrumentButton.module.css";

const InstrumentButton = (props) => {
  const [doublingsClicked, setDoublingsClicked] = useState(false);

  const instrument = props.instrument;
  const rank = props.rank;

  const showDoublings = () => {
    setDoublingsClicked((previous) => !previous);
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={showDoublings}>
          {instrument} {rank}
        </button>
      </div>
      <div className={styles.doublingContainer}>
        {doublingsClicked && <DoublingBox instrument={instrument} />}
      </div>
    </div>
  );
};

export default InstrumentButton;
