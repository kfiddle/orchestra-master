import { useState } from "react";

import InstrumentNum from "../instrumentNum/InstrumentNum";
import InstButton from "../instButton/InstButton";
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

  const instrumentClicker = (instrument, number) => {
    let primaries = [];

    for (let j = 1; j <= number; j++) {
      primaries.push(<InstButton key={j} instrument={instrument} rank={j} />);
    }

    setAlternateOptions(primaries);

    // let optionsList = [];

    // for (let option of alternates[instrumentFamily][instrument]) {
    //   optionsList.push();
    //   console.log(option);
    // }

    
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
