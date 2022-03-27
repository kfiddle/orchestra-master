import { useState } from "react";

import DoublingBox from "./doublingBox/DoublingBox";

import styles from "./InstButton.module.css";

const InstButton = (props) => {
  const [doublingsClicked, setDoublingsClicked] = useState(false);

  const primaryPart = props.instrument;
  const rank = props.rank;
  const clicked = props.clicked;
  const chairPartz = props.chairPartz;

  const [parts, setParts] = chairPartz;

  const showDoublings = () => {
    setDoublingsClicked((previous) => !previous);
    clicked();
  };

  const showParts = () => {
    console.log(parts);
  };

  return (
    <div className={styles.outerContainer}>
      <button onClick={showParts}>test</button>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={showDoublings}>
          {primaryPart} {rank}
        </button>
      </div>

      {doublingsClicked && (
        <DoublingBox
          primaryPart={primaryPart}
          rank={rank}
          chairPartz={chairPartz}
        />
      )}
    </div>
  );
};

export default InstButton;
