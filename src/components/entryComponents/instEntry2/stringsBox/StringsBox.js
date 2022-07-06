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

  const clicker = (symOrPops) => {
    setClickedOption(symOrPops);
  };
  return (
    <div className={styles.outerContainer}>
      <label className={styles.label}>STRINGS</label>

      <button
        className={`${styles.button} ${symClicked}`}
        onClick={() => clicker(SYM)}
      >
        SYM
      </button>
      <button
        className={`${styles.button} ${popsClicked}`}
        onClick={() => clicker(POPS)}
      >
        POPS
      </button>

      <input className={styles.input} onChange={setStrings} value={input} />
    </div>
  );
};

export default StringsBox;
