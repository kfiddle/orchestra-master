import { useState } from "react";
import InstrumentButtons from "./instrumentButtons/InstrumentButtons";

import styles from "./SingleInstrumentInput.module.css";

const SingleInstrumentInput = (props) => {
  const [scoreLines, setScoreLines] = props.stateList;
  const [optionsClicked, setOptionsClicked] = useState(false);
  const instrument = props.instrument;

  const setThisInstrument = (event) => {
    setScoreLines({ ...scoreLines, [instrument]: event.target.value });
  };

  const clickHandler = () => {
    if (!isNaN(scoreLines[instrument])) {
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
          number={+scoreLines[instrument]}
        />
      )}
    </div>
  );
};

export default SingleInstrumentInput;
