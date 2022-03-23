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
  const [primariesObject, setPrimariesObject] = useState({});
  const instrumentFamily = props.instrumentFamily;

  const alternateClickHandler = () => {
    setAlternateClicked((previous) => !previous);
  };

  const displayableInputs = [];

  for (let instrument of primaryList[instrumentFamily]) {
    displayableInputs.push(
      <InstrumentNum key={displayableInputs.length} instrument={instrument} />
    );
  }

  return (
    <AlternateClicked.Provider
      value={{ alternateClicked, primariesObject, setPrimariesObject }}
    >
      <div className={styles.outerContainer}>
        <div className={styles.familyDiv}>
          <div className={styles.label} onClick={alternateClickHandler}>
            {instrumentFamily}
          </div>
          {displayableInputs}
        </div>
        {alternateClicked && <AlternateDiv />}
      </div>
    </AlternateClicked.Provider>
  );
};

export default Family;

// const alternates = {
//   WINDS: {
//     FLUTE: ["PICCOLO", "ALTOFLUTE"],
//     OBOE: ["ENGLISHHORN"],
//     CLARINET: ["EBCLARINET", "BASSCLARINET"],
//     BASSOON: ["CONTRA"],
//   },
//   BRASS: {
//     HORN: [""],
//     TRUMPET: ["CORNET", "FUGALHORN"],
//     TROMBONE: ["EUPHONIUM"],
//     TUBA: ["EUPHONIUM"],
//   },
// };
