import { useState, useEffect } from "react";
import InstrumentButtons from "./instrumentButtons/InstrumentButtons";

import styles from "./SingleInstrumentInput.module.css";

const doublingOptionsObject = {
  FLUTE: ["PICCOLO", "ALTOFLUTE"],
  OBOE: ["ENGLISHHORN"],
  CLARINET: ["EBCLARINET", "BASSCLARINET"],
  BASSOON: ["CONTRA"],
  HORN: [""],
  TRUMPET: ["CORNET", "FUGALHORN"],
  TROMBONE: ["EUPHONIUM"],
  TUBA: ["EUPHONIUM"],
  TIMPANI: [],
  PERCUSSION: [""],
};

//orchestrationEntry has this

const SingleInstrumentInput = (props) => {
  const [allParts, setAllParts] = props.stateList;
  const [optionsClicked, setOptionsClicked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [hasAssistant, setHasAssistant] = useState(true);

  const instrument = props.instrument;

  const setThisInstrument = (event) => {
    if (isNaN(event.target.value)) {
      return;
    }

    setInputValue(event.target.value);
  };

  useEffect(() => {
    const setChairs = () => {
      let chairs = [];
      for (let j = 1; j <= inputValue; j++) {
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
      if (instrument === "HORN" && hasAssistant) {
        chairs.push({
          primaryPart: instrument,
          rank: chairs.length + 1,
          specialDesignate: "Assist",
          doublesObjects: [""],
        });
      }
      setAllParts({ ...allParts, [instrument]: chairs });
    };

    if (inputValue > 0) {
      setChairs();
    }
    if (!hasAssistant) {
      setChairs();
    }
  }, [inputValue, hasAssistant]);

  const clickHandler = () => {
    if (inputValue != "") {
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
          number={allParts[instrument]}
          chairs={allParts[instrument]}
          setter={setAllParts}
          allParts={allParts}
          setHasAssistant={setHasAssistant}
        />
      )}
    </div>
  );
};

export default SingleInstrumentInput;

// const setThisInstrument = (event) => {
//   if (isNaN(event.target.value)) {
//     return;
//   }

//   setInputValue(event.target.value);

// let chairs = [];

// for (let j = 1; j <= event.target.value; j++) {
//   let doublesObjects = [];
//   for (let double of doublingOptionsObject[instrument]) {
//     doublesObjects.push({ secondaryPart: double, active: false });
//   }
//   chairs.push({
//     primaryPart: instrument,
//     rank: j,
//     doublesObjects: doublesObjects,
//   });
// }
// if (instrument === "HORN") {
//   chairs.push({
//     primaryPart: instrument,
//     rank: chairs.length + 1,
//     specialDesignate: "Assist",
//     doublesObjects: [""],
//   });
// }
// setAllParts({ ...allParts, [instrument]: chairs });
// };
