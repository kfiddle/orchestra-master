import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

import AdjustPanel from "../orchestrationInputs/adjust/adjustPanel/AdjustPanel";

import styles from "./FamilyInput.module.css";

const FamilyInput = (props) => {
  const [basicNumbers, setBasicNumbers] = useState("");
  const [orchestration, setOrchestration] = props.stateList;
  const [randomUserInput, setRandomUserInput] = useState("");

  const instrumentFamily = props.instrumentFamily;
  const clickedFamily = props.clicked;

  let instruments = [];
  if (instrumentFamily === "winds") {
    instruments = ["Flute", "Oboe", "Clarinet", "Bassoon"];
  } else {
    instruments = ["Horn", "Trumpet", "Trombone", "Tuba"];
  }

  const panelClickHandler = () => {
    if (basicNumbers.length === 4) {
      props.clickHandler(instrumentFamily);
    }
  };

  const setANumber = (event, key) => {
    // setRandomUserInput(event.target.value);

    setOrchestration({ ...orchestration, [key]: event.target.value });
    console.log(orchestration);
  };

  // const enterNumber = (event) => {
  //   if (isNaN(event.nativeEvent.data) || event.target.value.length === 5) {
  //     return;
  //   }
  //   setBasicNumbers(event.target.value);
  //   console.log(basicNumbers);
  // };

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
          onChange={(event) => setANumber(event, instruments[0])}
          // value={randomUserInput}
          value={orchestration[instruments[0]]}
        ></input>
        <input
          type={"text"}
          className={styles.input}
          // onChange={(event) => setANumber(event, instruments[1])}
        ></input>
        <input
          type={"text"}
          className={styles.input}
          // onChange={(event) => setANumber(event, instruments[2])}
        ></input>
        <input
          type={"text"}
          className={styles.input}
          // onChange={(event) => setANumber(event, instruments[3])}
        ></input>
      </div>

      {clickedFamily === instrumentFamily && (
        <AdjustPanel number={basicNumbers} family={instrumentFamily} />
      )}
    </Fragment>
  );
};

export default FamilyInput;
