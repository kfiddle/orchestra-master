import { useState } from "react";

import styles from "./Extra.module.css";

const Extra = (props) => {
  const [clicked, setClicked] = useState(false);
  const [localNumber, setLocalNumber] = useState(0);

  const instrument = props.instrument;

  const clickHandler = () => {
    setClicked((previous) => !previous);
  };

  const addButtonClicker = () => {
    setLocalNumber((previous) => previous + 1);
  };

  const subtractButtonClicker = () => {
    setLocalNumber((previous) => previous - 1);
  };

  return (
    <div className={styles.outerContainer}>
      <div onClick={clickHandler} className={styles.instrumentItemDiv}>
        <div className={styles.nameDiv}>{instrument}</div>
      </div>
      {clicked && (
        <div style={{ color: "red" }}>
          {localNumber} <button onClick={addButtonClicker}>+</button>{" "}
          <button onClick={subtractButtonClicker}>-</button>
        </div>
      )}
    </div>
  );
};

export default Extra;
