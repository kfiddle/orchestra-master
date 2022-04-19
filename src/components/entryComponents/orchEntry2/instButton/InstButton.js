import { useState } from "react";

import DoublingBox from "./doublingBox/DoublingBox";
import ExtrasBox from "./extrasBox/ExtrasBox";

import styles from "./InstButton.module.css";

const InstButton = (props) => {
  const [doublingsClicked, setDoublingsClicked] = useState(false);
  const [rightClicked, setRightClicked] = useState(false);
  const [extraInPlace, setExtraInPlace] = useState(false);

  const primaryPart = props.instrument;
  const chairPartz = props.chairPartz;
  const { initialPrimaryPart, initialRank } = props.initials;

  const [parts, setParts, rank, setRank] = chairPartz;

  const showDoublings = () => {
    setDoublingsClicked((previous) => !previous);
  };

  const rightClickHandler = (event) => {
    event.preventDefault();
    if (!extraInPlace) {
      setRightClicked((previous) => !previous);
    } else {
      setParts([initialPrimaryPart]);
      setRank(initialRank)
    }
  };

  const partClicker = (part) => {
    setRightClicked(false);
    setParts([part]);
    setRank(0);
    setExtraInPlace(true);
  };

  let displayedRank = rank > 0 ? rank : null;

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
