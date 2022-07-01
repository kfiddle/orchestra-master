import { useState } from "react";
import SingleChair from "../singleChair/SingleChair";

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
    displayableNums.push(
      <SingleChair
        key={j}
        rank={j}
        inst={inst}
      />
    );
  }

  if (specialDesignate) {
    displayableNums.splice(
      1,
      0,
      <SingleChair key={displayableNums.length + 1} inst={inst} rank="A"/>
    );
  }

  return (
    <div className={styles.outerContainer}>
      <button onClick={bracketsClicker} className={styles.button}>
        {number} {inst}
      </button>
      {bracketsClicked && <div className={styles.chairsDiv}>{displayableNums}</div>}
    </div>
  );
};

export default InstNum;
