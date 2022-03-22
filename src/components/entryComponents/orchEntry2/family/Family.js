import { useState } from "react";

import InstrumentNum from "../instrumentNum/InstrumentNum";
import styles from "./Family.module.css";

const alternates = {
  WINDS: {
    FLUTE: ["PICCOLO", "ALTOFLUTE"],
    OBOE: ["ENGLISHHORN"],
    CLARINET: ["EBCLARINET", "BASSCLARINET"],
    BASSOON: ["CONTRA"],
  },
  BRASS: {
    HORN: [""],
    TRUMPET: ["CORNET", "FUGALHORN"],
    TROMBONE: ["EUPHONIUM"],
    TUBA: ["EUPHONIUM"],
  },
};

const Family = (props) => {
  const [alternateOptions, setAlternateOptions] = useState([]);
  const instrumentFamily = props.instrumentFamily;

  const instrumentClicker = (instrument) => {
    let optionsList = [];

    for (let option of alternates[instrumentFamily][instrument]) {
      optionsList.push(option);
      console.log(option);
    }

    setAlternateOptions(optionsList);
  };

  const displayableInputs = [];

  for (let instrument in alternates[instrumentFamily]) {
    displayableInputs.push(
      <InstrumentNum
        key={displayableInputs.length}
        instrument={instrument}
        clicked={instrumentClicker}
      />
    );
  }

  return (
    <div className={styles.outerContainer}>
      <div className={styles.familyDiv}>
        <div className={styles.label}>{instrumentFamily}</div>
        {displayableInputs}
      </div>
      <div>{alternateOptions}</div>
    </div>
  );
};

export default Family;
