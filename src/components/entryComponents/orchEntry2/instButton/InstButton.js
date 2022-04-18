import { useState } from "react";

import DoublingBox from "./doublingBox/DoublingBox";
import ExtrasBox from "./extrasBox/ExtrasBox";

import styles from "./InstButton.module.css";

const InstButton = (props) => {
  const [doublingsClicked, setDoublingsClicked] = useState(false);
  const [rightClicked, setRightClicked] = useState(false);

  const primaryPart = props.instrument;
  const clicked = props.clicked;
  const chairPartz = props.chairPartz;

  const [parts, setParts, rank, setRank] = chairPartz;

  const showDoublings = () => {
    setDoublingsClicked((previous) => !previous);
  };

  const rightClickHandler = (event) => {
    event.preventDefault();
    setRightClicked((previous) => !previous);
  };

  const partClicker = (part) => {
    setRightClicked(false);
    setParts([part]);
    setRank(0);
  };

  let displayedRank = rank > 0? rank: null;

  return (
    <div className={styles.outerContainer}>
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={showDoublings}
          onContextMenu={rightClickHandler}
        >
          {primaryPart} {displayedRank}
        </button>
      </div>

      {doublingsClicked && (
        <DoublingBox
          primaryPart={primaryPart}
          rank={rank}
          chairPartz={chairPartz}
        />
      )}

      {rightClicked && (
        <ExtrasBox primaryPart={primaryPart} partClicker={partClicker} />
      )}
    </div>
  );
};

export default InstButton;
