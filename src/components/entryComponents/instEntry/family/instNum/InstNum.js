import { useState } from "react";

import styles from "./InstNum.module.css";

const InstNum = (props) => {
  const [bracketsClicked, setBracketsClicked] = useState(false);
  const number = props.instNum;
  const familyName = props.familyName;
  const specialDesignate = props.specialDesignate;
  const inst = props.inst;

  const bracketsClicker = () => {
    setBracketsClicked((previous) => !previous);
  };

  const displayableNums = [];

  for (let j = 1; j <= number; j++) {
    displayableNums.push(<button key={j}>{j}</button>)
  }

  return (
    <div className={styles.outerContainer}>
      <button onClick={bracketsClicker} className={styles.button}>
        {number} {inst}
      </button>
      {bracketsClicked && <div>{displayableNums}</div>}
    </div>
  );
};

export default InstNum;
