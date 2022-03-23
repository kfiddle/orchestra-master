import { useState } from "react";

import DoublingBox from "./doublingBox/DoublingBox";

import styles from "./InstButton.module.css";

const InstButton = (props) => {
  const [doublingsClicked, setDoublingsClicked] = useState(false);

  const primaryPart = props.instrument;
  const rank = props.rank;

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

      {doublingsClicked && (
        <DoublingBox primaryPart={primaryPart} rank={rank} />
      )}
    </div>
  );
};

export default InstButton;
