import { useState } from "react";
import InstrumentButtons from "./instrumentButtons/InstrumentButtons";

import styles from "./SingleInstrumentInput.module.css";

const SingleInstrumentInput = (props) => {
  const [primaryParts, setPrimaryParts, secondaryParts, setSecondaryPart] = props.stateList;
  const [optionsClicked, setOptionsClicked] = useState(false);
  const instrument = props.instrument;

  const setThisInstrument = (event) => {
    setPrimaryParts({ ...primaryParts, [instrument]: event.target.value });
  };

  const clickHandler = () => {
    if (!isNaN(primaryParts[instrument])) {
      setOptionsClicked((previous) => !previous);
    }
  };


  return (
    <div className={styles.instrumentBubble}>
      <div className={styles.labelAndClickerHolder} onClick={clickHandler}>
        {instrument}
      </div>
      <input
        type={"text"}
        className={styles.input}
        onChange={setThisInstrument}
      ></input>
      {optionsClicked && (
        <InstrumentButtons
          instrument={instrument}
          number={+primaryParts[instrument]}
        />
      )}
    </div>
  );
};

export default SingleInstrumentInput;
