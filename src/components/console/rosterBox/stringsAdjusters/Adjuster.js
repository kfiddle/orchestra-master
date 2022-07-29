import { useEffect, useState } from "react";

import styles from "./Adjuster.module.css";

const Adjuster = ({ section, count }) => {
  const [clicked, setClicked] = useState(false);
  const [localNumber, setLocalNumber] = useState(0);

  useEffect(() => {
    setLocalNumber(count);
  }, []);

  const clickHandler = () => {
    if (!clicked && localNumber === 0) {
      setLocalNumber(1);
    }
    setClicked((previous) => !previous);
  };

  const addButtonClicker = () => {
    setLocalNumber((previous) => previous + 1);
  };

  const subtractButtonClicker = () => {
    if (localNumber > 0) {
      setLocalNumber((previous) => previous - 1);
    }
  };

  let outerClassNames = !clicked ? styles.sectionDiv : styles.clickedSection;

  let buttonsClassNames = !clicked ? styles.invisible : styles.buttonsAndNumber;

  return (
    <div className={styles.outerContainer}>
      <div onClick={clickHandler} className={outerClassNames}>
        <div className={styles.nameDiv}>{section}</div>
      </div>
      <div className={buttonsClassNames}>
        <button onClick={subtractButtonClicker} className={styles.button}>
          -
        </button>
        <button onClick={addButtonClicker} className={styles.button}>
          +
        </button>{" "}
        <div className={styles.numberDiv}>{localNumber}</div>
      </div>
    </div>
  );
};

export default Adjuster;
