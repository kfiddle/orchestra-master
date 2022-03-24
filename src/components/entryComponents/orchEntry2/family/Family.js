import { useState } from "react";

import InstrumentNum from "../instrumentNum/InstrumentNum";
import AlternateDiv from "../alternateDiv/AlternateDiv";

import AlternateClicked from "../../../../store/alternate-clicked";

import styles from "./Family.module.css";

const primaryList = {
  WINDS: ["FLUTE", "OBOE", "CLARINET", "BASSOON"],
  BRASS: ["HORN", "TRUMPET", "TROMBONE", "TUBA"],
};

const Family = (props) => {
  const [alternateClicked, setAlternateClicked] = useState(false);
  const instrumentFamily = props.instrumentFamily;
  const list = props.list;

  const alternateClickHandler = () => {
    setAlternateClicked((previous) => !previous);
  };

  const displayableInputs = [];

  for (let instrument of list) {
    displayableInputs.push(
      <InstrumentNum key={displayableInputs.length} instrument={instrument} />
    );
  }

  return (
    <AlternateClicked.Provider
      value={{ alternateClicked }}
    >
      <div className={styles.outerContainer}>
        <div className={styles.familyDiv}>
          <div className={styles.label} onClick={alternateClickHandler}>
            {instrumentFamily}
          </div>
          {displayableInputs}
        </div>
        {alternateClicked && <AlternateDiv list={list}/>}
      </div>
    </AlternateClicked.Provider>
  );
};

export default Family;

