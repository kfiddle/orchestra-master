import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

import AdjustPanel from "../orchestrationInputs/adjust/adjustPanel/AdjustPanel";
import ExtrasButton from "../orchestrationInputs/adjust/extras/ExtrasButton";

import styles from "./FamilyInputs.module.css";
import SingleInstrumentInput from "./single-instrument-input/SingleInstrumentInput";

const families = {
  winds: ["Flute", "Oboe", "Clarinet", "Bassoon"],
  brass: ["Horn", "Trumpet", "Trombone", "Tuba"],
};

const FamilyInputs = (props) => {
  const [basicNumbers, setBasicNumbers] = useState("");
  const [orchestration, setOrchestration] = props.stateList;

  const instrumentFamily = props.instrumentFamily;
  const clickedFamily = props.clicked;

  const displayedInstruments = families[instrumentFamily].map((instrument) => (
    <SingleInstrumentInput key={Math.random()} instrument={instrument} />
  ));

  const panelClickHandler = () => {
    if (basicNumbers.length === 4) {
      props.clickHandler(instrumentFamily);
    }
  };

  const setANumber = (event, key) => {
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
      <div className={classNames}>
        <div className={styles.label}>{instrumentFamily}</div>
        {displayedInstruments}
        <ExtrasButton />
      </div>

      {clickedFamily === instrumentFamily && (
        <AdjustPanel number={basicNumbers} family={instrumentFamily} />
      )}
    </Fragment>
  );
};

export default FamilyInputs;
