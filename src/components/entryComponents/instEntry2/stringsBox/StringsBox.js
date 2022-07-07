import { useState } from "react";

import styles from "./StringsBox.module.css";

const initialInput = "12.10.8.8.5";
const SYM = "SYM";
const POPS = "POPS";

const StringsBox = () => {
  const [input, setInput] = useState(initialInput);
  const [clickedOption, setClickedOption] = useState(SYM);

  const setStrings = (event) => {
    setInput(event.target.value);
  };

  const symClicked = clickedOption === SYM ? styles.clicked : null;
  const popsClicked = clickedOption === POPS ? styles.clicked : null;

  const symClicker = () => {
    if (clickedOption !== SYM) {
      setClickedOption(SYM);
    } else {
      setClickedOption(null);
    }
  };

  const popsClicker = () => {
    if (clickedOption !== POPS) {
      setClickedOption(POPS);
    } else {
      setClickedOption(null);
    }
  };

  return (
    <div className={styles.outerContainer}>
      <label className={styles.label}>STRINGS</label>

      <button
        className={`${styles.button} ${symClicked}`}
        onClick={symClicker}
      >
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
