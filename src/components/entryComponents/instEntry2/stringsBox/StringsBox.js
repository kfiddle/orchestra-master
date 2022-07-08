import { useState } from "react";

import styles from "./StringsBox.module.css";

const symInput = "12.10.8.8.5";
const popsInput = "10.8.6.6.4";
const SYM = "SYM";
const POPS = "POPS";

const StringsBox = () => {
  const [input, setInput] = useState(symInput);

  const setStrings = (event) => {
    setInput(event.target.value);
  };

  const symClicked = input === symInput ? styles.clicked : null;
  const popsClicked = input === popsInput ? styles.clicked : null;

  const symClicker = () => {
    if (input !== symInput) {
      setInput(symInput);
    } else {
      setInput('');
    }
  };

  const popsClicker = () => {
    if (input !== popsInput) {
      setInput(popsInput);
    } else {
      setInput('');
    }
  };

  return (
    <div className={styles.outerContainer}>
      <label className={styles.label}>STRINGS</label>

      <button className={`${styles.button} ${symClicked}`} onClick={symClicker}>
        SYM
      </button>
      <button
        className={`${styles.button} ${popsClicked}`}
        onClick={popsClicker}
      >
        POPS
      </button>

      <input className={styles.input} onChange={setStrings} value={input} />
    </div>
  );
};

export default StringsBox;
