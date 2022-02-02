import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

import AdjustPanel from "../orchestrationInputs/adjust/adjustPanel/AdjustPanel";

import styles from "./FamilyInput.module.css";

const FamilyInput = (props) => {
  const [basicNumbers, setBasicNumbers] = useState("");
  const [orchestration, setOrchestration] = props.stateList;

  const instrumentFamily = props.instrumentFamily;
  const clickedFamily = props.clicked;

  const panelClickHandler = () => {
    if (basicNumbers.length === 4) {
      props.clickHandler(instrumentFamily);
    }
  };

  const enterNumber = (event) => {
    if (isNaN(event.nativeEvent.data) || event.target.value.length === 5) {
      return;
    }
    setBasicNumbers(event.target.value);
    console.log(basicNumbers);
  };

  let classNames = styles.outerContainer;

  if (clickedFamily === instrumentFamily) {
    classNames = `${styles.outerContainer} ${styles.panelIsOpen}`;
  }

  return (
    <Fragment>
      <div className={classNames} onClick={panelClickHandler}>
        <div className={styles.label}>{instrumentFamily}</div>

        <input
          type={"text"}
          className={styles.input}
          onChange={enterNumber}
          value={basicNumbers}
        ></input>

        {/* <input
          type={"text"}
          className={`${classes.input} ${classes.strings}`}
          onChange={(event) => setANumber(event, "Violin1")}
        ></input>
        <input
          type={"text"}
          className={`${classes.input} ${classes.strings}`}
          onChange={(event) => setANumber(event, "Violin2")}
        ></input>
        <input
          type={"text"}
          className={`${classes.input} ${classes.strings}`}
          onChange={(event) => setANumber(event, "Viola")}
        ></input>
        <input
          type={"text"}
          className={`${classes.input} ${classes.strings}`}
          onChange={(event) => setANumber(event, "Cello")}
        ></input> */}
      </div>

      {clickedFamily === instrumentFamily && (
        <AdjustPanel number={basicNumbers} family={instrumentFamily} />
      )}
    </Fragment>
  );
};

export default FamilyInput;
