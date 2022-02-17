import { useState } from "react";
import InstrumentButtons from "./instrumentButtons/InstrumentButtons";

import styles from "./SingleInstrumentInput.module.css";

const doublingOptionsObject = {
  FLUTE: ["PICCOLO", "ALTOFLUTE"],
  OBOE: ["ENGLISHHORN"],
  CLARINET: ["EBCLARINET", "BASSCLARINET"],
  BASSOON: ["CONTRA"],
  HORN: [""],
  TRUMPET: [""],
  TROMBONE: [],
  TUBA: [],
};

const SingleInstrumentInput = (props) => {
  const [allParts, setAllParts] = props.stateList;

  const [optionsClicked, setOptionsClicked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const instrument = props.instrument;

  const setThisInstrument = (event) => {
    if (isNaN(event.target.value)) {
      return;
    }

    setInputValue(event.target.value);

    let chairs = [];
    for (let j = 1; j <= event.target.value; j++) {
      let doublesObjects = [];
      for (let double of doublingOptionsObject[instrument]) {
        doublesObjects.push({ secondaryPart: double, active: false });
      }
      chairs.push({
        primaryPart: instrument,
        rank: j,
        doublesObjects: doublesObjects,
      });
    }
    setAllParts({ ...allParts, [instrument]: chairs });
  };

  const clickHandler = () => {
    if (inputValue != '') {
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
        value={inputValue}
      ></input>
      {optionsClicked && (
        <InstrumentButtons
          instrument={instrument}
          number={+allParts[instrument]}
          chairs={allParts[instrument]}
          setter={setAllParts}
          allParts={allParts}
        />
      )}
    </div>
  );
};

export default SingleInstrumentInput;
