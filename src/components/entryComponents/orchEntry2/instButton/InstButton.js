import { useState } from "react";

import DoublingBox from "./doublingBox/DoublingBox";
import ExtrasBox from "./extrasBox/ExtrasBox";

import styles from "./InstButton.module.css";

const InstButton = (props) => {
  const [doublingsClicked, setDoublingsClicked] = useState(false);
  const [rightClicked, setRightClicked] = useState(false);

  const primaryPart = props.instrument;
  const rank = props.rank;
  const clicked = props.clicked;
  const chairPartz = props.chairPartz;

  const [parts, setParts] = chairPartz;

  const showDoublings = () => {
    setDoublingsClicked((previous) => !previous);
  };

  const rightClickHandler = (event) => {
    event.preventDefault();
    setRightClicked((previous) => !previous);
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={showDoublings}
          onContextMenu={rightClickHandler}
        >
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

      {rightClicked && <ExtrasBox primaryPart={primaryPart}/>}


    </div>
  );
};

export default InstButton;
