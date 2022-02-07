import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

// import AdjustPanel from "../orchestrationInputs/adjust/adjustPanel/AdjustPanel";
import ExtrasButton from "./extras/ExtrasButton";

import styles from "./FamilyInputs.module.css";
import SingleInstrumentInput from "./single-instrument-input/SingleInstrumentInput";

const families = {
  winds: ["Flute", "Oboe", "Clarinet", "Bassoon"],
  brass: ["Horn", "Trumpet", "Trombone", "Tuba"],
  percussion: ["timpani", "others"],
  strings: ["violin1", "violin2", "viola", "cello", "bass"],
};

const FamilyInputs = (props) => {
  const stateList = props.stateList;

  const instrumentFamily = props.instrumentFamily;

  const displayedInstruments = families[instrumentFamily].map((instrument) => (
    <SingleInstrumentInput key={Math.random()} instrument={instrument} stateList={stateList} />
  ));

  // const setANumber = (event, key) => {
  //   setOrchestration({ ...orchestration, [key]: event.target.value });
  //   console.log(orchestration);
  // };

  // const enterNumber = (event) => {
  //   if (isNaN(event.nativeEvent.data) || event.target.value.length === 5) {
  //     return;
  //   }
  //   setBasicNumbers(event.target.value);
  //   console.log(basicNumbers);
  // };

  return (
    <Fragment>
      <div className={styles.outerContainer}>
        <div className={styles.label}>{instrumentFamily}</div>
        {displayedInstruments}
        <ExtrasButton />
      </div>
    </Fragment>
  );
};

export default FamilyInputs;
